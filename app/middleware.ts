import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { NextRequestWithAuth, withAuth } from "next-auth/middleware"
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';

const ratelimit = new Ratelimit({
  redis: kv,
  // 5 requests from the same IP in 10 seconds
  limiter: Ratelimit.slidingWindow(5, '10 s'),
});

async function ratelimitMiddleware(request: NextRequest) {
  const ip = request.ip ?? '127.0.0.1';
  const { success } = await ratelimit.limit(ip);
  return success
    ? NextResponse.next()
    : NextResponse.redirect(new URL('/blocked', request.url));
}

const authMiddleware = withAuth(
  function middleware(req) {
    // If the user is authenticated and trying to access the signin page,
    // redirect them to the dashboard
    if (req.nextUrl.pathname.startsWith("/auth/signin") && req.nextauth.token) {
      return NextResponse.redirect(new URL("/dashboard", req.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export default async function middleware(request: NextRequest) {
  // Apply rate limiting to all routes
  const ratelimitResult = await ratelimitMiddleware(request);
  if (ratelimitResult.status !== 200) {
    return ratelimitResult;
  }

  // Apply authentication middleware to protected routes
  if (request.nextUrl.pathname.startsWith('/dashboard') || request.nextUrl.pathname.startsWith('/auth/signin')) {
    // Cast the request to NextRequestWithAuth to satisfy TypeScript
    return authMiddleware(request as NextRequestWithAuth, {} as NextFetchEvent);
  }

  // For all other routes, continue to the next middleware or to the application
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*', '/auth/signin'],
};