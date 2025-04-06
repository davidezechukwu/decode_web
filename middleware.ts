import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
const Locales = ['en','fr','pa','ur']
const DefaultLocale = 'en'

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = Locales

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales)
  const locale = matchLocale(languages, locales, DefaultLocale)
  return locale
}

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const pathname = request.nextUrl.pathname

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  // if (
  //   [
  //     '/manifest.json',
  //     '/favicon.ico',
  //     // Your other files in `public`
  //   ].includes(pathname)
  // )
  //   return

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = Locales.every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`)
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    //return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,request.url))
    const newUrl = `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`
    const hostUrl = `${request.nextUrl.protocol}//${request.nextUrl.host}`
    return NextResponse.rewrite(new URL(newUrl, hostUrl))    
  }
  else{
    return NextResponse.next()    
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|public|favicon.ico).*)'],
}