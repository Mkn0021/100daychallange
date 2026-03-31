"use client";

import { useState } from "react";
import {
    Section,
    SectionCard,
    SectionContent,
    SectionHeader,
    SectionSubTitle,
    SectionTitle,
} from "./ui/section";
import { MinusIcon, PlusIcon } from "./ui/icons";

const PROCESS_STEPS = [
    {
        id: 1,
        number: "01",
        title: "Consultation",
        description:
            "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
        id: 2,
        number: "02",
        title: "Strategy Development",
        description:
            "We develop a comprehensive strategy tailored to your business needs, market analysis, and competitive landscape to ensure maximum impact and ROI for your marketing initiatives.",
    },
    {
        id: 3,
        number: "03",
        title: "Implementation",
        description:
            "Our team executes the strategy with precision and attention to detail, utilizing the latest tools and techniques to deliver results that drive your business forward.",
    },
    {
        id: 4,
        number: "04",
        title: "Monitoring & Optimization",
        description:
            "We continuously monitor performance metrics and optimize campaigns in real-time to ensure you achieve your goals and maximize your return on investment.",
    },
];

export const WorkingProcess = () => {
    const [expandedId, setExpandedId] = useState<number | null>(1);

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Our Working Process</SectionTitle>
                <SectionSubTitle>
                    Step-by-Step Guide to Achieving Your Business Goals
                </SectionSubTitle>
            </SectionHeader>
            <SectionContent className="flex flex-col gap-15">
                {PROCESS_STEPS.map((step, index) => (
                    <SectionCard
                        key={step.id}
                        variant={index === 0 ? "primary" : "secondary"}
                        className="flex w-full cursor-pointer flex-col items-center justify-between gap-7.5 sm:px-15 sm:py-10"
                    >
                        <div className="flex w-full items-center justify-between text-center">
                            <h3 className="xs:text-4xl flex items-center text-[1.75rem] font-medium sm:text-6xl">
                                {step.number}.{" "}
                                <span className="xs:text-2xl ml-2 text-left text-[1.12rem] sm:ml-6 sm:text-[1.88rem]">
                                    {step.title}
                                </span>
                            </h3>
                            <button
                                onClick={() => toggleExpand(step.id)}
                                className="border-accent bg-secondary flex size-10 shrink-0 items-center justify-center rounded-full border-2 p-2 transition-colors hover:bg-white sm:size-15"
                                aria-label={expandedId === step.id ? "Collapse" : "Expand"}
                            >
                                {expandedId === step.id ? <MinusIcon /> : <PlusIcon />}
                            </button>
                        </div>
                        {expandedId === step.id && (
                            <>
                                <div className="bg-accent h-px w-full" />
                                <p className="xs:text-base w-full text-xs sm:text-[1.12rem]">
                                    {step.description}
                                </p>
                            </>
                        )}
                    </SectionCard>
                ))}
            </SectionContent>
        </Section>
    );
};
