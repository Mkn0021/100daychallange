import { cn } from "@/lib/utils";
import {
    Section,
    SectionContent,
    SectionHeader,
    SectionSubTitle,
    SectionTitle,
} from "./ui/section";
import Image from "next/image";
import { MobilePreview } from "./ui/mobile";

const Features = [
    {
        color: "text-(--purple)",
        image: "/day-02/review-1.png",
    },
    {
        color: "text-(--primary)",
        image: "/day-02/review-2.png",
    },
    {
        color: "text-(--accent)",
        image: "/day-02/review-3.png",
    },
    {
        color: "text-(--blue)",
        image: "/day-02/review-4.png",
    },
];

export const FeatureSection = () => (
    <Section>
        <SectionHeader className="items-start text-left">
            <SectionTitle>What our users say</SectionTitle>
            <SectionSubTitle>
                Real stories from people who turned their goals into habits.
            </SectionSubTitle>
        </SectionHeader>
        <SectionContent className="grid grid-cols-1 gap-15 md:grid-cols-2 xl:grid-cols-4">
            {Features.map((feature, index) => (
                <Featurecard key={index} color={feature.color} image={feature.image} />
            ))}
        </SectionContent>
    </Section>
);

const Featurecard = ({ color, image }: { color: string; image: string }) => (
    <div className="relative aspect-280/486 w-full">
        <FeatureCardShape className={cn("pointer-events-none absolute inset-0", color)} />

        <MobilePreview className="absolute inset-x-0 bottom-[5%] z-10 mx-auto w-[80%] sm:bottom-[10%] sm:w-[70%]">
            <Image src={image} alt="Feature Image" width={400} height={300} />
        </MobilePreview>
    </div>
);

const FeatureCardShape = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 280 486" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path
            d="M0 175.782C0 162.524 6.56925 150.128 17.5399 142.683L217.54 6.969C244.099 -11.0532 280 7.97159 280 40.0681V445.585C280 467.677 262.091 485.585 240 485.585H40C17.9086 485.585 0 467.677 0 445.585V175.782Z"
            fill="currentColor"
        />
    </svg>
);
