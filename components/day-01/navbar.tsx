import Logo from "./ui/logo";
import { Button } from "./ui/button";
import Link from "next/link";
import { Hamburgericon } from "./ui/icons";

const NavLinks = [
    { name: "About us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Use Cases", href: "#" },
    { name: "Pricing", href: "#" },
];

export const Navbar = () => (
    <nav className="mt-10 flex w-full items-center justify-between gap-10 px-8 py-2.5 sm:px-25">
        <Logo className="h-4.5 sm:h-6.5" />
        <div className="hidden items-center gap-4 text-[1.12rem] sm:text-xl lg:flex">
            {NavLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className="text-black transition-colors duration-300 hover:text-gray-700"
                >
                    {link.name}
                </Link>
            ))}
            <Button variant="outline">Request a quote</Button>
        </div>
        <Hamburgericon className="h-6.5 lg:hidden" />
    </nav>
);
