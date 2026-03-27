import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Truck,
    Clock,
    Briefcase,
    ShoppingCart,
    Search,
    Package,
    Layout,
    Globe,
    Users,
    TrendingUp,
    Mail,
    Phone,
    MapPin,
    Send,
    ChevronRight,
} from "lucide-react";

// --- NORMALIZED HEADER COMPONENT ---
const SectionHeader = ({ title, subtitle, light = false }) => (
    <div className="text-center mb-12 px-4">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl font-bold mb-3 uppercase tracking-tight italic ${light ? "text-white" : "text-mukdee-blue"}`}
        >
            {title}
        </motion.h2>
        <div className="w-16 h-1 bg-mukdee-orange mx-auto mb-5 rounded-full"></div>
        {subtitle && (
            <p
                className={`max-w-xl mx-auto text-base md:text-lg font-medium leading-relaxed ${light ? "text-blue-100" : "text-gray-500"}`}
            >
                {subtitle}
            </p>
        )}
    </div>
);

export default function Home() {
    const [formData, setFormData] = useState({
        full_name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
    });
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        const GOOGLE_SCRIPT_URL =
            "https://script.google.com/macros/s/AKfycbyaY1qb4WXAdRZLWRgvzkQXpumElXAAzTlJy8blCVWmZcTv0RfLnMwXqYxZk91DxKgQ/exec";
        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            setStatus("success");
            setFormData({
                full_name: "",
                company: "",
                phone: "",
                email: "",
                message: "",
            });
        } catch (error) {
            setStatus("error");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="overflow-hidden bg-white text-gray-800">
            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[85vh] flex items-center bg-mukdee-blue text-white pt-20">
                <div className="absolute inset-0 opacity-25">
                    <img
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000"
                        className="w-full h-full object-cover"
                        alt="Supply Chain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-mukdee-blue via-mukdee-blue/70 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6 uppercase italic tracking-tight">
                            Reliable <br />
                            <span className="text-mukdee-orange not-italic border-b-4 border-white/10">
                                Supply & Procurement
                            </span>{" "}
                            <br />
                            Partnerships
                        </h1>
                        <p className="text-lg md:text-xl text-blue-50 mb-8 leading-relaxed max-w-xl">
                            Specializing in GeM tenders, institutional supply,
                            and e-commerce marketplace operations across India.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="bg-mukdee-orange text-white px-8 py-3.5 rounded-xl font-bold text-base hover:scale-105 transition-all uppercase tracking-wider shadow-lg"
                            >
                                Send Inquiry
                            </a>
                            <a
                                href="https://wa.me/919871624185"
                                className="bg-green-600 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:bg-green-700 transition-all flex items-center gap-2 uppercase tracking-wider shadow-lg"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- ABOUT SECTION --- */}
            <section id="about" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <SectionHeader
                                title="About Us"
                                subtitle="Professional Trading & Supply Support"
                            />
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
                                Mukdee Trading Private Limited delivers
                                reliable, structured, and business-focused
                                trading solutions for institutional buyers and
                                marketplace commerce.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    {
                                        i: ShieldCheck,
                                        t: "Trust & Reliability",
                                    },
                                    { i: TrendingUp, t: "Supply Efficiency" },
                                    { i: Users, t: "Long-term Focus" },
                                    { i: Globe, t: "Pan-India Reach" },
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 bg-mukdee-lightBlue p-3.5 rounded-xl border border-blue-50"
                                    >
                                        <item.i
                                            className="text-mukdee-orange"
                                            size={20}
                                        />
                                        <span className="font-bold text-mukdee-blue text-xs uppercase tracking-tight">
                                            {item.t}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-mukdee-blue p-6 rounded-2xl text-white italic text-base border-l-8 border-mukdee-orange shadow-md">
                                "Our approach is built around trust, operational
                                discipline, and dependable execution."
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000"
                                className="rounded-3xl shadow-xl h-[450px] w-full object-cover"
                                alt="About"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-mukdee-orange px-8 py-6 rounded-2xl shadow-xl hidden lg:block z-20 border-4 border-white">
                                <p className="text-white font-black text-4xl italic leading-none">
                                    100%
                                </p>
                                <p className="text-white text-[10px] font-bold uppercase tracking-widest mt-1">
                                    Commitment
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- SERVICES SECTION --- */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 text-gray-800">
                    <SectionHeader
                        title="Core Verticals"
                        subtitle="Specialized Procurement & Marketplace Solutions"
                    />

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-mukdee-blue text-white p-10 rounded-3xl shadow-lg relative group">
                            <Briefcase
                                size={48}
                                className="mb-6 text-mukdee-orange group-hover:scale-110 transition-transform"
                            />
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight italic">
                                Government Procurement
                            </h3>
                            <p className="text-blue-100 text-sm leading-relaxed">
                                Supporting GeM tenders and institutional
                                sourcing needs with high-level coordination.
                            </p>
                        </div>

                        <div className="bg-mukdee-orange text-white p-10 rounded-3xl shadow-lg relative group">
                            <ShoppingCart
                                size={48}
                                className="mb-6 text-mukdee-blue group-hover:scale-110 transition-transform"
                            />
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight italic">
                                Marketplace Operations
                            </h3>
                            <p className="text-orange-50 text-sm leading-relaxed">
                                Online retail management and digital growth
                                across major platforms like Amazon.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { t: "GeM Tenders", i: Search },
                            { t: "Bulk Supply", i: Package },
                            { t: "Cataloging", i: Layout },
                            { t: "Fulfillment", i: Truck },
                            { t: "Sourcing", i: Globe },
                            { t: "Vendor Support", i: Users },
                            { t: "Retail Ops", i: TrendingUp },
                            { t: "Consulting", i: Briefcase },
                        ].map((s, i) => (
                            <div
                                key={i}
                                className="text-center p-5 bg-white border border-gray-100 rounded-2xl hover:border-mukdee-orange transition-all shadow-sm"
                            >
                                <s.i
                                    size={24}
                                    className="mx-auto mb-3 text-mukdee-blue"
                                />
                                <p className="font-bold text-[10px] text-gray-700 uppercase tracking-widest">
                                    {s.t}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- INDUSTRIES --- */}
            <section className="py-20 bg-mukdee-blue text-white">
                <div className="container mx-auto px-6">
                    <SectionHeader
                        title="Supply Categories"
                        light={true}
                        subtitle="Flexible sourcing across diverse business needs."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {[
                            "Apparel & Fashion",
                            "Lifestyle Products",
                            "Institutional Supplies",
                            "Corporate Items",
                            "General Trading",
                            "Marketplace Consumer",
                        ].map((cat, i) => (
                            <div
                                key={i}
                                className="p-8 border border-white/10 rounded-2xl backdrop-blur-sm bg-white/5 font-bold text-lg uppercase tracking-tight text-center hover:bg-white/10 transition-colors"
                            >
                                {cat}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CONTACT SECTION --- */}
            <section id="contact" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <SectionHeader
                        title="Get in Touch"
                        subtitle="Start your business partnership with us today."
                    />

                    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
                        {/* Info Column */}
                        <div className="lg:w-1/3 bg-mukdee-blue p-10 text-white">
                            <div className="space-y-10">
                                <div className="flex gap-4 items-start border-l-2 border-mukdee-orange pl-4">
                                    <div>
                                        <p className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-1">
                                            Email
                                        </p>
                                        <p className="text-sm font-medium break-all">
                                            mukdeetradingprivatelimited@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start border-l-2 border-mukdee-orange pl-4">
                                    <div>
                                        <p className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-1">
                                            Phone
                                        </p>
                                        <p className="text-lg font-bold">
                                            +91 98716 24185
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start border-l-2 border-mukdee-orange pl-4">
                                    <div>
                                        <p className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-1">
                                            Office
                                        </p>
                                        <p className="text-xs font-medium leading-relaxed">
                                            G-34, Kh No. 55/20/2, Jai Vihar,
                                            Baprola, New Delhi - 110043
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:w-2/3 p-8 md:p-12">
                            {status === "success" ? (
                                <div className="text-center py-10">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Send size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-mukdee-blue mb-2 uppercase italic tracking-tight">
                                        Inquiry Received
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-6">
                                        Thank you. We will contact you shortly.
                                    </p>
                                    <button
                                        onClick={() => setStatus(null)}
                                        className="text-mukdee-orange font-bold text-xs uppercase tracking-widest underline"
                                    >
                                        Send Another
                                    </button>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                                >
                                    <div className="flex flex-col group">
                                        <label className="text-[10px] font-bold text-gray-400 mb-2 tracking-widest uppercase">
                                            Full Name
                                        </label>
                                        <input
                                            required
                                            name="full_name"
                                            value={formData.full_name}
                                            onChange={handleChange}
                                            type="text"
                                            className="border-b border-gray-100 py-2 outline-none focus:border-mukdee-orange transition-all font-medium text-gray-800"
                                        />
                                    </div>
                                    <div className="flex flex-col group">
                                        <label className="text-[10px] font-bold text-gray-400 mb-2 tracking-widest uppercase">
                                            Company
                                        </label>
                                        <input
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            type="text"
                                            className="border-b border-gray-100 py-2 outline-none focus:border-mukdee-orange transition-all font-medium text-gray-800"
                                        />
                                    </div>
                                    <div className="flex flex-col group">
                                        <label className="text-[10px] font-bold text-gray-400 mb-2 tracking-widest uppercase">
                                            Phone
                                        </label>
                                        <input
                                            required
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            type="text"
                                            className="border-b border-gray-100 py-2 outline-none focus:border-mukdee-orange transition-all font-medium text-gray-800"
                                        />
                                    </div>
                                    <div className="flex flex-col group">
                                        <label className="text-[10px] font-bold text-gray-400 mb-2 tracking-widest uppercase">
                                            Email
                                        </label>
                                        <input
                                            required
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            type="email"
                                            className="border-b border-gray-100 py-2 outline-none focus:border-mukdee-orange transition-all font-medium text-gray-800"
                                        />
                                    </div>
                                    <div className="md:col-span-2 flex flex-col group">
                                        <label className="text-[10px] font-bold text-gray-400 mb-2 tracking-widest uppercase">
                                            Requirements
                                        </label>
                                        <textarea
                                            required
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="3"
                                            className="border-b border-gray-100 py-2 outline-none focus:border-mukdee-orange transition-all font-medium text-gray-800 resize-none"
                                        ></textarea>
                                    </div>
                                    <button
                                        disabled={isSending}
                                        type="submit"
                                        className={`md:col-span-2 py-4 rounded-xl font-bold text-white transition-all uppercase tracking-widest text-sm ${isSending ? "bg-gray-400" : "bg-mukdee-orange hover:bg-mukdee-blue shadow-md"}`}
                                    >
                                        {isSending
                                            ? "Processing..."
                                            : "Submit Inquiry"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
