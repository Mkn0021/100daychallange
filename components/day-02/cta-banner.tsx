import { Button } from "./ui/button";
import { Logo } from "./ui/icons";
import { Section, SectionCard } from "./ui/section";

export const CTABanner = () => (
    <Section>
        <SectionCard className="flex flex-col items-start justify-between bg-(--blue) p-20">
            <Logo className="h-21.5" />
            <div className="mt-25 flex items-center justify-between">
                <h2 className="text-left text-[85px] leading-tight">
                    Ready to build better habits?
                </h2>
                <div className="flex max-w-lg flex-col items-end justify-end gap-15">
                    <p className="text-right text-[20px] leading-relaxed font-light">
                        Take control of your daily routines, stay consistent with the goals that
                        matter, and build meaningful progress — one habit at a time. With Habitus,
                        you’re just a step away from creating a better version of yourself.
                    </p>
                    <Button variant="primary">Start Tracking – It’s Free</Button>
                </div>
            </div>
        </SectionCard>
    </Section>
);
