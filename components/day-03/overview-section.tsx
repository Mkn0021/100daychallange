import React from "react";
import { cn } from "@/lib/utils";
import { Section, SectionCard } from "./ui/section";
import { LinkArrow } from "./ui/icons";
import { Button } from "./ui/button";

export const OverviewSection = () => (
    <Section className="mt-30 grid grid-cols-9 gap-5 sm:mt-30">
        <OverviewCard variant="primary" className="col-span-4 row-span-2">
            <CardTitle>Speakers</CardTitle>
            <div className="flex h-30 items-start justify-between gap-12.5">
                <div className="bg-secondary text-primary flex size-18.5 shrink-0 items-center justify-center rounded-full">
                    <LinkArrow className="h-6" />
                </div>
                <CardSubtitle>
                    Hear from global AI leaders, researchers, and entrepreneurs who are defining the
                    future of artificial intelligence.
                </CardSubtitle>
            </div>
            <Button variant="outline" link className="mt-auto ml-auto">
                And more
            </Button>
        </OverviewCard>
        <OverviewCard variant="primary" className="col-span-5">
            <CardTitle>Technologies</CardTitle>
            <CardSubtitle>
                Explore advanced machine learning, natural language processing, AI-driven
                automation, and emerging cybersecurity applications.
            </CardSubtitle>
        </OverviewCard>
        <OverviewCard variant="secondary" className="col-span-5">
            <CardTitle>Networking Opportunities</CardTitle>
            <CardSubtitle>
                Enjoy exclusive networking sessions, roundtables, and social events to foster
                collaboration and spark new partnerships.
            </CardSubtitle>
        </OverviewCard>
    </Section>
);

const OverviewCard = ({
    children,
    variant,
    className,
}: {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "accent" | "outline";
    className?: string;
}) => (
    <SectionCard
        className={cn("flex flex-col gap-8.75 px-12.5 py-15", className)}
        variant={variant}
    >
        {children}
    </SectionCard>
);

const CardTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-[40px] font-bold">{children}</h3>
);

const CardSubtitle = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => <p className={cn("text-[20px] leading-7.5", className)}>{children}</p>;
