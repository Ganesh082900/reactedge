"use client";

interface Props {
    label: string;
    name: string;
    required?: boolean;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextArea({
    label,
    name,
    required,
    placeholder,
    value,
    onChange,
}: Props) {
    return (
        <div>
            <label className="block text-[11px] tracking-[0.2em] uppercase text-shift-gray mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            <textarea
                name={name}
                value={value}
                onChange={onChange}
                rows={4}
                placeholder={placeholder}
                className="w-full bg-transparent border-b border-shift-dark/25 pb-3 text-shift-dark placeholder-shift-dark/40 outline-none focus:border-shift-blue transition resize-none"
            />
        </div>
    );
}