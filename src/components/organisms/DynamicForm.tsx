"use client";

import { useState } from "react";
import Input from "@/components/atoms/Input";
import { TextArea } from "@/components/atoms/TextArea";
import Button from "@/components/atoms/Button";

interface Field {
    type: string;
    name: string;
    label: string;
    required?: boolean;
}

export default function DynamicForm({
    fields,
    onSubmit,
}: {
    fields: Field[];
    onSubmit: (data: any) => Promise<void>;
}) {
    const [formData, setFormData] = useState<Record<string, string>>({});

    const handleChange = (e: any) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async () => {
        await onSubmit(formData);
    };

    return (
        <div className="space-y-10">

            {fields.map((field) => {
                if (field.type === "textarea") {
                    return (
                        <TextArea
                            key={field.name}
                            {...field}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                        />
                    );
                }

                return (
                    <Input
                        key={field.name}
                        {...field}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                    />
                );
            })}

            {/* CHECKBOX */}
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-white/60">
                <input type="checkbox" />
                <span>I am a human</span>
            </div>

            {/* SUBMIT */}
            <Button
                label="Submit"
                bg="#EDEDED"
                textColor="#000"
                borderColor="#EDEDED"
                onClick={handleSubmit}
            />
        </div>
    );
}