import { Button } from "./ui/button";
import { HeroImage } from "./ui/illustration";
import { Section } from "./ui/section";

export const HeroSection = () => (
    <Section className="flex flex-col sm:flex-row items-center justify-between gap-10">
        <div className=" text-6xl font-medium gap-8.75 flex flex-col items-start mx-auto w-full">
            <h1 className="text-[43px] sm:text-[60px]">
                Navigating the digital landscape for success
            </h1>
            <HeroImage className="block max-w-full lg:hidden" />
            <p className="sm:text-[20px] text-[18px] leading-[1.4]">
                Our digital marketing agency helps businesses grow and succeed online through a
                range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <Button className="w-full lg:w-auto py-4 px-8">Book a consultation</Button>
        </div>
        <HeroImage className="hidden min-w-[40vw] max-w-120 h-auto lg:block" />
    </Section>
);
