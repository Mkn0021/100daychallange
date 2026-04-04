import Image from "next/image";

const items = [
    {
        name: "Mei Ling",
        timestamp: "2 hours ago",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
        message: "I think we should get a new template for the Q3 project.",
    },
    {
        name: "Carlos Ramirez",
        timestamp: "5 hours ago",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
        message: "Can we automate the weekly report generation? It takes a lot of time.",
    },
];

export const TaskDiscussion = () => (
    <div className="relative h-full min-h-72 w-full py-6.25">
        {items.map((item, index) => (
            <div
                key={index}
                className="absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-start gap-4 rounded-lg border bg-white px-4 py-6 shadow"
                style={{
                    transform: `translateY(${index * 20}px) scale(${1 - index * 0.05})`,
                    zIndex: items.length - index,
                }}
            >
                <Image
                    src={item.image}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <div className="space-y-2">
                    <h4 className="text-foreground text-sm font-semibold">
                        {item.name}{" "}
                        <span className="text-muted-foreground ml-1 font-normal">
                            {item.timestamp}
                        </span>
                    </h4>
                    <p className="text-muted-foreground mt-1 text-sm">{item.message}</p>
                </div>
            </div>
        ))}
    </div>
);
