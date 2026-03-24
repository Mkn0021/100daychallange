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
        <Component className={cn("w-full mt-15 sm:mt-17.5 px-8 sm:px-25", className)}>
            {children}
        </Component>
    );
};

export const SectionHeader = ({ className, children }: SectionProps) => (
    <div
        className={cn(
            "flex flex-col items-center lg:flex-row mt-15 sm:mt-17.5 mb-17.5 sm:mb-20 gap-10",
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
                "sm:text-[40px] text-[36px] text-center font-medium leading-snug",
                className
            )}
        >
            <span
                className={cn(
                    "px-1.5 rounded-[7px]",
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
            "text-[16px] sm:text-[18px] text-black lg:text-left text-center max-w-xl",
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
            "flex justify-between rounded-[45px] border border-accent px-8 py-12 sm:p-12.5 shadow-[0_5px_0_0_rgba(25,26,35,1)]",
            variant === "primary" && "bg-primary",
            variant === "accent" && "bg-accent",
            variant === "secondary" && "bg-secondary",
            className
        )}
    >
        {children}
    </div>
);
