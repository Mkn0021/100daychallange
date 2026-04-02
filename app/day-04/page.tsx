import styles from "./page.module.css";

import { cn } from "@/lib/utils";
import { Inter, DM_Sans } from "next/font/google";
import { HeroSection } from "@/components/day-04/hero-section";
import { BrandSection } from "@/components/day-04/brand-section";
import { FeatureSection } from "@/components/day-04/feature-section";
import { BentoGrid } from "@/components/day-04/bento-grid";
import { ReviewSection } from "@/components/day-04/review-section";
import { PricingSection } from "@/components/day-04/pricing-section";
import { FaqSection } from "@/components/day-04/faq-section";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });

export default function Day03() {
    return (
        <div
            className={cn(
                styles.root,
                inter.variable,
                dmSans.variable,
                "flex flex-col items-center justify-center"
            )}
        >
            <HeroSection />
            <BrandSection />
            <FeatureSection />
            <BentoGrid />
            <ReviewSection />
            <PricingSection />
            <FaqSection />
        </div>
    );
}
