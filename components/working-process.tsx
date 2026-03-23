"use client";

import { useState } from "react";
import { ServiceCard } from "./service-section";
import { Section, SectionContent, SectionHeader, SectionSubTitle, SectionTitle } from "./section";

const PROCESS_STEPS = [
    {
        id: 1,
        number: "01",
        title: "Consultation",
        description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        id: 2,
        number: "02",
        title: "Strategy Development",
        description: "We develop a comprehensive strategy tailored to your business needs, market analysis, and competitive landscape to ensure maximum impact and ROI for your marketing initiatives."
    },
    {
        id: 3,
        number: "03",
        title: "Implementation",
        description: "Our team executes the strategy with precision and attention to detail, utilizing the latest tools and techniques to deliver results that drive your business forward."
    },
    {
        id: 4,
        number: "04",
        title: "Monitoring & Optimization",
        description: "We continuously monitor performance metrics and optimize campaigns in real-time to ensure you achieve your goals and maximize your return on investment."
    }
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
                    Step-by-Step Guide to Achieving <br /> Your Business Goals
                </SectionSubTitle>
            </SectionHeader>
            <SectionContent className="flex flex-col gap-15">
                {PROCESS_STEPS.map((step, index) => (
                    <ServiceCard 
                        key={step.id}
                        variant={index === 0 ? "primary" : "secondary"} 
                 
                        className="py-10 px-15 flex flex-col items-center gap-7.5 justify-between w-full cursor-pointer"
                    >
                        <div className="w-full flex items-center text-center justify-between">
                            <h3 className="text-[60px] font-medium flex items-center">
                                {step.number}. <span className="text-[30px] ml-6">{step.title}</span>
                            </h3>
                            <button
                                onClick={() => toggleExpand(step.id)}
                                className="rounded-full border-2 border-accent size-15 bg-secondary flex items-center justify-center hover:bg-white transition-colors"
                                aria-label={expandedId === step.id ? "Collapse" : "Expand"}
                            >
                                {expandedId === step.id ? <MinusIcon /> : <PlusIcon />}
                            </button>
                        </div>
                        {expandedId === step.id && (
                            <>
                                <div className="h-px w-full bg-accent" />
                                <div className="text-[18px] w-full">
                                    {step.description}
                                </div>
                            </>
                        )}
                    </ServiceCard>
                ))}
            </SectionContent>
        </Section>
    );
}

const MinusIcon = () => (
    <svg width="18" height="6" viewBox="0 0 18 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 5.64V0H17.76V5.64H0Z" fill="black" />
    </svg>
)

const PlusIcon = () => (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.6 25.08V15.36H0V9.72H9.6V0H15.48V9.72H25.08V15.36H15.48V25.08H9.6Z" fill="#191A23" />
    </svg>
)