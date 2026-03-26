import { cn } from "@/lib/utils";

export const MobilePreview = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => (
    <div
        className={cn(
            "border-accent w-fit overflow-hidden rounded-[20px] border-7 bg-white *:w-full *:object-cover",
            className
        )}
    >
        {children}
    </div>
);
