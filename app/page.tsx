import { BrandLogos } from "@/components/brand-logos";
import { CaseStudy } from "@/components/case-study";
import { CTABanner } from "@/components/cta-banner";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ServiceSection } from "@/components/service-section";
import { WorkingProcess } from "@/components/working-process";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Navbar />
      <HeroSection />
      <BrandLogos />
      <ServiceSection />
      <CTABanner />
      <CaseStudy />
      <WorkingProcess />
    </div>
  );
}
