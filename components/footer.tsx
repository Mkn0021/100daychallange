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
    <Section as="footer">
        <SectionContent className="bg-accent rounded-t-[45px] pt-13.75 px-15 text-white">
            <div className="flex items-center justify-between">
                <Logo />
                <div className="flex gap-10 text-[18px] underline underline-offset-4 items-center">
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
                <div className="flex gap-5 items-center">
                    <LinkedinIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                </div>
            </div>
            <div className="flex items-center justify-between py-12.5 mt-11.5">
                <div className="flex flex-col gap-6.75 text-[18px] items-start">
                    <SectionTitle className="text-[20px] text-accent w-fit">
                        Contact us:
                    </SectionTitle>
                    <p>Email: info@positivus.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>
                        Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
                    </p>
                </div>
                <div className="flex items-center justify-between gap-5 px-10 py-14.5 rounded-[14px] bg-[rgb(41,42,50)]">
                    <input
                        placeholder="Email"
                        type="email"
                        className="border border-white placeholder-white py-5.5 px-8.75 rounded-[14px]"
                    />
                    <Button variant="primary" type="submit" className="py-5 px-8.75">
                        Subscribe
                    </Button>
                </div>
            </div>
            <p className="py-12.5 border-t">
                &copy; {new Date().getFullYear()} Positivus. All rights reserved.
                <span className="ml-10 underline">Privacy Policy</span>
            </p>
        </SectionContent>
    </Section>
);
