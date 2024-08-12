// import { NextRequest } from "next/server";
import authConfig from "./auth.config";
import NextAuth from "next-auth";

// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)

// 2. Wrapped middleware option
const { auth } = NextAuth(authConfig);
export default auth(async function middleware(req: any) {
  // Your custom middleware logic goes here
  // console.log("middleware", req.auth)
  if (!req.auth && req.nextUrl.pathname === "/test") {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
  if (
    req.auth &&
    (req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/register")
  ) {
    const newUrl = new URL("/shop", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
  if (
    !req.auth &&
    (account.test(req.nextUrl.pathname) || cart.test(req.nextUrl.pathname))
  ) {
    console.log(req.nextUrl.pathname);
    const newUrl = new URL("/~/authenticationError", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

// ------------------------------------------------------------------
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)", // There's particularly no need for this, plus it won't work with next-auth v5
    "/api/:path*",
    "/shop/:path*",
  ],
};
// ------------------------------------------------------------------

const account = /\/account/;
const cart = /\/cart/;
