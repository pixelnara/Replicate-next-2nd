import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['ko', 'en', 'zh']
const defaultLocale = 'ko'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (!pathnameHasLocale) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url))
  }
}

export const config = {
  matcher: ['/((?!_next|api|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\..*).*)'],
}
