interface Props {
    value: string;
    onChange: (value: string) => void;
}

export default function OrderStatusFilter({
    value,
    onChange,
}: Props) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="bg-card rounded-lg px-3 py-2 outline-none cursor-pointer"
        >
            <option value="All">
                All Status
            </option>

            <option value="Completed">
                Completed
            </option>

            <option value="Processing">
                Processing
            </option>

            <option value="Rejected">
                Rejected
            </option>

            <option value="On Hold">
                On Hold
            </option>
        </select>
    );
}