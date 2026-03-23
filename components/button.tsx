import { cn } from "@/lib/utils"

export const Button = ({ className, variant = 'secondary', children }: {
    className?: string,
    variant?: 'primary' | 'secondary' | 'outline',
    children: React.ReactNode
}) => {
    return (
        <button className={cn(
            "rounded-[14px] text-[20px] py-3 px-5 transition-colors duration-300",
            variant === 'primary' && "bg-primary hover:bg-primary/80 text-black",
            variant === 'secondary' && "bg-accent hover:bg-accent/80 text-white",
            variant === 'outline' && "border border-accent hover:border-accent/80 text-accent",
            className
        )} data-variant={variant}>
            {children}
        </button>
    )
}
