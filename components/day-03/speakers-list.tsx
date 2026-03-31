import React from "react";
import {
    Section,
    SectionCard,
    SectionContent,
    SectionHeader,
    SectionSubTitle,
    SectionTitle,
} from "./ui/section";
import { CardSubtitle } from "./overview-section";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const Speakers = [
    {
        name: "Dr. Emily Carter",
        role: "Chief AI Scientist",
        company: "OpenAI",
        className: "xl:flex-row",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces&q=80",
    },
    {
        name: "Michael Chen",
        role: "Head of Product",
        company: "Google",
        className: "flex-row-reverse xl:flex-row",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces&q=80",
    },
    {
        name: "Sarah Johnson",
        role: "UX Director",
        company: "Meta",
        className: "xl:flex-row-reverse",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=faces&q=80",
    },
    {
        name: "David Kim",
        role: "CTO",
        company: "Stripe",
        className: "flex-row-reverse xl:flex-row-reverse",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces&q=80",
    },
];

export const SpeakerList = () => (
    <Section className="max-w-screen overflow-hidden">
        <SectionHeader className="items-start">
            <SectionTitle>KEYNOTE SPEAKERS</SectionTitle>
            <SectionSubTitle className="mt-2">
                Meet the industry leaders shaping the future of AI.
            </SectionSubTitle>
        </SectionHeader>
        <SectionContent className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            {Speakers.map((speaker, index) => (
                <SpeakerCard key={index} image={speaker.image} className={speaker.className}>
                    <CardTitle>{speaker.name}</CardTitle>
                    <CardSubtitle className="text-[14px] md:text-[20px]">
                        {speaker.role},
                        <br /> {speaker.company}
                    </CardSubtitle>
                </SpeakerCard>
            ))}
        </SectionContent>
        <Button variant="outline" link className="mt-15">
            And more
        </Button>
    </Section>
);

const SpeakerCard = ({
    className,
    children,
    image,
}: {
    className?: string;
    children: React.ReactNode;
    image: string;
}) => (
    <div className={cn("flex gap-5", className)}>
        <SectionCard
            variant="secondary"
            className="flex h-70 min-w-60 flex-col justify-between px-10 py-12.5 sm:aspect-295/452 sm:h-113 sm:min-w-0"
        >
            {children}
        </SectionCard>
        <Image
            height={452}
            width={295}
            src={image}
            alt="Speaker"
            className="h-full w-[50%] rounded-[50px] object-cover mix-blend-luminosity sm:aspect-295/452 md:w-auto"
        />
    </div>
);

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-[20px] font-semibold md:text-[30px]">{children}</h3>
);
