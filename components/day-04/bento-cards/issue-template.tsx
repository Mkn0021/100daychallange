import { Bot, CirclePlus, CornerDownLeft, X } from "lucide-react";
import { Button } from "../ui/button";
import { Switch } from "@/components/ui/switch";

export const IssueTemplate = () => (
    <div className="relative mx-5 my-12.5 flex flex-col gap-5 rounded-lg border bg-white/80 px-6 py-2 shadow-sm">
        <h4 className="text-foreground py-4 text-lg font-semibold">
            Make your own templates or use ours to get started faster.
        </h4>
        <div className="flex gap-2">
            <Button variant="outline" size="sm">
                <CirclePlus /> Add source
            </Button>
            <Button variant="outline" size="sm">
                <Bot /> AI Writer
            </Button>
        </div>
        <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <Switch /> Create more
            </div>
            <Button>
                Save Template <CornerDownLeft />
            </Button>
        </div>
        <div className="bg-border border-muted-foreground absolute inset-x-0 bottom-12.5 h-px w-full" />
        <X className="absolute top-4 right-4" />
    </div>
);
