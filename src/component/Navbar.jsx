import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "../assets";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

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
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <div className="text-3xl font-black flex italic">
                        <img
                            src={logo}
                            alt=""
                            className="w-12 h-12 rounded-full"
                        />
                    </div>
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex items-center space-x-8 font-bold text-sm uppercase tracking-wider">
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
                        className="bg-mukdee-blue text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-mukdee-orange transition-all"
                    >
                        <PhoneCall size={16} /> Inquiry
                    </Link>
                </div>

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
                                    className="text-xl font-bold text-gray-800"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
