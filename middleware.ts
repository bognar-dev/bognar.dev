import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { redirect } from 'next/dist/server/api-utils'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
  const token = request.cookies.get('jwt')
  //const url = request.nextUrl.clone()
  //url.pathname = '/admin'
  if (token === undefined) {
    return NextResponse.rewrite(new URL('/admin', request.url))

  }
  if (!isAuthenticated(token)) {
    return NextResponse.rewrite(new URL('/admin', request.url))
  }
    
  
}



export const config = {
  matcher: [
    '/admin/(.*)',
  ],
}

async function isAuthenticated(token: RequestCookie) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authentication': token.value,
    },
  };
  const response = await fetch(`${process.env.BACKEND_URL}/private/status`, options)

  const data = await response.json();
  if (data.status === "You are logged in") {
    return true
  }
  return false
}
