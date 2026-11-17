import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        // Proxy the raw FormData to the Python microservice
        const PYTHON_SERVICE_URL = process.env.PYTHON_SERVICE_URL || "http://localhost:8001";
        const res = await fetch(`${PYTHON_SERVICE_URL}/redact/apply`, {
            method: "POST",
            body: formData,
        });

        if (!res.ok) {
            const err = await res.text();
            console.error("[redact-pdf/apply] Python service error:", err);
            return NextResponse.json({ error: "Failed to redact PDF on the backend" }, { status: res.status });
        }

        const buffer = await res.arrayBuffer();

        // Extract filename from content-disposition header if available
        let filename = "redacted.pdf";
        const disposition = res.headers.get("content-disposition");
        if (disposition && disposition.includes("filename=")) {
            const match = disposition.match(/filename="(.+)"/);
            if (match) filename = match[1];
        }

        return new NextResponse(buffer, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `attachment; filename="${filename}"`,
            },
        });
    } catch (error) {
        console.error("[redact-pdf/apply] Unexpected error:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
