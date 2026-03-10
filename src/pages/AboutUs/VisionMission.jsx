import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

export default function VisionMission() {
    return (
        <div className="min-h-screen bg-brand-dark">
            <PageHeader
                title="Vision & Mission"
                subtitle="About Us"
                breadcrumbs={[
                    { label: 'About', path: '/about' },
                    { label: 'Vision & Mission' },
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-xl border border-white/5 shadow-2xl">
                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="bg-gradient-to-b from-brand-green-dark to-brand-dark p-8 sm:p-10 md:p-14 flex flex-col items-center text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                            <img src="/Products/VIP/ToyotaLANDCRUISER.png" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-brand-gold flex items-center justify-center mb-6 sm:mb-8 mx-auto">
                                <Eye className="text-brand-gold w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4 sm:mb-6">Vision</h2>
                            <p className="text-brand-gray/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                                To be the most trusted name in armored vehicle manufacturing, setting global standards for protection, innovation, and reliability in the defense and security sector.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="bg-gradient-to-b from-brand-dark to-brand-gray-dark/50 p-8 sm:p-10 md:p-14 flex flex-col items-center text-center relative overflow-hidden border-t md:border-t-0 md:border-l border-brand-gold/20"
                    >
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                            <img src="/Products/VIP/RangeRover.png" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-brand-gold flex items-center justify-center mb-6 sm:mb-8 mx-auto">
                                <Target className="text-brand-gold w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4 sm:mb-6">Mission</h2>
                            <p className="text-brand-gray/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                                To deliver world-class armored vehicles that combine cutting-edge technology with uncompromising quality, providing government and private sector clients with reliable security solutions for the 21st century.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
