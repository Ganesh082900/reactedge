// Single source of truth for copy scraped from https://reactedge-rosy.vercel.app/

export type StatusLevel =
    | "NORMAL"
    | "GUARDED"
    | "ATTENTION"
    | "MED ALERT"
    | "CRITICAL"
    | "SECURE";

export const STATUS_STYLES: Record<StatusLevel, string> = {
    NORMAL: "bg-emerald-400",
    SECURE: "bg-cyan-400",
    GUARDED: "bg-yellow-300",
    ATTENTION: "bg-amber-400",
    "MED ALERT": "bg-orange-500",
    CRITICAL: "bg-red-500",
};

export const SITE = {
    name: "ReActEdge",
    tagline: "Resilient Action at Edge",
    legalName: "ReActEdge, Inc.",
    year: 2026,
    contact: {
        phone: "+1 703 810 3320",
        email: "info@ReActEdge.io",
        address: ["1100 Wilson Blvd, Ste 2100", "Rosslyn, VA 22209"],
        regions: "USA • EMEA • APAC",
    },
    footerTagline: "Forged in America. For America & Global Alliances.",
    cta: {
        heading: "Ready to react before threats escalate?",
    },
};

export const HERO = {
    eyebrow: "Real-time protection for the systems that can't afford downtime",
    titleLines: ["Stay Ahead", "of Every", "Threat."],
    sidebarStatement:
        "Resilient Action at Edge — Powering real-time threat intelligence for OT, defense, and critical infrastructure.",
    ctaLabel: ["Explore", "the platform."],
    ticker: [
        {
            title: "ReActEdge Launches Advanced RF & Quantum Edge Detection Suite",
            description:
                "Proactive threat detection capability delivers early warning of signal spoofing up to 200 nautical miles away with plug-and-play edge deployment.",
        },
        {
            title: "ReActEdge Named Leader in Critical OT Infrastructure Protection",
            description:
                "Analyst firm recognizes ReActEdge leadership in transforming high-rate serial bus telemetry into real-time defense intelligence.",
        },
        {
            title: "ReActEdge Achieves NIAP Certification for Classified Edge Encryption",
            description:
                "Validated protection for mission-critical hardware handling classified data at rest in edge combat and industrial environments.",
        },
    ],
    systemStatus: [
        { label: "01. GPS Integrity", level: "MED ALERT" },
        { label: "02. Radar Telemetry", level: "NORMAL" },
        { label: "03. Industrial Engines", level: "NORMAL" },
        { label: "04. Electrical Bus", level: "GUARDED" },
        { label: "05. Fuel Sensors", level: "NORMAL" },
        { label: "06. Electronic Warfare", level: "CRITICAL" },
        { label: "07. Countermeasures", level: "NORMAL" },
        { label: "08. Environmental", level: "NORMAL" },
        { label: "09. Tactical Comms", level: "ATTENTION" },
        { label: "10. Quantum Data Links", level: "SECURE" },
    ] as { label: string; level: StatusLevel }[],
};

export const SOLUTIONS_SECTION = {
    heading: ["Security Solutions", "Built for What's Next"],
    cards: [
        {
            slug: "ot-cyber-security",
            short: "OT Cyber Security",
            title: "Operational Technology (OT) Cyber Security",
            desc: "Securing operational environments — industrial control systems, manufacturing ecosystems, and energy & utility operations — ensuring continuity, safety, and protection of systems that power real-world operations.",
            image: "radial",        },
        {
            slug: "critical-infrastructure",
            short: "Critical Infrastructure",
            title: "Critical Infrastructure Protection",
            desc: "Safeguarding systems that support essential services, including power and energy networks, transportation systems, and communication infrastructure — designed to prevent disruptions that can impact economies and public safety.",
            image: "sphere",        },
        {
            slug: "national-security",
            short: "National Security",
            title: "National Security",
            desc: "Supporting high-security environments including defense systems, naval and maritime operations, and strategic mission-critical national assets — where security failures are not an option.",
            image: "dots",        },
        {
            slug: "advanced-technologies",
            short: "Advanced Technologies",
            title: "Advanced Technologies",
            desc: "Preparing organizations for emerging threat landscapes through AI-driven security environments and quantum-era security readiness — ensuring long-term resilience against next-generation risks.",
            image: "radial",        },
    ],
};

export const PLATFORM = {
    hero: {
        eyebrow: "Powered and protected by\nReal-Time Threat Intelligence.",
        text: "Every",
        rotatingWords: ["System.", "Network.", "Environment."],
        statement: "Mission-First Mindset, Relentless Innovation, Data-Driven Precision",
        description:
            "We're not just protecting today's systems that power economies and defend nations — we're building the resilient security layer for tomorrow's critical infrastructure.",
        intro: "Built to be proactive, intelligent, and adaptive, our technology equips security, operations, and compliance teams with the infrastructure and analytics to detect threats, anticipate failures, and respond with confidence.",
    },
    featuresHeading: "Key Features of the ReActEdge Platform.",
    features: [
        {
            title: "Passive Intake",
            symbol: "P",
            cardTitle: "PASSIVE INTAKE",
            items: [
                "Zero Operational Disruption",
                "Optical Diode Isolation",
                "Unidirectional Telemetry",
                "Silent Bus Sniffing",
                "Hardware Tap Resilient",
            ],
        },
        {
            title: "SWaP-C Compact",
            symbol: "S",
            cardTitle: "SWaP-C COMPACT",
            items: [
                "Ultra Low Power (<15W)",
                "Rugged Form Factor",
                "MIL-STD 810H & DO-160",
                "Thermal Resilient Engine",
                "Instant Edge Plug-and-Play",
            ],
        },
        {
            title: "Full Data Capture",
            symbol: "C",
            cardTitle: "FULL DATA CAPTURE",
            items: [
                "100% Raw Bus Ingestion",
                "Lossless High-Speed Ingest",
                "ARINC 429 & MIL-STD 1553",
                "Deep Payload Decoding",
                "Zero Packet Drop Guarantee",
            ],
        },
        {
            title: "Proactive Defense",
            symbol: "D",
            cardTitle: "PROACTIVE DEFENSE",
            items: [
                "Real-Time AI Threat Engine",
                "Sub-Millisecond Alerting",
                "Autonomous Edge Quarantine",
                "Zero-Day Anomaly Shield",
                "Fleetwide Threat Intelligence",
            ],
        },
    ],
    howItWorks: {
        heading: "How it works.",
        intro: "The ReActEdge platform collects, processes, and analyzes data from your platform to deliver full visibility into cyber threats and maintenance issues – from the edge to the operations center.",
        steps: [
            {
                title: "Data Capture",
                description:
                    "ReActEdge hardware connects directly into a platform's serial bus networks to capture mission data during live operations.",
            },
            {
                title: "Threat Detection",
                description:
                    "Near real-time anomaly detection alerts operators and ground crews to emerging cyber threats or maintenance risks for immediate awareness and action.",
            },
            {
                title: "Post-Mission Investigation",
                description:
                    "Post-mission data access equips cyber and maintenance groups with insights for forensic investigation to optimize future platform performance.",
            },
            {
                title: "Fleet-Wide View",
                description:
                    "A unified dashboard provides commanders with full visibility into the status of their fleet to inform operational readiness.",
            },
            {
                title: "Ongoing Updates",
                description:
                    "ReActEdge software is continually updated with new detections and capabilities to provide added value over time.",
            },
        ],
    },
    products: [
        {
            name: "Manifold 4",
            label: "Manifold 4",
            image: "/images/platform/2.png",
            tagline: "Empower your mission with critical insights.",
            description:
                "Manifold 4 is a small and lightweight data collection device that easily slots into all air, ground, and maritime platforms. The Manifold 4 ingests data from up to 4 different serial bus protocols simultaneously with at-rest encryption for bolstered security. Additional capabilities include near real-time alert streaming for platform operators and ground control stations and a ruggedized design to survive harsh environmental conditions.",
        },
        {
            name: "Manifold 10",
            label: "Manifold 10",
            image: "/images/platform/image41.png",
            tagline: "Maximize your data collection capabilities.",
            description:
                "Manifold 10 is a variant of the Manifold 4 designed for commercial aviation to manage higher data capacity. The Manifold 10 ingests data for up to 110 channels for a variety of serial bus protocols, including ARINC 429, ARINC 717, ARINC 664, and gigabit ethernet.",
        },
        {
            name: "Bus Interface Card",
            label: "ReActEdge BIC",
            image: "/images/platform/21.png",
            tagline: "Navigate complexity with confidence.",
            description:
                "The Bus Interface Card (BIC) inserts into Manifold 4 and Manifold 10 devices to enable full data capture across all serial bus protocols. The BIC is custom designed to deliver full visibility into serial bus activity down to the physical layer to uncover anomalies in bus traffic and indicators of hardwire degradation. The BIC supports data capture on up to 12 channels for a variety of serial bus protocols, including CAN, MIL-STD-1553, and ARINC 429.",
        },
    ],
    resources: [
        {
            title: "ReActEdge Announces AS9100 Certification",
            image: "/images/platform/ima.png",
            description:
                "An internationally recognized standard for quality management designed for the aerospace, defense, and aviation industries",
        },
        {
            title: "ReActEdge Introduces Breakthrough Multi-Protocol Bus Interface Card (BIC) for Modern and Legacy Transportation and Defense Platforms",
            video: "/images/platform/A-cinematic.mp4",
            description:
                "Instant Data Capture, Device Fingerprinting, and First-of-Its-Kind Malformed Message Detection and Capture Enable Unmatched Diagnostic Capabilities for Cybersecurity and Maintenance Teams",
        },
        {
            title: "ReActEdge Announces Manifold 10 for Defense and Commercial Aircraft",
            image: "/images/platform/img.png",
            description:
                "Progress Toward FAA Certification to Equip Operators and Maintainers of Bombardier and Boeing Aircraft with Real-Time Insights Derived from Onboard Serial Data",
        },
    ],
};

export interface InsightBody {
    dateline: string;
    subtitle: string;
    paragraphs: string[];
    quotes: { text: string; author: string }[];
    about: string;
    related: { title: string; description: string }[];
}

export interface Insight {
    title: string;
    date: string;
    description: string;
    body: InsightBody;
}

const ARTICLE_BODY: InsightBody = {
    dateline: "ARLINGTON, VA — February 23, 2026",
    subtitle:
        "Security Platform Integrates with Monitoring Networks to Deliver Real-Time Threat Data for Enhanced Operational Resilience",
    paragraphs: [
        "ReActEdge, the end-to-end security platform for operational technology, critical infrastructure, and national security systems, today announced its role as a key partner in modernizing real-time threat monitoring across mission-critical networks.",
        "Within this initiative, ReActEdge's platform collects and analyzes threat signals from critical systems, operating agnostically across environments and communication protocols. This data flows through monitoring networks to situational awareness dashboards, giving operators real-time visibility into risk and readiness.",
        "ReActEdge integrated its detection capability into network monitoring frameworks in a matter of weeks, enabling live demonstrations during recent operational exercises.",
    ],
    quotes: [
        {
            text: "This partnership reflects our shared commitment to protecting the systems that power our economy and national security, at pace and at scale. Our platform was built to provide unprecedented visibility into operational and infrastructure risk, and we're proud to work alongside trusted partners to deliver this capability where it matters most.",
            author: "Toby Magsig, President and Interim CEO of ReActEdge",
        },
        {
            text: "ReActEdge brings deep expertise in real-time operational monitoring. What this partnership does is make that data usable quickly and at the edge. Their threat insights flow directly into our platform to inform response decisions in the field.",
            author: "Tom Keane, Senior Vice President",
        },
    ],
    about: "ReActEdge is a security solutions brand built to protect businesses and mission-critical systems across operational technology, national defense, critical infrastructure, and advanced AI and quantum environments. As threats grow more complex and interconnected, traditional security reacts too late — ReActEdge is built to change that. We focus on real-time threat detection and rapid response, helping organizations identify vulnerabilities early and act decisively before they escalate into serious breaches. Our solutions are proactive, intelligent, and adaptive, constantly monitoring environments and responding at the exact moment risk appears. Today, organizations across defense, infrastructure, and critical industries rely on ReActEdge for speed, precision, and trust — because in cybersecurity, how quickly you react makes all the difference.",
    related: [
        { title: "ReActEdge Defense", description: "Building a connected multi-protocol ecosystem where mission-critical security and real-time telemetry feel effortless" },
        { title: "Manifold 10 Aircraft Intelligence", description: "Equipping commercial & defense aviation fleets with real-time serial data insights" },
        { title: "AS9100 Quality Certification", description: "Setting internationally recognized standards for aerospace and defense operational technology" },
        { title: "Multi-Protocol BIC Platform", description: "Instant data capture, device fingerprinting, and malformed message detection for critical systems" },
        { title: "ReActEdge Brand Identity", description: "Adaptive security visual systems and dynamic infrastructure identity" },
        { title: "ReActEdge Visual Architecture", description: "Unified identity and next-generation design systems for critical edge solutions" },
        { title: "ReActEdge Hardware Ecosystem", description: "Ruggedized edge intelligence and mission-critical hardware interface design" },
        { title: "ReActEdge Operational Defense", description: "Real-time situational awareness and distributed telemetry monitoring across aerospace and tactical fleets" },
    ],
};


export const INSIGHT: Insight = {
    title: "ReActEdge Partners with Industry Leaders on Next-Generation Critical Infrastructure Protection Initiative",
    date: "February 23, 2026",
    description:
        "Security Platform Integrates with Monitoring Networks to Deliver Real-Time Threat Data for Enhanced Operational Resilience",
    body: ARTICLE_BODY,
};

export const INSIGHTS_PAGE = {
    bannerTitle: "ReAct/Insights",
    bannerImage: "/images/insights/img.png",
    articleImages: ["/images/insights/ReActEdge-02-01.jpg", "/images/insights/ReActEdge-01-01.png"],
    relatedImages: [
        "/images/insights/logo.png",
        "/images/insights/logo1.png",
        "/images/insights/ima.png",
        "/images/insights/img3.png",
        "/images/insights/business_card_animated.gif",
        "/images/insights/logo3.png",
        "/images/insights/logo4.png",
        "/images/insights/logo5.png",
    ],
    additionalReadingTitle: "Additional Reading",
    additionalReading: [
        { theme: "theme-mint", quote: "We worked with the ReActEdge team over a several month project on a complete critical infrastructure overhaul, that included new telemetry, AI protection, and code resilience.", brand: "⁘⁘ ReActEdge", tag: "OT Protection" },
        { theme: "theme-white", quote: "ReActEdge completed a comprehensive security deployment of our critical platform. The quality of the team's work exceeded our expectations, delivering 100% operational resilience.", brand: "zelt", tag: "Edge", suffix: ".app" },
        { theme: "theme-white", quote: "ReActEdge was engaged in developing our critical infrastructure monitoring system. Their efforts were highly satisfactory, and we were impressed with their speed and precision.", brand: "Potion", tag: "Cyber Threat" },
        { theme: "theme-mint", quote: "I'd like to extend a heartfelt gratitude to the ReActEdge team for their exceptional support throughout the edge security rollout. Your responsiveness has been invaluable.", brand: "ESPOOT", tag: "Infrastructure" },
        { theme: "theme-white-accent", quote: "We had a great experience working with ReActEdge on our industrial cybersecurity project. Their team brought a strong mix of creativity, technical skill and strategic thinking.", brand: "SCA", tag: "Defense Hub" },
    ],
};
export const CASE_QUOTES = [
    {
        quote: "We worked with the ReActEdge team over a several month project on a complete critical infrastructure overhaul, that included new telemetry, AI protection, and code resilience.",
        company: "ReActEdge",
        tag: "OT Protection",
    },
    {
        quote: "ReActEdge completed a comprehensive security deployment of our critical platform. The quality of the team's work exceeded our expectations, delivering 100% operational resilience.",
        company: "zelt.app",
        tag: "Edge",
    },
    {
        quote: "ReActEdge was engaged in developing our critical infrastructure monitoring system. Their efforts were highly satisfactory, and we were impressed with their speed and precision.",
        company: "Potion",
        tag: "Cyber Threat",
    },
    {
        quote: "I'd like to extend a heartfelt gratitude to the ReActEdge team for their exceptional support throughout the edge security rollout. Your responsiveness has been invaluable.",
        company: "ESPOOT",
        tag: "Infrastructure",
    },
];




