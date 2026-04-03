import React from "react";
import Link from "next/link";
import { ArrowIcon2 } from "./ui/icons";
import { DashedBorder } from "./hero-section";
import { Section, SectionHeader, SectionSubTitle, SectionTitle } from "./ui/section";

const features = [
    {
        title: "Purpose-built for product development",
        href: "#",
    },
    {
        title: "Manage projects end-to-end",
        href: "#",
    },
    {
        title: "Build momentum and healthy habits",
        href: "#",
    },
];

export const FeatureSection = () => (
    <section className="to-secondary/80 w-full bg-linear-to-b from-white py-12.5">
        <Section as="div">
            <SectionHeader className="items-start gap-8 py-6.25 lg:flex-row lg:items-center lg:justify-center">
                <SectionTitle variant="secondary">
                    Made for modern <br className="hidden lg:block" /> product teams
                </SectionTitle>
                <SectionSubTitle variant="secondary">
                    Mainline is built on the habits that make the best product teams successful:
                    staying focused, moving quickly, and always aiming for high-quality work.
                </SectionSubTitle>
            </SectionHeader>
            <div className="border-border mt-12.5 grid grid-cols-1 overflow-hidden rounded-3xl border lg:grid-cols-3">
                {features.map((feature, index) => (
                    <FeatureCard key={index}>
                        <CardSkeleton></CardSkeleton>
                        <CardTitle href={feature.href}>{feature.title}</CardTitle>

                        {index < features.length - 1 && (
                            <React.Fragment key={`border-${index}`}>
                                <DashedBorder
                                    key={`border-h${index}`}
                                    variant="horizontal"
                                    className="absolute inset-y-0 right-0 hidden lg:block"
                                />
                                <DashedBorder
                                    key={`border-v${index}`}
                                    variant="vertical"
                                    className="absolute inset-x-0 bottom-0 block lg:hidden"
                                />
                            </React.Fragment>
                        )}
                    </FeatureCard>
                ))}
            </div>
        </Section>
    </section>
);

const FeatureCard = ({ children }: { children: React.ReactNode }) => (
    <div className="relative flex h-100 w-full flex-col bg-white">{children}</div>
);

const CardSkeleton = ({ children }: { children?: React.ReactNode }) => (
    <div className="border-border mt-12 ml-12 flex-1 rounded-tl-2xl border-t border-l bg-neutral-50 mask-b-from-50%">
        {children}
    </div>
);

const CardTitle = ({ children, href = "#" }: { children: React.ReactNode; href?: string }) => (
    <div className="flex justify-between p-6">
        <h3
            className="text-foreground text-2xl leading-tight font-bold tracking-tight"
            style={{ fontFamily: "var(--font-dm)" }}
        >
            {children}
        </h3>
        <Link
            href={href}
            className="border-border hover:bg-muted flex size-14.5 shrink-0 items-center justify-center rounded-full border transition-colors duration-300"
        >
            <ArrowIcon2 className="text-foreground h-9" />
        </Link>
    </div>
);
