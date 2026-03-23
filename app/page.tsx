import { BrandLogos } from "@/components/brand-logos";
import { CTABanner } from "@/components/cta-banner";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ServiceSection } from "@/components/service-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Navbar />
      <HeroSection />
      <BrandLogos />
      <ServiceSection />
      <CTABanner />
    </div>
  );
}
