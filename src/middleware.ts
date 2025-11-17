import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Locale prefix strategy
  localePrefix: 'always' // Always use locale prefix
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(pl|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
