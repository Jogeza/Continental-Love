import {NextRequest, NextResponse} from "next/server";

export default function proxy(request: NextRequest) {
  const {pathname} = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  const isItalian = pathname === "/it" || pathname.startsWith("/it/");
  requestHeaders.set("x-continental-locale", isItalian ? "it" : "en");

  if (isItalian) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.rewrite(url, {request: {headers: requestHeaders}});
  }

  return NextResponse.next({request: {headers: requestHeaders}});
}

export const config = {matcher: ["/((?!api|_next|.*\\..*).*)"]};
