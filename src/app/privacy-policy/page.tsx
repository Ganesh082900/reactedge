export const metadata = { title: "Privacy Policy" };

const EMAIL = "info@ReActEdge.io";

type Block = { p?: string; list?: string[]; h3?: string };
type Section = { title: string; blocks: Block[] };

const sections: Section[] = [
    {
        title: "1. Introduction",
        blocks: [
            { p: "This Privacy Policy explains how ReActEdge (\"the Company,\" \"We,\" \"Us,\" or \"Our\") collects, uses, discloses, and safeguards information about individuals who use our website and services (the \"Service\"). It also describes the choices and rights available to you regarding your information." },
            { p: "By using the Service, you agree to the collection and use of your information as described in this Policy." },
        ],
    },
    {
        title: "2. Information We Collect",
        blocks: [
            { h3: "2.1 Information You Provide" },
            { list: ["Email address", "First and last name", "Phone number", "Address, state/province, ZIP/postal code, and city"] },
            { h3: "2.2 Information Collected Automatically" },
            { p: "When you access the Service, we automatically collect certain technical and usage information, including IP address, browser type and version, device identifiers, operating system, pages visited, and the time and duration of your visit." },
        ],
    },
    {
        title: "3. Cookies and Tracking Technologies",
        blocks: [
            { h3: "3.1 What Are Cookies?" },
            { p: "Cookies are small text files used to store small pieces of information. They are stored on your device when our website loads in your browser. Cookies help ensure that the website functions properly, enhance security, provide a better user experience, and allow us to analyze performance to identify what works and where improvements are needed." },
            { h3: "3.2 How We Use Cookies" },
            { p: "We use cookies to help you navigate our website efficiently and perform certain functions. Cookies categorized as \"Necessary\" are stored on your browser because they are essential for enabling the basic functionalities of the site. For more information on how Google's third-party cookies operate and handle your data, please see Google's Privacy Policy." },
            { p: "Like most online services, our website uses both first-party and third-party cookies. First-party cookies are primarily necessary for the website to function properly and do not collect any personally identifiable data. Third-party cookies primarily help us understand how the website performs, track how you interact with it, keep our services secure, deliver relevant advertisements, and enhance your overall user experience." },
            { h3: "3.3 Types of Cookies We Use" },
            { p: "We use cookies falling into six categories. You can manage your preferences for each category (other than Necessary, which is always active)." },
            {
                list: [
                    "Necessary: required for basic features of the site, such as secure log-in or adjusting your consent preferences. These do not store personally identifiable data and cannot be disabled.",
                    "Functional: help perform functionalities like sharing content on social media platforms, collecting feedback, and other third-party features.",
                    "Analytics: used to understand how visitors interact with the website, such as number of visitors, bounce rate, and traffic source.",
                    "Performance: used to analyze key performance indexes of the website to deliver a better user experience.",
                    "Advertisement: used to provide customized advertisements based on pages you have visited and to analyze the effectiveness of ad campaigns.",
                    "Uncategorised: cookies that are being analyzed and have not yet been classified into a category.",
                ],
            },
            { h3: "3.4 Managing Your Cookie Preferences" },
            { p: "You can manage your cookie preferences at any time through our consent banner, where available, and through your browser settings. Disabling certain cookies may limit some features of the Service." },
        ],
    },
    {
        title: "4. How We Use Your Personal Data",
        blocks: [
            { p: "We use personal data we collect to provide and enhance the Service. By using the Service, you consent to this collection and use as described in this Policy. More specifically, we use your information to:" },
            {
                list: [
                    "Provide, maintain, and monitor the Service",
                    "Create and manage your account",
                    "Perform our contractual obligations to you",
                    "Contact you about updates, security notices, or service-related communications",
                    "Send optional marketing communications, where you have not opted out",
                    "Support business transactions such as a merger, financing, or asset sale",
                    "Conduct analytics and improve the Service",
                ],
            },
        ],
    },
    {
        title: "5. How We Share Your Information",
        blocks: [
            { p: "We may share personal information with service providers who help us operate the Service, with our affiliates (who are bound by this Policy), with business partners for joint offerings, in connection with a business transaction (such as a merger or acquisition), and with your consent for any other purpose." },
        ],
    },
    {
        title: "6. Consent Management",
        blocks: [
            { h3: "6.1 Obtaining Consent" },
            { p: "Upon visiting our website or platform, we request your explicit consent before collecting any personal information. We provide clear explanations of the purpose and scope of our data processing activities, and you retain the right to grant or deny consent." },
            { h3: "6.2 Modification of Consent" },
            { p: `You may modify your consent for data processing at any time by contacting us at ${EMAIL}. Modifications do not invalidate any processing already carried out based on your prior consent.` },
            { h3: "6.3 Withdrawal of Consent" },
            { p: `You may withdraw your consent for data processing at any time by contacting us at ${EMAIL}. Withdrawal does not affect the lawfulness of processing carried out based on consent given before the withdrawal.` },
            { p: "This consent management mechanism is designed to give you meaningful control over your personal data while ensuring transparency and compliance with applicable privacy regulations." },
        ],
    },
    {
        title: "7. Data Retention",
        blocks: [
            { p: "We retain personal data only as long as necessary for the purposes described in this Policy, or as required to comply with legal obligations, resolve disputes, and enforce our agreements. Usage data is generally retained for a shorter period, except where needed for security, functionality improvements, or legal compliance." },
        ],
    },
    {
        title: "8. International Data Transfers",
        blocks: [
            { p: "Your information may be transferred to, stored, and processed in countries other than your own, where data protection laws may differ. We apply appropriate safeguards for such transfers, including contractual clauses, encryption, access controls, and adherence to recognized international transfer frameworks where applicable." },
        ],
    },
    {
        title: "9. Data Storage Location",
        blocks: [
            { p: "We store data using cloud infrastructure. Appropriate technical and organizational safeguards, including encryption and access controls, are applied to stored data." },
        ],
    },
    {
        title: "10. Data Breach Clause",
        blocks: [
            { p: "In the event of a data breach, we follow a rigorous procedure to mitigate and address the incident promptly. Our response includes identifying the breach, quantifying its impact, assessing affected data, notifying relevant authorities, and communicating transparently with affected individuals. We conduct thorough investigations and implement corrective measures to prevent recurrence." },
            { h3: "10.1 Data Breach Reporting Procedure" },
            { p: "Any detected data breach will be reported to the relevant authorities and affected individuals within 72 hours of identification, in strict compliance with applicable data protection regulations." },
        ],
    },
    {
        title: "11. Data Protection Contact",
        blocks: [
            { p: `Email: ${EMAIL}` },
            { h3: "Roles and Responsibilities" },
            {
                list: [
                    "Oversee implementation of data protection policies and procedures",
                    "Ensure compliance with data protection regulations",
                    "Conduct risk assessments related to data processing",
                    "Serve as the primary contact for data subjects and supervisory authorities",
                    "Monitor data security measures",
                    "Investigate breaches",
                    "Enforce staff training to uphold robust data security",
                ],
            },
        ],
    },
    {
        title: "12. Your Rights",
        blocks: [
            { h3: "12.1 Data Subject Rights" },
            { p: "As a user, you have the following rights regarding your personal data:" },
            {
                list: [
                    "Access: Request access to your personal data",
                    "Rectification: Correct inaccurate or incomplete data",
                    "Erasure: Request deletion of your data",
                    "Restrict Processing: Request limitations on data processing",
                    "Data Portability: Request your data in a portable format",
                    "Object to Automated Decisions: Oppose decisions made solely by automated processing",
                ],
            },
            { p: "To exercise your rights, contact us with clear identification and request details. We will respond within 30 days." },
            { h3: "12.2 Rights under the DPDPA, 2023" },
            { p: "As a Data Principal under the Digital Personal Data Protection Act, 2023, you have the right to:" },
            {
                list: [
                    "Obtain a summary of the personal data being processed and the processing activities carried out on it",
                    "Request correction or erasure of your personal data, where applicable",
                    "Have readily available means to register a grievance with us",
                    "Nominate another individual to exercise your rights in the event of death or incapacity",
                    "Withdraw consent provided for the processing of your personal data",
                ],
            },
            { h3: "12.3 Rights under GDPR" },
            {
                list: [
                    "Access: request a copy of the personal data we hold about you",
                    "Correction: request that inaccurate or incomplete data be corrected",
                    "Erasure: request deletion of your data where there is no lawful reason for us to keep it",
                    "Objection: object to processing based on legitimate interest, including direct marketing",
                    "Portability: request your data in a structured, machine-readable format",
                    "Withdraw consent: withdraw consent at any time, without affecting prior lawful processing",
                ],
            },
            { h3: "12.4 Rights under CCPA/CPRA" },
            {
                list: [
                    "Right to notice of data collection categories and purposes",
                    "Right to know/access what personal information is held",
                    "Right to opt out of sale or sharing of personal information",
                    "Right to correct inaccurate personal information",
                    "Right to limit use of sensitive personal information",
                    "Right to request deletion, subject to legal exceptions",
                    "Right not to be discriminated against for exercising these rights",
                ],
            },
            { p: `California residents can exercise these rights by emailing ${EMAIL}. We will respond within 45 days, with a possible 45-day extension where reasonably necessary.` },
        ],
    },
    {
        title: "13. Data Subject / Data Principal Requests",
        blocks: [
            { p: "If you believe that we store, use, or otherwise process your personal data, you may contact us to exercise the rights available to you under applicable data protection and privacy laws, including the General Data Protection Regulation (GDPR) and the Digital Personal Data Protection Act, 2023 (DPDPA), where applicable." },
            { p: "Depending on the applicable law, these rights may include requesting access to, correction or rectification of, erasure or deletion of, restriction of, or objection to the processing of your personal data, as well as requesting a copy or export of your personal data." },
            { p: `To submit a request or ask questions regarding your personal data, please contact us at ${EMAIL}.` },
            { p: "Where we process personal data on behalf of one of our customers, we will assist the relevant customer, as applicable, in responding to your request within a reasonable timeframe and in accordance with applicable data protection laws." },
        ],
    },
    {
        title: "14. Children's Privacy",
        blocks: [
            { p: "The Service is not directed to individuals under the age of 13, and we do not knowingly collect personal data from children under 13. If we learn that we have inadvertently collected such data, we will take steps to delete it. Where consent from a parent or guardian is legally required, we will seek to obtain it before processing a minor's information." },
        ],
    },
    {
        title: "15. AI-Generated Communications",
        blocks: [
            { p: "Calls and chat messages associated with the Service may be generated by AI. While we strive for accuracy, AI-generated content may contain errors or omissions, and you should verify important information before relying on it." },
        ],
    },
    {
        title: "16. Changes to This Policy",
        blocks: [
            { p: "We may update this Privacy Policy from time to time. Material changes will be communicated by email and/or a prominent notice on the Service prior to becoming effective, and the \"Last updated\" date at the top of this Policy will be revised accordingly." },
        ],
    },
    {
        title: "17. Contact Us",
        blocks: [{ p: `If you have questions about this Privacy Policy or wish to exercise any of your rights, please contact us at ${EMAIL}.` }],
    },
];

export default function Page() {
    return (
        <section className="min-h-screen bg-[#EDEDED] text-[#0A0F1C]">
            <div className="max-w-3xl mx-auto px-6 pt-40 pb-24">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Privacy Policy</h1>
                <p className="mt-6 text-sm opacity-60">Last updated: October 30, 2026</p>

                {sections.map((section) => (
                    <div key={section.title} className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{section.title}</h2>
                        {section.blocks.map((block, i) => {
                            if (block.h3) {
                                return (
                                    <h3 key={i} className="mt-6 text-lg font-semibold">
                                        {block.h3}
                                    </h3>
                                );
                            }
                            if (block.list) {
                                return (
                                    <ul key={i} className="mt-4 list-disc pl-6 space-y-2 text-lg leading-relaxed opacity-70">
                                        {block.list.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                );
                            }
                            return (
                                <p key={i} className="mt-4 text-lg leading-relaxed opacity-70">
                                    {block.p}
                                </p>
                            );
                        })}
                    </div>
                ))}
            </div>
        </section>
    );
}
