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
        <SectionContent className="py-17.5 px-15 gap-16 rounded-[45px] bg-accent flex items-stretch">
            <Card>
                For a local restaurant, we implemented a targeted PPC campaign that resulted in a
                50% increase in website traffic and a 25% increase in sales.
            </Card>

            <div className="w-px bg-secondary mx-8" />

            <Card>
                For a B2B software company, we developed an SEO strategy that resulted in a first
                page ranking for key keywords and a 200% increase in organic traffic.
            </Card>

            <div className="w-px bg-secondary mx-8" />

            <Card>
                For a national retail chain, we created a social media marketing campaign that
                increased followers by 25% and generated a 20% increase in online sales.
            </Card>
        </SectionContent>
    </Section>
);

const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="max-w-75 text-white text-[18px] flex flex-col items-start gap-5">
        <p>{children}</p>
        <Link
            href="#"
            className="text-[20px] text-primary hover:text-primary/80 flex items-center gap-4"
        >
            Learn More
            <ArrowIcon />
        </Link>
    </div>
);
