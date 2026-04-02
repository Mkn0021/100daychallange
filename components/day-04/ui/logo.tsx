import { cn } from "@/lib/utils";
import { LogoIcon } from "./icons";

export const Logo = ({ className }: { className?: string }) => (
    <div
        className={cn("flex items-center gap-1.25 text-[18px] font-semibold", className)}
        style={{ fontFamily: "var(--font-dm)" }}
    >
        <LogoIcon />
        Mainline
    </div>
);
