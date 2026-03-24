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
    <nav className="w-full mt-10 gap-10 flex items-center justify-between py-2.5 px-8 sm:px-25">
        <Logo className="h-4.5 sm:h-6.5" />
        <div className="hidden lg:flex items-center gap-4 sm:text-[20px] text-[18px]">
            {NavLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className="text-black hover:text-gray-700 transition-colors duration-300"
                >
                    {link.name}
                </Link>
            ))}
            <Button variant="outline">Request a quote</Button>
        </div>
        <Hamburgericon className="lg:hidden h-6.5" />
    </nav>
);
