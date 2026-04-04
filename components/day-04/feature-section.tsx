import React from "react";
import Link from "next/link";
import { ArrowIcon2 } from "./ui/icons";
import { DashedBorder } from "./hero-section";
import { Section, SectionHeader, SectionSubTitle, SectionTitle } from "./ui/section";
import { ProductDeployment } from "./feature-cards/product-deployment";
import { ProjectOverview } from "./feature-cards/project-overview";
import { CycleMomentum } from "./feature-cards/cycle-monument";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Purpose-built for product development",
        href: "#",
        content: <ProductDeployment />,
    },
    {
        title: "Manage projects end-to-end",
        href: "#",
        content: <ProjectOverview />,
    },
    {
        title: "Build momentum and healthy habits",
        href: "#",
        content: <CycleMomentum />,
    },
];

export const FeatureSection = () => (
    <section className="to-secondary/80 w-full bg-linear-to-b from-white">
        <Section as="div">
            <SectionHeader className="items-start gap-8 lg:flex-row lg:items-center lg:justify-center">
                <SectionTitle variant="secondary">
                    Made for modern <br className="hidden lg:block" /> product teams
                </SectionTitle>
                <SectionSubTitle variant="secondary">
                    Mainline is built on the habits that make the best product teams successful:
                    staying focused, moving quickly, and always aiming for high-quality work.
                </SectionSubTitle>
            </SectionHeader>
            <div className="border-border mt-12.5 grid grid-cols-1 overflow-hidden rounded-3xl border md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        className={
                            index === 2 ? "col-span-1 md:col-span-2 lg:col-span-1" : undefined
                        }
                    >
                        <CardSkeleton>{feature.content}</CardSkeleton>
                        <CardTitle href={feature.href}>{feature.title}</CardTitle>

                        {index < features.length - 1 && (
                            <React.Fragment key={`border-${index}`}>
                                <DashedBorder
                                    variant="horizontal"
                                    className={cn(
                                        "absolute inset-y-0 right-0 hidden",
                                        index === 0 && "md:block",
                                        index === 1 && "lg:block"
                                    )}
                                />
                                <DashedBorder
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

const FeatureCard = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => (
    <div className={cn("relative flex h-100 w-full flex-col bg-white", className)}>{children}</div>
);

const CardSkeleton = ({ children }: { children?: React.ReactNode }) => (
    <div
        className={cn(
            "border-border mt-12 ml-12 flex-1 rounded-tl-2xl border-t border-l bg-neutral-50",
            "min-h-0 overflow-hidden mask-b-from-70% max-lg:mask-r-from-70%"
        )}
    >
        {children}
    </div>
);

const CardTitle = ({ children, href = "#" }: { children: React.ReactNode; href?: string }) => (
    <div className="flex shrink-0 justify-between p-6">
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
