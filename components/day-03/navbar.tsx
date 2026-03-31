import Link from "next/link";
import { Section } from "./ui/section";
import { Button } from "./ui/button";

const NavLinks = [
    {
        title: "Schedule",
        href: "#",
    },
    {
        title: "Speakers",
        href: "#",
    },
    {
        title: "Tickets",
        href: "#",
    },
    {
        title: "Venue",
        href: "#",
    },
    {
        title: "Sponsors",
        href: "#",
    },
];

export const Navbar = () => (
    <Section as="nav" className="mt-10 flex items-center justify-between sm:mt-10 md:mt-10">
        <Logo />
        <div className="flex items-center gap-4 xl:gap-7">
            <Button variant="outline" className="h-11 md:h-14 xl:h-16">
                Home
            </Button>
            {NavLinks.map((link) => (
                <Link
                    key={link.title}
                    href={link.href}
                    className="hidden text-xl font-medium lg:block xl:text-[1.56rem]"
                >
                    {link.title}
                </Link>
            ))}
        </div>
    </Section>
);

const Logo = () => <p className="text-[1.88rem] font-bold md:text-[3.12rem]">nexus</p>;
