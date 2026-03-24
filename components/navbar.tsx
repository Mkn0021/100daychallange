import Logo from "./ui/logo";
import { Button } from "./ui/button";
import Link from "next/link";

const NavLinks = [
    { name: "About us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Use Cases", href: "#" },
    { name: "Pricing", href: "#" },
];

export const Navbar = () => (
    <nav className="w-full mt-10 flex items-center justify-between py-2.5 px-25">
        <Logo />
        <div className="flex items-center gap-10 text-[20px]">
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
    </nav>
);
