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
    <Section as="footer" className="px-0! lg:px-25!">
        <SectionContent className="bg-accent lg:rounded-t-[45px] pt-13.75 px-8 sm:px-15 text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6.75">
                <Logo />
                <div className="flex flex-col sm:flex-row gap-6.75 md:gap-10 text-[16px]  sm:text-[18px] underline underline-offset-4 items-center">
                    {FooterLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-white hover:text-white/80 transition-colors duration-300"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
                <div className="hidden md:flex gap-5 items-center">
                    <LinkedinIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between py-12.5 lg:mt-11.5 gap-10">
                <div className="flex flex-col gap-6.75 text-[16px]  sm:text-[18px] items-center lg:items-start">
                    <SectionTitle className="sm:text-[20px] text-[18px] text-accent w-fit">
                        Contact us:
                    </SectionTitle>
                    <p>Email: info@positivus.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p className="text-center lg:text-left">
                        Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row  w-full lg:w-auto items-center justify-between gap-5 px-8 py-12 sm:px-10 sm:py-14.5 rounded-[14px] bg-[rgb(41,42,50)]">
                    <input
                        placeholder="Email"
                        type="email"
                        className="border border-white placeholder-white py-4 px-5 w-full lg:w-auto lg:py-5.5 lg:px-8.75 rounded-[14px]"
                    />
                    <Button
                        variant="primary"
                        type="submit"
                        className="lg:py-5 lg:px-8.75 w-full lg:w-auto"
                    >
                        Subscribe
                    </Button>
                </div>
                <div className="md:hidden flex gap-5 items-center">
                    <LinkedinIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                </div>
            </div>
            <p className="flex flex-col md:flex-row gap-2 md:gap-10 py-12.5 border-t w-full items-center">
                &copy; {new Date().getFullYear()} Positivus. All rights reserved.
                <span className="underline">Privacy Policy</span>
            </p>
        </SectionContent>
    </Section>
);
