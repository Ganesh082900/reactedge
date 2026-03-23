// components/atoms/Button.tsx

import React from "react";

interface ButtonProps {
    label: string;
    bg?: string;
    textColor?: string;
    borderColor?: string;
    onClick?: () => void;
}

export default function Button({
    label,
    bg = "transparent",
    textColor = "#000",
    borderColor = "#000",
    onClick,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="px-5 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105"
            style={{
                background: bg,
                color: textColor,
                border: `1px solid ${borderColor}`,
            }}
        >
            {label}
        </button>
    );
}