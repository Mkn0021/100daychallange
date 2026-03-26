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
        <Component className={cn("mt-25 w-full px-8 sm:mt-27.5 sm:px-25", className)}>
            {children}
        </Component>
    );
};

export const SectionHeader = ({ className, children }: SectionProps) => (
    <div className={cn("flex flex-col items-center gap-5", className)}>{children}</div>
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
                "text-center text-[44px] leading-tight font-bold tracking-tight sm:text-[60px]",
                className
            )}
        >
            {children}
        </Component>
    );
};

export const SectionSubTitle = ({ className, children }: SectionProps) => (
    <p className={cn("text-center text-[18px] font-light sm:text-[20px]", className)}>{children}</p>
);

export const SectionContent = ({ className, children }: SectionProps) => (
    <div className={cn("mt-17.5 sm:mt-20", className)}>{children}</div>
);

export const SectionCard = ({ className, children }: SectionProps) => (
    <div className={cn("bg-secondary rounded-[40px] px-8 py-10 xl:p-12.5", className)}>
        {children}
    </div>
);
