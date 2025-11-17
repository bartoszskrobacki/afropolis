'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Section, Container } from '@/design-system';

export const LocationSection: React.FC = () => {
  const t = useTranslations('location');

  return (
    <Section id="location" variant="gray">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg">
            <h2 className="text-base font-bold text-afro-orange uppercase tracking-wider mb-2">
              {t('eyebrow')}
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-afro-blue mb-6">
              {t('title')}
            </h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {t('description')}
            </p>
            <ul className="space-y-3 text-gray-800 text-lg">
              <li>
                <strong className="text-afro-green">{t('distances.beach').split(' ')[0]} {t('distances.beach').split(' ')[1]}</strong>{' '}
                {t('distances.beach').split(' ').slice(2).join(' ')}
              </li>
              <li>
                <strong className="text-afro-green">{t('distances.airport').split(' ')[0]} {t('distances.airport').split(' ')[1]}</strong>{' '}
                {t('distances.airport').split(' ').slice(2).join(' ')}
              </li>
              <li>
                <strong className="text-afro-green">{t('distances.shops').split(' ')[0]} {t('distances.shops').split(' ')[1]}</strong>{' '}
                {t('distances.shops').split(' ').slice(2).join(' ')}
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-300 rounded-lg shadow-xl w-full h-80 md:h-96 flex items-center justify-center text-gray-600">
            <p className="text-lg font-bold">{t('mapPlaceholder')}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
