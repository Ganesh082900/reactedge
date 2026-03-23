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
            <label className="block text-[11px] tracking-[0.2em] uppercase text-white/60 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            <input
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/30 outline-none focus:border-white transition"
            />
        </div>
    );
}