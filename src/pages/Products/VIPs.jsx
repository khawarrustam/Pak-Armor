import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

export default function VIPs() {
    const [activeFilter, setActiveFilter] = useState('ALL');

    const vipsGroups = [
        {
            title: "Luxury SUVs",
            tag: "LUXURY SUVS",
            vehicles: [
                { name: "BMW X Series", image: "/Products/VIP/BMW-X.png" },
                { name: "Range Rover", image: "/Products/VIP/RangeRover.png" },
                { name: "Toyota Prado", image: "/Products/VIP/ToyotaPRADO.png" },
                { name: "Land Cruiser", image: "/Products/VIP/ToyotaLANDCRUISER.png" },
                { name: "Fortuner", image: "/Products/VIP/ToyotaFORTUNER.png" },
                { name: "Sorento", image: "/Products/VIP/KiaSORENTO.png" },
            ]
        },
        {
            title: "Luxury Sedans",
            tag: "SEDANS",
            vehicles: [
                { name: "Mercedes Benz", image: "/Products/VIP/MercedezBENZ.png" },
                { name: "Toyota Corolla", image: "/Products/VIP/ToyotaCOROLLA.png" },
                { name: "Toyota Camry", image: "/Products/VIP/ToyotaCAMRY.png" },
            ]
        },
        {
            title: "Pickups & Vans",
            tag: "PICKUPS & VANS",
            vehicles: [
                { name: "Toyota Revo", image: "/Products/VIP/ToyotaVIGO.png" },
                { name: "Hiace", image: "/Products/VIP/HiAce.png" },
                { name: "Coaster", image: "/Products/VIP/Coaster.png" },
            ]
        }
    ];

    const filters = ['ALL', ...vipsGroups.map(g => g.tag)];
    const filteredGroups = activeFilter === 'ALL' ? vipsGroups : vipsGroups.filter(g => g.tag === activeFilter);

    return (
        <div className="min-h-screen bg-brand-dark">
            <PageHeader
                title="VIP's"
                subtitle="Products"
                breadcrumbs={[
                    { label: 'Products', path: '/products' },
                    { label: "VIP's" },
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
                {/* Filter Bar — horizontally scrollable on mobile */}
                <div className="flex gap-2 sm:gap-3 mb-8 sm:mb-12 overflow-x-auto scrollbar-hide pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-4 sm:px-5 py-2 rounded-full text-[0.6rem] sm:text-xs font-bold tracking-[0.1em] sm:tracking-[0.15em] uppercase border transition-all duration-300 whitespace-nowrap flex-shrink-0 ${activeFilter === f
                                ? 'bg-brand-gold text-white border-brand-gold'
                                : 'bg-transparent text-brand-gray/60 border-white/10 hover:border-brand-gold/50 hover:text-brand-gold'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {filteredGroups.map((group, gi) => (
                    <div key={gi} className="mb-10 sm:mb-16">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 border-l-4 border-brand-gold pl-3 sm:pl-4 uppercase tracking-wider">{group.title}</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
                            {group.vehicles.map((vehicle, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.4 }}
                                    className="group"
                                >
                                    <div className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 sm:group-hover:-translate-y-2 relative cursor-pointer">
                                        {/* Corner sash — smaller on mobile */}
                                        <div className="absolute top-0 left-0 w-10 h-10 sm:w-14 sm:h-14 overflow-hidden z-10">
                                            <div className="bg-brand-gold w-14 sm:w-20 h-4 sm:h-5 transform -rotate-45 -translate-x-4 sm:-translate-x-5 translate-y-1 sm:translate-y-2" />
                                        </div>

                                        <div className="aspect-[4/3] flex items-center justify-center p-3 sm:p-5 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
                                            {/* Shimmer skeleton */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
                                            <img
                                                src={vehicle.image}
                                                alt={vehicle.name}
                                                className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-700 relative z-10"
                                                loading="lazy"
                                                onLoad={(e) => e.target.previousElementSibling && (e.target.previousElementSibling.style.display = 'none')}
                                            />
                                            {/* Hover overlay — only on non-touch */}
                                            <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 hidden sm:flex items-center justify-center transition-opacity duration-300 backdrop-blur-sm z-20">
                                                <span className="text-white text-xs font-bold tracking-widest uppercase">View Details</span>
                                            </div>
                                        </div>

                                        <div className="bg-brand-green-dark group-hover:bg-brand-gold transition-colors duration-300 p-2 sm:p-3">
                                            <h3 className="text-white font-bold text-[0.6rem] sm:text-xs tracking-wider sm:tracking-widest uppercase text-center">{vehicle.name}</h3>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
