import Link from "next/link";
import { Section, SectionHeader, SectionSubTitle, SectionTitle } from "./ui/section";
import { ArrowIcon2 } from "./ui/icons";
import { DashedBorder } from "./hero-section";

export const FeatureSection = () => (
    <div className="to-secondary/80 w-full bg-linear-to-b from-white pb-40">
        <Section>
            <SectionHeader className="mt-25 flex-row justify-center gap-8">
                <SectionTitle variant="secondary">
                    Made for modern <br /> product teams
                </SectionTitle>
                <SectionSubTitle variant="secondary">
                    Mainline is built on the habits that make the best product teams successful:
                    staying focused, moving quickly, and always aiming for high-quality work.
                </SectionSubTitle>
            </SectionHeader>
            <div className="mt-22.5 grid grid-cols-3 overflow-hidden rounded-3xl border border-(--border)">
                <FeatureCard>
                    <CardSkeleton></CardSkeleton>
                    <CardTitle>Purpose-built for product development</CardTitle>
                    <DashedBorder variant="horizontal" className="absolute inset-y-0 right-0" />
                </FeatureCard>
                <FeatureCard>
                    <CardSkeleton></CardSkeleton>
                    <CardTitle>Manage projects end-to-end</CardTitle>
                    <DashedBorder variant="horizontal" className="absolute inset-y-0 right-0" />
                </FeatureCard>
                <FeatureCard>
                    <CardSkeleton></CardSkeleton>
                    <CardTitle>Build momentum and healthy habits</CardTitle>
                </FeatureCard>
            </div>
        </Section>
    </div>
);

const FeatureCard = ({ children }: { children: React.ReactNode }) => (
    <div className="relative block w-full bg-white">{children}</div>
);

const CardSkeleton = ({ children }: { children?: React.ReactNode }) => (
    <div className="mt-12 ml-12 min-h-75 flex-1 rounded-tl-2xl border-t border-l border-(--border) bg-neutral-50 mask-b-from-50%">
        {children}
    </div>
);

const CardTitle = ({ children, href = "#" }: { children: React.ReactNode; href?: string }) => (
    <div className="flex justify-between p-6">
        <h2 className="text-foreground text-[24px] leading-[120%] font-bold tracking-[-2%]">
            {children}
        </h2>
        <Link
            href={href}
            className="flex size-14.5 shrink-0 items-center justify-center rounded-full border border-(--border) transition-colors duration-300 hover:bg-(--muted)"
        >
            <ArrowIcon2 />
        </Link>
    </div>
);
