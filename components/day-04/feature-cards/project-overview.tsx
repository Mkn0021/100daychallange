import { DiamondPlus, CheckCircle2, Clock, AlertCircle, Zap, TrendingUp } from "lucide-react";
import React from "react";

const items = [
    {
        name: "Completed",
        status: "Done",
        icon: <CheckCircle2 size={12} className="text-green-700" />,
        value: "12 Finished",
        className: "bg-green-50 border-green-200",
    },
    {
        name: "Project Status",
        status: "In Progress",
        icon: <DiamondPlus size={12} className="text-yellow-700" />,
        value: "5 Tasks Due",
        className: "bg-yellow-50 border-yellow-200",
    },
    {
        name: "Blocked Issues",
        status: "Attention",
        icon: <AlertCircle size={12} className="text-red-700" />,
        value: "3 Blocked",
        className: "bg-red-50 border-red-200",
    },
    {
        name: "Performance",
        status: "Optimized",
        icon: <Zap size={12} className="text-orange-700" />,
        value: "8 Optimized",
        className: "bg-orange-50 border-orange-200",
    },
];

export const ProjectOverview = () => (
    <div className="h-full w-[120%] px-6 py-4">
        <h4 className="text-foreground text-lg font-semibold">Project Overview</h4>
        <div className="mt-6 grid grid-cols-3 gap-y-4">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <h5 className="text-foreground/80 text-sm">{item.name}</h5>
                    <div
                        className={`flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs ${item.className}`}
                    >
                        {item.icon}
                        {item.status}
                    </div>
                    <p className="text-xs">{item.value}</p>
                </React.Fragment>
            ))}
        </div>
    </div>
);
