import { NextRequest, NextResponse } from "next/server";

const PYTHON_SERVICE_URL = process.env.PYTHON_SERVICE_URL || "http://localhost:8001";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        const MAX_FILE_SIZE_BYTES = 30 * 1024 * 1024; // 30 MB
        if (file.size > MAX_FILE_SIZE_BYTES) {
            return NextResponse.json(
                { error: "The uploaded file exceeds the 30MB limit. Please upload a smaller document." },
                { status: 413 }
            );
        }

        const fileBuffer = await file.arrayBuffer();
        const inputBlob = new Blob([fileBuffer], { type: file.type || "application/pdf" });
        const pythonFormData = new FormData();
        pythonFormData.append("file", inputBlob, file.name || "document.pdf");

        const response = await fetch(`${PYTHON_SERVICE_URL}/convert/pdf-to-txt`, {
            method: "POST",
            body: pythonFormData,
        });

        if (!response.ok) {
            let errorText = await response.text();
            console.error("Python microservice error:", errorText);
            try {
                const parsed = JSON.parse(errorText);
                if (parsed.detail) errorText = parsed.detail;
            } catch {
                // Keep raw text
            }
            return NextResponse.json(
                { error: `Text extraction failed: ${errorText}` },
                { status: response.status }
            );
        }

        const blob = await response.blob();
        const originalName = file.name.replace(/\.pdf$/i, "");
        const outputFilename = `${originalName}.txt`;

        return new NextResponse(blob, {
            status: 200,
            headers: {
                "Content-Type": "text/plain",
                "Content-Disposition": `attachment; filename="${outputFilename}"`,
            },
        });
    } catch (error: any) {
        console.error("API Route Error (pdf-to-txt):", error);
        return NextResponse.json(
            { error: error?.message || "Internal server error" },
            { status: 500 }
        );
    }
}
