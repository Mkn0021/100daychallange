import { cn } from "@/lib/utils";
import Link from "next/link";
import {
    Section,
    SectionCard,
    SectionContent,
    SectionHeader,
    SectionSubTitle,
    SectionTitle,
} from "./ui/section";
import { Service1, Service2, Service3, Service4, Service5, Service6 } from "./ui/illustration";
import { ArrowIcon } from "./ui/icons";

interface Service {
    title: string;
    illustration: React.ReactNode;
    variant: "primary" | "accent" | "secondary";
}

const Services: Service[] = [
    {
        title: "Search engine optimization",
        illustration: <Service1 />,
        variant: "secondary",
    },
    {
        title: "Pay-per-click advertising",
        illustration: <Service2 />,
        variant: "primary",
    },
    {
        title: "Social Media Marketing",
        illustration: <Service3 />,
        variant: "accent",
    },
    {
        title: "Email Marketing",
        illustration: <Service4 />,
        variant: "secondary",
    },
    {
        title: "Content Creation",
        illustration: <Service5 />,
        variant: "primary",
    },
    {
        title: "Analytics and Tracking",
        illustration: <Service6 />,
        variant: "accent",
    },
];

export const ServiceSection = () => (
    <Section>
        <SectionHeader>
            <SectionTitle>Services</SectionTitle>
            <SectionSubTitle className="max-w-xl">
                At our digital marketing agency, we offer a range of services to help businesses
                grow and succeed online. These services include:
            </SectionSubTitle>
        </SectionHeader>
        <SectionContent>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 auto-rows-[310px]">
                {Services.map((service, index) => {
                    return (
                        <SectionCard key={index} variant={service.variant} className="relative">
                            <CardContent
                                variant={service.variant}
                                illustration={service.illustration}
                            >
                                <SectionTitle
                                    variant={service.variant}
                                    className="text-left text-[26px] sm:text-[30px] z-10"
                                    as="h3"
                                >
                                    {service.title}
                                </SectionTitle>
                            </CardContent>
                        </SectionCard>
                    );
                })}
            </div>
        </SectionContent>
    </Section>
);

interface CardProps {
    variant: "primary" | "accent" | "secondary";
    children: React.ReactNode;
    className?: string;
}

const CardTitle = ({ variant, children }: CardProps) => (
    <SectionTitle
        as="h3"
        className={cn(
            "text-left text-[26px] sm:text-[30px]",
            variant === "secondary" ? "bg-primary" : "bg-secondary"
        )}
    >
        {children}
    </SectionTitle>
);

const CardContent = ({
    variant,
    children,
    illustration,
}: CardProps & {
    illustration: React.ReactNode;
}) => (
    <>
        <div className="flex flex-col justify-between h-full">
            {children}
            <Link
                href="#"
                className={cn(
                    "flex items-center gap-2 sm:text-[20px] text-[18px] transition-colors duration-300",
                    variant === "accent"
                        ? "text-secondary hover:text-secondary/80"
                        : "text-accent hover:text-accent/80"
                )}
            >
                <div
                    className={cn(
                        "rounded-full p-2",
                        variant === "accent" ? "bg-secondary" : "bg-accent"
                    )}
                >
                    <ArrowIcon className={variant === "accent" ? "text-accent" : "text-primary"} />
                </div>
                <span className="hidden sm:block">Learn More</span>
            </Link>
        </div>
        <div className="absolute sm:static sm:p-0 bottom-0 right-0 px-8 py-12 scale-75 sm:scale-100 origin-bottom-right h-full">
            {illustration}
        </div>
    </>
);
