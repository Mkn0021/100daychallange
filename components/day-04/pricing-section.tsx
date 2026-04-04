"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CheckIcon, DashedCircleIcon } from "./ui/icons";
import { Section, SectionHeader, SectionSubTitle, SectionTitle } from "./ui/section";
import { Button } from "./ui/button";
import { Switch } from "@/components/ui/switch";

const plans = [
    {
        name: "Free",
        monthlyPrice: "$0",
        annualPrice: "$0",
        features: ["Unlimited members", "2 teams", "500 issues", "Slack and Github integrations"],
    },
    {
        name: "Startup",
        monthlyPrice: "$8 per user/month",
        annualPrice: "$96 per user/year",
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
        monthlyPrice: "$8 per user/month",
        annualPrice: "$96 per user/year",
        features: [
            "All free plan features and…",
            "Mainline AI",
            "Supermainline AGI",
            "Free daily catered lunch",
            "random HIPPA audits",
        ],
    },
];
export const PricingSection = () => {
    const [selectedPlan, setSelectedPlan] = useState("Startup");
    const [billingMode, setBillingMode] = useState({
        Free: false,
        Startup: true,
        Enterprise: true,
    });

    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Pricing</SectionTitle>
                <SectionSubTitle variant="secondary" className="max-w-xl text-center">
                    Use Mainline for free with your whole team. Upgrade to enable unlimited issues,
                    enhanced security controls, and additional features.
                </SectionSubTitle>
            </SectionHeader>

            <div className="mx-auto mt-12.5 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {plans.map((plan) => {
                    const isAnnual = billingMode[plan.name as keyof typeof billingMode];
                    const displayPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;

                    return (
                        <Card
                            key={plan.name}
                            onClick={() => setSelectedPlan(plan.name)}
                            className={
                                selectedPlan === plan.name ? "border-foreground border-4" : ""
                            }
                        >
                            <CardHeader title={plan.name} price={displayPrice} />
                            {plan.name !== "Free" && (
                                <p className="text-foreground flex items-center gap-2 text-[13px] font-medium">
                                    <Switch
                                        checked={isAnnual}
                                        onCheckedChange={() =>
                                            setBillingMode((prev) => ({
                                                ...prev,
                                                [plan.name]: !prev[plan.name as keyof typeof prev],
                                            }))
                                        }
                                        className="data-[state=checked]:ring-foreground ring-1 data-[state=unchecked]:ring-gray-200"
                                    />
                                    Billed {isAnnual ? "annually" : "monthly"}
                                </p>
                            )}
                            <div className="flex flex-col gap-4">
                                {plan.features.map((feature, index) => (
                                    <p className="flex gap-2 text-sm leading-tight" key={index}>
                                        <CheckIcon /> {feature}
                                    </p>
                                ))}
                            </div>
                            <Button variant={selectedPlan === plan.name ? "default" : "outline"}>
                                Get started <DashedCircleIcon />
                            </Button>
                        </Card>
                    );
                })}
            </div>
        </Section>
    );
};

const Card = ({
    className,
    children,
    onClick,
}: {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}) => (
    <div
        onClick={onClick}
        className={cn(
            "border-border transition-border flex h-fit cursor-pointer flex-col gap-8 rounded-xl border-2 px-6 py-5 md:h-full lg:h-fit",
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
