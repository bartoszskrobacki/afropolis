"use client";

import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Section, Container } from "@/design-system";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";

export default function EcoLodgePage() {
  const t = useTranslations("ecoLodge");
  const locale = useLocale();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/basen-z-palmami-tropikalny.JPG')" }}>
          <Container className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{t("title")}</h1>
            <p className="text-2xl md:text-3xl mb-8 drop-shadow-md">{t("subtitle")}</p>
            <Link href={`/${locale}/contact`}>
              <Button className="bg-afro-orange hover:bg-afro-orange/90 text-white font-bold py-6 px-10 text-lg shadow-2xl">
                {locale === "pl" ? "Zarezerwuj Pobyt" : "Book Your Stay"}
              </Button>
            </Link>
          </Container>
        </section>

        {/* Description */}
        <Section variant="white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-gray-700 leading-relaxed">{t("description")}</p>
            </div>
          </Container>
        </Section>

        {/* Accommodation */}
        <Section variant="gray">
          <Container>
            <h2 className="text-3xl md:text-4xl font-extrabold text-afro-blue text-center mb-8">{t("accommodation.title")}</h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">{t("accommodation.description")}</p>

            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "/basen-z-ludzmi-lifestyle.JPG",
                "/klub-mieszkanca-wnetrze.JPG",
                "/zdjecie-dodatkowe-01.JPG",
                "/zdjecie-dodatkowe-02.JPG",
                "/zdjecie-dodatkowe-03.JPG",
                "/zdjecie-dodatkowe-04.JPG",
              ].map((src, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg relative h-64">
                  <Image src={src} alt={`Eco Lodge ${index + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section variant="white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-afro-blue mb-6">
                {locale === "pl" ? "Zarezerwuj swój pobyt już dziś" : "Book your stay today"}
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                {locale === "pl"
                  ? "Skontaktuj się z nami, aby dowiedzieć się więcej o dostępnych opcjach zakwaterowania i zarezerwować swój niezapomniany pobyt w Afropolis Eco Lodge."
                  : "Contact us to learn more about available accommodation options and book your unforgettable stay at Afropolis Eco Lodge."}
              </p>
              <Link href={`/${locale}/contact`}>
                <Button className="bg-afro-orange hover:bg-afro-orange/90 text-white font-bold py-6 px-10 text-lg shadow-xl">
                  {locale === "pl" ? "Skontaktuj się z nami" : "Contact Us"}
                </Button>
              </Link>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
