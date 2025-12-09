"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Section, Container } from "@/design-system";

export const AmenitiesSection: React.FC = () => {
  const t = useTranslations("amenities");

  return (
    <Section id="amenities" variant="white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-extrabold text-afro-blue text-center mb-12">{t("title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Image 1: Pool with people (lifestyle) */}
          <div className="rounded-lg overflow-hidden shadow-lg col-span-1 md:col-span-2 relative h-[300px]">
            <Image src="/basen-z-ludzmi-lifestyle.JPG" alt={t("ecoLodge")} fill className="object-cover" />
          </div>

          {/* Image 2: Pool with palms */}
          <div className="rounded-lg overflow-hidden shadow-lg relative h-[300px]">
            <Image src="/basen-z-palmami-tropikalny.JPG" alt={t("ecoLodge")} fill className="object-cover" />
          </div>

          {/* Image 3: Club interior */}
          <div className="rounded-lg overflow-hidden shadow-lg relative h-[300px]">
            <Image src="/klub-mieszkanca-wnetrze.JPG" alt={t("ecoLodge")} fill className="object-cover" />
          </div>

          {/* Image 4: Lounge area */}
          <div className="rounded-lg overflow-hidden shadow-lg col-span-1 md:col-span-2 relative h-[300px]">
            <Image src="/zdjecie-dodatkowe-01.JPG" alt={t("ecoLodge")} fill className="object-cover" />
          </div>
        </div>
      </Container>
    </Section>
  );
};
