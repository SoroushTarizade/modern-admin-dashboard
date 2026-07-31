interface Props {
    value: string;
    onChange: (value: string) => void;
}

export default function OrderTypeFilter({
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
                All Types
            </option>

            <option value="Book">
                Book
            </option>

            <option value="Electronics">
                Electronics
            </option>

            <option value="Furniture">
                Furniture
            </option>

            <option value="Fashion">
                Fashion
            </option>
        </select>
    );
}