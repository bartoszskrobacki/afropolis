"use client";

import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Section, Container } from "@/design-system";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";

export default function HomePage() {
  const t = useTranslations("projects");
  const tHero = useTranslations("hero");
  const locale = useLocale();

  const projects = [
    {
      name: t("estate.name"),
      tagline: t("estate.tagline"),
      description: t("estate.description"),
      image: "/dom-typ-a-villa-kora.JPG",
      href: `/${locale}/estate`,
    },
    {
      name: t("ecoLodge.name"),
      tagline: t("ecoLodge.tagline"),
      description: t("ecoLodge.description"),
      image: "/basen-z-palmami-tropikalny.JPG",
      href: `/${locale}/eco-lodge`,
    },
    {
      name: t("abApartments.name"),
      tagline: t("abApartments.tagline"),
      description: t("abApartments.description"),
      image: "/basen-z-ludzmi-lifestyle.JPG",
      href: `/${locale}/ab-apartments`,
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/basen-z-palmami-tropikalny.JPG')" }}>
          <Container className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
            <div className="bg-white rounded-full px-12 py-8 mb-8 drop-shadow-lg">
              <Image src="/logo.png" alt="Afropolis" width={400} height={200} priority />
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href={`/${locale}/estate`}>
                <Button className="bg-afro-orange hover:bg-afro-orange/90 text-white font-bold py-6 px-8 text-lg shadow-xl">{t("viewProject")}</Button>
              </Link>
              <Link href={`/${locale}/contact`}>
                <Button variant="outline" className="bg-white border-2 border-white text-black font-bold py-6 px-8 text-lg hover:bg-white/95">
                  {locale === "pl" ? "Kontakt" : "Contact"}
                </Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* Projects Section */}
        <Section variant="gray">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-afro-blue mb-4">{t("title")}</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">{t("subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="relative h-64">
                    <Image src={project.image} alt={project.name} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-afro-blue">{project.name}</CardTitle>
                    <p className="text-sm text-afro-orange font-semibold">{project.tagline}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{project.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={project.href} className="w-full">
                      <Button className="w-full bg-afro-blue hover:bg-afro-blue/90 text-white">{t("viewProject")}</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* Gallery Preview */}
        <Section variant="white">
          <Container>
            <h2 className="text-3xl md:text-4xl font-extrabold text-afro-blue text-center mb-12">{locale === "pl" ? "Galeria Zdjęć" : "Photo Gallery"}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                "/basen-z-palmami-tropikalny.JPG",
                "/dom-typ-a-villa-kora.JPG",
                "/dom-typ-b-villa-balafon.JPG",
                "/klub-mieszkanca-wnetrze.JPG",
                "/zdjecie-dodatkowe-01.JPG",
                "/zdjecie-dodatkowe-02.JPG",
                "/zdjecie-dodatkowe-03.JPG",
                "/zdjecie-dodatkowe-04.JPG",
              ].map((src, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden shadow-md">
                  <Image src={src} alt={`Gallery ${index + 1}`} fill className="object-cover hover:scale-110 transition-transform duration-300" />
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href={`/${locale}/gallery`}>
                <Button variant="outline" className="border-afro-blue text-afro-blue hover:bg-afro-blue hover:text-white">
                  {locale === "pl" ? "Zobacz pełną galerię" : "View full gallery"}
                </Button>
              </Link>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <section className="bg-afro-blue text-white">
          <Container className="py-16 md:py-24 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              {locale === "pl" ? "Zainteresowany naszymi projektami?" : "Interested in our projects?"}
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              {locale === "pl"
                ? "Skontaktuj się z nami, aby dowiedzieć się więcej o naszych projektach i znaleźć idealne miejsce dla siebie w Gambii."
                : "Contact us to learn more about our projects and find your perfect place in Gambia."}
            </p>
            <Link href={`/${locale}/contact`}>
              <Button className="bg-afro-orange hover:bg-afro-orange/90 text-white font-bold py-4 px-10 text-lg shadow-2xl">
                {locale === "pl" ? "Skontaktuj się z nami" : "Contact Us"}
              </Button>
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
