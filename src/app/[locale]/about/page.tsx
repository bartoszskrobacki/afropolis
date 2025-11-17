import { Header, Footer } from '@/components/layout';
import { AboutPreviewSection } from '@/components/sections/AboutPreviewSection';
import { AmenitiesSection } from '@/components/sections/AmenitiesSection';
import { LocationSection } from '@/components/sections/LocationSection';
import { CTASection } from '@/components/sections/CTASection';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutPreviewSection />
        <AmenitiesSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
