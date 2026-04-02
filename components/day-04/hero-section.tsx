import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
    ArrowIcon,
    CrossTeamIcon,
    DashedCircleIcon,
    MilestoneIcon,
    ProgressIcon,
    TailoredWorkflowIcon,
} from "./ui/icons";
import { Section, SectionHeader, SectionSubTitle, SectionTitle } from "./ui/section";
import Image from "next/image";

const Features = [
    {
        icon: TailoredWorkflowIcon,
        title: "Tailored workflows",
        description: "Track progress across custom issue flows for your team.",
    },
    {
        icon: CrossTeamIcon,
        title: "Cross-team projects",
        description: "Collaborate across teams and departments.",
    },
    {
        icon: MilestoneIcon,
        title: "Milestones",
        description: "Break projects down into concrete phases.",
    },
    {
        icon: ProgressIcon,
        title: "Progress insights",
        description: "Track scope, velocity, and progress over time.",
    },
];

export const HeroSection = () => (
    <Container>
        <Section className="grid grid-cols-1 gap-10 py-15.75 lg:grid-cols-5 lg:gap-0">
            <div className="lg:col-span-3">
                <SectionHeader className="items-start gap-5.5">
                    <SectionTitle>Mainline your product.</SectionTitle>
                    <SectionSubTitle>
                        Mainline is the fit-for-purpose tool for planning and building modern
                        software products.
                    </SectionSubTitle>
                </SectionHeader>
                <div className="mt-11.25 flex flex-col gap-3.75 md:flex-row">
                    <Button variant="primary">
                        Get Started <ArrowIcon />
                    </Button>
                    <Button variant="outline">
                        Mainline raises $12M from Roba Ventures <DashedCircleIcon />
                    </Button>
                </div>
            </div>
            <DashedBorder variant="vertical" className="block lg:hidden" />
            <div className="relative flex flex-col justify-between gap-4.5 lg:col-span-2 lg:pl-9">
                {Features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div key={index} className="flex items-start gap-5">
                            <Icon />
                            <div className="flex flex-col items-start gap-0.75">
                                <h3 className="text-foreground text-[15px] font-semibold">
                                    {feature.title}
                                </h3>
                                <p className="text-[13px]">{feature.description}</p>
                            </div>
                        </div>
                    );
                })}
                <DashedBorder
                    variant="horizontal"
                    className="absolute top-0 bottom-0 left-0 hidden lg:block"
                />
            </div>
            <HeroImage className="h-[140%] w-[140%] lg:col-span-5 lg:mt-15.75 lg:h-auto lg:w-full" />
        </Section>
    </Container>
);

const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="h-full w-full max-w-screen overflow-hidden p-3.75">
        <div className="from-secondary via-background to-background/0 rounded-t-[36px] bg-linear-to-b">
            {children}
        </div>
    </div>
);

const HeroImage = ({ className }: { className?: string }) => (
    <div
        className={cn(
            "relative aspect-video overflow-hidden rounded-none rounded-tl-2xl border border-white/8 bg-(--muted) shadow-[0px_9px_50px_0px_#3C3C301F] lg:rounded-2xl",
            className
        )}
    >
        <Image
            fill
            src="/day-04/dashboard-01.png"
            alt="Hero Image"
            className="absolute inset-0 object-cover object-top-left"
        />
    </div>
);

export const DashedBorder = ({
    className,
    variant,
}: {
    className?: string;
    variant: "horizontal" | "vertical";
}) => (
    <div
        className={cn(
            variant === "horizontal"
                ? "h-full w-px bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] mask-[linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]"
                : "h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] mask-[linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
            className
        )}
    />
);
