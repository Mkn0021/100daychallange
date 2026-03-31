import Link from "next/link";
import { Section, SectionCard } from "./ui/section";
import { CardSubtitle } from "./overview-section";
import { Button } from "./ui/button";
import { SocialIcons } from "./contact-section";

const FooterItems = [
    {
        title: "Agenda",
        href: "#",
    },
    {
        title: "Speakers",
        href: "#",
    },
    {
        title: "Schedule",
        href: "#",
    },
    {
        title: "Venue",
        href: "#",
    },
    {
        title: "Register",
        href: "#",
    },
    {
        title: "Contact",
        href: "#",
    },
    {
        title: "FAQ",
        href: "#",
    },
    {
        title: "Partners",
        href: "#",
    },
];

export const Footer = () => (
    <Section className="my-25 sm:my-25" as="footer">
        <SectionCard variant="secondary" className="grid grid-cols-1 p-0 xl:grid-cols-2">
            <LeftColumn />
            <RightColumn />
        </SectionCard>
    </Section>
);

const LeftColumn = () => (
    <div className="flex flex-col justify-between px-15 py-17.5">
        <h3 className="text-[30px] font-bold">Next-Gen AI Summit 2052</h3>
        <div className="mt-10 grid grid-cols-2 gap-3.75 text-[20px]">
            <div>
                {FooterItems.slice(0, 5).map((item) => (
                    <Link key={item.title} href={item.href} className="block hover:underline">
                        {item.title}
                    </Link>
                ))}
            </div>
            <div>
                {FooterItems.slice(5).map((item) => (
                    <Link key={item.title} href={item.href} className="block hover:underline">
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
        <p className="mt-19.25 text-[20px] text-[#7E7E7E]">
            &copy; 2052 Next-Gen AI Summit. All rights reserved.
        </p>
    </div>
);

const RightColumn = () => (
    <SectionCard variant="primary">
        <h3 className="text-[26px] font-bold uppercase">Stay updated</h3>
        <CardSubtitle>Subscribe for event updates & exclusive content.</CardSubtitle>
        <input
            type="email"
            placeholder="Email"
            className="mt-10 w-full border-b-2 border-white pb-2 placeholder-white placeholder:text-[20px]"
        />
        <Button className="mt-8 mr-auto" variant="secondary">
            Stay updated
        </Button>
        <h4 className="mt-15 mb-2 text-[26px] font-bold uppercase">Follow us</h4>
        <SocialIcons />
    </SectionCard>
);
