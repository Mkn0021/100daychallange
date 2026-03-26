import Link from "next/link";
import { Logo } from "./ui/logo";
import { Button } from "./ui/button";
import { PauseIcon, StarIcon } from "./ui/icons";
import { cn } from "@/lib/utils";
import { MobilePreview } from "./ui/mobile";
import Image from "next/image";

const NavLinks = [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Login", href: "#" },
    { label: "Sign Up", href: "#" },
];

export const HeroSection = () => (
    <Container>
        <Navbar />
        <main className="flex max-w-2xl flex-col items-center text-center">
            <h1 className="mt-30 text-[48px] leading-tight font-medium sm:text-[60px]">
                Build Better Habits, One Day at a Time
            </h1>
            <p className="mt-7.5 text-[18px] sm:text-[22px]">
                Track your daily routines, stay consistent, and turn goals into habits — all in one
                beautiful app.
            </p>
            <div className="mt-12.5 flex gap-5">
                <Button variant="secondary" className="bg-white hover:bg-white/80">
                    Get Started Free
                </Button>
                <Button variant="outline" className="flex items-center gap-3.75">
                    <PauseIcon /> Watch Demo
                </Button>
            </div>
        </main>
        <Banner className="mt-30">Loved by 1M+ users worldwide</Banner>
    </Container>
);

const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full max-w-screen p-7.5 text-white">
        <div className="bg-primary relative flex flex-col items-center justify-between overflow-hidden rounded-[40px] p-12.5">
            {children}
            <MobilePreviewGroup />
            <BubbleGroup />
        </div>
    </div>
);

const Navbar = () => (
    <nav className="flex w-full items-center justify-between gap-10">
        <Logo className="h-9" />
        <div className="flex gap-7.5">
            {NavLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-[18px] text-white">
                    {link.label}
                </Link>
            ))}
        </div>
        <Button variant="secondary" className="flex h-10 items-center bg-white hover:bg-white/80">
            Log In
        </Button>
    </nav>
);

const Banner = ({ className, children }: { className?: string; children: React.ReactNode }) => (
    <div className={cn("bg-accent flex items-center gap-2 rounded-full px-4 py-2.5", className)}>
        <StarIcon />
        {children}
    </div>
);

const MobilePreviewGroup = () => (
    <>
        <MobilePreview className="absolute -bottom-71 left-37 w-55 rotate-5 transform">
            <Image
                src="/day-02/review-3.png"
                alt="App Preview"
                width={200}
                height={400}
                loading="eager"
            />
        </MobilePreview>
        <MobilePreview className="absolute -bottom-54 left-4 w-55 -rotate-19 transform">
            <Image
                src="/day-02/review-2.png"
                alt="App Preview"
                width={200}
                height={400}
                loading="eager"
            />
        </MobilePreview>
        <MobilePreview className="absolute -right-4 -bottom-47 w-55 -rotate-15 transform">
            <Image
                src="/day-02/review-4.png"
                alt="App Preview"
                width={200}
                height={400}
                loading="eager"
            />
        </MobilePreview>
        <MobilePreview className="absolute right-29 -bottom-81 w-55 rotate-14 transform">
            <Image
                src="/day-02/review-1.png"
                alt="App Preview"
                width={200}
                height={400}
                loading="eager"
            />
        </MobilePreview>
    </>
);

const BubbleGroup = () => (
    <>
        <Bubble className="top-65 left-33" />
        <Bubble className="top-101 left-70 bg-(--red)" />
        <Bubble className="top-114 left-73 bg-(--blue)" />
        <Bubble className="right-117 bottom-26 bg-(--blue)" />
        <Bubble className="bg-accent top-98 right-60" />
        <Bubble className="top-65 right-51 bg-(--purple)" />
    </>
);

const Bubble = ({ className }: { className?: string }) => (
    <div
        className={cn(
            "bg-secondary pointer-events-none absolute aspect-square h-18 rounded-full",
            className
        )}
    />
);
