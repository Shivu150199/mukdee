import { motion } from "framer-motion";
import {
    Globe,
    Package,
    ShoppingCart,
    Handshake,
    Settings,
    Heart,
    ChevronRight,
} from "lucide-react";

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="bg-white overflow-hidden">
            {/* SECTION 1: HEADER & INTRO */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-mukdee-lightBlue to-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h4 className="text-mukdee-orange font-bold uppercase tracking-widest mb-4">
                                About Us
                            </h4>
                            <h1 className="text-4xl md:text-5xl font-bold text-mukdee-blue mb-8 leading-tight">
                                Professional Trading, Procurement & Supply
                                Support
                            </h1>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Mukdee Trading Private Limited is committed to
                                delivering reliable, structured, and
                                business-focused trading solutions for
                                institutional buyers, procurement teams, and
                                marketplace-driven commerce.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                With a growing focus on government procurement
                                through GeM tenders, bulk supply support,
                                and e-commerce marketplace operations, we aim to
                                serve businesses and institutions with
                                professionalism, operational discipline, and
                                dependable execution.
                            </p>
                            <div className="border-l-4 border-mukdee-orange bg-mukdee-blue/5 p-6 rounded-r-2xl text-mukdee-blue font-medium italic">
                                "Our approach is built around trust, supply
                                efficiency, and long-term business
                                relationships."
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Modern Logistics/Warehouse Image - Represents Bulk Supply & Fulfillment */}
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
                                className="rounded-3xl shadow-2xl z-10 relative object-cover h-[500px] w-full"
                                alt="Mukdee Trading Supply Chain and Logistics"
                            />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-mukdee-orange p-8 rounded-2xl shadow-xl hidden md:block z-20 border-4 border-white">
                                <p className="text-white font-bold text-4xl italic">
                                    Reliable
                                </p>
                                <p className="text-white text-sm font-semibold uppercase tracking-widest">
                                    Supply Chain
                                </p>
                            </div>

                            {/* Decorative Element to make it look modern */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-mukdee-blue rounded-tl-3xl z-0"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: CAPABILITIES (Top Row of Image) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="text-center p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow bg-gray-50/50"
                        >
                            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Globe className="text-mukdee-blue" size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-mukdee-blue mb-2">
                                Government Procurement
                            </h3>
                            <p className="text-gray-500 italic text-sm">
                                Expertise in GeM Tenders and Public Procurement
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="text-center p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow bg-gray-50/50"
                        >
                            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Package
                                    className="text-mukdee-blue"
                                    size={40}
                                />
                            </div>
                            <h3 className="text-xl font-bold text-mukdee-blue mb-2">
                                Bulk Supply Solutions
                            </h3>
                            <p className="text-gray-500 italic text-sm">
                                Efficient Sourcing & Large-Scale Supply
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="text-center p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow bg-gray-50/50"
                        >
                            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <ShoppingCart
                                    className="text-mukdee-blue"
                                    size={40}
                                />
                            </div>
                            <h3 className="text-xl font-bold text-mukdee-blue mb-2">
                                E-Commerce & Marketplace
                            </h3>
                            <p className="text-gray-500 italic text-sm">
                                Optimized Online Sales & Operations
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3: MISSION BANNER (Middle Text of Image) */}
            <section className="py-12 bg-mukdee-blue relative">
                <div className="container mx-auto px-6 text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-white text-xl md:text-2xl font-medium italic"
                    >
                        "We aim to serve businesses and institutions with
                        professionalism, operational discipline, and dependable
                        execution."
                    </motion.p>
                </div>
            </section>

            {/* SECTION 4: CORE VALUES (Bottom Row of Image) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-12"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="text-center group"
                        >
                            <Handshake
                                className="mx-auto text-mukdee-blue mb-4 group-hover:scale-110 transition-transform"
                                size={48}
                            />
                            <h4 className="text-xl font-bold text-mukdee-blue">
                                Trust & Reliability
                            </h4>
                            <p className="text-mukdee-orange text-sm font-semibold mt-1">
                                Building Confidence
                            </p>
                            <div className="w-12 h-1 bg-gray-200 mx-auto mt-4 group-hover:w-24 transition-all"></div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="text-center group"
                        >
                            <Settings
                                className="mx-auto text-mukdee-blue mb-4 group-hover:rotate-90 transition-transform duration-500"
                                size={48}
                            />
                            <h4 className="text-xl font-bold text-mukdee-blue">
                                Supply Efficiency
                            </h4>
                            <p className="text-mukdee-orange text-sm font-semibold mt-1">
                                Streamlined Operations
                            </p>
                            <div className="w-12 h-1 bg-gray-200 mx-auto mt-4 group-hover:w-24 transition-all"></div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="text-center group"
                        >
                            <Heart
                                className="mx-auto text-mukdee-blue mb-4 group-hover:scale-110 transition-transform"
                                size={48}
                            />
                            <h4 className="text-xl font-bold text-mukdee-blue">
                                Long-Term Partnerships
                            </h4>
                            <p className="text-mukdee-orange text-sm font-semibold mt-1">
                                Sustained Relationships
                            </p>
                            <div className="w-12 h-1 bg-gray-200 mx-auto mt-4 group-hover:w-24 transition-all"></div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 5: BUSINESS VERTICALS (Detailed Text) */}
            <section className="py-24 bg-mukdee-lightBlue">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-mukdee-blue mb-4 uppercase tracking-tighter">
                            Our Core Business Areas
                        </h2>
                        <div className="w-20 h-1.5 bg-mukdee-orange mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vertical 1 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-mukdee-blue"
                        >
                            <h3 className="text-2xl font-bold text-mukdee-blue mb-4 flex items-center gap-3">
                                <ChevronRight className="text-mukdee-orange" />
                                Government Procurement / GeM Tenders
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We support structured procurement requirements
                                through participation in Government
                                e-Marketplace (GeM) opportunities and
                                institutional sourcing needs. Our focus includes
                                supply coordination, commercial readiness, and
                                efficient order execution for public and
                                institutional buyers.
                            </p>
                        </motion.div>

                        {/* Vertical 2 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-mukdee-orange"
                        >
                            <h3 className="text-2xl font-bold text-mukdee-blue mb-4 flex items-center gap-3">
                                <ChevronRight className="text-mukdee-orange" />
                                E-Commerce & Marketplace Operations
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We also operate across major online marketplaces
                                such as Amazon, Flipkart, and Myntra, supporting
                                digital retail growth through organized catalog
                                management, marketplace execution, and supply
                                fulfillment coordination.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
