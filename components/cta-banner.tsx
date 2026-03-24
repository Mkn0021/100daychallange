import { Button } from "./ui/button";
import { CTAImage } from "./ui/illustration";
import { Section } from "./ui/section";

export const CTABanner = () => (
    <Section className="flex items-center justify-between relative">
        <div className="absolute inset-y-6 inset-x-8 sm:inset-x-25 bg-secondary -z-1 rounded-[45px]" />
        <div className="flex flex-col items-start gap-6.5 max-w-125 px-8 py-15 sm:p-15">
            <h3 className="text-[26px] sm:text-[30px] font-medium">Let’s make things happen</h3>
            <p className="text-[16px]  sm:text-[18px]">
                Contact us today to learn more about how our digital marketing services can help
                your business grow and succeed online.
            </p>
            <Button className="py-4 px-8 w-full sm:w-auto">Get your free proposal</Button>
        </div>
        <CTAImage />
    </Section>
);
