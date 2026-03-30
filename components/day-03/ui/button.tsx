import { cn } from "@/lib/utils";
import { LinkArrow } from "./icons";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export const Button = ({
    className,
    variant = "secondary",
    link = false,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "outline";
    link?: boolean;
    children: ReactNode;
}) => {
    return (
        <button
            {...props}
            className={cn(
                "flex h-18.5 items-center justify-center gap-5 rounded-[100px] px-10 text-[20px] transition-colors duration-300 sm:text-[25px]",
                variant === "primary" &&
                    "bg-[linear-gradient(84.82deg,#0147FF_15.74%,rgba(1,71,255,0)_204.53%)] text-white",
                variant === "secondary" && "bg-secondary hover:bg-secondary/80 text-accent",
                variant === "outline" && "border border-white text-white hover:border-white/80",
                className
            )}
            data-variant={variant}
        >
            {children}
            {link && <LinkArrow className="h-4.25" />}
        </button>
    );
};
