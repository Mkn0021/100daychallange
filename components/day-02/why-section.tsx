import Image from "next/image";
import {
    BellIcon,
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
import { MobilePreview } from "./ui/mobile";

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
        <SectionHeader className="justify-between xl:flex-row">
            <SectionTitle>Why you’ll love it</SectionTitle>
            <SectionSubTitle>Designed to help you stay on track, effortlessly.</SectionSubTitle>
        </SectionHeader>
        <SectionContent>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-10">
                {Features.map((feature, index) => (
                    <SectionCard
                        className="flex flex-col items-start sm:items-center lg:items-start"
                        key={index}
                    >
                        <feature.icon className="mb-6.25 h-10 lg:h-5" />
                        <h3 className="text-left text-[14px] font-semibold sm:text-center lg:text-left lg:text-[20px]">
                            {feature.title}
                        </h3>
                        <p className="mt-3.75 block text-[16px] sm:hidden lg:block">
                            {feature.description}
                        </p>
                    </SectionCard>
                ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
                <SectionCard className="relative aspect-60/56 min-w-[50%] overflow-hidden bg-(--blue)">
                    <MobilePreview className="absolute top-[15%] left-0 w-[50%] translate-x-1/2">
                        <Image
                            src="/day-02/review-2.png"
                            alt="App Preview"
                            width={200}
                            height={400}
                            loading="lazy"
                        />
                    </MobilePreview>
                </SectionCard>
                <div className="flex flex-col items-start justify-between gap-11 py-6.25">
                    <h3 className="text-[30px] leading-snug font-medium xl:text-[36px]">
                        Join thousands of users from top companies using Habitus to build better
                        habits
                    </h3>
                    <div className="bg-secondary flex w-full items-center justify-between rounded-[40px] px-10 py-8 *:h-6 sm:*:h-10 lg:w-auto lg:gap-11 xl:*:h-14">
                        <GoogleIcon />
                        <SpotifyIcon />
                        <TreeHouseIcon />
                    </div>
                </div>
            </div>
        </SectionContent>
    </Section>
);
