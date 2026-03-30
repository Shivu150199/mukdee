import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Added for navigation
import {
    Building2,
    Briefcase,
    Globe,
    ShoppingCart,
    ArrowRight,
    MessageCircle, // Added for Enquiry Icon
} from "lucide-react";

export default function Industries() {
    const industrialItems = [
        {
            title: "Automotive Parts and Spares",
            image: "https://quantinox.com/media/categories-images/Automotive-Parts-and-Spares.png",
        },
        {
            title: "Conveyor System",
            image: "https://quantinox.com/media/categories-images/Conveyor-System.png",
        },
        {
            title: "Battery & UPS",
            image: "https://quantinox.com/media/categories-images/ELE-Battery&UPS.png",
        },
        {
            title: "Cables",
            image: "https://quantinox.com/media/categories-images/ELE-Cables.png",
        },
        {
            title: "Conduit & Fittings",
            image: "https://quantinox.com/media/categories-images/ELE-Conduit&Fittings.png",
        },
        {
            title: "Control & Switchgear",
            image: "https://quantinox.com/media/categories-images/ELE-Control&Switchgear.png",
        },
        {
            title: "Electrical Panels",
            image: "https://quantinox.com/media/categories-images/ELE-Electric-Panels.png",
        },
        {
            title: "Electrical Appliances & Utilities",
            image: "https://quantinox.com/media/categories-images/ELE-Electrical-Appliances&Utilities.png",
        },
        {
            title: "Electrical Equipment",
            image: "https://quantinox.com/media/categories-images/ELE-Electrical-Equipment.png",
        },
        {
            title: "Lighting",
            image: "https://quantinox.com/media/categories-images/ELE-Lighting.png",
        },
        {
            title: "Motors",
            image: "https://quantinox.com/media/categories-images/ELE-Motors.png",
        },
        {
            title: "Cable Tray",
            image: "https://quantinox.com/media/categories-images/ELE-Steel-fabricated-Items-Cable-Tray.png",
        },
        {
            title: "Transformer",
            image: "https://quantinox.com/media/categories-images/ELE-Transformer.png",
        },
        {
            title: "Transmission & Distribution Equipments",
            image: "https://quantinox.com/media/categories-images/ELE-Transmission&Distribution-Equipments.png",
        },
        {
            title: "DG Sets",
            image: "https://quantinox.com/media/categories-images/Electrical-DG-set.png",
        },
        {
            title: "Electronics",
            image: "https://quantinox.com/media/categories-images/Electronics.png",
        },
        {
            title: "Fasteners",
            image: "https://quantinox.com/media/categories-images/Fasteners.png",
        },
        {
            title: "Fire Detection & Protection",
            image: "https://quantinox.com/media/categories-images/Fire-Detection&Protection.png",
        },
        {
            title: "Heat Exchangers",
            image: "https://quantinox.com/media/categories-images/Heat-Exchangers.png",
        },
        {
            title: "Heavy Machines and Equipments",
            image: "https://quantinox.com/media/categories-images/Heavy-Machines-and-Equipments.png",
        },
        {
            title: "Hydraulics & Pneumatics",
            image: "https://quantinox.com/media/categories-images/Hydraulics&Pneumatics.png",
        },
        {
            title: "Industrial Automation",
            image: "https://quantinox.com/media/categories-images/Industrial-Automation.png",
        },
        {
            title: "Industrial Chemicals",
            image: "https://quantinox.com/media/categories-images/Industrial-Chemicals.png",
        },
        {
            title: "Industrial Coolers Blowers and Fans",
            image: "https://quantinox.com/media/categories-images/Industrial-Coolers-Blowers-and-Fans.png",
        },
        {
            title: "Lubricants & Accessories",
            image: "https://quantinox.com/media/categories-images/Lubricants&Accessories.png",
        },
        {
            title: "Material Handling",
            image: "https://quantinox.com/media/categories-images/Material-Handling.png",
        },
        {
            title: "Air compressor & Spare parts",
            image: "https://quantinox.com/media/categories-images/Mech-Air-compressor&Spare-parts.png",
        },
        {
            title: "Bag filters",
            image: "https://quantinox.com/media/categories-images/mech-bag-filters.png",
        },
        {
            title: "Bearings",
            image: "https://quantinox.com/media/categories-images/Mech-Bearings.png",
        },
        {
            title: "Gauge",
            image: "https://quantinox.com/media/categories-images/Mech-gauge.png",
        },
        {
            title: "Gear Boxes & Reducers",
            image: "https://quantinox.com/media/categories-images/Mech-Gear-Boxes&Reducers.png",
        },
        {
            title: "Industrial Tools",
            image: "https://quantinox.com/media/categories-images/Mech-Industrial-Tools.png",
        },
        {
            title: "Pipe & Fittings",
            image: "https://quantinox.com/media/categories-images/Mech-Pipe&Fittings.png",
        },
        {
            title: "Seals, Gaskets and O-rings",
            image: "https://quantinox.com/media/categories-images/Mech-Seals-Gaskets-and-O-rings.png",
        },
        {
            title: "V-Belts",
            image: "https://quantinox.com/media/categories-images/Mech-V-Belts.png",
        },
        {
            title: "Valves",
            image: "https://quantinox.com/media/categories-images/Mech-Valves.png",
        },
        {
            title: "Wire Rope",
            image: "https://quantinox.com/media/categories-images/Mech-Wire-Rope.png",
        },
        {
            title: "Mechanical Pump & Motors",
            image: "https://quantinox.com/media/categories-images/Mechanical-Pump&Motors.png",
        },
        {
            title: "Metals, Alloys and Minerals",
            image: "https://quantinox.com/media/categories-images/Metals-Alloys-and-Minerals.png",
        },
        {
            title: "Paint and Accessories",
            image: "https://quantinox.com/media/categories-images/Paint-and-Accessories.png",
        },
        {
            title: "Process Instruments",
            image: "https://quantinox.com/media/categories-images/Process-Instruments.png",
        },
        {
            title: "R&D and Testing Lab Equipments",
            image: "https://quantinox.com/media/categories-images/R&D-and-Testing-Lab-Equipments.png",
        },
        {
            title: "Safety Equipments",
            image: "https://quantinox.com/media/categories-images/Safety-Equipments.png",
        },
        {
            title: "Testing and Measuring",
            image: "https://quantinox.com/media/categories-images/Testing-and-Measuring.png",
        },
        {
            title: "Welding Equipments",
            image: "https://quantinox.com/media/categories-images/Welding-Equipments.png",
        },
    ];

    const institutionalCategories = [
        {
            title: "Institutional Supplies",
            desc: "Reliable products tailored for office, institutional, and public sector requirements.",
            icon: Building2,
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "Corporate Procurement",
            desc: "Essential business-use products aligned with organized procurement workflows.",
            icon: Briefcase,
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "General Trading",
            desc: "Flexible sourcing and trading support across multiple diverse categories.",
            icon: Globe,
            image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "Marketplace Consumer",
            desc: "Products optimized for modern e-commerce and online selling channels.",
            icon: ShoppingCart,
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
        },
    ];

    return (
        <div className="bg-white">
            {/* --- HERO SECTION --- */}
            <section className="pt-40 pb-24 bg-mukdee-blue relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
                        className="w-full h-full object-cover"
                        alt="bg"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h4
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-mukdee-orange font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4"
                    >
                        Comprehensive Portfolio
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 italic uppercase tracking-tighter"
                    >
                        Our Product{" "}
                        <span className="text-mukdee-orange not-italic">
                            Categories
                        </span>
                    </motion.h1>
                </div>
            </section>

            {/* --- INDUSTRIAL & MRO CATALOG --- */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter italic text-mukdee-blue">
                            Industrial & MRO{" "}
                            <span className="text-mukdee-orange not-italic">
                                Catalog
                            </span>
                        </h2>
                        <div className="w-16 h-1 bg-mukdee-orange mx-auto mb-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                        {industrialItems.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
                            >
                                {/* Overlay appear on Hover */}
                                <div className="absolute inset-0 bg-mukdee-blue/90 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300 z-20 p-4 text-center">
                                    <p className="text-white font-bold text-xs uppercase mb-4">
                                        {item.title}
                                    </p>
                                    <Link
                                        to="/contact"
                                        className="bg-mukdee-orange text-white px-5 py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2"
                                    >
                                        <MessageCircle size={14} /> Enquire Now
                                    </Link>
                                </div>

                                <div className="h-36 md:h-44 w-full p-6 flex items-center justify-center bg-white overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                                    />
                                </div>

                                <div className="p-4 bg-gray-50/50 flex-grow flex items-center justify-center text-center border-t border-gray-100">
                                    <h3 className="font-bold text-mukdee-blue text-[11px] md:text-xs uppercase tracking-tight leading-snug">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- INSTITUTIONAL SECTION --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter italic text-mukdee-blue">
                            Institutional{" "}
                            <span className="text-mukdee-orange not-italic">
                                Procurement
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {institutionalCategories.map((cat, i) => (
                            <motion.div
                                key={i}
                                className="group relative h-[350px] rounded-[2rem] overflow-hidden shadow-xl"
                            >
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-mukdee-blue via-mukdee-blue/70 to-transparent opacity-90 transition-opacity duration-300" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
                                    <div className="bg-mukdee-orange w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                                        <cat.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 uppercase">
                                        {cat.title}
                                    </h3>
                                    <p className="text-blue-50 text-[10px] mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {cat.desc}
                                    </p>

                                    {/* Enquiry Link */}
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 text-mukdee-orange font-bold text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform"
                                    >
                                        Enquire Now <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
