import Image from "next/image";
import { CardSubtitle } from "./overview-section";
import { Section, SectionCard, SectionContent } from "./ui/section";

type Review = {
    id: number;
    title: string;
    quote: string;
    name: string;
    position: string;
    image: string;
    variant: "primary" | "secondary" | "accent" | "outline";
};

const Reviews: Review[] = [
    {
        id: 1,
        title: "GAME-CHANGING INSIGHTS",
        variant: "accent",
        quote: "This summit opened my eyes to the future of AI and how it will shape industries.",
        name: "Elena Rojas",
        position: "AI Researcher, DeepMind",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        id: 2,
        title: "NEXT LEVEL NETWORKING",
        variant: "primary",
        quote: "Met incredible minds and built connections that actually matter.",
        name: "James Carter",
        position: "CTO, OpenAI",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
        id: 3,
        title: "PRACTICAL & FUTURISTIC",
        variant: "secondary",
        quote: "Not just theory — real-world applications that I could use immediately.",
        name: "Aisha Khan",
        position: "ML Engineer, Google",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
];

export const ReviewSection = () => (
    <Section className="mt-41.5 sm:mt-41.5">
        <h2 className="text-[50px] font-bold">What Past Attendees Say</h2>
        <SectionContent className="mt-22.5 grid grid-cols-3 gap-5 sm:mt-22.5">
            {Reviews.map((review) => (
                <SectionCard
                    key={review.id}
                    variant={review.variant}
                    className="flex h-full flex-col justify-between"
                >
                    <h4 className="text-[30px] font-bold break-keep">{review.title}</h4>

                    <CardSubtitle className="mt-6">"{review.quote}"</CardSubtitle>

                    <div className="mt-12.5 flex items-center gap-10">
                        <Image
                            height={50}
                            width={50}
                            src={review.image}
                            alt={review.name}
                            className="rounded-full"
                        />

                        <p className="text-[18px]">
                            {review.name} <br />
                            <span className="text-nowrap">{review.position}</span>
                        </p>
                    </div>
                </SectionCard>
            ))}
        </SectionContent>
    </Section>
);
