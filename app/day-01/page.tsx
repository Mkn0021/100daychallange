import styles from "./page.module.css";
import { cn } from "@/lib/utils";
import { Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/day-01/navbar";
import { HeroSection } from "@/components/day-01/hero-section";
import { BrandLogos } from "@/components/day-01/brand-logos";
import { ServiceSection } from "@/components/day-01/service-section";
import { CTABanner } from "@/components/day-01/cta-banner";
import { CaseStudy } from "@/components/day-01/case-study";
import { WorkingProcess } from "@/components/day-01/working-process";
import { TeamSection } from "@/components/day-01/team-section";
import { Testimonial } from "@/components/day-01/testimonial";
import { ContactUs } from "@/components/day-01/contact-us";
import { Footer } from "@/components/day-01/footer";

const font = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export default function Day01() {
    return (
        <div
            className={cn(
                styles.root,
                font.variable,
                "flex flex-col items-center justify-center gap-2 font-sans"
            )}
        >
            <Navbar />
            <HeroSection />
            <BrandLogos />
            <ServiceSection />
            <CTABanner />
            <CaseStudy />
            <WorkingProcess />
            <TeamSection />
            <Testimonial />
            <ContactUs />
            <Footer />
        </div>
    );
}
