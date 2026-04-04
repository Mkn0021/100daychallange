import { ArrowDownNarrowWide, Clock3, Ellipsis, TowerControl } from "lucide-react";

const notifications = [
    {
        time: "12:30 PM",
        title: "New Comment on Task",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
        description: "Neil Replaied: This looks great!",
    },
    {
        time: "11:15 AM",
        title: "Task Assigned",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
        description: "You have been assigned to 'Design Homepage'.",
    },
    {
        time: "10:00 AM",
        title: "Project Update",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
        description: "The Q3 project has been marked as completed.",
    },
    {
        time: "9:45 AM",
        title: "New Follower",
        image: "https://randomuser.me/api/portraits/men/9.jpg",
        description: "John Doe started following you.",
    },
];

export const Notifications = () => (
    <div className="mx-6.25 mt-12.5 max-h-72 overflow-hidden rounded-t-lg border bg-white shadow lg:mx-0 lg:mask-b-from-90%">
        <div className="flex items-center justify-between gap-4 border-b p-4">
            <h4 className="text-foreground flex items-center gap-2 text-lg font-semibold">
                Inbox <Ellipsis />
            </h4>
            <div className="flex items-center gap-2">
                <ArrowDownNarrowWide />
                <TowerControl />
            </div>
        </div>
        <div className="space-y-4 p-4">
            {notifications.map((notification, index) => (
                <div key={index} className="flex items-start gap-4">
                    <img
                        src={notification.image}
                        alt="User Avatar"
                        className="size-10 rounded-full"
                    />
                    <div>
                        <h5 className="text-foreground text-sm font-semibold">
                            {notification.title}
                        </h5>
                        <p className="text-muted-foreground mt-1 text-xs">
                            {notification.description}
                        </p>
                    </div>
                    <div className="ml-auto flex flex-col items-end gap-1">
                        <Clock3 size={16} />
                        <p className="text-muted-foreground text-[10px] text-nowrap">
                            {notification.time}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
