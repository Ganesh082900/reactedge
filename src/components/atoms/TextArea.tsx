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
            <label className="block text-[11px] tracking-[0.2em] uppercase text-white/60 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            <textarea
                name={name}
                value={value}
                onChange={onChange}
                rows={4}
                placeholder={placeholder}
                className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/30 outline-none focus:border-white transition resize-none"
            />
        </div>
    );
}