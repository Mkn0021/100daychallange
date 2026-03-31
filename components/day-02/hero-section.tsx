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
        <main className="z-10 flex max-w-2xl flex-col items-center text-center">
            <h1 className="mt-30 text-5xl leading-tight font-medium sm:text-6xl">
                Build Better Habits, One Day at a Time
            </h1>
            <p className="mt-7.5 text-[1.12rem] sm:text-[1.38rem]">
                Track your daily routines, stay consistent, and turn goals into habits — all in one
                beautiful app.
            </p>
            <div className="mt-12.5 flex w-full flex-col gap-5 sm:w-auto sm:flex-row">
                <Button variant="secondary" className="bg-white hover:bg-white/80">
                    Get Started Free
                </Button>
                <Button variant="outline" className="flex items-center justify-center gap-3.75">
                    <PauseIcon /> Watch Demo
                </Button>
            </div>
        </main>
        <Banner className="mt-50 lg:mt-30">Loved by 1M+ users worldwide</Banner>
    </Container>
);

const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full max-w-screen p-2 text-white sm:p-7.5">
        <div className="bg-primary relative flex flex-col items-center justify-between overflow-hidden rounded-[20px] p-8 sm:rounded-[40px] sm:p-12.5">
            {children}
            <MobilePreviewGroup />
            <BubbleGroup />
        </div>
    </div>
);

const Navbar = () => (
    <nav className="flex w-full items-center justify-between gap-10">
        <Logo className="h-9" />
        <div className="hidden gap-7.5 lg:flex">
            {NavLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-[1.12rem] text-white">
                    {link.label}
                </Link>
            ))}
        </div>
        <Button
            variant="secondary"
            className="hidden h-10 items-center bg-white hover:bg-white/80 sm:flex"
        >
            Log In
        </Button>
    </nav>
);

const Banner = ({ className, children }: { className?: string; children: React.ReactNode }) => (
    <div
        className={cn("bg-accent z-10 flex items-center gap-2 rounded-full px-4 py-2.5", className)}
    >
        <StarIcon />
        {children}
    </div>
);

const MobilePreviewGroup = () => (
    <>
        <MobilePreview className="absolute -bottom-71 left-37 hidden w-55 rotate-5 transform sm:block">
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
        <MobilePreview className="absolute -right-4 -bottom-47 hidden w-55 -rotate-15 transform sm:block">
            <Image
                src="/day-02/review-4.png"
                alt="App Preview"
                width={200}
                height={400}
                loading="eager"
            />
        </MobilePreview>
        <MobilePreview className="absolute right-29 -bottom-70 w-55 rotate-14 transform sm:-bottom-81">
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
        <Bubble className="top-12 left-1 md:top-40 md:left-12 lg:top-50 lg:left-20 xl:top-65 xl:left-33" />
        <Bubble className="top-80 left-2 bg-(--red) md:top-60 md:left-24 lg:top-80 lg:left-56 xl:top-101 xl:left-70" />
        <Bubble className="bottom-20 left-1 bg-(--blue) md:top-72 md:left-28 lg:top-92 lg:left-60 xl:top-114 xl:left-73" />
        <Bubble className="right-1 bottom-16 bg-(--blue) md:right-12 md:bottom-28 lg:right-40 lg:bottom-24 xl:right-117 xl:bottom-26" />
        <Bubble className="bg-accent top-44 right-2 md:top-56 md:right-20 lg:top-80 lg:right-40 xl:top-98 xl:right-60" />
        <Bubble className="right-1 bottom-40 bg-(--purple) md:top-40 md:right-16 lg:top-50 lg:right-35 xl:top-65 xl:right-51" />
    </>
);

const Bubble = ({ className }: { className?: string }) => (
    <div
        className={cn(
            "bg-secondary pointer-events-none absolute aspect-square h-12 rounded-full opacity-75 lg:h-18 xl:opacity-100",
            className
        )}
    />
);
