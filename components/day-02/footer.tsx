import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Logo } from "./ui/logo";
import { Section, SectionContent } from "./ui/section";

export const Footer = () => (
    <Section as="footer" className="px-2 sm:px-8 lg:px-25">
        <SectionContent className="bg-accent mb-2 grid grid-cols-1 gap-7 rounded-[20px] p-8 pt-17.5 pb-7.5 sm:grid-cols-6 sm:gap-0 sm:rounded-[40px] sm:px-12.5 lg:mb-25">
            <div className="max-w-84 sm:col-span-4 lg:col-span-2">
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

            <FooterSection
                title="Newsletter"
                className="w-full sm:col-span-6 lg:col-span-2 lg:mt-auto lg:w-auto [&>h3]:hidden lg:[&>h3]:block"
            >
                <p>Get tips & updates in your inbox</p>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-10.5 w-full rounded-full border border-[#374151] bg-[#1F2937] px-6.5"
                />
                <Button
                    variant="primary"
                    className="flex h-10.5 w-full items-center justify-center px-6.5 text-white!"
                >
                    Subscribe
                </Button>
            </FooterSection>
            <p className="flex w-full items-center justify-center border-t border-[#1F2937] pt-7.5 text-[#6B7280] sm:col-span-6">
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
            "mb-10 flex flex-col items-start justify-between gap-4 *:text-left *:text-(--dark-grey) [&>h3]:text-white",
            className
        )}
    >
        <h3 className="mb-4.5 text-[16px] font-semibold">{title}</h3>
        {children}
    </div>
);
