'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Container } from '@/design-system';

export const CTASection: React.FC = () => {
  const t = useTranslations('cta');
  const locale = useLocale();

  return (
    <section id="contact" className="bg-afro-blue text-white">
      <Container className="py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          {t('title')}
        </h2>
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          {t('description')}
        </p>
        <Link href={`/${locale}/contact`}>
          <Button className="bg-afro-orange hover:bg-afro-orange/90 text-white font-bold py-4 px-10 text-lg shadow-2xl">
            {t('button')}
          </Button>
        </Link>
      </Container>
    </section>
  );
};
