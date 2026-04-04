import { Bot, CirclePlus, CornerDownLeft, X } from "lucide-react";
import { Button } from "../ui/button";
import { Switch } from "@/components/ui/switch";

export const IssueTemplate = () => (
    <div className="relative my-12.5 flex flex-col gap-5 rounded-lg border bg-white/80 px-6 py-2 shadow-sm md:mx-5">
        <h4 className="text-foreground py-4 text-base font-semibold md:text-lg">
            Make your own templates or use ours to get started faster.
        </h4>
        <div className="flex gap-2">
            <Button variant="outline" size="xs" className="md:h-8 md:text-sm">
                <CirclePlus /> Add source
            </Button>
            <Button variant="outline" size="xs" className="md:h-8 md:text-sm">
                <Bot /> AI Writer
            </Button>
        </div>
        <div className="flex justify-between">
            <div className="flex items-center gap-2 text-xs md:text-sm">
                <Switch defaultChecked size="sm" className="md:h-[18.4px] md:w-8" /> Create more
            </div>
            <Button size="sm" className="md:h-9 md:px-4 md:text-sm">
                Save Template <CornerDownLeft />
            </Button>
        </div>
        <div className="bg-border border-muted-foreground absolute inset-x-0 bottom-12.5 h-px w-full" />
        <X className="absolute top-4 right-4" />
    </div>
);
