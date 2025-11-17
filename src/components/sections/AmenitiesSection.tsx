'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Section, Container } from '@/design-system';

export const AmenitiesSection: React.FC = () => {
  const t = useTranslations('amenities');

  return (
    <Section id="amenities" variant="white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-extrabold text-afro-blue text-center mb-12">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Image 1: Pool with people (lifestyle) */}
          <div className="rounded-lg overflow-hidden shadow-lg col-span-1 md:col-span-2 relative h-[300px]">
            <Image
              src="/basen-z-ludzmi-lifestyle.JPG"
              alt={t('pool')}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/60 to-transparent w-full">
              <h3 className="text-white text-2xl font-bold">{t('pool')}</h3>
            </div>
          </div>

          {/* Image 2: Pool with palms */}
          <div className="rounded-lg overflow-hidden shadow-lg relative h-[300px]">
            <Image
              src="/basen-z-palmami-tropikalny.JPG"
              alt={t('gardens')}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/60 to-transparent w-full">
              <h3 className="text-white text-2xl font-bold">{t('gardens')}</h3>
            </div>
          </div>

          {/* Image 3: Club interior */}
          <div className="rounded-lg overflow-hidden shadow-lg relative h-[300px]">
            <Image
              src="/klub-mieszkanca-wnetrze.JPG"
              alt={t('club')}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/60 to-transparent w-full">
              <h3 className="text-white text-2xl font-bold">{t('club')}</h3>
            </div>
          </div>

          {/* Image 4: Lounge area */}
          <div className="rounded-lg overflow-hidden shadow-lg col-span-1 md:col-span-2 relative h-[300px]">
            <Image
              src="/zdjecie-dodatkowe-01.JPG"
              alt={t('lounge')}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/60 to-transparent w-full">
              <h3 className="text-white text-2xl font-bold">{t('lounge')}</h3>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
