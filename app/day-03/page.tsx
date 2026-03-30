import { Navbar } from "@/components/day-03/navbar";
import styles from "./page.module.css";

import { cn } from "@/lib/utils";
import { Syne } from "next/font/google";
import { HeroSection } from "@/components/day-03/hero-section";
import { BrandsSection } from "@/components/day-03/brands-section";
import { OverviewSection } from "@/components/day-03/overview-section";
import { Agenda } from "@/components/day-03/agenda";
import { SpeakerList } from "@/components/day-03/speakers-list";
import { WhyAttend } from "@/components/day-03/why-attend";
import { CTABanner } from "@/components/day-03/cta-banner";

const font = Syne({ subsets: ["latin"] });

export default function Day02() {
    return (
        <div
            className={cn(styles.root, font.className, "flex flex-col items-center justify-center")}
        >
            <Navbar />
            <HeroSection />
            <BrandsSection />
            <OverviewSection />
            <Agenda />
            <SpeakerList />
            <WhyAttend />
            <CTABanner />
        </div>
    );
}
