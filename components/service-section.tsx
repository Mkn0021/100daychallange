import { cn } from "@/lib/utils";
import Link from "next/link";
import {
    Section,
    SectionContent,
    SectionHeader,
    SectionSubTitle,
    SectionTitle
} from "./section";
import {
    Service1,
    Service2,
    Service3,
    Service4,
    Service5,
    Service6
} from "./illustration";

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
                        <ServiceCard key={index} variant={service.variant}>
                            <ServiceCardContent variant={service.variant} illustration={service.illustration}>
                                <ServiceCardHeader>
                                    {titleParts.map((part, i) => (
                                        <ServiceCardTitle key={i} variant={service.variant}>{part}</ServiceCardTitle>
                                    ))}
                                </ServiceCardHeader>
                            </ServiceCardContent>
                        </ServiceCard>
                    );
                })}
            </div>
        </SectionContent>
    </Section>
);

interface ServiceCardProps {
    variant: 'primary' | 'accent' | 'secondary'
    children: React.ReactNode
}


const ServiceCard = ({ variant, children }: ServiceCardProps) => (
    <div className={cn(
        "flex justify-between rounded-[45px] border border-accent p-12.5 shadow-[0_5px_0_0_rgba(25,26,35,1)]",
        variant === 'primary' && "bg-primary",
        variant === 'accent' && "bg-accent",
        variant === 'secondary' && "bg-secondary"
    )}>
        {children}
    </div>
);

const ServiceCardHeader = ({ children }: { children: React.ReactNode }) => (
    <h3 className="flex flex-col items-start text-[30px] font-medium">
        {children}
    </h3>
)

const ServiceCardTitle = ({ variant, children }: ServiceCardProps) => (
    <span className={cn("w-fit px-1.75 rounded-[7px]", variant === "secondary" ? "bg-primary" : "bg-secondary")}>
        {children}
    </span>
);

const ServiceCardContent = ({ variant, children, illustration }: ServiceCardProps & {
    illustration: React.ReactNode
}) => (
    <>
        <div className="flex flex-col justify-between">
            {children}
            <Link href="#" className={cn(
                "flex items-center gap-2 text-[20px] hover:text-accent/80 transition-colors duration-300",
                variant === "accent" ? "text-secondary" : "text-accent"
            )}>
                <div className={cn("rounded-full p-2", variant === "accent" ? "bg-secondary" : "bg-accent")}>
                    <ArrowIcon variant={variant} />
                </div>
                Learn More
            </Link>
        </div>
        {illustration}
    </>
)

const ArrowIcon = ({ variant }: { variant: 'primary' | 'accent' | 'secondary' }) => (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.75 13.6956C0.0325611 14.1098 -0.213252 15.0272 0.200962 15.7446C0.615175 16.4621 1.53256 16.7079 2.25 16.2937L0.75 13.6956ZM20.2694 5.38286C20.4838 4.58266 20.0089 3.76015 19.2087 3.54574L6.16874 0.051683C5.36854 -0.16273 4.54603 0.312144 4.33162 1.11234C4.11721 1.91254 4.59208 2.73505 5.39228 2.94946L16.9834 6.05529L13.8776 17.6464C13.6631 18.4466 14.138 19.2691 14.9382 19.4835C15.7384 19.6979 16.5609 19.2231 16.7753 18.4229L20.2694 5.38286ZM2.25 16.2937L19.5705 6.29367L18.0705 3.69559L0.75 13.6956L2.25 16.2937Z"
            fill={variant === "accent" ? "var(--color-accent)" : "var(--color-primary)"}
        />
    </svg>
)