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
                "flex h-9 w-fit items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm leading-6 font-medium transition-colors duration-300",
                variant === "primary" && "bg-primary text-primary-foreground",
                variant === "secondary" && "bg-secondary hover:bg-secondary/80",
                variant === "outline" &&
                    "border border-(--border) bg-white shadow-sm hover:bg-white/80",
                className
            )}
            data-variant={variant}
        >
            {children}
        </button>
    );
};
