// components/molecules/FeatureCard.tsx

import Button from "../atoms/Button";

interface FeatureCardProps {
    title: string;
    desc: string;
    image?: React.ReactNode;
    highlight?: boolean;
}

export default function FeatureCard({
    title,
    desc,
    image,
    highlight,
}: FeatureCardProps) {
    return (
        <div
            className={`h-[420px] rounded-xl p-8 flex flex-col justify-between transition-all duration-500 ${highlight
                    ? "bg-[#ff4d3d] text-black scale-105"
                    : "bg-white text-black"
                }`}
        >
            {/* IMAGE */}
            <div className="flex justify-center items-center h-[180px]">
                {image || (
                    <div className="w-32 h-32 border border-black rounded-full opacity-50" />
                )}
            </div>

            {/* CONTENT */}
            <div>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-sm mt-2 opacity-70">{desc}</p>
            </div>

            {/* CTA */}
            <Button
                label="Explore"
                bg={highlight ? "#000" : "transparent"}
                textColor={highlight ? "#fff" : "#000"}
                borderColor="#000"
            />
        </div>
    );
}