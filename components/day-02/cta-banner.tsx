import { Button } from "./ui/button";
import { Logo } from "./ui/icons";
import { Section, SectionCard } from "./ui/section";

export const CTABanner = () => (
    <Section>
        <SectionCard className="flex flex-col items-start justify-between bg-(--blue) sm:p-20">
            <Logo className="h-14 sm:h-20" />
            <div className="mt-5 flex flex-col items-center justify-between gap-6 sm:mt-15 sm:gap-20 lg:flex-row xl:mt-25">
                <h2 className="text-left text-[44px] leading-tight sm:text-[60px] xl:text-[85px]">
                    Ready to build better habits?
                </h2>
                <div className="flex flex-col gap-10 sm:gap-15 lg:max-w-[50%] lg:items-end lg:justify-end">
                    <p className="text-[16px] leading-relaxed font-light lg:text-right xl:text-[20px]">
                        Take control of your daily routines, stay consistent with the goals that
                        matter, and build meaningful progress — one habit at a time. With Habitus,
                        you’re just a step away from creating a better version of yourself.
                    </p>
                    <Button variant="primary" className="px-2 sm:px-10">
                        Start Tracking – It’s Free
                    </Button>
                </div>
            </div>
        </SectionCard>
    </Section>
);
