interface Props {
    value: string;
    onChange: (value: string) => void;
}

export default function DateFilter({
    value,
    onChange,
}: Props) {
    return (
        <input
            type="date"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="bg-card rounded-xl px-3 py-2 w-full sm:w-auto outline-none"
        />
    );
}