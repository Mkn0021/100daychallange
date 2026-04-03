import { cn } from "@/lib/utils";
import { DashedBorder } from "./hero-section";
import { Section, SectionHeader, SectionSubTitle, SectionTitle } from "./ui/section";

const bentoCards = [
    {
        id: 1,
        className: "lg:col-span-3 lg:pl-15",
        title: "Reusable issue templates.",
        description: "Draft lightning-fast documents with our Smart Instructions and Templates.",
        content: "Feature 1",
        borders: [],
    },
    {
        id: 2,
        className: "lg:col-span-3 lg:pr-15",
        title: "Simplify your stack.",
        description: "No more Confluence, SharePoint, or Microsoft Word.",
        content: "Feature 2",
        borders: [
            { variant: "horizontal" as const, position: "hidden lg:block inset-y-0 left-0" },
            { variant: "vertical" as const, position: "block lg:hidden inset-x-0 top-0" },
        ],
    },
    {
        id: 3,
        className: "lg:col-span-2",
        title: "Real-time collaboration.",
        description: "Work together seamlessly with built-in communication tools.",
        content: "Feature 3",
        borders: [{ variant: "vertical" as const, position: "block lg:hidden inset-x-0 top-0" }],
    },
    {
        id: 4,
        className: "lg:col-span-2",
        title: "Automated workflows.",
        description: "Let intelligent automation handle repetitive tasks.",
        content: "Feature 4",
        borders: [
            { variant: "horizontal" as const, position: "hidden lg:block inset-y-0 left-0" },
            { variant: "horizontal" as const, position: "hidden lg:block inset-y-0 right-0" },
            { variant: "vertical" as const, position: "block lg:hidden inset-x-0 top-0" },
        ],
    },
    {
        id: 5,
        className: "lg:col-span-2",
        title: "Advanced analytics.",
        description: "Gain deep insights into your team's performance.",
        content: "Feature 5",
        borders: [{ variant: "vertical" as const, position: "block lg:hidden inset-x-0 top-0" }],
    },
];

export const BentoGrid = () => (
    <div className="bg-secondary/80 w-full py-12.5">
        <Section>
            <SectionTitle className="mx-auto max-w-4xl py-6.25 text-center">
                Mainline your resource <br className="hidden lg:block" /> allocation and execution
            </SectionTitle>
            <div className="relative my-12.5 grid lg:grid-cols-6">
                {bentoCards.map((card) => (
                    <BentoCard key={card.id} className={card.className}>
                        {card.borders.map((border, borderIndex) => (
                            <DashedBorder
                                key={borderIndex}
                                variant={border.variant}
                                className={`absolute ${border.position}`}
                            />
                        ))}
                        <CardTitle>
                            <span className="text-foreground">{card.title}</span> {card.description}
                        </CardTitle>
                        <CardContent>{card.content}</CardContent>
                    </BentoCard>
                ))}
                <DashedBorder variant="vertical" className="absolute inset-x-0 top-0" />
                <DashedBorder
                    variant="vertical"
                    className="absolute inset-x-0 bottom-1/2 hidden lg:block"
                />
                <DashedBorder variant="vertical" className="absolute inset-x-0 bottom-0" />
            </div>
        </Section>
    </div>
);

const BentoCard = ({ className, children }: { className?: string; children: React.ReactNode }) => (
    <div className={cn("relative block min-h-100 w-full overflow-hidden p-5", className)}>
        {children}
    </div>
);

const CardTitle = ({ children }: { children: React.ReactNode }) => (
    <SectionSubTitle variant="secondary" className="mx-6 my-7.5 max-w-none">
        {children}
    </SectionSubTitle>
);

const CardContent = ({ children }: { children: React.ReactNode }) => (
    <div className="h-full w-full">{children}</div>
);
