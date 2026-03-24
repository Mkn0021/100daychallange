import { Button } from "./ui/button";
import { HeroImage } from "./ui/illustration";
import { Section } from "./ui/section";

export const HeroSection = () => (
    <Section className="flex items-center justify-between">
        <div className="max-w-132.5 text-6xl font-medium gap-8.75 flex flex-col items-start">
            <h1>Navigating the digital landscape for success</h1>
            <p className="text-[20px] leading-[1.4]">
                Our digital marketing agency helps businesses grow and succeed online through a
                range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <Button className="py-4 px-8">Book a consultation</Button>
        </div>
        <HeroImage />
    </Section>
);
