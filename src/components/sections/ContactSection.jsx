"use client";

import DynamicForm from "@/components/organisms/DynamicForm";
import { CONTACT_FORM } from "@/lib/formConfig";

export default function ContactSection() {
    const handleSubmit = async (data) => {
        try {
            await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
            });
            console.log("Submitted", data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section className="min-h-screen bg-[#0A0F1C] text-white flex justify-between items-center">
            <div className="w-1/2 p-12">
                <h1 className="text-3xl text-white/80">
                    Contact Us
                </h1>
            </div>

            <div className="w-1/2 p-12 max-w-[520px]">
                <DynamicForm
                    fields={CONTACT_FORM}
                    onSubmit={handleSubmit}
                />
            </div>

        </section>
    );
}