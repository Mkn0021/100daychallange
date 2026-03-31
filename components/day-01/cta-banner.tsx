import { Button } from "./ui/button";
import { CTAImage } from "./ui/illustration";
import { Section } from "./ui/section";

export const CTABanner = () => (
    <Section className="relative flex items-center justify-between">
        <div className="bg-secondary absolute inset-x-8 inset-y-6 rounded-[45px] sm:inset-x-25" />
        <div className="z-1 flex max-w-125 flex-col items-start gap-6.5 px-8 py-15 sm:p-15">
            <h3 className="text-[1.62rem] font-medium sm:text-[1.88rem]">
                Let’s make things happen
            </h3>
            <p className="text-base sm:text-[1.12rem]">
                Contact us today to learn more about how our digital marketing services can help
                your business grow and succeed online.
            </p>
            <Button className="px-8 py-4">Get your free proposal</Button>
        </div>
        <CTAImage />
    </Section>
);
