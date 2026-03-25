"use client";

import React, { useState } from "react";
import {
    Section,
    SectionContent,
    SectionHeader,
    SectionSubTitle,
    SectionTitle,
} from "./ui/section";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, DotIcon } from "./ui/icons";

const testimonials = [
    {
        name: "John Doe",
        role: "CEO of Acme Inc.",
        text: `"Working with this digital marketing agency has been a game-changer for our business. Their expertise and dedication have helped us achieve our online marketing goals and grow our customer base."`,
    },
    {
        name: "Jane Smith",
        role: "Marketing Manager at XYZ Corp.",
        text: `"I highly recommend this digital marketing agency to anyone looking to improve their online presence. Their team is knowledgeable, responsive, and always goes above and beyond to deliver results."`,
    },
    {
        name: "Mike Johnson",
        role: "Founder of Startup Inc.",
        text: `"This digital marketing agency has been instrumental in helping us establish our brand and reach our target audience."`,
    },
];

export const Testimonial = () => {
    const [active, setActive] = useState(0);
    const total = testimonials.length;

    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Testimonial</SectionTitle>
                <SectionSubTitle className="max-w-xl">
                    Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our
                    Digital Marketing Services
                </SectionSubTitle>
            </SectionHeader>
            <SectionContent className="bg-accent rounded-[45px] px-8 py-12 sm:px-0 sm:py-21 flex flex-col items-center gap-10 overflow-hidden">
                <div className="w-full flex items-start gap-10 overflow-hidden">
                    <TestimonialCard
                        name={testimonials[(active - 1 + total) % total].name}
                        role={testimonials[(active - 1 + total) % total].role}
                    >
                        {testimonials[(active - 1 + total) % total].text}
                    </TestimonialCard>

                    <TestimonialCard
                        name={testimonials[active].name}
                        role={testimonials[active].role}
                    >
                        {testimonials[active].text}
                    </TestimonialCard>

                    <TestimonialCard
                        name={testimonials[(active + 1) % total].name}
                        role={testimonials[(active + 1) % total].role}
                    >
                        {testimonials[(active + 1) % total].text}
                    </TestimonialCard>
                </div>

                <Carosel current={active} total={total} setAction={setActive} />
            </SectionContent>
        </Section>
    );
};

const TestimonialCard = ({
    name,
    role,
    children,
    className,
}: {
    name?: string;
    role?: string;
    children?: React.ReactNode;
    className?: string;
}) => (
    <div
        className={cn(
            "w-full flex flex-col justify-between h-95 sm:-translate-x-[calc(50%+2.5rem)] sm:w-[50%] shrink-0",
            className
        )}
    >
        <p
            className={cn(
                "relative text-white text-center text-sm leading-relaxed p-4 sm:p-10 border border-primary rounded-[45px] flex-1 flex items-center justify-center",
                "before:content-[''] before:absolute before:bottom-0 before:left-1/4 before:-translate-x-1/2 before:translate-y-full before:border-24 before:border-transparent before:border-t-primary",
                "after:content-[''] after:absolute after:bottom-0 after:left-1/4 after:-translate-x-1/2 after:translate-y-full after:border-23 after:border-transparent after:border-t-accent"
            )}
        >
            {children}
        </p>
        <div className="mt-10 text-center">
            <strong className="block text-primary sm:text-[20px] text-[18px]">{name}</strong>
            <span className="text-white sm:text-[20px] text-[18px]">{role}</span>
        </div>
    </div>
);

export const Carosel = ({
    current,
    total,
    setAction,
}: {
    current: number;
    total: number;
    setAction: React.Dispatch<React.SetStateAction<number>>;
}) => {
    const prev = () => setAction((i) => (i - 1 + total) % total);
    const next = () => setAction((i) => (i + 1) % total);

    return (
        <div className="flex items-center justify-between gap-4 lg:mt-20 w-full sm:w-[50%]">
            <ArrowLeftIcon onClick={prev} className="rotate-180 h-3.5" />

            <div className="flex items-center gap-5">
                {testimonials.map((_, i) => (
                    <DotIcon
                        key={i}
                        className={cn("h-3.5", i === current ? "text-primary" : "text-white")}
                    />
                ))}
            </div>

            <ArrowLeftIcon onClick={next} className="h-3.5" />
        </div>
    );
};
