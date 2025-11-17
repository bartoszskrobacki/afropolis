'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export const LanguageSwitcher: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '');
    // Navigate to the new locale path
    const newPath = `/${newLocale}${pathnameWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-1">
      <button
        onClick={() => switchLocale('pl')}
        className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
          locale === 'pl'
            ? 'bg-afro-blue text-white'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
        aria-label="Switch to Polish"
      >
        PL
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
          locale === 'en'
            ? 'bg-afro-blue text-white'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};
