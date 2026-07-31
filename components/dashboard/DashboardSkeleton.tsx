export default function DashboardSkeleton() {
    return (
        <div className="space-y-6 animate-pulse">
            <div className="h-10 w-56 rounded-xl bg-muted" />

            <div className="grid grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-36 rounded-2xl bg-muted"
                    />
                ))}
            </div>

            <div className="h-[420px] rounded-2xl bg-muted" />
        </div>
    );
}