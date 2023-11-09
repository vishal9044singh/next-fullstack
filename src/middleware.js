import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log('got reqeust in middleware is',request.url);
  return NextResponse.redirect(new URL('/write', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/write',
}
