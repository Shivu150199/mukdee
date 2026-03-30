import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Settings, Wrench, PenTool, Factory, ArrowRight } from "lucide-react";

export default function TopCategories() {
    // --- INDUSTRIAL CATEGORIES DATA (Inspired by Quantinox) ---
    const topCategories =[
        {
            title: "Safety & PPE",
            desc: "Industrial safety gear, helmets, gloves, and protective equipment for workforce safety.",
            icon: Shield,
            img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop" // Hard hats/Safety
        },
        {
            title: "Electrical & Lighting",
            desc: "Cables, switchgears, industrial lighting, and commercial electrical components.",
            icon: Zap,
            img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop" // Electrical panels
        },
        {
            title: "Valves & Pumps",
            desc: "High-pressure valves, industrial pumps, and fluid control mechanisms.",
            icon: Settings, // representing mechanical parts
            img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" // Industrial machinery/pipes
        },
        {
            title: "Bearings & Transmission",
            desc: "Roller bearings, ball bearings, and power transmission components for heavy machinery.",
            icon: Factory,
            img: "https://images.unsplash.com/photo-1537151377170-9c19a791bbea?q=80&w=800&auto=format&fit=crop" // Mechanical gears/bearings
        },
        {
            title: "Fasteners & Hardware",
            desc: "Industrial-grade nuts, bolts, screws, and structural fastening hardware.",
            icon: Wrench,
            img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=800&auto=format&fit=crop" // Fasteners/Tools
        },
        {
            title: "Hand & Power Tools",
            desc: "Professional-grade drilling, cutting, and mechanical tools for industrial operations.",
            icon: PenTool,
            img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop" // Tools
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                
                {/* Section Header */}
                <div className="text-center mb-16 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter italic text-mukdee-blue"
                    >
                        Our Top <span className="text-mukdee-orange not-italic">Categories</span>
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-mukdee-orange mx-auto mb-6 rounded-full"></div>
                    <p className="max-w-2xl mx-auto text-lg font-medium leading-relaxed text-gray-500">
                        We streamline B2B procurement by supplying high-quality industrial goods, MRO (Maintenance, Repair, and Operations) products, and institutional consumables.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[350px] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            {/* Background Image with Zoom Effect */}
                            <img 
                                src={category.img} 
                                alt={category.title} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            
                            {/* Dark Gradient Overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-mukdee-blue via-mukdee-blue/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
                            
                            {/* Orange Border Highlight on Hover */}
                            <div className="absolute inset-0 border-4 border-transparent group-hover:border-mukdee-orange transition-colors duration-300 rounded-3xl z-20 pointer-events-none" />

                            {/* Card Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
                                {/* Icon */}
                                <div className="bg-mukdee-orange/90 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
                                    <category.icon size={24} className="text-white" />
                                </div>
                                
                                {/* Text */}
                                <h3 className="text-2xl font-bold mb-2 tracking-tight">
                                    {category.title}
                                </h3>
                                
                                {/* Description (Slides up slightly on hover) */}
                                <p className="text-blue-50 text-sm leading-relaxed mb-4 opacity-80 group-hover:opacity-100 transform group-hover:-translate-y-1 transition-all duration-300">
                                    {category.desc}
                                </p>
                                
                                {/* Action Link */}
                                <div className="flex items-center gap-2 text-mukdee-orange font-bold text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    View Products <ArrowRight size={14} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <div className="mt-16 text-center">
                    <a href="#contact" className="inline-flex items-center gap-3 bg-white border-2 border-gray-200 text-mukdee-blue px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:border-mukdee-orange hover:text-mukdee-orange transition-colors shadow-sm hover:shadow-md">
                        Request a Full Product Catalog <ArrowRight size={18} />
                    </a>
                </div>

            </div>
        </section>
    );
}