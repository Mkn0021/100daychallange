import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export const Button = ({
    className,
    variant = "secondary",
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "outline";
    children: ReactNode;
}) => {
    return (
        <button
            {...props}
            className={cn(
                "rounded-[14px] px-5 py-3 text-[1.12rem] transition-colors duration-300 sm:text-xl",
                variant === "primary" && "bg-primary hover:bg-primary/80 text-black",
                variant === "secondary" && "bg-accent hover:bg-accent/80 text-white",
                variant === "outline" && "border-accent hover:border-accent/80 text-accent border",
                className
            )}
            data-variant={variant}
        >
            {children}
        </button>
    );
};
