import { Button } from "./ui/button";
import { LinkedinIcon } from "./ui/icons";
import { Avatar } from "./ui/illustration";
import {
    Section,
    SectionCard,
    SectionContent,
    SectionHeader,
    SectionSubTitle,
    SectionTitle,
} from "./ui/section";

const teamMembers = [
    {
        name: "John Doe",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=cover",
        description:
            "John is a visionary leader with over 15 years of experience in digital marketing. He has a proven track record of driving growth and innovation in the industry.",
    },
    {
        name: "Sarah Smith",
        role: "Head of Strategy",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=cover",
        description:
            "Sarah brings strategic expertise with 12 years in digital marketing. She specializes in campaign planning and market analysis.",
    },
    {
        name: "Mike Johnson",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=cover",
        description:
            "Mike leads our creative team with a passion for innovative design. His work has won multiple industry awards and recognition.",
    },
    {
        name: "Emily Chen",
        role: "SEO Specialist",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=cover",
        description:
            "Emily is an expert in search engine optimization with proven results. She has helped numerous brands achieve top rankings.",
    },
    {
        name: "David Martinez",
        role: "Content Manager",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=cover",
        description:
            "David manages our content strategy with a focus on engaging storytelling. He creates compelling narratives that drive engagement.",
    },
    {
        name: "Lisa Anderson",
        role: "Analytics Manager",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=cover",
        description:
            "Lisa transforms data into actionable insights for marketing success. She uses advanced analytics to optimize campaign performance.",
    },
];

export const TeamSection = () => (
    <Section>
        <SectionHeader>
            <SectionTitle>Team</SectionTitle>
            <SectionSubTitle>
                Meet the skilled and experienced team behind our successful digital marketing
                strategies
            </SectionSubTitle>
        </SectionHeader>
        <SectionContent className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
                <TeamCard
                    key={member.name}
                    name={member.name}
                    role={member.role}
                    image={member.image}
                    description={member.description}
                />
            ))}
        </SectionContent>
        <Button className="mt-10 ml-auto block">See all team</Button>
    </Section>
);

const TeamCard = ({
    name,
    role,
    image,
    description,
}: {
    name: string;
    role: string;
    image: string;
    description: string;
}) => (
    <SectionCard className="relative bg-transparent py-10 px-8.75 flex flex-col items-left text-center gap-7">
        <LinkedinIcon
            className="absolute top-10 right-8.75"
            iconColor="var(--color-primary)"
            circleColor="var(--color-accent)"
        />
        <div className="flex gap-5">
            <Avatar image={image} />
            <p className="text-left mt-auto">
                <strong className="block sm:text-[20px] text-[18px] font-medium">{name}</strong>
                <span className="text-[16px]  sm:text-[18px]">{role}</span>
            </p>
        </div>
        <div className="h-px w-full bg-accent" />
        <p className="text-[16px]  sm:text-[18px] text-left text-balance">{description}</p>
    </SectionCard>
);
