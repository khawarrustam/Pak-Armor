import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Download, FileText, Globe, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [openSections, setOpenSections] = useState({ about: false, products: false });

    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 300);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSection = (section) => {
        if (window.innerWidth < 640) { // sm breakpoint
            setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
        }
    };

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const aboutLinks = [
        { name: 'Overview', path: '/about' },
        { name: 'Vision & Mission', path: '/about/vision-mission' },
        { name: 'CEO Message', path: '/about/ceo-message' },
        { name: 'Our Clients', path: '/about/clients' },
    ];

    const productLinks = [
        { name: "VIP'S", path: '/products' },
        { name: 'LAW IN FORCES', path: '/products/law-in-forces' },
        { name: 'MULTI PURPOSE VEHICLE', path: '/products/multi-purpose' },
        { name: 'GUARD POSTS', path: '/products/guard-post' },
        { name: 'CASH AND TRANSIT', path: '/products/cash-and-transit' },
        { name: 'BALLISTIC STANDARDS CHART', path: '/products/standards-chart' },
    ];

    return (
        <>
            <footer className="bg-black text-white pt-10 sm:pt-16 pb-6 relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, var(--color-brand-green) 0%, transparent 60%)' }} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-8 sm:mb-12">

                        {/* Company Info */}
                        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
                            <Link to="/" className="flex items-center gap-4 group">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-gold/30 shadow-lg shadow-brand-gold/10">
                                    <img src={logoImg} alt="Pak Armoring" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="font-black text-white text-base uppercase tracking-wider">PAK ARMORING</p>
                                    <p className="text-brand-gold text-[0.6rem] tracking-[0.3em] uppercase">Armored Vehicles</p>
                                </div>
                            </Link>
                            <p className="text-brand-gray/50 text-xs sm:text-sm leading-relaxed max-w-xs">
                                Pakistan's premier armored vehicle manufacturer. Delivering world-class ballistic protection since 2007.
                            </p>
                            {/* Social Icons */}
                            <div className="flex gap-6 pt-2">
                                <a href="https://www.instagram.com/pakarmoringprivatelimited/" target="_blank" rel="noreferrer" className="text-brand-gray/40 hover:text-brand-gold transition-colors" title="Instagram">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                                </a>
                                <a href="https://www.facebook.com/PakArmoring/" target="_blank" rel="noreferrer" className="text-brand-gray/40 hover:text-brand-gold transition-colors" title="Facebook">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>
                                <a href="https://www.youtube.com/@PakArmoringPvtLtd" target="_blank" rel="noreferrer" className="text-brand-gray/40 hover:text-brand-gold transition-colors" title="YouTube">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                </a>
                                <a href="https://x.com/PakArmoring" target="_blank" rel="noreferrer" className="text-brand-gray/40 hover:text-brand-gold transition-colors" title="X (Twitter)">
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* About Company */}
                        <div className="text-center sm:text-left border-b border-white/5 sm:border-0 pb-4 sm:pb-0">
                            <button 
                                onClick={() => toggleSection('about')}
                                className="w-full flex items-center justify-between sm:block focus:outline-none group"
                            >
                                <h3 className="text-brand-gold text-xs sm:text-sm font-bold tracking-[0.2em] uppercase sm:mb-6">About Company</h3>
                                <div className={`sm:hidden transition-transform duration-300 ${openSections.about ? 'rotate-180' : ''}`}>
                                    <ChevronUp size={16} className="text-brand-gold/50" />
                                </div>
                            </button>
                            
                            <AnimatePresence>
                                {openSections.about && (
                                    <motion.ul 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="space-y-3 mt-4 sm:hidden overflow-hidden"
                                    >
                                        {aboutLinks.map((link) => (
                                            <li key={link.name}>
                                                <Link to={link.path} className="text-brand-gray/50 hover:text-white text-sm transition-all hover:pl-2 duration-200 block py-1">
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                            
                            {/* Desktop View */}
                            <ul className="hidden sm:flex flex-col space-y-3 mt-0">
                                {aboutLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-brand-gray/50 hover:text-white text-sm transition-all hover:pl-2 duration-200 block">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Products */}
                        <div className="text-center sm:text-left border-b border-white/5 sm:border-0 pb-4 sm:pb-0">
                            <button 
                                onClick={() => toggleSection('products')}
                                className="w-full flex items-center justify-between sm:block focus:outline-none group"
                            >
                                <h3 className="text-brand-gold text-xs sm:text-sm font-bold tracking-[0.2em] uppercase sm:mb-6">Products</h3>
                                <div className={`sm:hidden transition-transform duration-300 ${openSections.products ? 'rotate-180' : ''}`}>
                                    <ChevronUp size={16} className="text-brand-gold/50" />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openSections.products && (
                                    <motion.ul 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="space-y-3 mt-4 sm:hidden overflow-hidden"
                                    >
                                        {productLinks.map((link) => (
                                            <li key={link.name}>
                                                <Link to={link.path} className="text-brand-gray/50 hover:text-white text-sm transition-all hover:pl-2 duration-200 block py-1">
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>

                            {/* Desktop View */}
                            <ul className="hidden sm:flex flex-col space-y-3 mt-0">
                                {productLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-brand-gray/50 hover:text-white text-sm transition-all hover:pl-2 duration-200 block">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Office Address */}
                        <div className="text-center sm:text-left pt-2 sm:pt-0">
                            <h3 className="text-brand-gold text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-6 sm:mb-6">Office Address</h3>
                            <div className="space-y-4 sm:space-y-4 text-brand-gray/50 text-sm sm:text-sm">
                                <div className="flex items-start gap-4 justify-center sm:justify-start">
                                    <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">Plot No. 2/2a, Survey 86, Sector 24, Main Korangi Creek Road, Karachi.</span>
                                </div>
                                <div className="flex items-center gap-4 justify-center sm:justify-start">
                                    <Phone size={18} className="text-brand-gold shrink-0" />
                                    <a href="tel:0321-2112777" className="hover:text-brand-gold transition-colors font-medium">0321-2112777</a>
                                </div>
                                <div className="flex items-center gap-4 justify-center sm:justify-start">
                                    <Mail size={18} className="text-brand-gold shrink-0" />
                                    <a href="mailto:info@pakarmoring.pk" className="hover:text-brand-gold transition-colors break-all font-medium">info@pakarmoring.pk</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/10 pt-8 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
                        <p className="text-brand-gray/40 text-[0.75rem] sm:text-xs tracking-wider text-center sm:text-left font-medium">
                            © {currentYear} Pak Armoring (Pvt) Ltd. All rights reserved.
                        </p>
                        <div className="flex gap-8 sm:gap-6">
                            <Link to="/faqs" className="text-brand-gray/40 hover:text-brand-gold text-[0.75rem] sm:text-xs tracking-wider transition-colors font-bold">FAQs</Link>
                            <Link to="/contact" className="text-brand-gray/40 hover:text-brand-gold text-[0.75rem] sm:text-xs tracking-wider transition-colors font-bold">Contact</Link>
                            <Link to="/media" className="text-brand-gray/40 hover:text-brand-gold text-[0.75rem] sm:text-xs tracking-wider transition-colors font-bold">Media</Link>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-brand-gold hover:bg-brand-gold-dark text-white p-2.5 sm:p-3 rounded-full shadow-lg shadow-brand-gold/30 transition-colors z-40"
                    >
                        <ChevronUp size={18} />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}
