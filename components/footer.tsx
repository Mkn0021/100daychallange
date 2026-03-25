import Link from "next/link";
import Logo from "./ui/logo";
import { Button } from "./ui/button";
import { Section, SectionContent, SectionTitle } from "./ui/section";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "./ui/icons";

const FooterLinks = [
    {
        title: "About us",
        href: "#",
    },
    {
        title: "Services",
        href: "#",
    },
    {
        title: "Case Studies",
        href: "#",
    },
    {
        title: "Pricing",
        href: "#",
    },
    {
        title: "Blog",
        href: "#",
    },
];

export const Footer = () => (
    <Section as="footer" className="px-0! xl:px-25!">
        <SectionContent className="bg-accent px-8 pt-13.75 text-white sm:px-15 xl:rounded-t-[45px]">
            <div className="flex flex-col items-center justify-between gap-6.75 lg:flex-row">
                <Logo className="h-6.5" />
                <div className="flex flex-col items-center gap-6.75 text-[16px] underline underline-offset-4 sm:flex-row sm:text-[18px] md:gap-10">
                    {FooterLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-white transition-colors duration-300 hover:text-white/80"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
                <div className="hidden items-center gap-5 md:flex">
                    <LinkedinIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-10 py-12.5 lg:mt-11.5 lg:flex-row">
                <div className="flex flex-col items-center gap-6.75 text-[16px] sm:text-[18px] lg:items-start">
                    <SectionTitle className="text-accent w-fit text-[18px] sm:text-[20px]">
                        Contact us:
                    </SectionTitle>
                    <p>Email: info@positivus.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p className="text-center lg:text-left">
                        Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
                    </p>
                </div>
                <div className="flex w-full flex-col items-center justify-between gap-5 rounded-[14px] bg-[rgb(41,42,50)] px-8 py-12 sm:px-10 sm:py-14.5 lg:w-auto lg:flex-row">
                    <input
                        placeholder="Email"
                        type="email"
                        className="w-full rounded-[14px] border border-white px-5 py-4 placeholder-white lg:w-auto lg:px-8.75 lg:py-5.5"
                    />
                    <Button
                        variant="primary"
                        type="submit"
                        className="w-full lg:w-auto lg:px-8.75 lg:py-5"
                    >
                        Subscribe
                    </Button>
                </div>
                <div className="flex items-center gap-5 md:hidden">
                    <LinkedinIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                </div>
            </div>
            <p className="flex w-full flex-col items-center gap-2 border-t py-12.5 md:flex-row md:gap-10">
                &copy; {new Date().getFullYear()} Positivus. All rights reserved.
                <span className="underline">Privacy Policy</span>
            </p>
        </SectionContent>
    </Section>
);
