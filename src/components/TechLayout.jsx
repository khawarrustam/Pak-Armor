import { motion } from 'framer-motion';
import PageHeader from './PageHeader';

export default function TechLayout({ title, subtitle, children, images = [], breadcrumbs }) {
    const defaultBreadcrumbs = breadcrumbs || [
        { label: 'Technology', path: '/technology/opaque-armor' },
        { label: title },
    ];

    return (
        <div className="min-h-screen bg-brand-dark">
            <PageHeader
                title={title}
                subtitle={subtitle || 'Technology'}
                breadcrumbs={defaultBreadcrumbs}
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
                <div className={`flex flex-col ${images.length > 0 ? 'lg:flex-row' : ''} gap-8 sm:gap-10 lg:gap-12 items-start`}>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={images.length > 0 ? 'w-full lg:w-1/2' : 'w-full'}
                    >
                        <div className="text-brand-gray/80 leading-relaxed text-sm sm:text-base space-y-4 sm:space-y-5">
                            {children}
                        </div>
                    </motion.div>

                    {/* Images Column */}
                    {images.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-1/2 space-y-4 sm:space-y-6"
                        >
                            {images.map((img, i) => (
                                <div key={i} className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
                                    <img
                                        src={img.src}
                                        alt={img.alt || title}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    {img.caption && (
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
                                            <p className="text-white text-xs sm:text-sm font-medium tracking-wide">{img.caption}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
