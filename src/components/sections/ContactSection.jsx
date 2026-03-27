"use client";

import DynamicForm from "@/components/organisms/DynamicForm";
import { CONTACT_FORM } from "@/lib/formConfig";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function ContactSection() {
    useScrollAnimation();
    
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
            <div data-animate className="w-1/2 p-12 fade-up">
                <h1 className="text-3xl text-white/80 font-bold tracking-tight">
                    Contact Us
                </h1>
            </div>

            <div data-animate className="w-1/2 p-12 max-w-[520px] fade-up">
                <DynamicForm
                    fields={CONTACT_FORM}
                    onSubmit={handleSubmit}
                />
            </div>

        </section>
    );
}