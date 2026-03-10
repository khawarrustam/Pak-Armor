import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight, Shield } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const galleryImages = [
    // VIP Vehicles
    { src: "/Products/VIP/BMW-X.png", name: "BMW X Series", category: "VIP", desc: "Armored Luxury SUV" },
    { src: "/Products/VIP/RangeRover.png", name: "Range Rover", category: "VIP", desc: "Armored Luxury SUV" },
    { src: "/Products/VIP/ToyotaLANDCRUISER.png", name: "Toyota Land Cruiser", category: "VIP", desc: "Armored Luxury SUV" },
    { src: "/Products/VIP/ToyotaPRADO.png", name: "Toyota Prado", category: "VIP", desc: "Armored Luxury SUV" },
    { src: "/Products/VIP/ToyotaFORTUNER.png", name: "Toyota Fortuner", category: "VIP", desc: "Armored SUV" },
    { src: "/Products/VIP/KiaSORENTO.png", name: "Kia Sorento", category: "VIP", desc: "Armored SUV" },
    { src: "/Products/VIP/MercedezBENZ.png", name: "Mercedes Benz", category: "VIP", desc: "Armored Luxury Sedan" },
    { src: "/Products/VIP/ToyotaCOROLLA.png", name: "Toyota Corolla", category: "VIP", desc: "Armored Sedan" },
    { src: "/Products/VIP/ToyotaCAMRY.png", name: "Toyota Camry", category: "VIP", desc: "Armored Sedan" },
    { src: "/Products/VIP/ToyotaVIGO.png", name: "Toyota Revo", category: "VIP", desc: "Armored Pickup" },
    { src: "/Products/VIP/HiAce.png", name: "Toyota HiAce", category: "VIP", desc: "Armored Van" },
    { src: "/Products/VIP/Coaster.png", name: "Toyota Coaster", category: "VIP", desc: "Armored Bus" },

    // Law In Forces
    { src: "/Products/Law In Forces.png", name: "Law In Forces", category: "Law Enforcement", desc: "Armored Law Enforcement Vehicle" },

    // Multi Purpose Vehicles
    { src: "/Products/Multi Purpose Vehicles.png", name: "Multi Purpose Vehicle", category: "Multi Purpose", desc: "Armored Multi Purpose Vehicle" },

    // Guard Post
    { src: "/Products/GuardPost.png", name: "Guard Post", category: "Specialized", desc: "Armored Guard Post" },

    // Cash In Transit
    { src: "/Products/CashnTransit.png", name: "Cash In Transit", category: "Specialized", desc: "Armored Cash & Transit Vehicle" },
];

const categories = ['All', 'VIP', 'Law Enforcement', 'Multi Purpose', 'Specialized'];

export default function Media() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [activeFilter, setActiveFilter] = useState('All');

    const filtered = activeFilter === 'All' ? galleryImages : galleryImages.filter(img => img.category === activeFilter);

    const navigate = useCallback((dir) => {
        if (selectedIndex === null) return;
        setSelectedIndex((selectedIndex + dir + filtered.length) % filtered.length);
    }, [selectedIndex, filtered.length]);

    useEffect(() => {
        const handleKey = (e) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') setSelectedIndex(null);
            if (e.key === 'ArrowLeft') navigate(-1);
            if (e.key === 'ArrowRight') navigate(1);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [selectedIndex, navigate]);

    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [selectedIndex]);

    return (
        <div className="min-h-screen bg-brand-dark">
            <PageHeader
                title="Our Fleet Gallery"
                subtitle="Media"
                breadcrumbs={[{ label: 'Media' }]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
                {/* Stats line */}
                <div className="flex items-center justify-center gap-2 text-brand-gray/40 text-xs sm:text-sm mb-6 sm:mb-8">
                    <Shield size={14} className="text-brand-gold" />
                    <span>{galleryImages.length} Armored Vehicles</span>
                    <span className="text-brand-gold/30">•</span>
                    <span>{categories.length - 1} Categories</span>
                </div>

                {/* Filter Bar */}
                <div className="flex gap-2 sm:gap-3 mb-8 sm:mb-10 overflow-x-auto scrollbar-hide pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => { setActiveFilter(cat); setSelectedIndex(null); }}
                            className={`px-4 sm:px-5 py-2 rounded-full text-[0.6rem] sm:text-xs font-bold tracking-[0.1em] sm:tracking-[0.15em] uppercase border transition-all duration-300 whitespace-nowrap flex-shrink-0 ${activeFilter === cat
                                ? 'bg-brand-gold text-white border-brand-gold'
                                : 'bg-transparent text-brand-gray/60 border-white/10 hover:border-brand-gold/50 hover:text-brand-gold'
                                }`}
                        >
                            {cat}
                            <span className="ml-1.5 text-[0.5rem] sm:text-[0.6rem] opacity-60">
                                ({cat === 'All' ? galleryImages.length : galleryImages.filter(i => i.category === cat).length})
                            </span>
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                    {filtered.map((img, i) => (
                        <motion.div
                            key={img.src}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '100px' }}
                            transition={{ delay: i * 0.03, duration: 0.4 }}
                            className="group relative rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
                            onClick={() => setSelectedIndex(i)}
                        >
                            <div className="aspect-[4/3] flex items-center justify-center p-4 sm:p-5 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
                                {/* Shimmer skeleton */}
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
                                <img
                                    src={img.src}
                                    alt={img.name}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 relative z-10 drop-shadow-md"
                                    loading="lazy"
                                    onLoad={(e) => e.target.previousElementSibling && (e.target.previousElementSibling.style.display = 'none')}
                                />
                            </div>
                            {/* Hover overlay — hidden on touch */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 hidden sm:flex flex-col justify-end transition-opacity duration-300 p-4">
                                <ZoomIn className="text-white/60 absolute top-4 right-4" size={20} />
                                <p className="text-white font-bold text-sm tracking-wide">{img.name}</p>
                                <p className="text-brand-gold text-[0.6rem] tracking-wider uppercase">{img.desc}</p>
                            </div>
                            {/* Mobile-visible label */}
                            <div className="bg-brand-green-dark group-hover:bg-brand-gold transition-colors duration-300 px-3 py-2 sm:py-2.5">
                                <h3 className="text-white font-bold text-[0.6rem] sm:text-xs tracking-wider uppercase">{img.name}</h3>
                                <p className="text-brand-gray/60 text-[0.5rem] sm:text-[0.6rem] tracking-wider uppercase mt-0.5">{img.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty state */}
                {filtered.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-brand-gray/40 text-lg">No vehicles in this category.</p>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedIndex !== null && filtered[selectedIndex] && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-md z-[80] flex items-center justify-center"
                        onClick={() => setSelectedIndex(null)}
                    >
                        {/* Close */}
                        <button className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/60 hover:text-white p-2 z-50" onClick={() => setSelectedIndex(null)}>
                            <X size={24} />
                        </button>

                        {/* Prev */}
                        <button
                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full z-50 transition-colors"
                            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Image + Info */}
                        <motion.div
                            key={selectedIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="max-w-4xl max-h-[80vh] p-2 sm:p-4 flex flex-col items-center"
                            onClick={e => e.stopPropagation()}
                        >
                            <img
                                src={filtered[selectedIndex].src}
                                alt={filtered[selectedIndex].name}
                                className="w-full h-full object-contain rounded-lg shadow-2xl max-h-[65vh]"
                            />
                            <div className="text-center mt-3 sm:mt-4">
                                <p className="text-white text-sm sm:text-lg font-bold tracking-wider uppercase">{filtered[selectedIndex].name}</p>
                                <p className="text-brand-gold text-[0.6rem] sm:text-xs tracking-[0.2em] uppercase mt-1">{filtered[selectedIndex].desc}</p>
                            </div>
                        </motion.div>

                        {/* Next */}
                        <button
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full z-50 transition-colors"
                            onClick={(e) => { e.stopPropagation(); navigate(1); }}
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Counter */}
                        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs sm:text-sm font-mono">
                            {selectedIndex + 1} / {filtered.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
