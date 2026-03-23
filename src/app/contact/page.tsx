import MainContent from "@/components/sections/MainContent";
import ContactSection from "@/components/sections/ContactSection";

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div>
                <MainContent
                    text={`Get In\nTouch.`}
                    bgColor="#EDEDED"
                    textColor="#0A0F1C"
                    rightContent={{
                        icon: (
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 100 100"
                                fill="none"
                                stroke="#0A0F1C"
                                strokeWidth="1.2"
                            >
                                <polygon points="50,10 90,80 10,80" />
                                <polygon points="50,25 75,70 25,70" />
                                <polygon points="50,40 60,60 40,60" />
                            </svg>
                        ),
                        statement: "Ready To Learn More About Shift5?",
                        description:
                            "SHIFT5 ENABLES SMARTER, FASTER DECISIONS THROUGH REAL-TIME DATA ACCESS, CONTEXTUAL INSIGHTS, AND ACTIONABLE ANALYTICS AT THE EDGE FOR COMMERCIAL AVIATION, RAIL, AND DEFENSE.",
                    }}
                />
            </div>
            <section className="relative w-full bg-[#0A0F1C] text-white py-24 px-6 overflow-hidden">

                {/* TOP BORDER */}
                <div className="absolute top-0 left-0 w-full h-px bg-white/20" />

                {/* CONTENT */}
                <div className="max-w-[1280px] mx-auto">
                    <p className="text-[clamp(28px,4vw,64px)] leading-[1.1] font-semibold tracking-[-0.02em] text-white/80">
                        Whether you're interested in learning more about our solutions,
                        product demonstrations, partnership discussions, or joining our team,
                        we'd be happy to help.
                    </p>
                </div>

                {/* BACKGROUND GLOW */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute w-[600px] h-[600px] bg-[#00E5A0]/10 rounded-full blur-[120px] top-[-100px] left-[-100px]" />
                    <div className="absolute w-[600px] h-[600px] bg-[#6C63FF]/10 rounded-full blur-[120px] bottom-[-100px] right-[-100px]" />
                </div>

            </section>
            <div className="w-full"><ContactSection /></div>
        </div>
    );
}