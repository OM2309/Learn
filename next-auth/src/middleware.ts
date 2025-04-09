import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verify } from "jsonwebtoken";

export function middleware(req: NextRequest) {
  console.log("🔥 Middleware running:", req.nextUrl.pathname);

  const token = req.cookies.get("token")?.value;

  const isPublic =
    req.nextUrl.pathname === "/" ||
    req.nextUrl.pathname.startsWith("/sign-in") ||
    req.nextUrl.pathname.startsWith("/sign-up");

  if (isPublic) return NextResponse.next();

  if (!token) {
    console.log("❌ No token, redirecting...");
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  try {
    verify(token, process.env.JWT_SECRET!);
    return NextResponse.next(); // ✅ Token valid
  } catch (err: unknown) {
    console.log("❌ Invalid token");
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }
}

// Match middleware only on specific routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
