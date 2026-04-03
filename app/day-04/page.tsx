import { HeroSection } from "@/components/day-04/hero-section";
import { BrandSection } from "@/components/day-04/brand-section";
import { FeatureSection } from "@/components/day-04/feature-section";
import { BentoGrid } from "@/components/day-04/bento-grid";
import { ReviewSection } from "@/components/day-04/review-section";
import { PricingSection } from "@/components/day-04/pricing-section";
import { FaqSection } from "@/components/day-04/faq-section";

export default function Day04() {
    return (
        <>
            <HeroSection />
            <BrandSection />
            <FeatureSection />
            <BentoGrid />
            <ReviewSection />
            <PricingSection />
            <FaqSection />
        </>
    );
}
