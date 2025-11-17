'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header: React.FC = () => {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: t('estate'), href: `/${locale}/estate` },
    { name: t('ecoLodge'), href: `/${locale}/eco-lodge` },
    { name: t('abApartments'), href: `/${locale}/ab-apartments` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('gallery'), href: `/${locale}/gallery` },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href={`/${locale}`}>
            <Image
              src="/zdjecie-dodatkowe-01.JPG"
              alt="Afropolis Logo"
              width={200}
              height={50}
              className="h-12 md:h-16 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-afro-blue transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link href={`/${locale}/contact`}>
            <Button className="bg-afro-orange hover:bg-afro-orange/90 text-white font-bold shadow-lg">
              {t('bookMeeting')}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-afro-blue"
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-afro-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href={`/${locale}/contact`}>
              <Button className="w-full bg-afro-orange hover:bg-afro-orange/90 text-white font-bold">
                {t('bookMeeting')}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
