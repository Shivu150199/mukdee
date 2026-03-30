import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { logo } from "../assets";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
                <div className="col-span-1 md:col-span-1">
                    <div className="text-3xl font-black flex italic mb-4">
                        <img src={logo} alt="" className="w-24" />
                    </div>
                    <p className="text-sm leading-relaxed mb-4">
                        Reliable procurement, supply, and marketplace-driven
                        business solutions across India.
                    </p>
                    {/* REGISTRATION DETAILS IN FOOTER */}
                    <div className="text-[10px] space-y-1 font-mono opacity-60">
                        <p>CIN: U46909DL2026PTC461897</p>
                        <p>GSTIN: 07AAUCM4038R1ZJ</p>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">
                        Quick Links
                    </h4>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-mukdee-orange transition"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="hover:text-mukdee-orange transition"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                className="hover:text-mukdee-orange transition"
                            >
                                Our Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/privacy-policy"
                                className="hover:text-mukdee-orange transition"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">
                        Business Focus
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li>Government GeM Tenders</li>
                        <li>Institutional Supply</li>
                        <li>Bulk Trading Support</li>
                        <li>E-Commerce Operations</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">
                        Contact Support
                    </h4>
                    <div className="space-y-4 text-sm">
                        <div className="flex gap-3">
                            <Mail size={16} className="text-mukdee-orange" />{" "}
                            mukdeetrading@gmail.com
                        </div>
                        <div className="flex gap-3">
                            <Phone size={16} className="text-mukdee-orange" />{" "}
                            +91 9871624185
                        </div>
                        <div className="flex gap-3">
                            <Phone size={16} className="text-mukdee-orange" />{" "}
                            +91 8285441138
                        </div>
                        <div className="flex gap-3 text-xs leading-tight">
                            <MapPin size={24} className="text-mukdee-orange" />{" "}
                            G-34, Kh No. 55/20/2, Jai Vihar, Baprola, New Delhi
                            - 110043
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center pt-8 text-[10px] text-gray-500 uppercase tracking-widest">
                © 2026 Mukdee Trading Private Limited. All Rights Reserved.
            </p>
        </footer>
    );
}
