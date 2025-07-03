import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const path = url.pathname;

  // Check if the request is for a gzipped WebGL file
  if (
    path.includes('/games/') && 
    (path.endsWith('.gz') || 
     path.endsWith('.framework.js.gz') || 
     path.endsWith('.wasm.gz') || 
     path.endsWith('.data.gz'))
  ) {
    // Clone the response to add the Content-Encoding header
    const response = NextResponse.next();
    
    // Add the Content-Encoding: gzip header
    response.headers.set('Content-Encoding', 'gzip');
    
    // Set the correct Content-Type based on the file extension
    if (path.endsWith('.js.gz')) {
      response.headers.set('Content-Type', 'application/javascript');
    } else if (path.endsWith('.wasm.gz')) {
      response.headers.set('Content-Type', 'application/wasm');
    } else if (path.endsWith('.data.gz')) {
      response.headers.set('Content-Type', 'application/octet-stream');
    }
    
    return response;
  }

  return NextResponse.next();
}

// Configure the middleware to run only for specific paths
export const config = {
  matcher: ['/games/:path*'],
};
