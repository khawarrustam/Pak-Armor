import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';

export default function VehicleLayout({ title, description, features = [], protectionLevel, imageSrc, flipLayout = false }) {
    const levels = ['B4', 'B5', 'B6', 'B7'];
    const currentIndex = levels.indexOf(protectionLevel);

    return (
        <div className="min-h-screen bg-brand-dark">
            <PageHeader
                title={title}
                subtitle="Products"
                breadcrumbs={[
                    { label: 'Products', path: '/products' },
                    { label: title },
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    <span className="text-[6rem] sm:text-[8rem] lg:text-[12rem] font-black text-brand-gold/[0.03] uppercase select-none whitespace-nowrap">
                        {title.replace(/ /g, '')}
                    </span>
                </div>

                {/* Two-column layout */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start relative z-10 ${flipLayout ? 'lg:direction-rtl' : ''}`}>
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: flipLayout ? 40 : -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className={`relative ${flipLayout ? 'lg:order-2' : ''}`}
                    >
                        <div className="rounded-xl overflow-hidden border border-white/5 shadow-2xl bg-white/[0.02]">
                            <img src={imageSrc} alt={title} className="w-full h-auto object-contain" />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: flipLayout ? -40 : 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className={flipLayout ? 'lg:order-1' : ''}
                    >
                        <div className="text-brand-gray/80 leading-relaxed text-sm sm:text-base space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            {description}
                        </div>

                        {/* Protection Level Indicator */}
                        <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-4 sm:p-5 mb-6 sm:mb-8">
                            <p className="text-brand-gold text-[0.6rem] sm:text-xs font-bold tracking-[0.2em] uppercase mb-2 sm:mb-3">Protection Level</p>
                            <div className="flex gap-1.5 sm:gap-2">
                                {levels.map((lvl, i) => (
                                    <div
                                        key={lvl}
                                        className={`flex-1 text-center py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-bold tracking-wider transition-all ${i <= currentIndex
                                            ? 'bg-brand-gold text-white shadow-md'
                                            : 'bg-white/5 text-brand-gray/30'
                                            }`}
                                    >
                                        {lvl}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features Grid */}
                        <div className="mb-6 sm:mb-8">
                            <p className="text-brand-gold text-[0.6rem] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4">Key Features</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 sm:gap-3 bg-white/[0.03] border border-white/[0.06] rounded-md px-3 sm:px-4 py-2.5 sm:py-3">
                                        <CheckCircle className="text-brand-gold shrink-0" size={14} />
                                        <span className="text-brand-gray/90 text-xs sm:text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-10 sm:mt-14 lg:mt-16 bg-gradient-to-r from-brand-green-dark to-brand-dark p-6 sm:p-8 lg:p-10 rounded-xl text-center border border-white/5"
                >
                    <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">Interested in the {title}?</h3>
                    <p className="text-brand-gray/60 mb-4 sm:mb-6 text-xs sm:text-sm">Contact our team for a personalized quote and consultation.</p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold py-3 px-6 sm:px-8 rounded-sm uppercase tracking-[0.15em] text-xs sm:text-sm transition-all hover:scale-[1.02] w-full sm:w-auto justify-center"
                        style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)' }}
                    >
                        Request a Quote
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
