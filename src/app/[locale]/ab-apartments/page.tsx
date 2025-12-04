"use client";

import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Section, Container } from "@/design-system";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";

export default function ABApartmentsPage() {
  const t = useTranslations("abApartments");
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
                {locale === "pl" ? "Zapytaj o dostępność" : "Check Availability"}
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

        {/* Features */}
        <Section variant="gray">
          <Container>
            <h2 className="text-3xl md:text-4xl font-extrabold text-afro-blue text-center mb-12">{locale === "pl" ? "Udogodnienia" : "Amenities"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl mb-4">🏊</div>
                <h3 className="text-xl font-bold text-afro-blue mb-2">{locale === "pl" ? "Basen" : "Swimming Pool"}</h3>
                <p className="text-gray-700">{locale === "pl" ? "Wspólny basen dla mieszkańców" : "Shared pool for residents"}</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌴</div>
                <h3 className="text-xl font-bold text-afro-blue mb-2">{locale === "pl" ? "Ogród" : "Garden"}</h3>
                <p className="text-gray-700">{locale === "pl" ? "Pięknie zagospodarowany teren" : "Beautifully landscaped grounds"}</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-afro-blue mb-2">{locale === "pl" ? "Bezpieczeństwo" : "Security"}</h3>
                <p className="text-gray-700">{locale === "pl" ? "Ochrona 24/7" : "24/7 security"}</p>
              </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["/ablodge_1.jpg", "/ablodge_2.jpg", "/ablodge_3.jpg", "/ablodge_4.jpg", "/ablodge_5.jpg", "/ablodge_6.jpg"].map((src, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg relative h-64">
                  <Image src={src} alt={`AB Apartments ${index + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section variant="white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-afro-blue mb-6">{locale === "pl" ? "Zainteresowany?" : "Interested?"}</h2>
              <p className="text-lg text-gray-700 mb-8">
                {locale === "pl"
                  ? "Skontaktuj się z nami, aby dowiedzieć się więcej o naszych apartamentach i dostępności."
                  : "Contact us to learn more about our apartments and availability."}
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
