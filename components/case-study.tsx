import Link from "next/link";
import { ArrowIcon } from "./ui/icons";
import {
    Section,
    SectionContent,
    SectionHeader,
    SectionSubTitle,
    SectionTitle,
} from "./ui/section";

export const CaseStudy = () => (
    <Section>
        <SectionHeader>
            <SectionTitle>Case Study</SectionTitle>
            <SectionSubTitle>
                Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case
                Studies
            </SectionSubTitle>
        </SectionHeader>
        <SectionContent className="px-8 py-12 sm:py-17.5 sm:px-15 gap-16 rounded-[45px] bg-accent flex flex-col xl:flex-row items-stretch w-full">
            <Card>
                For a local restaurant, we implemented a targeted PPC campaign that resulted in a
                50% increase in website traffic and a 25% increase in sales.
            </Card>

            <div className="h-px xl:h-auto xl:w-px bg-secondary xl:mx-8" />

            <Card>
                For a B2B software company, we developed an SEO strategy that resulted in a first
                page ranking for key keywords and a 200% increase in organic traffic.
            </Card>

            <div className="h-px xl:h-auto xl:w-px bg-secondary xl:mx-8" />

            <Card>
                For a national retail chain, we created a social media marketing campaign that
                increased followers by 25% and generated a 20% increase in online sales.
            </Card>
        </SectionContent>
    </Section>
);

const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="xl:max-w-75 text-white text-[16px] sm:text-[18px] flex flex-col items-start gap-5 w-full">
        <p>{children}</p>
        <Link
            href="#"
            className="sm:text-[20px] text-[18px] text-primary hover:text-primary/80 flex items-center gap-4"
        >
            Learn More
            <ArrowIcon />
        </Link>
    </div>
);
