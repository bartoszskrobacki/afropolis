import { Header, Footer } from "@/components/layout";
import { AboutPreviewSection } from "@/components/sections/AboutPreviewSection";
import { AmenitiesSection } from "@/components/sections/AmenitiesSection";
import { CTASection } from "@/components/sections/CTASection";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutPreviewSection />
        <AmenitiesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
