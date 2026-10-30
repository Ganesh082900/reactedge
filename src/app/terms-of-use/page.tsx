import Link from "next/link";

export const metadata = { title: "Terms of Use" };

const EMAIL = "info@ReActEdge.io";

type Section = { title: string; paragraphs?: string[]; list?: string[]; after?: string };

const intro =
    "Welcome to ReActEdge, an AI-powered enterprise platform designed to enhance product adoption, streamline workflows, and provide autonomous support. By accessing or using our services, you agree to be bound by the following Terms of Use. These Terms govern your access to and use of ReActEdge, including all related websites, APIs, applications, and services. If you do not agree to these Terms, you may not access or use our Services.";

const sections: Section[] = [
    {
        title: "1. Acceptance of Terms",
        paragraphs: [
            "By using ReActEdge, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy, incorporated herein by reference. We reserve the right to modify these Terms at any time. Continued use of the Services constitutes your acceptance of any updates or modifications.",
        ],
    },
    {
        title: "2. Eligibility & Account Responsibilities",
        paragraphs: [
            "You must be at least 18 years old or the minimum age required in your jurisdiction to form a legally binding contract. By registering for an account, you represent that you meet this requirement.",
            "You are responsible for maintaining the confidentiality of your account credentials, including passwords and API keys. You agree to notify us immediately of any unauthorized use or breach of security related to your account. You are solely responsible for all activity conducted through your account, including any violations of these Terms.",
            "Enterprise customers may authorize multiple users under a single account. You must ensure that all users comply with these Terms.",
        ],
    },
    {
        title: "3. Services & Access",
        paragraphs: [
            "ReActEdge provides a suite of AI-driven tools designed to automate workflows, enhance user experience, and deliver insights.",
            "We strive to provide reliable and continuous access to the Services; however, we do not guarantee uninterrupted service. ReActEdge may perform maintenance, updates, or modifications to improve functionality. Some features may be in beta or testing phases. Use of beta features is voluntary, and they are provided \"as-is\" without warranties.",
        ],
    },
    {
        title: "4. Subscriptions, Fees & Payments",
        paragraphs: [
            "Certain Services may require a subscription. By subscribing, you agree to pay all fees specified for your chosen plan. All payments are due in advance, according to the billing cycle.",
            "Payments must be made in the currency specified, plus applicable taxes. ReActEdge reserves the right to suspend access for overdue payments. Refunds, if any, are provided solely at our discretion, except as required by law.",
            "Free trials or proof-of-concept (POC) access are subject to separate terms, including limitations on duration, usage, or functionality. Upon expiration, continued use requires conversion to a paid plan.",
        ],
    },
    {
        title: "5. User Data & Privacy",
        paragraphs: [
            "You retain ownership of all data you input, upload, or otherwise provide to the Services. By using the Services, you grant ReActEdge a non-exclusive, worldwide license to process and analyze Customer Data solely to provide and improve the Services.",
            "ReActEdge may anonymize and aggregate data to enhance AI models, reporting, and service insights. Our handling of Customer Data is governed by our Privacy Policy, which you agree to by using the Services.",
        ],
    },
    {
        title: "6. Acceptable Use Policy",
        paragraphs: ["You may only use the Services in compliance with all applicable laws and regulations. You may not:"],
        list: [
            "Use the Services for any illegal, harmful, or fraudulent purposes.",
            "Attempt to reverse-engineer, decompile, or extract the source code of the Services.",
            "Interfere with the operation, security, or integrity of the Services.",
            "Access or use another user's account without authorization.",
            "Attempt to bypass usage limits, restrictions, or security measures.",
        ],
        after: "Violation of these rules may result in suspension or termination of your account.",
    },
    {
        title: "7. Intellectual Property",
        paragraphs: [
            "ReActEdge and its licensors retain all rights, title, and interest in the Services, including software, algorithms, branding, documentation, and any associated intellectual property.",
            "You retain ownership of your Customer Data. AI-generated outputs using your data remain your property unless otherwise agreed upon. You may not use ReActEdge's trademarks, logos, or content without express written permission.",
        ],
    },
    {
        title: "8. Confidentiality & Security",
        paragraphs: [
            "Each party agrees to maintain the confidentiality of the other party's confidential information. \"Confidential Information\" includes any non-public information disclosed in connection with the Services.",
            "ReActEdge implements industry-standard security measures to protect data, including encryption, role-based access controls, and secure hosting. While we strive to maintain security, no system is completely impervious to attacks, and you acknowledge that the Services are provided with inherent risks.",
        ],
    },
    {
        title: "9. Third-Party Services",
        paragraphs: [
            "ReActEdge may integrate with third-party tools or services to enhance functionality. You agree that we are not responsible or liable for any third-party services, including their availability, performance, or data handling. Third-party services may be subject to separate terms and conditions.",
        ],
    },
    {
        title: "10. Termination & Suspension",
        paragraphs: [
            "ReActEdge may suspend or terminate your account for violations of these Terms, misuse of the Services, or non-payment of fees. You may also terminate your account at any time by following the procedures in the Services.",
            "Upon termination, your right to access the Services ceases. ReActEdge may delete Customer Data in accordance with its retention policies, unless legally required to retain it.",
        ],
    },
    {
        title: "11. Disclaimers & Limitation of Liability",
        paragraphs: [
            "The Services are provided \"as-is\" and \"as-available.\" ReActEdge disclaims all warranties, whether express or implied, including fitness for a particular purpose, non-infringement, and uninterrupted access.",
            "In no event shall ReActEdge, its officers, directors, employees, or affiliates be liable for indirect, incidental, consequential, special, or punitive damages arising out of or relating to these Terms or the Services. Our aggregate liability is limited to the fees you paid for the Services in the 12 months preceding the claim.",
        ],
    },
    {
        title: "12. Indemnification",
        paragraphs: [
            "You agree to indemnify and hold harmless ReActEdge, its officers, directors, employees, and affiliates from any claims, damages, losses, liabilities, costs, or expenses (including reasonable attorneys' fees) arising from:",
        ],
        list: ["Your violation of these Terms", "Your misuse of the Services", "Any third-party claims related to your Customer Data"],
    },
    {
        title: "13. Governing Law & Dispute Resolution",
        paragraphs: [
            "These Terms are governed by the laws of the jurisdiction in which ReActEdge is established, without regard to conflicts of law principles.",
            "Any dispute arising from or relating to these Terms or the Services shall first be resolved through good faith negotiation. If unresolved, disputes shall be submitted to binding arbitration. The arbitration shall be conducted in English, and the decision shall be final and enforceable in any court of competent jurisdiction.",
        ],
    },
    {
        title: "14. Changes to Terms",
        paragraphs: [
            "ReActEdge may update or modify these Terms at any time. Significant changes will be communicated via email or in-app notifications. Your continued use of the Services after the effective date of changes constitutes acceptance of the revised Terms.",
        ],
    },
    {
        title: "15. Contact Information",
        paragraphs: [`For any questions or concerns regarding these Terms or the Services, you may contact us at ${EMAIL}.`],
    },
];

export default function Page() {
    return (
        <section className="min-h-screen bg-[#EDEDED] text-[#0A0F1C]">
            <div className="max-w-3xl mx-auto px-6 pt-40 pb-24">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Terms of Use</h1>
                <p className="mt-6 text-sm opacity-60">Effective Date: October 30, 2026</p>
                <p className="mt-8 text-lg leading-relaxed opacity-70">{intro}</p>

                {sections.map((section) => (
                    <div key={section.title} className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{section.title}</h2>
                        {section.paragraphs?.map((text) => (
                            <p key={text} className="mt-4 text-lg leading-relaxed opacity-70">
                                {text}
                            </p>
                        ))}
                        {section.list && (
                            <ul className="mt-4 list-disc pl-6 space-y-2 text-lg leading-relaxed opacity-70">
                                {section.list.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        )}
                        {section.after && <p className="mt-4 text-lg leading-relaxed opacity-70">{section.after}</p>}
                    </div>
                ))}

                <p className="mt-12 text-lg leading-relaxed opacity-70">
                    <strong>Conclusion:</strong> By accessing or using ReActEdge, you agree to comply with these Terms and any future updates. See also our{" "}
                    <Link href="/privacy-policy" className="underline">
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>
        </section>
    );
}
