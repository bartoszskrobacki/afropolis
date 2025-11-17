'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';

export const HeroSection: React.FC = () => {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section
      className="relative h-[70vh] min-h-[500px] bg-cover bg-center"
      style={{ backgroundImage: "url('/basen-z-palmami-tropikalny.JPG')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          {t('title')}
        </h1>
        <p className="text-2xl md:text-4xl font-bold mb-8 drop-shadow-md">
          {t('subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href={`/${locale}/homes`}>
            <Button className="bg-afro-orange hover:bg-afro-orange/90 text-white font-bold py-6 px-8 text-lg shadow-xl">
              {t('viewHomes')}
            </Button>
          </Link>
          <Link href={`/${locale}#amenities`}>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-white text-white font-bold py-6 px-8 text-lg hover:bg-white/10"
            >
              {t('viewAmenities')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
