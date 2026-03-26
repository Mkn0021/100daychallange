import styles from "./page.module.css";

import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { WhySection } from "@/components/day-02/why-section";
import { ReviewSection } from "@/components/day-02/review-section";
import { PricingSection } from "@/components/day-02/pricing-section";
import { CTABanner } from "@/components/day-02/cta-banner";
import { FeatureSection } from "@/components/day-02/feature-section";
import { HeroSection } from "@/components/day-02/hero-section";

const font = Inter({ subsets: ["latin"] });

export default function Day02() {
    return (
        <div
            className={cn(
                styles.root,
                font.className,
                "flex flex-col items-center justify-center gap-2"
            )}
        >
            <HeroSection />
            <WhySection />
            <FeatureSection />
            <ReviewSection />
            <CTABanner />
            <PricingSection />
        </div>
    );
}
