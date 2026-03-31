import Image from "next/image";
import {
    Section,
    SectionCard,
    SectionContent,
    SectionHeader,
    SectionSubTitle,
    SectionTitle,
} from "./ui/section";

const Reviews = [
    {
        name: "Sarah T.",
        role: "Writer",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        review: "I've finally stayed consistent with journaling for 90 days. This app made it effortless.",
    },
    {
        name: "James K.",
        role: "Software Engineer",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        review: "Seeing my progress visually keeps me motivated every day. The reminders are just perfect!",
    },
    {
        name: "Priya R.",
        role: "Wellness Coach",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        review: "I've tried several habit trackers, but this one is the only one I actually stuck with.",
    },
];

export const ReviewSection = () => (
    <Section>
        <SectionHeader className="items-start text-left">
            <SectionTitle>What our users say</SectionTitle>
            <SectionSubTitle>
                Real stories from people who turned their goals into habits.
            </SectionSubTitle>
        </SectionHeader>
        <SectionContent className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {Reviews.map((review, index) => (
                <SectionCard
                    className="flex flex-col items-start justify-between gap-7.5 text-(--grey)"
                    key={index}
                >
                    <div className="flex gap-4">
                        <Image
                            src={review.avatar}
                            alt={review.name}
                            height={40}
                            width={40}
                            className="size-10 rounded-full"
                        />
                        <div>
                            <h3 className="text-accent text-base font-bold">{review.name}</h3>
                            <p className="text-base">{review.role}</p>
                        </div>
                    </div>
                    <p className="text-base text-balance">{review.review}</p>
                </SectionCard>
            ))}
        </SectionContent>
    </Section>
);
