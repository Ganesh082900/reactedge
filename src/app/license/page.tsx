import Link from "next/link";

export const metadata = { title: "License Agreement" };

const EMAIL = "info@ReActEdge.io";

type Section = { title: string; paragraphs?: string[]; list?: string[]; after?: string };

const intro =
    "This Software License Agreement (the \"Agreement\") is a legal agreement between you, either an individual or the entity you represent (\"Licensee\" or \"you\"), and ReActEdge (\"Licensor,\" \"we,\" \"us,\" or \"our\"). It governs your access to and use of the ReActEdge platform, including related software, APIs, applications, documentation, updates, and websites (collectively, the \"Software\"). By accessing, installing, or using the Software, or by clicking to accept this Agreement, you agree to be bound by it. If you do not agree, you must not access or use the Software.";

const sections: Section[] = [
    {
        title: "1. Definitions",
        list: [
            "\"Affiliate\" means any entity that controls, is controlled by, or is under common control with a party.",
            "\"Authorized Users\" means the employees and contractors of Licensee whom Licensee permits to use the Software under its account.",
            "\"Documentation\" means the user guides, specifications, and instructions we make available for the Software.",
            "\"Customer Data\" means all data, content, and materials that Licensee or its Authorized Users submit to or process through the Software.",
            "\"Order\" means an order form, subscription plan selection, or statement of work that references this Agreement.",
            "\"Updates\" means patches, bug fixes, upgrades, and new versions of the Software that we make generally available.",
        ],
    },
    {
        title: "2. Grant of License",
        paragraphs: [
            "Subject to the terms of this Agreement and payment of applicable fees, we grant Licensee a limited, non-exclusive, non-transferable, non-sublicensable, revocable license during the Term to access and use the Software and Documentation for Licensee's internal business purposes, in accordance with the scope set out in the applicable Order.",
            "Licensee may permit Authorized Users to use the Software, and is responsible for their compliance with this Agreement. Use of the Software by Affiliates requires our written consent.",
        ],
    },
    {
        title: "3. Restrictions",
        paragraphs: ["Except as expressly permitted in this Agreement or by applicable law that cannot be waived, Licensee shall not, and shall not permit any third party to:"],
        list: [
            "Copy, modify, translate, or create derivative works of the Software.",
            "Reverse engineer, decompile, disassemble, or attempt to derive the source code, models, or algorithms of the Software.",
            "Sell, resell, rent, lease, lend, distribute, sublicense, or otherwise make the Software available to any third party, or use it to provide a service bureau or competing product.",
            "Remove, alter, or obscure any proprietary notices, labels, or marks on the Software or Documentation.",
            "Circumvent usage limits, license keys, or security and access controls.",
            "Use the Software to build or train a competing product, or to benchmark it for publication without our written consent.",
            "Introduce malware, or probe, scan, or test the vulnerability of the Software without authorization.",
            "Use the Software in violation of applicable law, or to infringe the rights of any third party.",
        ],
    },
    {
        title: "4. Ownership & Reservation of Rights",
        paragraphs: [
            "The Software, Documentation, and all related intellectual property rights, including all copies, modifications, and improvements, are and remain the exclusive property of ReActEdge and its licensors. The Software is licensed, not sold. No rights are granted except as expressly stated in this Agreement, and all other rights are reserved.",
            "Licensee retains all rights in its Customer Data. Licensee grants us a non-exclusive, worldwide, royalty-free license to host, process, and use Customer Data solely to provide, secure, support, and improve the Software, as described in our Privacy Policy.",
            "If Licensee provides suggestions or feedback about the Software, we may use it without restriction or obligation.",
        ],
    },
    {
        title: "5. Fees & Payment",
        paragraphs: [
            "Licensee shall pay the fees set out in the applicable Order. Unless stated otherwise, fees are invoiced in advance, are non-cancellable and non-refundable except as required by law, and are exclusive of taxes, duties, and levies, which Licensee is responsible for paying.",
            "Overdue amounts may bear interest at the lesser of 1.5% per month or the maximum rate permitted by law. We may suspend access to the Software for non-payment after reasonable notice.",
        ],
    },
    {
        title: "6. Term & Termination",
        paragraphs: [
            "This Agreement begins on the date Licensee first accepts it and continues for the subscription period stated in the Order, and any renewal periods (the \"Term\"). Unless the Order states otherwise, subscriptions renew automatically for successive periods of equal length unless either party gives notice of non-renewal before the end of the then-current period.",
            "Either party may terminate this Agreement for material breach if the breach is not cured within thirty (30) days of written notice. We may suspend or terminate access immediately if Licensee breaches Section 3, or if use of the Software poses a security risk or violates law.",
            "On termination or expiry, all licenses granted end and Licensee must stop using the Software. On request, we will make Customer Data available for export for a reasonable period, after which we may delete it in line with our retention practices, unless law requires otherwise. Sections that by their nature should survive, including Sections 1, 3, 4, 5, 8, 9, 10, 11, and 12, will survive termination.",
        ],
    },
    {
        title: "7. Updates, Support & Availability",
        paragraphs: [
            "We may release Updates from time to time and may modify or discontinue features, provided we do not materially reduce the core functionality of the Software during a paid Term. Support is provided as described in the applicable Order or Documentation.",
            "We use commercially reasonable efforts to keep the Software available, but do not guarantee uninterrupted or error-free operation. Beta, preview, or trial features are provided \"as-is\" and may be changed or withdrawn at any time.",
        ],
    },
    {
        title: "8. Confidentiality",
        paragraphs: [
            "Each party may receive non-public information from the other that is marked confidential or that a reasonable person would understand to be confidential (\"Confidential Information\"). The receiving party shall use it only to perform or exercise rights under this Agreement, protect it with at least reasonable care, and not disclose it except to personnel and advisers who need to know and are bound by equivalent obligations.",
            "These obligations do not apply to information that is or becomes public through no fault of the recipient, was already known to or independently developed by the recipient, or was lawfully received from a third party. A party may disclose Confidential Information where required by law, after giving prompt notice where legally permitted. These obligations continue for five (5) years after termination, and indefinitely for trade secrets.",
        ],
    },
    {
        title: "9. Warranties & Disclaimers",
        paragraphs: [
            "Each party represents that it has the legal power and authority to enter into this Agreement. We warrant that the Software will perform materially in accordance with the Documentation during the Term. Licensee's sole remedy for breach of this warranty is for us to correct the non-conformity or, if we cannot do so within a reasonable time, to terminate the affected Order and refund prepaid fees for the remaining Term.",
            "EXCEPT AS EXPRESSLY STATED IN THIS AGREEMENT, THE SOFTWARE IS PROVIDED \"AS IS\" AND \"AS AVAILABLE,\" AND WE DISCLAIM ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.",
            "Outputs generated by artificial intelligence features may be inaccurate or incomplete. Licensee is responsible for evaluating outputs before relying on them.",
        ],
    },
    {
        title: "10. Indemnification",
        paragraphs: [
            "We will defend Licensee against any third-party claim alleging that the Software, as provided by us and used in accordance with this Agreement, infringes that third party's intellectual property rights, and will pay damages and costs finally awarded or agreed in settlement. If such a claim arises, we may procure the right to continue use, modify the Software to be non-infringing, or terminate the affected license and refund prepaid fees for the remaining Term. We have no obligation for claims arising from Customer Data, modifications not made by us, combinations with third-party products, or use in breach of this Agreement.",
            "Licensee will defend and indemnify us and our Affiliates, officers, and employees against third-party claims arising from Customer Data, Licensee's breach of Section 3, or Licensee's violation of applicable law.",
            "The indemnified party must give prompt written notice, allow the indemnifying party sole control of the defense and settlement, and provide reasonable cooperation. This Section states each party's entire liability for indemnified claims.",
        ],
    },
    {
        title: "11. Limitation of Liability",
        paragraphs: [
            "TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY SHALL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOSS OF PROFITS, REVENUE, GOODWILL, OR DATA, ARISING OUT OF OR RELATING TO THIS AGREEMENT, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
            "EACH PARTY'S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THIS AGREEMENT SHALL NOT EXCEED THE FEES PAID OR PAYABLE BY LICENSEE FOR THE SOFTWARE IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.",
            "These limitations do not apply to liability that cannot be limited by law, Licensee's payment obligations, breach of Section 3, or either party's indemnification obligations or misuse of the other's intellectual property.",
        ],
    },
    {
        title: "12. General Provisions",
        list: [
            "Governing law: this Agreement is governed by the laws of the jurisdiction in which ReActEdge is established, without regard to conflict of law principles. The parties will first attempt to resolve disputes through good faith negotiation, failing which the courts or arbitral body of that jurisdiction have exclusive jurisdiction.",
            "Export and sanctions: Licensee shall comply with all applicable export control and sanctions laws and shall not use the Software in any embargoed jurisdiction or by any restricted party.",
            "Assignment: Licensee may not assign this Agreement without our prior written consent. We may assign it in connection with a merger, acquisition, or sale of assets.",
            "Force majeure: neither party is liable for delay or failure caused by events beyond its reasonable control, other than payment obligations.",
            "Notices: notices must be in writing and sent to the contact address in the Order or, for us, to the email below.",
            "Entire agreement: this Agreement, together with any Order, our Terms of Use, and Privacy Policy, is the entire agreement on its subject matter. If there is a conflict, the Order prevails, then this Agreement.",
            "Severability and waiver: if a provision is held unenforceable, the rest remains in effect. Failure to enforce a provision is not a waiver. Amendments must be in writing, except that we may update this Agreement for future Terms on notice.",
            "Relationship: the parties are independent contractors. There are no third-party beneficiaries.",
        ],
    },
    {
        title: "13. Third-Party & Open Source Components",
        paragraphs: [
            "The Software may include third-party and open source components that are licensed under their own terms, which apply to those components in place of this Agreement to the extent required by those licenses. Integrations with third-party services are subject to the terms of those providers, and we are not responsible for them.",
        ],
    },
    {
        title: "14. Contact",
        paragraphs: [`For questions about this Agreement or to request licensing information, contact us at ${EMAIL}.`],
    },
];

export default function Page() {
    return (
        <section className="min-h-screen bg-[#EDEDED] text-[#0A0F1C]">
            <div className="max-w-3xl mx-auto px-6 pt-40 pb-24">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">License Agreement</h1>
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
                    See also our{" "}
                    <Link href="/terms-of-use" className="underline">
                        Terms of Use
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="underline">
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>
        </section>
    );
}
