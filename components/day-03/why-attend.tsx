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
        className: "md:flex-row xl:flex-row xl:-ml-11.5",
        title: "Cutting-Edge Insights",
        description:
            "Gain firsthand knowledge from top AI experts and pioneers shaping the industry.",
    },
    {
        number: "02",
        className: "md:flex-row-reverse md:-mr-11.5 xl:flex-row xl:-ml-11.5",
        title: "Hands-On Workshops",
        description:
            "Participate in interactive sessions designed to apply AI concepts in real-world scenarios.",
    },
    {
        number: "03",
        className: "md:flex-row xl:flex-row-reverse xl:-mr-11.5",
        title: "Networking Opportunities",
        description:
            "Connect with industry leaders, innovators, and fellow enthusiasts to expand your professional circle.",
    },
    {
        number: "04",
        className: "md:flex-row-reverse md:-mr-11.5",
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
        <SectionContent className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            {Features.map((feature) => (
                <SectionCard
                    key={feature.number}
                    variant="accent"
                    className="flex h-100 flex-col justify-between overflow-hidden px-8 py-10 md:h-72.5 md:px-15"
                >
                    <h3 className="text-[20px] font-bold uppercase">{feature.title}</h3>
                    <div className={cn("flex flex-col-reverse justify-between", feature.className)}>
                        <p
                            className={cn(
                                "bg-[linear-gradient(184.55deg,#0147FF_35.34%,rgba(1,71,255,0)_79.91%)] bg-clip-text",
                                "flex justify-end text-[150px] leading-40 text-transparent md:block md:text-[300px] md:leading-90"
                            )}
                        >
                            {feature.number}
                        </p>
                        <p className="mt-8 max-w-55 text-left text-[18px] md:mt-13">
                            {feature.description}
                        </p>
                    </div>
                </SectionCard>
            ))}
        </SectionContent>
    </Section>
);
