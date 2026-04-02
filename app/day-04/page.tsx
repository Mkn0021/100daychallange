import styles from "./page.module.css";

import { cn } from "@/lib/utils";
import { Inter, DM_Sans } from "next/font/google";
import { HeroSection } from "@/components/day-04/hero-section";
import { BrandSection } from "@/components/day-04/brand-section";
import { FeatureSection } from "@/components/day-04/feature-section";
import { BentoGrid } from "@/components/day-04/bento-grid";

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
        </div>
    );
}
