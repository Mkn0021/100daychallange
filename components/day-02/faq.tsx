"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import {
    Section,
    SectionContent,
    SectionHeader,
    SectionSubTitle,
    SectionTitle,
} from "./ui/section";
import { ArrowDownIcon } from "./ui/icons";

const FAQs = [
    {
        color: "bg-primary",
        question: "How does Habitus help me build habits?",
        answer: "Habitus provides a simple and intuitive interface to track your daily routines, set goals, and monitor your progress. By visualizing your habits and providing insights, it helps you stay consistent and motivated.",
    },
    {
        color: "bg-(--red)",
        question: "Is Habitus free to use?",
        answer: "Habitus offers a free version with basic features to help you get started. We also have a premium subscription that unlocks additional features and customization options for a more personalized experience.",
    },
    {
        color: "bg-(--purple)",
        question: "Can I use Habitus on multiple devices?",
        answer: "Yes! Habitus is available on both iOS and Android, and your data syncs seamlessly across all your devices. You can track your habits on the go and access your progress anytime, anywhere.",
    },
    {
        color: "bg-(--blue)",
        question: "How do I get started with Habitus?",
        answer: "Getting started with Habitus is easy! Simply download the app from the App Store or Google Play, create an account, and start tracking your habits. You can set daily goals, customize your routine, and watch your progress grow over time.",
    },
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Section>
            <SectionHeader>
                <SectionTitle>Frequently Asked Questions</SectionTitle>
                <SectionSubTitle>
                    Everything you need to know before getting started
                </SectionSubTitle>
            </SectionHeader>
            <SectionContent className="grid grid-cols-1 gap-7.5 xl:grid-cols-2">
                {FAQs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        color={faq.color}
                        isOpen={openIndex === index}
                        onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                ))}
            </SectionContent>
        </Section>
    );
};

const FAQItem = ({
    question,
    answer,
    color,
    isOpen,
    onToggle,
}: {
    question: string;
    answer: string;
    color: string;
    isOpen: boolean;
    onToggle: () => void;
}) => (
    <button
        onClick={onToggle}
        className={cn(
            "flex w-full flex-col items-start justify-start gap-4 rounded-[40px] px-10 py-9 transition-all duration-300",
            color,
            isOpen && "pb-9"
        )}
    >
        <div className="flex w-full items-center justify-start gap-4">
            <div
                className={cn("shrink-0 transition-transform duration-300", isOpen && "rotate-180")}
            >
                <ArrowDownIcon />
            </div>
            <h3 className="text-accent text-left text-[20px] font-medium">{question}</h3>
        </div>
        {isOpen && (
            <p className="text-accent mt-4 text-left text-[14px] leading-relaxed">{answer}</p>
        )}
    </button>
);
