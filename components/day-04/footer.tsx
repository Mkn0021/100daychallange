import Link from "next/link";
import { Button } from "./ui/button";
import { DashedCircleIcon, FooterLogoIcon } from "./ui/icons";
import { Section, SectionHeader, SectionSubTitle, SectionTitle } from "./ui/section";

const footerLinks = [
    {
        title: "Product",
        href: "#",
    },
    {
        title: "Pricing",
        href: "#",
    },
    {
        title: "About Us",
        href: "#",
    },
    {
        title: "FAQs",
        href: "#",
    },
    {
        title: "Contact",
        href: "#",
    },
    {
        title: "Xwitter",
        href: "#",
    },
    {
        title: "LinkedIn",
        href: "#",
    },
];

export const Footer = () => (
    <footer className="relative">
        <Section as="div">
            <SectionHeader className="text-center">
                <SectionTitle>Start your free trial today</SectionTitle>
                <SectionSubTitle variant="secondary" className="text-xl leading-tight">
                    Mainline is the fit-for-purpose tool for planning and building modern software
                    products.
                </SectionSubTitle>
                <Button className="mt-8">
                    Get Started <DashedCircleIcon />
                </Button>
            </SectionHeader>
            <div className="mx-auto my-12.5 flex max-w-2xl flex-wrap justify-center gap-x-5 gap-y-6">
                {footerLinks.map((link) => (
                    <Link
                        key={link.title}
                        href={link.href}
                        className="text-foreground text-base font-medium hover:underline hover:underline-offset-4"
                    >
                        {link.title}
                    </Link>
                ))}
            </div>
        </Section>
        <div className="mt-6.25 w-full px-2.5 md:px-3.75">
            <FooterLogoIcon />
        </div>
    </footer>
);
