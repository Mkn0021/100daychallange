import { cn } from "@/lib/utils";

interface SectionProps {
    className?: string;
    children: React.ReactNode;
}

export const Section = ({ className, children, as }: SectionProps & {
    as?: "header" | "section" | "div" | "footer";
}) => {
    const Component = as || "section";
    return (
        <Component className={cn("w-full mt-17.5 px-25", className)}>
            {children}
        </Component>
    );
};

export const SectionHeader = ({ className, children }: SectionProps) => (
    <div className={cn("flex mt-17.5 mb-20 gap-10", className)}>
        {children}
    </div>
)

export const SectionTitle = ({ className, children }: SectionProps) => (
    <h2 className={cn("text-[40px] font-medium px-1.75 rounded-[7px] bg-primary", className)}>
        {children}
    </h2>
)

export const SectionSubTitle = ({ className, children }: SectionProps) => (
    <p className={cn("text-[18px] text-black max-w-xl", className)}>
        {children}
    </p>
)

export const SectionContent = ({ className, children }: SectionProps) => (
    <div className={className}>
        {children}
    </div>
)

export const SectionCard = ({ variant, children, className }: SectionProps & {
    variant: 'primary' | 'accent' | 'secondary';
}) => (
    <div className={cn(
        "flex justify-between rounded-[45px] border border-accent p-12.5 shadow-[0_5px_0_0_rgba(25,26,35,1)]",
        variant === 'primary' && "bg-primary",
        variant === 'accent' && "bg-accent",
        variant === 'secondary' && "bg-secondary",
        className
    )}>
        {children}
    </div>
);