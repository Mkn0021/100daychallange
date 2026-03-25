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
    as?: "header" | "section" | "div" | "footer";
}) => {
    const Component = as || "section";
    return (
        <Component className={cn("mt-15 w-full px-8 sm:mt-17.5 sm:px-25", className)}>
            {children}
        </Component>
    );
};

export const SectionHeader = ({ className, children }: SectionProps) => (
    <div
        className={cn(
            "mt-15 mb-17.5 flex flex-col items-center gap-10 sm:mt-17.5 sm:mb-20 lg:flex-row",
            className
        )}
    >
        {children}
    </div>
);

export const SectionTitle = ({
    className,
    children,
    as,
    variant = "secondary",
}: SectionProps & {
    as?: "h2" | "h3" | "h4";
    variant?: "primary" | "accent" | "secondary";
}) => {
    const Component = as || "h2";
    return (
        <Component
            className={cn(
                "text-center text-[36px] leading-snug font-medium sm:text-[40px]",
                className
            )}
        >
            <span
                className={cn(
                    "rounded-[7px] px-1.5",
                    "[box-decoration-break:clone] [-webkit-box-decoration-break:clone]",
                    variant === "secondary" ? "bg-primary" : "bg-secondary"
                )}
            >
                {children}
            </span>
        </Component>
    );
};

export const SectionSubTitle = ({ className, children }: SectionProps) => (
    <p
        className={cn(
            "max-w-md text-center text-[16px] text-black sm:text-[18px] lg:text-left",
            className
        )}
    >
        {children}
    </p>
);

export const SectionContent = ({ className, children }: SectionProps) => (
    <div className={className}>{children}</div>
);

export const SectionCard = ({
    variant = "primary",
    children,
    className,
}: SectionProps & {
    variant?: "primary" | "accent" | "secondary";
}) => (
    <div
        className={cn(
            "border-accent flex justify-between rounded-[45px] border px-8 py-12 shadow-[0_5px_0_0_rgba(25,26,35,1)] sm:p-12.5",
            variant === "primary" && "bg-primary",
            variant === "accent" && "bg-accent",
            variant === "secondary" && "bg-secondary",
            className
        )}
    >
        {children}
    </div>
);
