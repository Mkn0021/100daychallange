import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Logo } from "./ui/logo";
import { Section, SectionContent } from "./ui/section";

export const Footer = () => (
    <Section as="footer">
        <SectionContent className="bg-accent relative mb-25 flex items-center justify-between rounded-[40px] px-12.5 pt-17.5 pb-32">
            <div className="max-w-[30%]">
                <Logo className="h-10 w-auto text-white" />
                <p className="mt-7.5 text-left text-[16px] text-(--dark-grey)">
                    Track your daily routines, stay consistent, and turn goals into habits — all in
                    one beautiful app.
                </p>
            </div>
            <FooterSection title="Product">
                <p>Features</p>
                <p>Pricing</p>
                <p>Reviews</p>
            </FooterSection>
            <FooterSection title="Resources">
                <p>Company</p>
                <p>Careers</p>
                <p>Contact</p>
            </FooterSection>
            <FooterSection title="Newsletter">
                <p>Get tips & updates in your inbox</p>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-10.5 rounded-full border border-[#374151] bg-[#1F2937] px-6.5"
                />
                <Button
                    variant="primary"
                    className="flex h-10.5 w-full items-center justify-center px-6.5 text-white!"
                >
                    Subscribe
                </Button>
            </FooterSection>
            <p className="absolute inset-x-0 bottom-0 mx-auto flex w-full items-center justify-center border-t border-[#1F2937] py-7.5 text-[#6B7280]">
                &copy; {new Date().getFullYear()} Habitus. All rights reserved.
            </p>
        </SectionContent>
    </Section>
);

const FooterSection = ({
    title,
    children,
    className,
}: {
    title: string;
    children: React.ReactNode;
    className?: string;
}) => (
    <div
        className={cn(
            "flex flex-col items-start justify-between gap-4 *:text-left *:text-(--dark-grey)",
            className
        )}
    >
        <h3 className="mb-2.5 text-[16px] font-semibold text-white!">{title}</h3>
        {children}
    </div>
);
