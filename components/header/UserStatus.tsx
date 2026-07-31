interface UserStatusProps {
    status?: "online" | "away" | "busy" | "offline";
}

const statusConfig = {
    online: {
        color: "bg-green-500",
        text: "Online",
    },
    away: {
        color: "bg-yellow-500",
        text: "Away",
    },
    busy: {
        color: "bg-red-500",
        text: "Busy",
    },
    offline: {
        color: "bg-gray-400",
        text: "Offline",
    },
};

export default function UserStatus({
    status = "online",
}: UserStatusProps) {

    const current = statusConfig[status];

    return (
        <div className="flex items-center gap-2">

            <span
                className={`
                    w-2.5
                    h-2.5
                    rounded-full
                    ${current.color}
                `}
            />

            <span className="text-xs text-muted-foreground">
                {current.text}
            </span>

        </div>
    );
}