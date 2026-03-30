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
        <Component className={cn("mt-35 w-full px-8 sm:mt-37.5 lg:px-25", className)}>
            {children}
        </Component>
    );
};

export const SectionHeader = ({ className, children }: SectionProps) => (
    <div className={cn("flex items-center justify-between gap-21.25", className)}>{children}</div>
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
                "text-left text-[60px] leading-none font-bold tracking-tight sm:text-[100px]",
                className
            )}
        >
            {children}
        </Component>
    );
};

export const SectionSubTitle = ({ className, children }: SectionProps) => (
    <p className={cn("max-w-73.75 text-center text-[18px] sm:text-[20px]", className)}>
        {children}
    </p>
);

export const SectionContent = ({ className, children }: SectionProps) => (
    <div className={cn("mt-27.5 sm:mt-20", className)}>{children}</div>
);

export const SectionCard = ({
    className,
    children,
    variant = "primary",
}: SectionProps & {
    variant?: "primary" | "secondary" | "accent" | "outline";
}) => (
    <div
        className={cn(
            "rounded-[50px] px-15 py-17.5 text-white",
            variant === "primary" && "bg-primary",
            variant === "secondary" && "bg-secondary text-accent",
            variant === "accent" && "bg-accent",
            variant === "outline" && "border border-white",
            className
        )}
    >
        {children}
    </div>
);
