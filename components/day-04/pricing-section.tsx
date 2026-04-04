import { cn } from "@/lib/utils";
import { CheckIcon, DashedCircleIcon, SwitchIcon } from "./ui/icons";
import { Section, SectionHeader, SectionSubTitle, SectionTitle } from "./ui/section";
import { Button } from "./ui/button";

const plans = [
    {
        name: "Free",
        price: "$0",
        variant: "outline" as const,
        description: "Free for everyone",
        features: ["Unlimited members", "2 teams", "500 issues", "Slack and Github integrations"],
    },
    {
        name: "Startup",
        price: "$8 per user/month",
        variant: "default" as const,
        description: (
            <p className="text-foreground flex text-[13px] font-medium">
                <SwitchIcon /> Billed annually
            </p>
        ),
        features: [
            "All free plan features and…",
            "Mainline AI",
            "Unlimited teams",
            "Unlimited issues and file uploads",
            "Mainline Insights",
            "Admin roles",
        ],
    },
    {
        name: "Enterprise",
        price: "$8 per user/month",
        variant: "outline" as const,
        description: (
            <p className="text-foreground flex text-[13px] font-medium">
                <SwitchIcon /> Billed annually
            </p>
        ),
        features: [
            "All free plan features and…",
            "Mainline AI",
            "Supermainline AGI",
            "Free daily catered lunch",
            "random HIPPA audits",
        ],
    },
];
export const PricingSection = () => (
    <Section>
        <SectionHeader>
            <SectionTitle>Pricing</SectionTitle>
            <SectionSubTitle variant="secondary" className="max-w-xl text-center">
                Use Mainline for free with your whole team. Upgrade to enable unlimited issues,
                enhanced security controls, and additional features.
            </SectionSubTitle>
        </SectionHeader>
        <div className="mx-auto mt-12.5 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
                <Card
                    key={plan.name}
                    className={plan.variant === "default" ? "border-foreground border-4" : ""}
                >
                    <CardHeader title={plan.name} price={plan.price} />
                    {plan.description}
                    <div className="flex flex-col gap-4">
                        {plan.features.map((feature, index) => (
                            <p className="flex gap-2 text-sm leading-tight" key={index}>
                                <CheckIcon /> {feature}
                            </p>
                        ))}
                    </div>
                    <Button variant={plan.variant}>
                        Get started <DashedCircleIcon />
                    </Button>
                </Card>
            ))}
        </div>
    </Section>
);

const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
    <div
        className={cn(
            "border-border flex h-fit flex-col gap-8 rounded-xl border-2 px-6 py-5 md:h-full lg:h-fit",
            className
        )}
    >
        {children}
    </div>
);

const CardHeader = ({ title, price }: { title: string; price: string }) => (
    <div className="flex flex-col gap-2.25">
        <h3 className="text-foreground text-[15px] leading-[140%] font-semibold">{title}</h3>
        <SectionSubTitle variant="secondary">{price}</SectionSubTitle>
    </div>
);
