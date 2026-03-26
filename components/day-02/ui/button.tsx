import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export const Button = ({
    className,
    variant = "secondary",
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "outline" | "accent";
    children: ReactNode;
}) => {
    return (
        <button
            {...props}
            className={cn(
                "rounded-full px-10 py-[19.5px] text-[16px] leading-tight font-semibold transition-colors duration-300",
                variant === "primary" && "bg-primary hover:bg-primary/80 text-white",
                variant === "secondary" && "bg-secondary hover:bg-secondary/80 text-accent",
                variant === "accent" && "bg-accent hover:bg-accent/80 text-white",
                variant === "outline" &&
                    "border-secondary hover:border-secondary/80 border text-white",
                className
            )}
            data-variant={variant}
        >
            {children}
        </button>
    );
};
