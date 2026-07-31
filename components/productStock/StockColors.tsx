interface StockColorsProps {
    colors: string[];
}

export default function StockColors({
    colors,
}: StockColorsProps) {
    return (
        <div className="flex items-center gap-2">
            {colors.map((color, index) => (
                <span
                    key={index}
                    className="w-5 h-5 rounded-full border border-border"
                    style={{
                        backgroundColor: color,
                    }}
                />
            ))}
        </div>
    );
}