import Image from "next/image";
import {
    BellIcon,
    BranchIcon,
    GoogleIcon,
    ProgressIcon,
    SpotifyIcon,
    StreakIcon,
    TreeHouseIcon,
} from "./ui/icons";
import {
    Section,
    SectionCard,
    SectionContent,
    SectionHeader,
    SectionSubTitle,
    SectionTitle,
} from "./ui/section";

const Features = [
    {
        icon: BellIcon,
        title: "Smart Reminders",
        description:
            "Never miss a habit again. Set daily notifications or let the app suggest the best time.",
    },
    {
        icon: ProgressIcon,
        title: "Progress Analytics",
        description: "See your growth with weekly reports, streaks, and visual heatmaps.",
    },
    {
        icon: StreakIcon,
        title: "Streak Tracking",
        description: "Keep the momentum going. Celebrate your longest streaks and milestones.",
    },
];

export const WhySection = () => (
    <Section className="overflow-hidden">
        <SectionHeader className="flex-row justify-between">
            <SectionTitle>Why you’ll love it</SectionTitle>
            <SectionSubTitle>Designed to help you stay on track, effortlessly.</SectionSubTitle>
        </SectionHeader>
        <SectionContent className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {Features.map((feature, index) => (
                <SectionCard className="flex flex-col items-start" key={index}>
                    <feature.icon className="mb-6.25 h-5" />
                    <h3 className="text-[20px] font-semibold">{feature.title}</h3>
                    <p className="mt-3.75 text-[16px]">{feature.description}</p>
                </SectionCard>
            ))}
        </SectionContent>
        <div className="mt-10 flex justify-between gap-15">
            <SectionCard className="relative aspect-60/56 flex-1 overflow-hidden bg-(--blue)">
                <div className="absolute top-0 left-0 mx-35 mt-17.5 w-fit overflow-hidden rounded-[20px] border-7 bg-white">
                    <Image
                        src="/day-02/review-2.png"
                        alt="App Preview"
                        width={200}
                        height={400}
                        loading="lazy"
                        className="w-full object-cover"
                    />
                </div>
            </SectionCard>
            <div className="relative flex-1 py-6.25">
                <h3 className="text-[36px] leading-snug font-medium">
                    Join thousands of users from top companies using Habitus to build better habits
                </h3>
                <div className="bg-secondary absolute bottom-0 left-0 flex h-10 w-[calc(100%+9rem)] items-center gap-11 rounded-[40px] px-11 py-14.5">
                    <GoogleIcon />
                    <SpotifyIcon />
                    <TreeHouseIcon />
                    <BranchIcon />
                </div>
            </div>
        </div>
    </Section>
);
