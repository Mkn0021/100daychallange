import { cn } from "@/lib/utils";

interface SectionProps {
    className?: string;
    children: React.ReactNode;
}

export const Section = ({
    className,
    children,
    as,
}: SectionProps & {
    as?: "header" | "section" | "div" | "footer" | "nav";
}) => {
    const Component = as || "section";
    return (
        <Component className={cn("mx-auto w-full max-w-6xl px-7.5 xl:px-0", className)}>
            {children}
        </Component>
    );
};

export const SectionHeader = ({ className, children }: SectionProps) => (
    <div className={cn("flex flex-col items-center justify-between", className)}>{children}</div>
);

export const SectionTitle = ({
    className,
    children,
    as,
    variant = "primary",
}: SectionProps & {
    as?: "h2" | "h3" | "h4";
    variant?: "primary" | "secondary";
}) => {
    const Component = as || "h2";
    return (
        <Component
            className={cn(
                "text-foreground font-semibold tracking-tight",
                variant === "primary" && "text-[56px] leading-[98%]",
                variant === "secondary" && "text-[40px] leading-[110%]",
                className
            )}
            style={{ fontFamily: "var(--font-dm)" }}
        >
            {children}
        </Component>
    );
};

export const SectionSubTitle = ({
    className,
    children,
    variant = "primary",
}: SectionProps & {
    variant?: "primary" | "secondary";
}) => (
    <p
        className={cn(
            variant === "primary" && "max-w-xl text-4xl leading-none",
            variant === "secondary" && "max-w-md text-[17px] leading-[140%] font-medium",
            className
        )}
    >
        {children}
    </p>
);
