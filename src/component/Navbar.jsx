import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "../assets";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll to hide the top bar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Industries", path: "/industries" },
        { name: "Contact", path: "/contact" },
    ];

    const activeLink = (path) =>
        location.pathname === path
            ? "text-mukdee-orange"
            : "text-gray-700 hover:text-mukdee-blue";

    return (
        <header className="fixed w-full z-50 transition-all duration-300">
            {/* --- THIN TOP STRIP --- */}
            <AnimatePresence>
                {!isScrolled && (
                    <motion.div
                        initial={{ height: 40, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-mukdee-blue text-white overflow-hidden"
                    >
                        <div className="container mx-auto px-6 h-10 flex justify-between items-center text-[11px] md:text-xs font-medium tracking-wider">
                            <div className="flex items-center gap-6">
                                <a
                                    href="mailto:mukdeetrading@gmail.comm"
                                    className="flex items-center gap-2 hover:text-mukdee-orange transition-colors"
                                >
                                    <Mail
                                        size={14}
                                        className="text-mukdee-orange"
                                    />
                                    <span className="hidden sm:inline">
                                        mukdeetrading@gmail.com
                                    </span>
                                </a>
                                <a
                                    href="tel:+919871624185"
                                    className="flex items-center gap-2 hover:text-mukdee-orange transition-colors"
                                >
                                    <Phone
                                        size={14}
                                        className="text-mukdee-orange"
                                    />
                                    <span>+91 98716 24185</span>
                                </a>
                                <a
                                    href="tel:+918285441138"
                                    className="flex items-center gap-2 hover:text-mukdee-orange transition-colors"
                                >
                                    <Phone
                                        size={14}
                                        className="text-mukdee-orange"
                                    />
                                    <span>+91 82854 41138</span>
                                </a>
                            </div>
                            <div className="hidden lg:flex items-center gap-4 opacity-70">
                                <span>GST: 07AAUCM4038R1ZJ</span>
                                <span className="w-1 h-1 bg-white rounded-full"></span>
                                <span>CIN: U46909DL2026PTC461897</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- MAIN NAVBAR --- */}
            <nav
                className={`bg-white backdrop-blur-md shadow-md transition-all duration-300 ${isScrolled ? "py-3" : "py-1"}`}
            >
                <div className="container mx-auto px-6  flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="font-black flex italic">
                            <img src={logo} alt="" className="w-20 h-20" />
                        </div>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center space-x-8 font-bold text-[11px] uppercase tracking-widest">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`${activeLink(link.path)} transition-colors`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="bg-mukdee-blue text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-mukdee-orange transition-all text-[10px]"
                        >
                            <PhoneCall size={14} /> Enquiry
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-mukdee-blue"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t overflow-hidden"
                        >
                            <div className="flex flex-col p-6 space-y-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-bold text-gray-800 uppercase tracking-tight"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
