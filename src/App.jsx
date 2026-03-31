import React from "react";
import { motion } from "framer-motion";

/* 
// --- ORIGINAL ROUTES (COMMENTED OUT) ---
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
*/

function App() {
    return (
        <div className="min-h-screen bg-mukdee-blue flex items-center justify-center relative overflow-hidden font-sans">
            {/* Minimalist Background Decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-mukdee-orange opacity-10 rounded-full blur-3xl -ml-48 -mt-48"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -mr-48 -mb-48"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-xl mx-auto text-center">
                    {/* Logo Section */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center justify-center gap-3 mb-8"
                    >
                        <div className="text-6xl font-black flex italic">
                            <span className="text-white">M</span>
                            <span className="text-mukdee-orange">D</span>
                        </div>
                        <div className="flex flex-col text-left leading-none border-l border-white/20 pl-4">
                            <span className="text-3xl font-bold text-white uppercase tracking-tighter">
                                MUKDEE
                            </span>
                            <span className="text-[10px] text-blue-300 font-bold tracking-[0.4em] uppercase mt-1">
                                Trading Pvt Ltd
                            </span>
                        </div>
                    </motion.div>

                    {/* Simple Message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-light text-white uppercase tracking-[0.2em] mb-4">
                            Coming{" "}
                            <span className="font-black text-mukdee-orange">
                                Soon
                            </span>
                        </h1>
                        <div className="w-12 h-1 bg-white/20 mx-auto rounded-full"></div>
                    </motion.div>
                </div>
            </div>

            {/* Simple Copyright Footer */}
            <div className="absolute bottom-10 left-0 w-full text-center opacity-30">
                <p className="text-[10px] text-white font-bold uppercase tracking-[0.5em]">
                    © 2026 Mukdee Trading Private Limited
                </p>
            </div>
        </div>
    );
}

export default App;

/*
// --- ORIGINAL RENDER LOGIC (COMMENTED OUT) ---
function OriginalApp() {
    return (
        <>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/industries" element={<Industries />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route
                            path="/privacy-policy"
                            element={<PrivacyPolicy />}
                        />
                    </Routes>
                </main>
                <Footer />
            </div>
        </>
    );
}
*/
