import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export const CheckBox = ({
    label,
    className,
    ...props
}: Omit<ComponentPropsWithoutRef<"input">, "type"> & {
    label: ReactNode;
    className?: string;
}) => (
    <label className="flex items-center gap-2 text-[18px]">
        <input
            type="radio"
            {...props}
            className={cn(
                "size-7 appearance-none rounded-full border-2 border-white ring-1 ring-accent bg-white grid place-content-center before:content-[''] before:size-3 before:rounded-full before:bg-primary before:scale-0 before:transition-transform checked:before:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30",
                className
            )}
        />
        {label}
    </label>
)

export const FormInput = ({ label, className, id, name, type = "text", ...props }: ComponentPropsWithoutRef<"input"> & {
    label?: ReactNode;
    className?: string;
}) => (
    <div className="flex flex-col gap-1.25">
        {label ? <label htmlFor={id ?? name} className="text-[16px]">{label}</label> : null}
        <input
            {...props}
            id={id}
            name={name}
            type={type}
            className={cn("border border-accent rounded-[14px] bg-white px-7.5 py-4.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black", className)}
        />
    </div>
)

export const TextArea = ({ label, className, id, name, rows = 3, ...props }: Omit<ComponentPropsWithoutRef<"textarea">, "children"> & {
    label?: ReactNode;
    className?: string;
}) => (
    <div className="flex flex-col gap-1.25">
        {label ? <label htmlFor={id ?? name} className="text-[16px]">{label}</label> : null}
        <textarea
            {...props}
            id={id}
            name={name}
            rows={rows}
            className={cn("border border-accent rounded-[14px] bg-white px-7.5 py-4.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black", className)}
        />
    </div>
)