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
            <SectionContent className="bg-accent flex flex-col items-center gap-10 overflow-hidden rounded-[45px] px-8 py-12 sm:px-0 sm:py-21">
                <div className="flex w-full items-start gap-10 overflow-hidden">
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
            "flex h-95 w-full shrink-0 flex-col justify-between sm:w-[50%] sm:-translate-x-[calc(50%+2.5rem)]",
            className
        )}
    >
        <p
            className={cn(
                "border-primary relative flex flex-1 items-center justify-center rounded-[45px] border p-4 text-center text-sm leading-relaxed text-white sm:p-10",
                "before:border-t-primary before:absolute before:bottom-0 before:left-1/4 before:-translate-x-1/2 before:translate-y-full before:border-24 before:border-transparent before:content-['']",
                "after:border-t-accent after:absolute after:bottom-0 after:left-1/4 after:-translate-x-1/2 after:translate-y-full after:border-23 after:border-transparent after:content-['']"
            )}
        >
            {children}
        </p>
        <div className="mt-10 text-center">
            <strong className="text-primary block text-[18px] sm:text-[20px]">{name}</strong>
            <span className="text-[18px] text-white sm:text-[20px]">{role}</span>
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
        <div className="flex w-full items-center justify-between gap-4 sm:w-[50%] lg:mt-20">
            <ArrowLeftIcon onClick={prev} className="h-3.5 rotate-180" />

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
