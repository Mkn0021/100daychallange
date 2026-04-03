import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { type VariantProps } from "class-variance-authority";
import { Button as RootButton, buttonVariants as rootButtonVariants } from "@/components/ui/button";

type ButtonVariantsProps = VariantProps<typeof rootButtonVariants>;

const overrides: {
    variant?: Partial<Record<string, string>>;
    size?: Partial<Record<string, string>>;
} = {
    variant: {
        outline: "bg-neutral-50 text-foreground shadow-sm hover:bg-white/80",
    },
    size: {
        default: "px-4 w-fit",
    },
};

const buttonVariants = (props?: ButtonVariantsProps) =>
    cn(
        rootButtonVariants(props),
        overrides.variant?.[props?.variant ?? "default"],
        overrides.size?.[props?.size ?? "default"]
    );

const Button = ({ variant, size, className, ...props }: ComponentProps<typeof RootButton>) => (
    <RootButton
        variant={variant}
        size={size}
        className={cn(
            overrides.variant?.[variant ?? "default"],
            overrides.size?.[size ?? "default"],
            className
        )}
        {...props}
    />
);

export { Button, buttonVariants };
