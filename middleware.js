export { default } from "next-auth/middleware"

export const config = {
  matcher: '/((?!banners|_next/image|favicon.ico).*)'
}
