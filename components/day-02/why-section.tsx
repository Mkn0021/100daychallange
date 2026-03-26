import { BellIcon, ProgressIcon, StreakIcon } from "./ui/icons";
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
    <Section>
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
    </Section>
);
