import { cn } from "@/lib/utils";
import Link from "next/link";
import {
    Section,
    SectionCard,
    SectionContent,
    SectionHeader,
    SectionSubTitle,
    SectionTitle
} from "./ui/section";
import {
    Service1,
    Service2,
    Service3,
    Service4,
    Service5,
    Service6
} from "./ui/illustration";
import { ArrowIcon } from "./ui/icons";

interface Service {
    title: string;
    illustration: React.ReactNode;
    variant: 'primary' | 'accent' | 'secondary';
}

const Services: Service[] = [
    {
        title: "Search engine_optimization",
        illustration: <Service1 />,
        variant: "secondary"
    },
    {
        title: "Pay-per-click_advertising",
        illustration: <Service2 />,
        variant: "primary"
    },
    {
        title: "Social Media_Marketing",
        illustration: <Service3 />,
        variant: "accent"
    },
    {
        title: "Email_Marketing",
        illustration: <Service4 />,
        variant: "secondary"
    },
    {
        title: "Content_Creation",
        illustration: <Service5 />,
        variant: "primary"
    },
    {
        title: "Analytics and_Tracking",
        illustration: <Service6 />,
        variant: "accent"
    },
]

export const ServiceSection = () => (
    <Section>
        <SectionHeader>
            <SectionTitle>Services</SectionTitle>
            <SectionSubTitle>
                At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
            </SectionSubTitle>
        </SectionHeader>
        <SectionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 auto-rows-[310px]">
                {Services.map((service, index) => {
                    const titleParts = service.title.split('_');
                    return (
                        <SectionCard key={index} variant={service.variant}>
                            <CardContent variant={service.variant} illustration={service.illustration}>
                                <CardHeader>
                                    {titleParts.map((part, i) => (
                                        <CardTitle key={i} variant={service.variant}>{part}</CardTitle>
                                    ))}
                                </CardHeader>
                            </CardContent>
                        </SectionCard>
                    );
                })}
            </div>
        </SectionContent>
    </Section>
);

interface CardProps {
    variant: 'primary' | 'accent' | 'secondary'
    children: React.ReactNode
    className?: string
}


const CardHeader = ({ children }: { children: React.ReactNode }) => (
    <h3 className="flex flex-col items-start text-[30px] font-medium">
        {children}
    </h3>
)

const CardTitle = ({ variant, children }: CardProps) => (
    <span className={cn("w-fit px-1.75 rounded-[7px]", variant === "secondary" ? "bg-primary" : "bg-secondary")}>
        {children}
    </span>
);

const CardContent = ({ variant, children, illustration }: CardProps & {
    illustration: React.ReactNode
}) => (
    <>
        <div className="flex flex-col justify-between">
            {children}
            <Link href="#" className={cn(
                "flex items-center gap-2 text-[20px] transition-colors duration-300",
                variant === "accent" ? "text-secondary hover:text-secondary/80" : "text-accent hover:text-accent/80"
            )}>
                <div className={cn("rounded-full p-2", variant === "accent" ? "bg-secondary" : "bg-accent")}>
                    <ArrowIcon className={variant === "accent" ? "text-accent" : "text-primary"} />
                </div>
                Learn More
            </Link>
        </div>
        {illustration}
    </>
)