import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
    return (
        <div className="relative bg-brand-green-dark pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-hidden">
            {/* Diagonal gold stripe decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.07]">
                    <div className="absolute inset-0 bg-gradient-to-bl from-brand-gold to-transparent" />
                </div>
                <svg className="absolute bottom-0 left-0 w-full h-5 sm:h-8 lg:h-10" viewBox="0 0 1200 40" preserveAspectRatio="none">
                    <path d="M0 40 L1200 10 L1200 40 Z" className="fill-brand-dark" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Breadcrumbs */}
                {breadcrumbs.length > 0 && (
                    <motion.nav
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-1.5 text-[0.6rem] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-4 sm:mb-6"
                    >
                        <Link to="/" className="text-brand-gray/50 hover:text-brand-gold transition-colors">Home</Link>
                        {breadcrumbs.map((crumb, i) => (
                            <span key={i} className="flex items-center gap-1.5">
                                <ChevronRight size={10} className="text-brand-gold/40 sm:w-3 sm:h-3" />
                                {i === breadcrumbs.length - 1 ? (
                                    <span className="text-brand-gold">{crumb.label}</span>
                                ) : (
                                    <Link to={crumb.path} className="text-brand-gray/50 hover:text-brand-gold transition-colors">
                                        {crumb.label}
                                    </Link>
                                )}
                            </span>
                        ))}
                    </motion.nav>
                )}

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">{title}</h1>
                    {subtitle && (
                        <p className="text-brand-gold mt-1.5 sm:mt-2 uppercase tracking-widest text-xs sm:text-sm font-bold">{subtitle}</p>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
