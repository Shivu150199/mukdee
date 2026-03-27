import React from "react";
import { motion } from "framer-motion";
import {
    Briefcase,
    ShoppingCart,
    Search,
    Package,
    Layout,
    Globe,
    Users,
    TrendingUp,
    ChevronRight,
    ShieldCheck,
    Zap,
} from "lucide-react";

export default function Services() {
    const mainAreas = [
        {
            title: "Government Procurement / GeM Tenders",
            desc: "We support structured procurement requirements through participation in Government e-Marketplace (GeM) opportunities and institutional sourcing needs. Our focus includes supply coordination, commercial readiness, and efficient order execution for public and institutional buyers.",
            icon: Briefcase,
            // High-quality professional office/meeting image
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000",
            color: "border-mukdee-blue",
            badge: "Institutional Focus",
        },
        {
            title: "E-Commerce & Marketplace Operations",
            desc: "We operate across major online marketplaces such as Amazon, Flipkart, and Myntra, supporting digital retail growth through organized catalog management, marketplace execution, and supply fulfillment coordination.",
            icon: ShoppingCart,
            // Modern E-commerce/Fulfillment image
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000",
            color: "border-mukdee-orange",
            badge: "Digital Growth",
        },
    ];

    const whatWeDo = [
        {
            t: "GeM Tender Participation",
            d: "Supporting structured opportunities in government and institutional procurement.",
            i: Search,
        },
        {
            t: "Government & Institutional Supply",
            d: "Reliable supply for public offices, organizations, and institutions.",
            i: Users,
        },
        {
            t: "Bulk Procurement Support",
            d: "Efficient coordination for larger quantity requirements and execution.",
            i: Package,
        },
        {
            t: "Product Sourcing & Trading",
            d: "Business-oriented sourcing and trading solutions across multiple categories.",
            i: Globe,
        },
        {
            t: "E-Commerce Management",
            d: "Operational support for online marketplace business and sales channels.",
            i: TrendingUp,
        },
        {
            t: "Cataloging & Optimization",
            d: "Organized product presentation for online marketplaces and digital commerce.",
            i: Layout,
        },
    ];

    return (
        <div className="bg-white overflow-hidden">
            {/* --- HERO SECTION --- */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-mukdee-blue">
                    {/* Professional Trading/Strategy Image */}
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
                        className="w-full h-full object-cover opacity-20"
                        alt="Services Background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-mukdee-blue/90 via-mukdee-blue/40 to-white/10" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-mukdee-orange font-bold uppercase tracking-[0.3em] mb-4 text-sm md:text-base"
                    >
                        What We Offer
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter italic"
                    >
                        Our Core Business{" "}
                        <span className="text-mukdee-orange not-italic">
                            Areas
                        </span>
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="w-32 h-1.5 bg-white mx-auto rounded-full"
                    />
                </div>
            </section>

            {/* --- CORE AREAS --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="space-y-32">
                        {mainAreas.map((area, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-20`}
                            >
                                <div className="w-full md:w-1/2 relative group">
                                    <div
                                        className={`absolute -inset-4 ${area.color} border-2 rounded-3xl -z-10 group-hover:scale-105 transition-transform duration-500`}
                                    />
                                    <img
                                        src={area.image}
                                        alt={area.title}
                                        className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                                    />
                                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-mukdee-blue font-bold text-xs uppercase tracking-widest shadow-lg">
                                        {area.badge}
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2">
                                    <div className="bg-mukdee-lightBlue w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                        <area.icon
                                            size={32}
                                            className="text-mukdee-blue"
                                        />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-mukdee-blue mb-6 leading-tight uppercase tracking-tighter">
                                        {area.title}
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        {area.desc}
                                    </p>
                                    <div className="flex gap-6">
                                        <div className="flex items-center gap-2 text-sm font-bold text-mukdee-orange">
                                            <ShieldCheck size={18} /> Quality
                                            Execution
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-bold text-mukdee-orange">
                                            <Zap size={18} /> Timely Support
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- GRID SECTION (WHAT WE DO) --- */}
            <section className="py-24 bg-mukdee-blue relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic">
                            What{" "}
                            <span className="text-mukdee-orange not-italic underline decoration-white/20">
                                We Do
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whatWeDo.map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-white/10 backdrop-blur-md border border-white/10 p-10 rounded-3xl group hover:bg-white transition-all duration-300"
                            >
                                <div className="bg-mukdee-orange/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-mukdee-blue transition-colors">
                                    <item.i
                                        size={28}
                                        className="text-white group-hover:text-white"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-mukdee-blue transition-colors">
                                    {item.t}
                                </h4>
                                <p className="text-blue-100 text-sm leading-relaxed group-hover:text-gray-600 transition-colors">
                                    {item.d}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
