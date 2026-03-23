"use client";

import useTextReveal from "@/hooks/useTextReveal";
import useReveal from "@/hooks/useReveal";

export default function Hero() {
    useTextReveal();
    useReveal();

    return (
        <section className="h-[120vw] relative bg-primary flex flex-col lg:flex-row gap-6">
            {/* ================= LEFT ================= */}
            <div className="h-full flex flex-col gap-6 flex-1">

                {/* TOP - BIG TEXT */}
                <div className="bg-secondary rounded-2xl p-10 flex items-center min-h-[260px] reveal-block scale-in">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        <div className="mask-line">
                            <span>Operational Intelligence</span>
                        </div>
                        <div className="mask-line">
                            <span>for Every Vehicle, Every Fleet,</span>
                        </div>
                        <div className="mask-line">
                            <span>Every Mission.</span>
                        </div>
                    </h1>
                </div>

                {/* MIDDLE - IMAGE */}
                <div className="bg-black rounded-2xl overflow-hidden min-h-[320px] reveal-block scale-in">
                    <img
                        src="/plane.jpg"
                        alt="Aircraft"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>

                {/* BOTTOM - 3 CARDS */}
                <div className="flex flex-col md:flex-row gap-6">

                    <div className="flex-1 bg-secondary rounded-2xl p-6 reveal-left">
                        <p className="text-sm text-muted uppercase mb-2">
                            Partnership
                        </p>
                        <h3 className="font-semibold text-base leading-snug">
                            Shift5 Partners with Anduril on Army's Next Generation Command and Control Initiative
                        </h3>
                        <p className="text-xs text-muted mt-3">
                            Operational intelligence platform integrates with lattice mesh to deliver near real-time vehicle health data for enhanced mission readiness.
                        </p>
                    </div>

                    <div className="flex-1 bg-secondary rounded-2xl p-6 reveal-left">
                        <p className="text-sm text-muted uppercase mb-2">
                            Product
                        </p>
                        <h3 className="font-semibold text-base leading-snug">
                            Shift5 Launches Advanced RF-Enabled GPS Threat Detection
                        </h3>
                        <p className="text-xs text-muted mt-3">
                            Next-generation capability delivers early warning of GPS threats up to 200 nautical miles away with plug-and-play deployment.
                        </p>
                    </div>

                    <div className="flex-1 bg-secondary rounded-2xl p-6 reveal-left">
                        <p className="text-sm text-muted uppercase mb-2">
                            Certification
                        </p>
                        <h3 className="font-semibold text-base leading-snug">
                            Shift5 Achieves NIAP Certification for Full Encryption
                        </h3>
                        <p className="text-xs text-muted mt-3">
                            First and only provider in its class to receive certification for devices capable of handling classified data at rest.
                        </p>
                    </div>

                </div>
            </div>

            {/* ================= RIGHT ================= */}
            <div className="h-full flex flex-col gap-6 w-full lg:w-[340px]">

                {/* TOP */}
                <div className="bg-secondary rounded-2xl p-6 reveal-block">
                    <p className="text-lg leading-snug">
                        Powering actionable insights for America's defense and transportation systems.
                    </p>
                </div>

                {/* MIDDLE */}
                <div className="bg-black text-white rounded-2xl p-6 flex flex-col justify-between flex-1 reveal-block scale-in">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            System Status
                        </h3>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li>01. GPS</li>
                            <li>02. RADAR</li>
                            <li>03. ENGINES</li>
                            <li>04. ELECTRICAL</li>
                            <li>05. FUEL</li>
                            <li>06. ELECTRONIC WARFARE</li>
                            <li>07. COUNTERMEASURES</li>
                            <li>08. ENVIRONMENTAL</li>
                            <li>09. COMMUNICATIONS</li>
                            <li>10. FLIGHT DATA LINKS</li>
                        </ul>
                    </div>

                    <div className="text-xs opacity-40 font-mono mt-6">
                        01110000 10011111 10101010<br />
                        11010000 00100101 01111111<br />
                        01110011 01011011 11110000
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="bg-primary rounded-2xl p-6 flex flex-col items-center justify-center reveal-block scale-in">
                    <div className="text-4xl mb-2">↗</div>
                    <p className="text-sm">Explore the platform.</p>
                </div>

            </div>
        </section>
    );
}
