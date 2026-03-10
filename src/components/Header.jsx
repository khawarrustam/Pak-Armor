import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import logoImg from '../assets/logo.png';

function cx(...args) {
    return twMerge(clsx(args));
}

const navLinks = [
    { name: 'HOME', path: '/' },
    {
        name: 'ABOUT US',
        path: '#',
        dropdown: [
            { name: 'ABOUT US', path: '/about' },
            { name: 'MISSION & VISION', path: '/about/vision-mission' },
            { name: 'MESSAGE CEO', path: '/about/ceo-message' },
            { name: 'OUR CLIENT', path: '/about/clients' },
            { name: 'PREAMBLE', path: '/about' },
        ]
    },
    {
        name: 'PRODUCTS',
        path: '#',
        dropdown: [
            { name: "VIP'S", path: '/products' },
            { name: 'LAW IN FORCES', path: '/products/law-in-forces' },
            { name: 'MULTI PURPOSE VEHICLE', path: '/products/multi-purpose' },
            { name: 'GUARD POSTS', path: '/products/guard-post' },
            { name: 'CASH AND TRANSIT', path: '/products/cash-and-transit' },
            { name: 'BALLISTIC STANDARDS CHART', path: '/products/standards-chart' },
        ]
    },
    {
        name: 'TECHNOLOGY',
        path: '#',
        dropdown: [
            { name: 'OPAQUE ARMOR', path: '/technology/opaque-armor' },
            { name: 'TRANSPARENT ARMOR', path: '/technology/transparent-armor' },
            { name: 'SUSPENSION', path: '/technology/suspension' },
            { name: 'BRAKES', path: '/technology/brakes' },
            { name: 'FLOOR PROTECTION', path: '/technology/floor-protection' },
            { name: 'HINGES', path: '/technology/hinges' },
            { name: 'RUN FLAT TIRE SYSTEM', path: '/technology/run-flat-tires' },
            { name: 'ENGINE PROTECTION', path: '/technology/engine-protection' },
            { name: 'BENEFITS', path: '/technology/benefits' },
        ]
    },
    { name: 'MEDIA', path: '/media' },
    { name: 'FAQS', path: '/faqs' },
    { name: 'CONTACT US', path: '/contact' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Scroll listener for header shrink
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
    }, [location.pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    // Check if a nav link is active
    const isActive = (link) => {
        if (link.path === '/') return location.pathname === '/';
        if (link.dropdown) {
            return link.dropdown.some(sub => location.pathname === sub.path || location.pathname.startsWith(sub.path + '/'));
        }
        return location.pathname === link.path || location.pathname.startsWith(link.path + '/');
    };

    return (
        <>
            <header className={cx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-brand-dark/95 backdrop-blur-xl shadow-lg shadow-black/20" : "bg-brand-dark/80 backdrop-blur-sm"
            )}>
                {/* Top Bar — hidden on mobile */}
                <div className={cx(
                    "border-b border-white/5 transition-all duration-300 overflow-hidden hidden sm:block",
                    scrolled ? "max-h-0 opacity-0" : "max-h-16 opacity-100"
                )}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-6 py-2">
                        <a href="tel:0321-2112777" className="flex items-center gap-2 text-brand-gray/60 hover:text-brand-gold text-xs tracking-wider transition-colors">
                            <Phone size={12} /> 0321-2112777
                        </a>
                        <a href="mailto:info@pakarmoring.pk" className="flex items-center gap-2 text-brand-gray/60 hover:text-brand-gold text-xs tracking-wider transition-colors">
                            <Mail size={12} /> info@pakarmoring.pk
                        </a>
                    </div>
                </div>

                {/* Main Nav */}
                <div className={cx(
                    "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300",
                    scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
                )}>
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group shrink-0">
                        <div className={cx(
                            "rounded-full overflow-hidden border-2 border-brand-gold/30 group-hover:border-brand-gold transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(212,162,76,0.2)]",
                            scrolled ? "w-9 h-9 sm:w-10 sm:h-10" : "w-11 h-11 sm:w-14 sm:h-14"
                        )}>
                            <img src={logoImg} alt="Pak Armoring" className="w-full h-full object-cover" />
                        </div>
                        <div className="hidden sm:block">
                            <p className={cx(
                                "font-black text-white uppercase tracking-wider transition-all duration-300",
                                scrolled ? "text-sm" : "text-base"
                            )}>PAK ARMORING <span className="text-brand-gray/40 font-normal text-[0.65em]">(PVT) LTD</span></p>
                            <p className="text-brand-gold text-[0.6rem] tracking-[0.3em] uppercase font-semibold">Armored Vehicles Specialist</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group/navItem">
                                {link.dropdown ? (
                                    <button className={cx(
                                        "flex items-center gap-1 px-3 py-2 text-[0.7rem] font-bold tracking-[0.15em] uppercase transition-colors relative",
                                        isActive(link) ? "text-brand-gold" : "text-brand-gray/70 hover:text-white"
                                    )}>
                                        {link.name}
                                        <ChevronDown size={12} className="opacity-50 group-hover/navItem:rotate-180 transition-transform duration-200" />
                                        {/* Active indicator */}
                                        <span className={cx(
                                            "absolute bottom-0 left-3 right-3 h-0.5 bg-brand-gold transition-transform duration-300 origin-left",
                                            isActive(link) ? "scale-x-100" : "scale-x-0 group-hover/navItem:scale-x-100"
                                        )} />
                                    </button>
                                ) : (
                                    <Link to={link.path} className={cx(
                                        "flex items-center px-3 py-2 text-[0.7rem] font-bold tracking-[0.15em] uppercase transition-colors relative",
                                        isActive(link) ? "text-brand-gold" : "text-brand-gray/70 hover:text-white"
                                    )}>
                                        {link.name}
                                        <span className={cx(
                                            "absolute bottom-0 left-3 right-3 h-0.5 bg-brand-gold transition-transform duration-300 origin-left",
                                            isActive(link) ? "scale-x-100" : "scale-x-0 group-hover/navItem:scale-x-100"
                                        )} />
                                    </Link>
                                )}

                                {/* Dropdown Menu */}
                                {link.dropdown && (
                                    <div className={cx(
                                        "absolute top-full left-0 pt-3 w-64 transform opacity-0 scale-95 pointer-events-none transition-all duration-200 origin-top-left",
                                        "group-hover/navItem:opacity-100 group-hover/navItem:scale-100 group-hover/navItem:pointer-events-auto"
                                    )}>
                                        <div className="bg-white shadow-xl shadow-black/20 border-2 border-brand-gold">
                                            {link.dropdown.map((subLink) => (
                                                <Link
                                                    key={subLink.name}
                                                    to={subLink.path}
                                                    className={cx(
                                                        "block px-6 py-3 text-[13px] font-normal uppercase tracking-wide border-b border-brand-gold/30 last:border-0 transition-colors",
                                                        location.pathname === subLink.path
                                                            ? "text-brand-gold-dark bg-brand-gold/10 font-semibold"
                                                            : "text-black hover:bg-brand-gray/50 hover:text-brand-gold-dark"
                                                    )}
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-brand-gray p-2 hover:text-brand-gold transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* ═══ Spacer to prevent content from hiding behind the fixed header ═══ */}
            <div className={cx(
                "transition-all duration-300",
                scrolled ? "h-14 sm:h-16" : "h-16 sm:h-[calc(2.5rem+theme(spacing.20))]"
            )} />

            {/* ═══ Mobile Sidebar Drawer + Backdrop ═══ */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Sidebar drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                            className="fixed top-0 right-0 w-[85vw] max-w-80 h-full bg-brand-dark border-l border-brand-gold/20 z-[70] overflow-y-auto shadow-2xl shadow-black/50"
                        >
                            {/* Sidebar Header */}
                            <div className="flex items-center justify-between p-5 border-b border-white/10 bg-brand-dark">
                                <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-gold/30">
                                        <img src={logoImg} alt="Pak Armoring" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white uppercase tracking-wider">Pak Armoring</p>
                                        <p className="text-brand-gold text-[0.5rem] tracking-[0.2em] uppercase">Armored Vehicles</p>
                                    </div>
                                </Link>
                                <button onClick={() => setMobileMenuOpen(false)} className="text-brand-gray/60 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors">
                                    <X size={22} />
                                </button>
                            </div>

                            {/* Sidebar Links */}
                            <nav className="p-4 space-y-1">
                                {navLinks.map((link) => (
                                    <div key={link.name}>
                                        {link.dropdown ? (
                                            <>
                                                <button
                                                    className={cx(
                                                        "w-full flex items-center justify-between px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-colors",
                                                        isActive(link) ? "text-brand-gold bg-brand-gold/5" : "text-brand-gray/70 hover:text-white hover:bg-white/5"
                                                    )}
                                                    onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                                                >
                                                    {link.name}
                                                    <ChevronDown size={14} className={cx(
                                                        "transition-transform duration-200",
                                                        openDropdown === link.name ? "rotate-180" : ""
                                                    )} />
                                                </button>
                                                <AnimatePresence>
                                                    {openDropdown === link.name && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pl-6 py-1 space-y-0.5 border-l-2 border-brand-gold/20 ml-4">
                                                                {link.dropdown.map((subLink) => (
                                                                    <Link
                                                                        key={subLink.name}
                                                                        to={subLink.path}
                                                                        className={cx(
                                                                            "block px-4 py-2.5 text-xs font-medium uppercase tracking-wider rounded-lg transition-colors",
                                                                            location.pathname === subLink.path
                                                                                ? "text-brand-gold bg-brand-gold/10"
                                                                                : "text-brand-gray/60 hover:text-white hover:bg-white/5"
                                                                        )}
                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                    >
                                                                        {subLink.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                to={link.path}
                                                className={cx(
                                                    "block px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-colors",
                                                    isActive(link) ? "text-brand-gold bg-brand-gold/5" : "text-brand-gray/70 hover:text-white hover:bg-white/5"
                                                )}
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            {/* Sidebar Contact */}
                            <div className="p-5 border-t border-white/10 mt-2 space-y-3">
                                <a href="tel:0321-2112777" className="flex items-center gap-3 text-brand-gray/60 hover:text-brand-gold text-sm transition-colors py-1">
                                    <Phone size={14} className="text-brand-gold" /> 0321-2112777
                                </a>
                                <a href="mailto:info@pakarmoring.pk" className="flex items-center gap-3 text-brand-gray/60 hover:text-brand-gold text-sm transition-colors py-1">
                                    <Mail size={14} className="text-brand-gold" /> info@pakarmoring.pk
                                </a>
                                <Link
                                    to="/contact"
                                    className="block w-full text-center bg-brand-gold hover:bg-brand-gold-dark text-white font-bold py-3 rounded-lg uppercase tracking-[0.15em] text-xs transition-colors mt-4"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Request a Quote
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
