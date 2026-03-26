import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
    Section,
    SectionCard,
    SectionContent,
    SectionHeader,
    SectionSubTitle,
    SectionTitle,
} from "./ui/section";
import { TickIcon, UnlockIcon } from "./ui/icons";

export const PricingSection = () => (
    <Section>
        <SectionHeader className="items-start text-left">
            <SectionTitle>Simple, transparent pricing</SectionTitle>
            <SectionSubTitle>Start free. Upgrade when you're ready.</SectionSubTitle>
        </SectionHeader>
        <SectionContent className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <PricingCard
                variant="secondary"
                title="Free Plan"
                description="Perfect to get started"
                price="$0"
                features={[
                    "Track unlimited habits",
                    "Daily reminders",
                    "Streaks & basic analytics",
                    "Light & dark mode",
                ]}
            />
            <PricingCard
                variant="primary"
                title="Premium"
                badge="Popular"
                description="All features you need"
                price="$4.99"
                period="/month"
                features={[
                    "Everything in Free",
                    "Advanced analytics",
                    "Habit templates & suggestions",
                    "Cloud backup & device sync",
                    "Premium themes and icons",
                    "Priority support",
                ]}
                ctaLabel="Upgrade Now"
            />
        </SectionContent>
    </Section>
);

type PricingCardProps = {
    variant?: "primary" | "secondary";
    badge?: string;
    title: string;
    description: string;
    price: string;
    period?: string;
    features: string[];
    ctaLabel?: string;
    onCtaClick?: () => void;
};

const PricingCard = ({
    variant,
    badge = "Most Popular",
    title,
    description,
    price,
    period = "/month",
    features,
    ctaLabel = "Get Started",
    onCtaClick,
}: PricingCardProps) => (
    <SectionCard
        className={cn(
            "relative flex flex-col items-start justify-between p-17.5",
            variant === "primary" && "bg-accent text-white"
        )}
    >
        {variant === "primary" && badge && (
            <div className="pointer-events-none absolute top-0 right-0 p-17.5">
                <Button variant="primary" className="px-3 py-1.25 text-[14px] font-normal">
                    {badge}
                </Button>
            </div>
        )}

        <div>
            <h3 className="text-[24px] font-semibold">{title}</h3>
            <p
                className={cn(
                    "text-[16px] text-(--grey)",
                    variant === "primary" && "text-(--dark-grey)"
                )}
            >
                {description}
            </p>
        </div>

        <div className="mt-12.5">
            <h4 className="flex items-end gap-1 text-[36px] font-bold">
                {price}
                {variant === "primary" && period && (
                    <span className="mb-2 text-[16px] font-normal text-(--dark-grey)">
                        {period}
                    </span>
                )}
            </h4>
            <div className="mt-6 flex flex-col gap-4">
                {features.map((feature, index) => (
                    <p key={index} className="flex items-center gap-2">
                        <TickIcon />
                        <span>{feature}</span>
                    </p>
                ))}
                {variant === "secondary" && (
                    <p className="flex items-center gap-2 text-(--dark-grey)">
                        <UnlockIcon />
                        <span>No credit card required</span>
                    </p>
                )}
            </div>
        </div>

        <Button
            variant={variant === "primary" ? "secondary" : "accent"}
            className="mt-22.5 w-full"
            onClick={onCtaClick}
        >
            {ctaLabel}
        </Button>
    </SectionCard>
);
