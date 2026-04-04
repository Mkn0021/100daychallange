import { CirclePlus, CircleX, Copy } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const states = [
    {
        name: "Accept",
        logo: CirclePlus,
        color: "text-green-700",
    },
    {
        name: "Mark as Duplicate",
        logo: Copy,
        color: "text-yellow-700",
    },
    {
        name: "Decline",
        logo: CircleX,
        color: "text-purple-700",
    },
];

export const ProductDeployment = () => (
    <div className="h-full w-[140%] px-6 py-4">
        <h4 className="text-foreground text-lg font-semibold">Triangle</h4>
        <div className="mt-5 rounded-lg border bg-white p-4 shadow">
            <p className="text-foreground/80 text-sm">
                A simple and effective way to manage your product deployment process.
            </p>
            <div className="mt-4 flex items-center gap-2">
                <Image
                    src="https://randomuser.me/api/portraits/men/8.jpg"
                    alt="User Avatar"
                    width={20}
                    height={20}
                    className="rounded-full"
                />
                <p className="text-foreground text-xs">John Doe</p>
            </div>
        </div>
        <div className="mt-4 flex gap-2">
            {states.map((state) => (
                <Button variant="outline" size="sm" key={state.name}>
                    <state.logo className={`${state.color} h-4 w-4`} />
                    {state.name}
                </Button>
            ))}
        </div>
    </div>
);
