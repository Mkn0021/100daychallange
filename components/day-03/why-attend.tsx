import React from "react";
import {
    Section,
    SectionCard,
    SectionContent,
    SectionHeader,
    SectionSubTitle,
    SectionTitle,
} from "./ui/section";
import { cn } from "@/lib/utils";

const Features = [
    {
        number: "01",
        className: "-ml-11.5",
        title: "Cutting-Edge Insights",
        description:
            "Gain firsthand knowledge from top AI experts and pioneers shaping the industry.",
    },
    {
        number: "02",
        className: "-ml-11.5",
        title: "Hands-On Workshops",
        description:
            "Participate in interactive sessions designed to apply AI concepts in real-world scenarios.",
    },
    {
        number: "03",
        className: "flex-row-reverse -mr-11.5",
        title: "Networking Opportunities",
        description:
            "Connect with industry leaders, innovators, and fellow enthusiasts to expand your professional circle.",
    },
    {
        number: "04",
        className: "flex-row-reverse -mr-11.5",
        title: "Exclusive Resources",
        description:
            "Access curated materials, tools, and guides to deepen your understanding and skill set.",
    },
];

export const WhyAttend = () => (
    <Section>
        <SectionHeader className="items-start">
            <SectionTitle>WHY ATTEND?</SectionTitle>
            <SectionSubTitle>
                Discover why Next-Gen AI Summit is the must-attend event for AI professionals,
                innovators, and industry leaders.
            </SectionSubTitle>
        </SectionHeader>
        <SectionContent className="grid grid-cols-2 gap-5">
            {Features.map((feature) => (
                <SectionCard
                    key={feature.number}
                    variant="accent"
                    className="flex h-72.5 flex-col justify-between overflow-hidden py-10"
                >
                    <h3 className="text-[20px] font-bold uppercase">{feature.title}</h3>
                    <div className={cn("flex justify-between", feature.className)}>
                        <p className="bg-[linear-gradient(184.55deg,#0147FF_35.34%,rgba(1,71,255,0)_79.91%)] bg-clip-text text-[300px] leading-90 text-transparent">
                            {feature.number}
                        </p>
                        <p className="mt-13 max-w-55 text-left text-[18px]">
                            {feature.description}
                        </p>
                    </div>
                </SectionCard>
            ))}
        </SectionContent>
    </Section>
);
