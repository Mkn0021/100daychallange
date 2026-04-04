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
    <Background className="pt-25">
        <Section as="div" className="grid grid-cols-1 max-lg:gap-10 md:px-7.5 lg:grid-cols-5">
            <SectionHeader className="items-start py-0 lg:col-span-3">
                <SectionTitle as="h1">Mainline your product.</SectionTitle>
                <SectionSubTitle>
                    Mainline is the fit-for-purpose tool for planning and building modern software
                    products.
                </SectionSubTitle>

                <div className="mt-8 flex flex-col gap-4 md:flex-row">
                    <Button>
                        Get Started <ArrowIcon />
                    </Button>
                    <Button variant="outline">
                        Mainline raises $12M from Ventures <DashedCircleIcon />
                    </Button>
                </div>
            </SectionHeader>

            <DashedBorder variant="vertical" className="block lg:hidden" />

            <ul className="relative space-y-4 lg:col-span-2 lg:py-5 lg:pl-10">
                {Features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <li key={index} className="flex items-center gap-5">
                            <Icon />
                            <div className="flex flex-col items-start">
                                <h2 className="text-foreground text-base font-semibold">
                                    {feature.title}
                                </h2>
                                <p className="text-muted-foreground text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </li>
                    );
                })}
                <DashedBorder
                    variant="horizontal"
                    className="absolute top-0 bottom-0 left-0 hidden lg:block"
                />
            </ul>
            <HeroImage className="h-[160%] w-[160%] md:mt-12.5 md:h-[140%] md:w-[140%] lg:col-span-5 lg:mt-25 lg:h-auto lg:w-full" />
        </Section>
    </Background>
);

export const Background = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => (
    <section
        className={cn(
            "from-secondary via-background to-background/0 m-2.5 overflow-hidden rounded-t-[36px] bg-linear-to-b md:m-3.75",
            className
        )}
    >
        {children}
    </section>
);

const HeroImage = ({ className }: { className?: string }) => (
    <div
        className={cn(
            "bg-muted relative aspect-video overflow-hidden rounded-none rounded-tl-2xl border border-white/8 shadow-[0px_9px_50px_0px_#3C3C301F] lg:rounded-2xl",
            className
        )}
    >
        <Image
            fill
            src="/day-04/hero.webp"
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
