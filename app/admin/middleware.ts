import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
 
  const response = NextResponse.next()
  console.log('hey from middleware')
  return response
}