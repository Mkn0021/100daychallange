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
        <SectionContent className="bg-accent flex w-full flex-col items-stretch gap-16 rounded-[45px] px-8 py-12 sm:px-15 sm:py-17.5 xl:flex-row">
            <Card>
                For a local restaurant, we implemented a targeted PPC campaign that resulted in a
                50% increase in website traffic and a 25% increase in sales.
            </Card>

            <div className="bg-secondary h-px xl:mx-8 xl:h-auto xl:w-px" />

            <Card>
                For a B2B software company, we developed an SEO strategy that resulted in a first
                page ranking for key keywords and a 200% increase in organic traffic.
            </Card>

            <div className="bg-secondary h-px xl:mx-8 xl:h-auto xl:w-px" />

            <Card>
                For a national retail chain, we created a social media marketing campaign that
                increased followers by 25% and generated a 20% increase in online sales.
            </Card>
        </SectionContent>
    </Section>
);

const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="flex w-full flex-col items-start gap-5 text-base text-white sm:text-[1.12rem] xl:max-w-75">
        <p>{children}</p>
        <Link
            href="#"
            className="text-primary hover:text-primary/80 flex items-center gap-4 text-[1.12rem] sm:text-xl"
        >
            Learn More
            <ArrowIcon />
        </Link>
    </div>
);
