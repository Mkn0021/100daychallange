import { BrandLogos } from "@/components/brand-logos";
import { CaseStudy } from "@/components/case-study";
import { ContactUs } from "@/components/contact-us";
import { CTABanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ServiceSection } from "@/components/service-section";
import { TeamSection } from "@/components/team-section";
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
      <TeamSection />
      <ContactUs />
      <Footer />
    </div>
  );
}
