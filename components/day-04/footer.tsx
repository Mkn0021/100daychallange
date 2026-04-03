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
    <Section as="footer" className="mt-22.5">
        <SectionHeader className="gap-4 text-center">
            <SectionTitle>Start your free trial today</SectionTitle>
            <SectionSubTitle variant="secondary" className="text-[21px] leading-[115%]">
                Mainline is the fit-for-purpose tool for planning and building modern software
                products.
            </SectionSubTitle>
            <Button>
                Get Started <DashedCircleIcon />
            </Button>
        </SectionHeader>
        <div className="mx-auto mt-18 flex max-w-2xl items-center justify-center gap-5.75 px-13.75">
            {footerLinks.map((link) => (
                <Link
                    key={link.title}
                    href={link.href}
                    className="text-foreground text-[15px] font-medium hover:underline hover:underline-offset-4"
                >
                    {link.title}
                </Link>
            ))}
        </div>

        <div className="mt-10 w-full md:mt-14 lg:mt-20">
            <FooterLogoIcon />
        </div>
    </Section>
);
