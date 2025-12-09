"use client";

import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Section, Container } from "@/design-system";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations, useLocale } from "next-intl";

export default function EstatePage() {
  const t = useTranslations("estate");
  const locale = useLocale();

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
              <Link href={`/${locale}/contact`}>
                <Button variant="outline" className="bg-white border-2 border-white text-black font-bold py-6 px-8 text-lg hover:bg-white/95">
                  {locale === "pl" ? "Kontakt" : "Contact"}
                </Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* Introduction */}
        <Section variant="white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-afro-blue mb-6">{t("intro.title")}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{t("intro.description")}</p>
            </div>
          </Container>
        </Section>

        {/* Project Description */}
        <Section variant="gray">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-afro-blue mb-6">{t("project.title")}</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">{t("project.description")}</p>
                <p className="text-lg text-gray-700 leading-relaxed">{t("project.access")}</p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image src="/plan_osiedla.JPG" alt="Plan osiedla" width={600} height={700} className="w-full h-full object-cover" />
              </div>
            </div>
          </Container>
        </Section>

        {/* Why Kachume */}
        <Section variant="white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-afro-blue text-center mb-12">{t("whyKachume.title")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-l-4 border-afro-green">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <span className="text-3xl mr-4">🌞</span>
                      <p className="text-gray-800 text-lg">{t("whyKachume.features.climate")}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-afro-green">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <span className="text-3xl mr-4">🌴</span>
                      <p className="text-gray-800 text-lg">{t("whyKachume.features.nature")}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-afro-green">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <span className="text-3xl mr-4">🏡</span>
                      <p className="text-gray-800 text-lg">{t("whyKachume.features.investment")}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-afro-green">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <span className="text-3xl mr-4">🤝</span>
                      <p className="text-gray-800 text-lg">{t("whyKachume.features.community")}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-afro-green md:col-span-2">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <span className="text-3xl mr-4">💰</span>
                      <p className="text-gray-800 text-lg">{t("whyKachume.features.opportunity")}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <p className="text-lg text-center text-gray-700 font-semibold italic">{t("whyKachume.conclusion")}</p>
            </div>
          </Container>
        </Section>

        {/* Why Invest */}
        <Section variant="gray">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-afro-blue text-center mb-12">{t("whyInvest.title")}</h2>
              <div className="space-y-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    <strong className="text-afro-blue">✓</strong> {t("whyInvest.reasons.location")}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    <strong className="text-afro-blue">✓</strong> {t("whyInvest.reasons.port")}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    <strong className="text-afro-blue">✓</strong> {t("whyInvest.reasons.climate")}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    <strong className="text-afro-blue">✓</strong> {t("whyInvest.reasons.development")}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    <strong className="text-afro-blue">✓</strong> {t("whyInvest.reasons.profit")}
                  </p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-afro-orange mb-4">{t("whyInvest.invest")}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{t("whyInvest.conclusion")}</p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Offer */}
        <Section variant="white">
          <Container>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-afro-blue text-center mb-12">{t("offer.title")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="overflow-hidden shadow-xl">
                  <div className="relative h-96">
                    <Image src="/katchume_2.jpg" alt="Modern Villa" fill />
                  </div>
                  <CardContent className="p-8">
                    <ul className="space-y-3 text-gray-800 text-lg">
                      <li className="flex items-center">
                        <span className="text-afro-green mr-3">✔</span> {t("offer.features.bedrooms")}
                      </li>
                      <li className="flex items-center">
                        <span className="text-afro-green mr-3">✔</span> {t("offer.features.pool")}
                      </li>
                      <li className="flex items-center">
                        <span className="text-afro-green mr-3">✔</span> {t("offer.features.restaurant")}
                      </li>
                      <li className="flex items-center">
                        <span className="text-afro-green mr-3">✔</span> {t("offer.features.gym")}
                      </li>
                      <li className="flex items-center">
                        <span className="text-afro-green mr-3">✔</span> {t("offer.features.market")}
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <div className="flex flex-col justify-center">
                  <div className="bg-afro-blue text-white p-8 rounded-lg mb-6">
                    <h3 className="text-3xl font-bold mb-2">{t("offer.price")}</h3>
                    <p className="text-xl">{t("offer.financing")}</p>
                  </div>
                  <Link href={`/${locale}/contact`}>
                    <Button className="w-full bg-afro-orange hover:bg-afro-orange/90 text-white font-bold py-6 text-xl shadow-xl">{t("offer.cta")}</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Gallery Preview */}
        <Section variant="gray">
          <Container>
            <h2 className="text-3xl md:text-4xl font-extrabold text-afro-blue text-center mb-12">Zobacz Galerię</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                "/katchume_01.jpg",
                "/katchume_2.jpg",
                "/katchume_3.jpg",
                "/katchume_4.jpg",
                "/katchume_5.jpg",
                "/katchume_6.jpg",
                "/katchume_7.jpg",
                "/katchume_8.jpg",
              ].map((src, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden shadow-md">
                  <Image src={src} alt={`Gallery ${index + 1}`} fill className="object-cover hover:scale-110 transition-transform duration-300" />
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href={`/${locale}/gallery`}>
                <Button variant="outline" className="border-afro-blue text-afro-blue hover:bg-afro-blue hover:text-white">
                  Zobacz pełną galerię
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
