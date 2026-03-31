import type { Metadata } from "next";
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
import { ContactSection } from "@/components/day-03/contact-section";
import { Footer } from "@/components/day-03/footer";
import { ReviewSection } from "@/components/day-03/review-section";

const font = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Day 03 - Next-Gen AI Summit 2052 | 100 Days of UI",
    description:
        "Join us for the Next-Gen AI Summit 2052 - featuring top speakers, agenda, and exclusive content on the future of artificial intelligence.",
};

export default function Day03() {
    return (
        <div
            className={cn(styles.root, font.className, "flex flex-col items-center justify-center")}
        >
            <Navbar />
            <main>
                <HeroSection />
                <BrandsSection />
                <OverviewSection />
                <Agenda />
                <SpeakerList />
                <WhyAttend />
                <ReviewSection />
                <CTABanner />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
