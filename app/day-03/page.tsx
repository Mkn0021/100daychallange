import { Navbar } from "@/components/day-03/navbar";
import styles from "./page.module.css";

import { cn } from "@/lib/utils";
import { Syne } from "next/font/google";
import { HeroSection } from "@/components/day-03/hero-section";
import { BrandsSection } from "@/components/day-03/brands-section";

const font = Syne({ subsets: ["latin"] });

export default function Day02() {
    return (
        <div
            className={cn(styles.root, font.className, "flex flex-col items-center justify-center")}
        >
            <Navbar />
            <HeroSection />
            <BrandsSection />
        </div>
    );
}
