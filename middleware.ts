import { NextRequest } from "next/server"
import authConfig from "./auth.config"
import NextAuth from "next-auth"
 
// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)
 
// 2. Wrapped middleware option
const { auth } = NextAuth(authConfig)
export default auth(async function middleware(req: any) {
  // Your custom middleware logic goes here
  // console.log("middleware", req.auth)
  if (!req.auth && req.nextUrl.pathname !== "/login" && req.nextUrl.pathname !== "/") {
    const newUrl = new URL("/login", req.nextUrl.origin)
    // return Response.redirect(newUrl)
  }
})