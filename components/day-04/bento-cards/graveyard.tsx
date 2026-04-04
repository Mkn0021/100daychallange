import { DashedCircleIcon } from "../ui/icons";
import { Ellipsis, PackagePlus, Plus, TicketPlus } from "lucide-react";

const items = [
    {
        logo: PackagePlus,
        title: "Add a new package",
        description: "Drop in tools, assets, or modules to grow your workspace.",
        tags: ["Assets", "Toolkit"],
    },
    {
        logo: TicketPlus,
        title: "Create a new task",
        description: "Spin up fresh tasks, notes, or ideas in one click.",
        tags: ["Create", "Quick Start"],
    },
];

export const Graveyard = () => (
    <div className="border-muted-foreground/20 mx-6.25 mt-12.5 max-h-72 overflow-hidden rounded-t-lg border bg-yellow-50/50 px-2 py-4 shadow lg:mask-b-from-90%">
        <div className="flex items-center justify-between px-2">
            <h4 className="text-foreground flex items-center gap-2 text-lg">
                <DashedCircleIcon /> Graveyard
            </h4>
            <div className="flex gap-2">
                <Ellipsis />
                <Plus />
            </div>
        </div>
        <div className="mt-6.25 space-y-2">
            {items.map((item, index) => (
                <div key={index} className="flex items-start gap-2 rounded-lg border bg-white p-4">
                    <div className="flex size-6 items-center justify-center rounded-full bg-blue-600 p-1 text-white">
                        <item.logo />
                    </div>

                    <div className="flex flex-col items-start gap-1">
                        <h5 className="text-foreground text-sm font-medium">{item.title}</h5>
                        <p className="text-muted-foreground text-xs">{item.description}</p>
                        <div className="mt-4 flex gap-1">
                            {item.tags.map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className="rounded-sm border px-2 py-0.5 text-xs"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
