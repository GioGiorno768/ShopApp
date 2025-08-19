import { NextRequest, NextResponse } from "next/server";
import withAuth from "./middlewares/nextAuth";

// export function middleware(request: NextRequest) {
//     const isAdmin = request.nextUrl.pathname.startsWith("/admin");

//     if (isAdmin) {
//         return NextResponse.redirect(new URL("/", request.url));
//     }
// }
// export function middleware(request: NextRequest) {
//     const islogin = true;

//     if (!islogin) {
//         return NextResponse.redirect(new URL("/login", request.url));
//     }
// }

// export const config = {
//     matcher: ["/admin/:path*", "/profile/:path*"],
// };

export function mainMiddleware(request: NextRequest) {
  const res = NextResponse.next();
  return res;
}

export default withAuth(mainMiddleware, [
  "/admin",
  "/profile",
  "/login",
  "/register",
]);
