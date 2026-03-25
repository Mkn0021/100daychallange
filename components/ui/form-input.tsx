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
    <label className="flex items-center gap-2 text-[16px] sm:text-[18px]">
        <input
            type="radio"
            {...props}
            className={cn(
                "ring-accent before:bg-primary grid size-7 appearance-none place-content-center rounded-full border-2 border-white bg-white ring-1 before:size-3 before:scale-0 before:rounded-full before:transition-transform before:content-[''] checked:before:scale-100 focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:outline-none",
                className
            )}
        />
        {label}
    </label>
);

export const FormInput = ({
    label,
    className,
    id,
    name,
    type = "text",
    ...props
}: ComponentPropsWithoutRef<"input"> & {
    label?: ReactNode;
    className?: string;
}) => (
    <div className="flex flex-col gap-1.25">
        {label ? (
            <label htmlFor={id ?? name} className="text-[16px]">
                {label}
            </label>
        ) : null}
        <input
            {...props}
            id={id}
            name={name}
            type={type}
            className={cn(
                "border-accent rounded-[14px] border bg-white px-7.5 py-4.5 focus-visible:ring-1 focus-visible:ring-black focus-visible:outline-none",
                className
            )}
        />
    </div>
);

export const TextArea = ({
    label,
    className,
    id,
    name,
    rows = 3,
    ...props
}: Omit<ComponentPropsWithoutRef<"textarea">, "children"> & {
    label?: ReactNode;
    className?: string;
}) => (
    <div className="flex flex-col gap-1.25">
        {label ? (
            <label htmlFor={id ?? name} className="text-[16px]">
                {label}
            </label>
        ) : null}
        <textarea
            {...props}
            id={id}
            name={name}
            rows={rows}
            className={cn(
                "border-accent rounded-[14px] border bg-white px-7.5 py-4.5 focus-visible:ring-1 focus-visible:ring-black focus-visible:outline-none",
                className
            )}
        />
    </div>
);
