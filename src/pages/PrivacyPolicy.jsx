import React from "react";

export default function PrivacyPolicy() {
    const lastUpdated = "March 27, 2026"; // You can update this date

    return (
        <div className="pt-24  bg-gray-50 min-h-screen">
            <div className="container mx-auto px-6 ">
                <div className="bg-white p-8 md:p-16 rounded-3xl shadow-xl border border-gray-100">
                    {/* Header */}
                    <header className="border-b border-gray-100 pb-8 mb-10">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-mukdee-blue mb-4 uppercase tracking-tighter">
                            Privacy Policy
                        </h1>
                        <div className="w-20 h-1 bg-mukdee-orange mb-6"></div>
                        <p className="text-gray-500 font-semibold">
                            Mukdee Trading Private Limited
                        </p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-400">
                            <p>
                                <strong>Effective Date:</strong> {lastUpdated}
                            </p>
                            <p>
                                <strong>Last Updated:</strong> {lastUpdated}
                            </p>
                        </div>
                    </header>

                    {/* Body Content */}
                    <div className="text-gray-700 leading-relaxed space-y-8 text-lg">
                        <section>
                            <p>
                                Mukdee Trading Private Limited (“Mukdee”,
                                “Company”, “we”, “us”, or “our”) values your
                                privacy and is committed to protecting your
                                personal data. This Privacy Policy explains how
                                we collect, use, store, share, and protect
                                information when you visit or use our website,
                                contact us, submit business inquiries, engage
                                with us for government procurement / GeM tender
                                opportunities, or interact with us in connection
                                with our trading, supply, and e-commerce
                                operations.
                            </p>
                            <p className="mt-4">
                                This Policy is intended for our website
                                visitors, customers, vendors, institutional
                                buyers, government / public sector procurement
                                representatives, marketplace partners, service
                                providers, and other individuals who interact
                                with us (“you” or “your”).
                            </p>
                            <p className="mt-4">
                                This Policy should be read together with our
                                Terms of Use, Cookie Policy (if any), and any
                                separate contractual terms, purchase orders,
                                vendor terms, or tender documents that may apply
                                to a particular transaction or engagement.
                            </p>
                        </section>

                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-bold text-mukdee-blue mb-4 italic">
                                1. SCOPE OF THIS POLICY
                            </h2>
                            <p>
                                This Policy applies to personal data and other
                                information collected by Mukdee Trading Private
                                Limited through:
                            </p>
                            <ul className="list-disc ml-8 mt-3 space-y-2">
                                <li>
                                    Our website and any related landing pages;
                                </li>
                                <li>
                                    Contact forms, inquiry forms, and business
                                    proposal requests;
                                </li>
                                <li>
                                    Emails, phone calls, WhatsApp messages, SMS,
                                    and other communications;
                                </li>
                                <li>
                                    Tender, vendor, procurement, supply, or
                                    onboarding processes;
                                </li>
                                <li>
                                    Marketplace, e-commerce, logistics, or
                                    order-related interactions; and
                                </li>
                                <li>
                                    Any other online or offline interactions
                                    connected with our business operations.
                                </li>
                            </ul>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-bold text-mukdee-blue mb-4 italic">
                                2. INFORMATION WE MAY COLLECT
                            </h2>
                            <p className="mb-4">
                                Depending on how you interact with us, we may
                                collect the following categories of information:
                            </p>

                            <div className="space-y-6 ml-4">
                                <div>
                                    <h3 className="font-bold text-mukdee-orange uppercase text-sm mb-2">
                                        A. Personal and Contact Information
                                    </h3>
                                    <p className="text-sm">
                                        Full name, Company / organization name,
                                        Designation, Mobile/telephone number,
                                        Email address, Business/billing/shipping
                                        address, GSTIN, PAN, and
                                        identity-related information provided
                                        during onboarding.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-mukdee-orange uppercase text-sm mb-2">
                                        B. Business and Transaction Information
                                    </h3>
                                    <p className="text-sm">
                                        Product/service requirements,
                                        Tender-related details, quotation
                                        requests, bids, purchase orders,
                                        invoices, payment information, and
                                        records of business correspondence.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-mukdee-orange uppercase text-sm mb-2">
                                        C. Technical and Usage Information
                                    </h3>
                                    <p className="text-sm">
                                        IP address, browser type, device type,
                                        operating system, website pages visited,
                                        time spent, and navigation patterns.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-mukdee-orange uppercase text-sm mb-2">
                                        D. Communication Records
                                    </h3>
                                    <p className="text-sm">
                                        Emails, chat messages, call logs,
                                        customer support records, feedback, and
                                        WhatsApp or SMS communications.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 3 & 4 */}
                        <section className="grid md:grid-cols-2 gap-8">
                            <div className="bg-mukdee-lightBlue p-6 rounded-2xl border border-blue-100">
                                <h2 className="text-xl font-bold text-mukdee-blue mb-3">
                                    3. SENSITIVE DATA
                                </h2>
                                <p className="text-sm">
                                    We do not intentionally request highly
                                    sensitive personal data unless strictly
                                    necessary for a lawful business purpose.
                                    Please do not share unnecessary sensitive
                                    information with us.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h2 className="text-xl font-bold text-mukdee-blue mb-3">
                                    4. COLLECTION METHODS
                                </h2>
                                <p className="text-sm">
                                    We collect data directly from you
                                    (forms/calls), automatically (cookies/logs),
                                    and from authorized third parties or public
                                    business sources.
                                </p>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-bold text-mukdee-blue mb-4 italic">
                                5. PURPOSES OF PROCESSING
                            </h2>
                            <p>We use your information to:</p>
                            <ul className="list-disc ml-8 mt-3 space-y-2 text-sm grid md:grid-cols-2 gap-x-8">
                                <li>Respond to inquiries and proposals.</li>
                                <li>
                                    Execute GeM tenders and institutional
                                    procurement.
                                </li>
                                <li>
                                    Process orders and coordinate
                                    sourcing/logistics.
                                </li>
                                <li>
                                    Manage e-commerce and marketplace
                                    operations.
                                </li>
                                <li>
                                    Verify business identity and prevent fraud.
                                </li>
                                <li>
                                    Improve our website and customer experience.
                                </li>
                                <li>
                                    Comply with applicable laws and government
                                    requests.
                                </li>
                            </ul>
                        </section>

                        {/* Section 6 */}
                        <section className="bg-mukdee-blue text-white p-8 rounded-3xl">
                            <h2 className="text-2xl font-bold mb-4 italic">
                                6. LEGAL BASIS
                            </h2>
                            <p className="text-sm leading-relaxed opacity-90">
                                Our processing practices are intended to align
                                with applicable Indian law, including the
                                Information Technology Act, 2000 and the Digital
                                Personal Data Protection Act, 2023. We process
                                data based on consent, performance of contract,
                                legal obligations, and legitimate business
                                interests.
                            </p>
                        </section>

                        {/* Sections 7-11 Summary */}
                        <div className="grid md:grid-cols-2 gap-10">
                            <section>
                                <h2 className="text-xl font-bold text-mukdee-blue mb-2 italic">
                                    8. SHARING OF INFORMATION
                                </h2>
                                <p className="text-sm">
                                    We do not sell your personal data. We share
                                    information only with authorized personnel,
                                    logistics/IT partners, government bodies for
                                    tenders, and legal advisors.
                                </p>
                            </section>
                            <section>
                                <h2 className="text-xl font-bold text-mukdee-blue mb-2 italic">
                                    11. DATA SECURITY
                                </h2>
                                <p className="text-sm">
                                    We implement technical and organizational
                                    measures to protect data against
                                    unauthorized access, loss, or disclosure.
                                    However, no internet transmission is 100%
                                    secure.
                                </p>
                            </section>
                        </div>

                        {/* Section 12 */}
                        <section>
                            <h2 className="text-2xl font-bold text-mukdee-blue mb-4 italic">
                                12. YOUR RIGHTS
                            </h2>
                            <p className="text-sm mb-4">
                                Subject to applicable law, you may have the
                                right to:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Access Data",
                                    "Request Correction",
                                    "Request Deletion",
                                    "Withdraw Consent",
                                    "Raise Grievance",
                                ].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-mukdee-lightBlue text-mukdee-blue text-xs font-bold rounded-full border border-blue-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Contact / Grievance */}
                        <section className="border-t border-gray-100 pt-10">
                            <h2 className="text-2xl font-bold text-mukdee-blue mb-6 italic">
                                16. CONTACT / GRIEVANCE
                            </h2>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                <p className="font-bold text-mukdee-blue">
                                    Mukdee Trading Private Limited
                                </p>
                                <div className="mt-4 space-y-2 text-sm">
                                    <p>
                                        <strong>Email:</strong>{" "}
                                        mukdeetradingprivatelimited@gmail.com
                                    </p>
                                    <p>
                                        <strong>Phone:</strong> +91 98716 24185
                                    </p>
                                    <p>
                                        <strong>Address:</strong> G-34, Kh No.
                                        55/20/2, 2nd floor, Jai Vihar, Baprola,
                                        New Delhi - 110043
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Disclaimer */}
                        <footer className="mt-12 p-6 bg-orange-50 rounded-2xl border border-orange-100 italic text-xs text-orange-800">
                            <strong>IMPORTANT NOTE:</strong> This is a
                            professional website privacy policy draft prepared
                            for general business use by Mukdee Trading Private
                            Limited. It is not a substitute for formal legal
                            advice. Before publishing, you should have this
                            document reviewed by your legal counsel / compliance
                            adviser.
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}
