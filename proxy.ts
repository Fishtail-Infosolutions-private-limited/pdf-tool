import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 0. CANONICAL DOMAIN: Redirect www to apex domain to unify cookies & OAuth state
  const host = req.headers.get("host") || "";
  if (host.startsWith("www.")) {
    const url = req.nextUrl.clone();
    url.host = host.replace(/^www\./, "");
    return NextResponse.redirect(url, 301);
  }

  // 1. ADMIN PORTAL PROTECTION
  if (pathname.startsWith("/admin")) {
    const adminToken = req.cookies.get("admin_token")?.value;
    const expectedToken = process.env.NEXTAUTH_SECRET || "fallback_secret_for_admin_token_123";
    const isAuthenticated = adminToken && adminToken === expectedToken;

    if (pathname === "/admin/login" && isAuthenticated) {
      return NextResponse.redirect(new URL("/admin/verifications", req.url));
    }
    if (pathname !== "/admin/login" && !isAuthenticated) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
    return NextResponse.next();
  }

  // 2. USER SETTINGS PROTECTION
  if (pathname.startsWith("/settings")) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("callbackUrl", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/settings/:path*",
    "/admin/:path*",
  ],
};

