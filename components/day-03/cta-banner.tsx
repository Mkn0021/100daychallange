import { Button } from "./ui/button";
import { Section, SectionCard, SectionHeader, SectionSubTitle, SectionTitle } from "./ui/section";

type Ticket = {
    label: string;
    description: string;
    variant: "primary" | "secondary" | "accent" | "outline";
    price: string;
};

const Tickets: Ticket[] = [
    {
        label: "Early Bird Pass",
        description: "Limited time offer!",
        variant: "primary",
        price: "€299",
    },
    {
        label: "STANDARD PASS",
        description: "",
        variant: "outline",
        price: "€399",
    },
    {
        label: "VIP EXPERIENCE",
        description: "Includes exclusive speaker meetups & front-row seating",
        variant: "outline",
        price: "€699",
    },
];
export const CTABanner = () => (
    <Section className="mt-50 sm:mt-50">
        <SectionHeader className="items-start">
            <SectionTitle>REGISTER NOW</SectionTitle>
            <SectionSubTitle className="mt-2">
                Secure your spot at the Next-Gen AI Summit 2052 and join the future of AI
                innovation.
            </SectionSubTitle>
        </SectionHeader>
        <SectionCard className="relative mt-15 overflow-hidden p-24" variant="accent">
            <h4 className="text-[20px]">Early Bird Pricing Ends In:</h4>
            <TimerDisplay time="12:05:30" />
            <CTAIllustration className="absolute right-0 bottom-0" />
        </SectionCard>
        <h3 className="mt-25 text-[50px] font-bold">Ticket Options</h3>
        <div className="grid grid-cols-2 gap-5 xl:grid-cols-3">
            {Tickets.map((ticket) => (
                <SectionCard
                    key={ticket.label}
                    variant={ticket.variant}
                    className="mt-15 flex flex-col justify-between"
                >
                    <h4 className="text-[26px] font-bold uppercase">{ticket.label}</h4>
                    <p className="text-[20px]">{ticket.description}</p>
                    <p className="mt-25 text-[50px] font-bold">{ticket.price}</p>
                    <Button
                        className="mt-10 text-nowrap"
                        variant={ticket.variant == "primary" ? "secondary" : "primary"}
                        link
                    >
                        Get your ticket
                    </Button>
                </SectionCard>
            ))}
        </div>
    </Section>
);

function TimerDisplay({ time }: { time: string }) {
    const [days, hours, minutes] = time.split(":");

    return (
        <div className="relative z-1 flex items-end gap-4">
            <TimeUnit value={days} label="DAYS" />
            <p className="mb-6 text-[200px] leading-none">:</p>
            <TimeUnit value={hours} label="HOURS" />
            <p className="mb-6 text-[200px] leading-none">:</p>
            <TimeUnit value={minutes} label="MINUTES" />
        </div>
    );
}

const TimeUnit = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center">
        <p className="text-[200px] leading-none">{value}</p>
        <p className="mt-2 text-sm tracking-widest">{label}</p>
    </div>
);

const CTAIllustration = ({ className }: { className?: string }) => (
    <svg
        width="364"
        height="321"
        viewBox="0 0 364 321"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M396.295 145L386.17 117.993L266.595 162.825L360.668 76.4644L341.164 55.2179L244.654 143.816L298.874 24.5513L272.618 12.6149L220.651 126.924L227.329 1.53395L198.528 -3.37278e-06L191.462 132.678L144.818 8.26868L117.811 18.394L164.455 142.803L71.9042 47.4745L51.2105 67.5651L138.679 157.657L24.3694 105.69L12.4339 131.945L131.697 186.166L0.727669 182.856L2.10487e-06 211.688L127.661 214.915L8.08692 259.746L18.2122 286.752L137.787 241.921L43.7136 328.281L63.2168 349.527L159.729 260.931L105.509 380.194L131.763 392.13L183.731 277.82L177.053 403.212L205.854 404.744L212.92 272.069L259.564 396.477L286.57 386.351L239.926 261.941L332.477 357.27L353.171 337.18L265.703 247.087L380.012 299.055L391.949 272.8L272.685 218.58L403.653 221.889L404.382 193.057L276.72 189.831L396.295 145Z"
            fill="url(#paint0_linear_56_200)"
        />
        <defs>
            <linearGradient
                id="paint0_linear_56_200"
                x1="391.232"
                y1="131.496"
                x2="-71.1035"
                y2="271.388"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#0147FF" />
                <stop offset="1" stopColor="#0147FF" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>
);
