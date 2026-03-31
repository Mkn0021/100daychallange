import { Button } from "./ui/button";
import { HeroImage } from "./ui/illustration";
import { Section } from "./ui/section";

export const HeroSection = () => (
    <Section className="flex flex-col items-center justify-between gap-10 sm:flex-row">
        <div className="mx-auto flex w-full flex-col items-start gap-8.75 text-6xl font-medium">
            <h1 className="text-[2.69rem] sm:text-6xl">
                Navigating the digital landscape for success
            </h1>
            <HeroImage className="block max-w-full lg:hidden" />
            <p className="text-[1.12rem] leading-[1.4] sm:text-xl">
                Our digital marketing agency helps businesses grow and succeed online through a
                range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <Button className="w-full px-8 py-4 lg:w-auto">Book a consultation</Button>
        </div>
        <HeroImage className="hidden h-auto max-w-120 min-w-[40vw] lg:block" />
    </Section>
);
