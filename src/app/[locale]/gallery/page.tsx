'use client';

import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { Section, Container } from '@/design-system';
import { useTranslations } from 'next-intl';

export default function GalleryPage() {
  const t = useTranslations('amenities');

  const images = [
    { src: '/basen-z-ludzmi-lifestyle.JPG', alt: t('pool'), span: 'md:col-span-2' },
    { src: '/basen-z-palmami-tropikalny.JPG', alt: t('gardens'), span: '' },
    { src: '/klub-mieszkanca-wnetrze.JPG', alt: t('club'), span: '' },
    { src: '/zdjecie-dodatkowe-01.JPG', alt: t('lounge'), span: 'md:col-span-2' },
    { src: '/dom-typ-a-villa-kora.JPG', alt: 'Villa Kora', span: '' },
    { src: '/dom-typ-b-villa-balafon.JPG', alt: 'Villa Balafon', span: '' },
    { src: '/zdjecie-dodatkowe-02.JPG', alt: 'Afropolis', span: 'md:col-span-2' },
    { src: '/zdjecie-dodatkowe-03.JPG', alt: 'Afropolis', span: '' },
    { src: '/zdjecie-dodatkowe-04.JPG', alt: 'Afropolis', span: '' },
    { src: '/zdjecie-dodatkowe-05.JPG', alt: 'Afropolis', span: 'md:col-span-2' },
    { src: '/zdjecie-dodatkowe-06.JPG', alt: 'Afropolis', span: '' },
    { src: '/zdjecie-dodatkowe-07.JPG', alt: 'Afropolis', span: '' },
    { src: '/zdjecie-dodatkowe-08.JPG', alt: 'Afropolis', span: 'md:col-span-2' },
    { src: '/plan_osiedla.JPG', alt: 'Plan osiedla', span: '' },
  ];

  return (
    <>
      <Header />
      <main>
        <Section variant="gray">
          <Container>
            <h1 className="text-3xl md:text-4xl font-extrabold text-afro-blue text-center mb-12">
              {t('title')}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden shadow-lg relative h-[300px] ${image.span}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white font-semibold">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
