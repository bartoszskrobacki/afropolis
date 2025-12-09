"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Section, Container } from "@/design-system";

export const AboutPreviewSection: React.FC = () => {
  const t = useTranslations("about");

  return (
    <Section id="about" variant="white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <Image src="/ecolodge_2.jpg" alt="Afropolis Eco Lodge" width={600} height={700} className="w-full h-full object-cover" />
          </div>
          <div className="max-w-lg">
            <h2 className="text-base font-bold text-afro-orange uppercase tracking-wider mb-2">{t("eyebrow")}</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-afro-blue mb-6">{t("title")}</h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">{t("description")}</p>
            <ul className="space-y-3 text-gray-800 text-lg">
              <li className="flex items-center">
                <span className="text-afro-green mr-3">✔</span> {t("features.security")}
              </li>
              <li className="flex items-center">
                <span className="text-afro-green mr-3">✔</span> {t("features.quality")}
              </li>
              <li className="flex items-center">
                <span className="text-afro-green mr-3">✔</span> {t("features.pool")}
              </li>
              <li className="flex items-center">
                <span className="text-afro-green mr-3">✔</span> {t("features.beach")}
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};
