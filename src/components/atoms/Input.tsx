"use client";

interface InputProps {
    label: string;
    name: string;
    required?: boolean;
    placeholder?: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
    label,
    name,
    required,
    placeholder,
    type = "text",
    value,
    onChange,
}: InputProps) {
    return (
        <div>
            <label className="block text-[11px] tracking-[0.2em] uppercase text-shift-gray mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            <input
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                className="w-full bg-transparent border-b border-shift-dark/25 pb-3 text-shift-dark placeholder-shift-dark/40 outline-none focus:border-shift-blue transition"
            />
        </div>
    );
}