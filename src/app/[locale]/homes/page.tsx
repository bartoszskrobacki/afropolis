'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { CTASection } from '@/components/sections/CTASection';
import { Section, Container } from '@/design-system';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useTranslations, useLocale } from 'next-intl';

export default function HomesPage() {
  const t = useTranslations('homes');
  const locale = useLocale();

  return (
    <>
      <Header />
      <main>
        <Section variant="gray">
          <Container>
            <h1 className="text-3xl md:text-4xl font-extrabold text-afro-blue text-center mb-12">
              {t('title')}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Villa Kora (Type A) */}
              <Card className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
                <div className="relative w-full h-64">
                  <Image
                    src="/dom-typ-a-villa-kora.JPG"
                    alt={t('villaKora.name')}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 flex-grow">
                  <h2 className="text-2xl font-bold text-afro-blue mb-3">
                    {t('villaKora.name')}
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {t('villaKora.description')}
                  </p>
                </CardContent>
                <CardFooter className="p-6 bg-gray-50">
                  <Link
                    href={`/${locale}/contact`}
                    className="text-afro-blue font-bold hover:text-afro-orange transition-colors"
                  >
                    {t('learnMore')} &rarr;
                  </Link>
                </CardFooter>
              </Card>

              {/* Villa Balafon (Type B) */}
              <Card className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
                <div className="relative w-full h-64">
                  <Image
                    src="/dom-typ-b-villa-balafon.JPG"
                    alt={t('villaBalafon.name')}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 flex-grow">
                  <h2 className="text-2xl font-bold text-afro-blue mb-3">
                    {t('villaBalafon.name')}
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {t('villaBalafon.description')}
                  </p>
                </CardContent>
                <CardFooter className="p-6 bg-gray-50">
                  <Link
                    href={`/${locale}/contact`}
                    className="text-afro-blue font-bold hover:text-afro-orange transition-colors"
                  >
                    {t('learnMore')} &rarr;
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
