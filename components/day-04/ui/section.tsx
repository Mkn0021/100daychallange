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
}: SectionProps & {
    as?: "h2" | "h3" | "h4";
}) => {
    const Component = as || "h2";
    return (
        <Component
            className={cn(
                "text-foreground text-[56px] leading-[98%] font-semibold tracking-tight",
                className
            )}
            style={{ fontFamily: "var(--font-dm)" }}
        >
            {children}
        </Component>
    );
};

export const SectionSubTitle = ({ className, children }: SectionProps) => (
    <p className={cn("text-4xl leading-none", className)}>{children}</p>
);

export const Title = ({
    className,
    children,
    as,
}: SectionProps & {
    as?: "h2" | "h3" | "h4";
}) => {
    const Component = as || "h2";
    return (
        <Component
            className={cn(
                "text-foreground text-[27px] leading-[120%] font-bold tracking-tight",
                className
            )}
            style={{ fontFamily: "var(--font-dm)" }}
        >
            {children}
        </Component>
    );
};
