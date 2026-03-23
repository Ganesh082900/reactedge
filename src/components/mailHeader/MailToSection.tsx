"use client";
import React, { useState } from "react";

export default function MailToSection() {
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        if (!email) return;
        window.location.href = `mailto:info@shift5.io?subject=Inquiry&body=Hello, I'm interested. My email is ${email}`;
    };

    return (
        <section className="bg-secondary text-primary px-6 md:px-16 py-20 md:py-28">
            {/* Heading */}
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-3xl md:text-6xl font-semibold leading-tight">
                    Ready to harness your
                    <br />
                    Op / Intelligence?
                </h1>
            </div>

            {/* Email Input Design */}
            <div className="flex justify-center items-center mt-16">
                <div className="flex items-center gap-4 md:gap-10">
                    <span className="text-4xl md:text-6xl">(</span>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-transparent border-b border-primary/40 text-center px-4 py-2 text-lg md:text-2xl placeholder-primary/60 focus:outline-none w-48 md:w-80"
                    />

                    <span className="text-4xl md:text-6xl">)</span>
                </div>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-10">
                <button
                    onClick={handleSubmit}
                    className="border border-primary/40 px-8 py-3 rounded-full text-xs tracking-widest uppercase hover:bg-primary hover:text-secondary transition"
                >
                    Continue
                </button>
            </div>

            {/* Divider */}
            <div className="border-t border-primary/30 mt-20 pt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                    {/* Left */}
                    <div className="uppercase tracking-widest text-xs opacity-70">
                        <p>Get in touch to</p>
                        <p>learn more.</p>
                    </div>

                    {/* Phone */}
                    <div>
                        <p className="uppercase text-xs opacity-70 mb-1">Phone</p>
                        <a
                            href="tel:+17038103320"
                            className="text-xl md:text-2xl font-medium hover:underline"
                        >
                            +1 703 810 3320
                        </a>
                    </div>

                    {/* Emails */}
                    <div>
                        <div className="mb-4">
                            <p className="uppercase text-xs opacity-70 mb-1">
                                General Inquiries
                            </p>
                            <a
                                href="mailto:info@shift5.io"
                                className="text-lg md:text-xl hover:underline"
                            >
                                info@shift5.io
                            </a>
                        </div>

                        <div>
                            <p className="uppercase text-xs opacity-70 mb-1">Press</p>
                            <a
                                href="mailto:press@shift5.io"
                                className="text-lg md:text-xl hover:underline"
                            >
                                press@shift5.io
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}