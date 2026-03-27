import React from "react";
import { motion } from "framer-motion";
import {
    ShoppingBag,
    Laptop,
    Building2,
    Briefcase,
    Globe,
    ShoppingCart,
    ArrowRight,
} from "lucide-react";

export default function Industries() {
    const categories = [
        {
            title: "Apparel & Fashion",
            desc: "Lifestyle and fashion products aligned with modern clothing demand.",
            icon: ShoppingBag,
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Lifestyle Products",
            desc: "Consumer-focused items designed for modern marketplace environments.",
            icon: Laptop,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Institutional Supplies",
            desc: "Reliable products tailored for office, institutional, and public sector needs.",
            icon: Building2,
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Corporate Procurement",
            desc: "Essential business-use products aligned with organized procurement workflows.",
            icon: Briefcase,
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "General Trading Products",
            desc: "Flexible sourcing and trading support across multiple diverse categories.",
            icon: Globe,
            image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800",
        },
        {
            title: "Marketplace Consumer",
            desc: "Products optimized for modern e-commerce and online selling channels.",
            icon: ShoppingCart,
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
        },
    ];

    return (
        <div className="bg-white">
            {/* --- HERO SECTION --- */}
            <section className="pt-40 pb-20 bg-mukdee-blue relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
                        className="w-full h-full object-cover"
                        alt="bg"
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-mukdee-orange font-bold uppercase tracking-widest text-sm mb-4"
                    >
                        Our Expertise
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-6xl font-black text-white mb-6 italic"
                    >
                        Supply{" "}
                        <span className="text-mukdee-orange not-italic">
                            Categories
                        </span>{" "}
                        We Support
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-blue-100 text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Flexible trading and procurement solutions tailored for
                        diverse institutional and marketplace requirements
                        across India.
                    </motion.p>
                </div>
            </section>

            {/* --- CATEGORIES GRID --- */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative h-[450px] rounded-3xl overflow-hidden shadow-2xl"
                            >
                                {/* Background Image */}
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-mukdee-blue via-mukdee-blue/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                                <div className="absolute inset-0 border-2 border-white/20 m-4 rounded-2xl pointer-events-none" />

                                {/* Content */}
                                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                                    <div className="bg-mukdee-orange w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform">
                                        <cat.icon size={28} />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 tracking-tighter uppercase">
                                        {cat.title}
                                    </h3>
                                    <p className="text-blue-50 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        {cat.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-mukdee-orange font-bold text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        Inquire Category{" "}
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- BOTTOM CTA --- */}
            <section className="pb-24">
                <div className="container mx-auto px-6">
                    <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 text-center border-2 border-dashed border-gray-200">
                        <h2 className="text-3xl md:text-4xl font-black text-mukdee-blue mb-6 italic uppercase tracking-tighter">
                            Looking for a Specific Product?
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto mb-10 text-lg">
                            Our sourcing network is flexible. If your category
                            isn't listed, contact us to explore custom trading
                            and procurement support.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-mukdee-blue text-white px-12 py-4 rounded-xl font-bold hover:bg-mukdee-orange transition-all shadow-xl hover:-translate-y-1"
                        >
                            Contact Our Sourcing Team
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
