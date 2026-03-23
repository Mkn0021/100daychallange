import { cn } from "@/lib/utils";

interface SectionProps {
    className?: string;
    children: React.ReactNode;
}

export const Section = ({ className, children }: SectionProps) => (
    <section className={cn("w-full mt-17.5 px-25", className)}>
        {children}
    </section>
);

export const SectionHeader = ({ className, children }: SectionProps) => (
    <div className={cn("flex mt-17.5 gap-10", className)}>
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
    <div className={cn("mt-20", className)}>
        {children}
    </div>
)