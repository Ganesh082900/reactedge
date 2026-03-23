import MainContent from "@/components/sections/MainContent";

export default function Careers() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div>

                <MainContent
                    text="Careers."
                    bgColor="#EDEDED"
                    textColor="#111"
                    rightContent={{
                        icon: (
                            <div className="w-10 h-10 border border-black rotate-45" />
                        ),
                        statement: "Keeping the world's most critical systems secure.",
                        description:
                            "Forged in America. For America. We're building the digital operating system for tomorrow's fleets.",
                    }}
                />
            </div>
          
        </div>
    );
}