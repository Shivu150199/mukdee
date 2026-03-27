import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

export default function Contact() {
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
            "https://script.google.com/macros/s/AKfycbytif-DvdDsVBbXJPXff430Uh9P1IssKqo9gcdIIiRWmJbp2B89Y1RsjqqgJA6WkmhO/exec";

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
            console.error(error);
            setStatus("error");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="bg-white min-h-screen">
            {/* --- HERO SECTION --- */}
            <section className="relative pt-40 pb-24 bg-mukdee-blue overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&q=80&w=2000"
                        className="w-full h-full object-cover"
                        alt="Contact Background"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-mukdee-orange font-bold uppercase tracking-[0.3em] text-sm mb-4"
                    >
                        Contact Us
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter"
                    >
                        Let’s Build a{" "}
                        <span className="text-mukdee-orange not-italic underline decoration-white/20">
                            Partnership
                        </span>
                    </motion.h1>
                </div>
            </section>

            {/* --- MAIN CONTENT --- */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-3 gap-12 items-start">
                            {/* LEFT SIDE: INFO CARDS */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:col-span-1 space-y-6"
                            >
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group hover:border-mukdee-blue transition-colors">
                                    <div className="bg-mukdee-lightBlue w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-mukdee-blue group-hover:text-white transition-all">
                                        <Mail size={24} />
                                    </div>
                                    <h3 className="font-bold text-mukdee-blue uppercase tracking-tighter mb-2">
                                        Email Address
                                    </h3>
                                    <p className="text-gray-600 text-sm break-all font-medium">
                                        mukdeetradingprivatelimited@gmail.com
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group hover:border-mukdee-blue transition-colors">
                                    <div className="bg-mukdee-lightBlue w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-mukdee-blue group-hover:text-white transition-all">
                                        <Phone size={24} />
                                    </div>
                                    <h3 className="font-bold text-mukdee-blue uppercase tracking-tighter mb-2">
                                        Phone Numbers
                                    </h3>
                                    <p className="text-gray-600 font-medium">
                                        +91 9871624185
                                    </p>
                                    <p className="text-gray-600 font-medium">
                                        +91 8285441138
                                    </p>
                                </div>

                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group hover:border-mukdee-blue transition-colors">
                                    <div className="bg-mukdee-lightBlue w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-mukdee-blue group-hover:text-white transition-all">
                                        <MapPin size={24} />
                                    </div>
                                    <h3 className="font-bold text-mukdee-blue uppercase tracking-tighter mb-2">
                                        Business Address
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                        G-34, Kh No. 55/20/2, 2nd floor, Jai
                                        Vihar, Baprola, New Delhi - 110043
                                    </p>
                                </div>

                                {/* QUICK WHATSAPP LINK */}
                                <a
                                    href="https://wa.me/919871624185"
                                    className="flex items-center justify-between bg-green-600 text-white p-6 rounded-3xl shadow-lg hover:bg-green-700 transition-all hover:scale-[1.02]"
                                >
                                    <div className="flex items-center gap-4">
                                        <MessageSquare />
                                        <span className="font-bold uppercase tracking-widest text-sm">
                                            Quick WhatsApp
                                        </span>
                                    </div>
                                    <Clock size={16} className="opacity-50" />
                                </a>
                            </motion.div>

                            {/* RIGHT SIDE: FORM */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="lg:col-span-2 bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border-t-8 border-mukdee-orange"
                            >
                                {status === "success" ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <Send size={40} />
                                        </div>
                                        <h3 className="text-4xl font-black text-mukdee-blue mb-4 uppercase tracking-tighter italic">
                                            Inquiry Received
                                        </h3>
                                        <p className="text-gray-500 max-w-sm mx-auto mb-10">
                                            We have received your business
                                            message and our procurement team
                                            will contact you shortly.
                                        </p>
                                        <button
                                            onClick={() => setStatus(null)}
                                            className="bg-mukdee-blue text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-mukdee-orange transition-all"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="mb-12">
                                            <h2 className="text-3xl font-black text-mukdee-blue uppercase tracking-tighter italic mb-2">
                                                Submit Business Inquiry
                                            </h2>
                                            <p className="text-gray-400 font-medium">
                                                Fill in the details below and we
                                                will get back to you.
                                            </p>
                                        </div>
                                        <form
                                            onSubmit={handleSubmit}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-10"
                                        >
                                            <div className="flex flex-col group">
                                                <label className="text-[10px] font-black text-gray-400 mb-2 tracking-[0.2em] group-focus-within:text-mukdee-orange transition-colors">
                                                    FULL NAME
                                                </label>
                                                <input
                                                    required
                                                    name="full_name"
                                                    value={formData.full_name}
                                                    onChange={handleChange}
                                                    type="text"
                                                    className="border-b-2 border-gray-100 py-2 outline-none focus:border-mukdee-orange transition-all bg-transparent"
                                                />
                                            </div>
                                            <div className="flex flex-col group">
                                                <label className="text-[10px] font-black text-gray-400 mb-2 tracking-[0.2em] group-focus-within:text-mukdee-orange transition-colors">
                                                    COMPANY / ORG
                                                </label>
                                                <input
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    type="text"
                                                    className="border-b-2 border-gray-100 py-2 outline-none focus:border-mukdee-orange transition-all bg-transparent"
                                                />
                                            </div>
                                            <div className="flex flex-col group">
                                                <label className="text-[10px] font-black text-gray-400 mb-2 tracking-[0.2em] group-focus-within:text-mukdee-orange transition-colors">
                                                    PHONE NUMBER
                                                </label>
                                                <input
                                                    required
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    type="text"
                                                    className="border-b-2 border-gray-100 py-2 outline-none focus:border-mukdee-orange transition-all bg-transparent"
                                                />
                                            </div>
                                            <div className="flex flex-col group">
                                                <label className="text-[10px] font-black text-gray-400 mb-2 tracking-[0.2em] group-focus-within:text-mukdee-orange transition-colors">
                                                    EMAIL ADDRESS
                                                </label>
                                                <input
                                                    required
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    type="email"
                                                    className="border-b-2 border-gray-100 py-2 outline-none focus:border-mukdee-orange transition-all bg-transparent"
                                                />
                                            </div>
                                            <div className="md:col-span-2 flex flex-col group">
                                                <label className="text-[10px] font-black text-gray-400 mb-2 tracking-[0.2em] group-focus-within:text-mukdee-orange transition-colors">
                                                    MESSAGE / REQUIREMENTS
                                                </label>
                                                <textarea
                                                    required
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows="4"
                                                    className="border-b-2 border-gray-100 py-2 outline-none focus:border-mukdee-orange transition-all bg-transparent resize-none"
                                                ></textarea>
                                            </div>

                                            <button
                                                disabled={isSending}
                                                type="submit"
                                                className={`md:col-span-2 py-5 rounded-2xl font-black text-white shadow-xl transition-all uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 ${isSending ? "bg-gray-400 cursor-not-allowed" : "bg-mukdee-blue hover:bg-mukdee-orange hover:-translate-y-1 active:scale-95 shadow-mukdee-blue/20"}`}
                                            >
                                                {isSending
                                                    ? "Processing..."
                                                    : "Submit Inquiry"}
                                                {!isSending && (
                                                    <Send size={16} />
                                                )}
                                            </button>

                                            {status === "error" && (
                                                <p className="text-red-500 text-xs font-bold text-center md:col-span-2 uppercase">
                                                    Failed to send. Please check
                                                    your connection.
                                                </p>
                                            )}
                                        </form>
                                    </>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
