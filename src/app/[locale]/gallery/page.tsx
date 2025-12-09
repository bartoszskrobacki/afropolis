"use client";

import Image from "next/image";
import { Header, Footer } from "@/components/layout";
import { Section, Container } from "@/design-system";
import { useTranslations } from "next-intl";

export default function GalleryPage() {
  const t = useTranslations("amenities");

  const images = [
    { src: "/ecolodge_1.jpg", alt: t("ecoLodge"), span: "md:col-span-2" },
    { src: "/ecolodge_2.jpg", alt: t("ecoLodge"), span: "" },
    { src: "/ecolodge_3.jpg", alt: t("ecoLodge"), span: "" },
    { src: "/ecolodge_4.jpg", alt: t("ecoLodge"), span: "md:col-span-2" },
    { src: "/ecolodge_5.jpg", alt: t("ecoLodge"), span: "" },
    { src: "/ecolodge_6.jpg", alt: t("ecoLodge"), span: "" },
    { src: "/katchume_1.jpg", alt: t("estate"), span: "" },
    { src: "/katchume_2.jpg", alt: t("estate"), span: "" },
    { src: "/katchume_3.jpg", alt: t("estate"), span: "" },
    { src: "/katchume_4.jpg", alt: t("estate"), span: "" },
    { src: "/katchume_5.jpg", alt: t("estate"), span: "" },
    { src: "/katchume_6.jpg", alt: t("estate"), span: "" },
    { src: "/katchume_7.jpg", alt: t("estate"), span: "" },
    { src: "/katchume_8.jpg", alt: t("estate"), span: "" },
    { src: "/katchume_9.jpg", alt: t("estate"), span: "" },
    { src: "/ablodge_1.jpg", alt: t("abApartments"), span: "md:col-span-2" },
    { src: "/ablodge_2.jpg", alt: t("abApartments"), span: "" },
    { src: "/ablodge_3.jpg", alt: t("abApartments"), span: "" },
    { src: "/ablodge_4.jpg", alt: t("abApartments"), span: "" },
    { src: "/ablodge_5.jpg", alt: t("abApartments"), span: "" },
  ];

  return (
    <>
      <Header />
      <main>
        <Section variant="gray">
          <Container>
            <h1 className="text-3xl md:text-4xl font-extrabold text-afro-blue text-center mb-12">{t("title")}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div key={index} className={`rounded-lg overflow-hidden shadow-lg relative h-[300px] ${image.span}`}>
                  <Image src={image.src} alt={image.alt} fill className="object-cover hover:scale-105 transition-transform duration-300" />
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
