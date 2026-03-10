import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle } from 'lucide-react';

export default function Benefits() {
    const benefitsGroup1 = [
        'Superior vehicle survivability: Improved ballistic protection and IED blast protection from all angles.',
        'High on and off-road vehicle performance for optimal evasive maneuverability.',
        'High operational temperature range.',
        'Retention of OEM vehicle exterior and features.',
        'Increased vehicle durability and reliability, reduced maintenance, servicing costs and downtime.',
    ];

    const benefitsGroup2 = [
        'Advanced IED blast protection through integration of interlocked pieces of large, armoring panels, maximizing the strength of the armoring material.',
        'All armoring panels are installed in an overlapping layout to eliminate any gaps in the armoring.',
        'Full 360° degree "bullet catcher" overlap systems installed in all vehicle openings, from top to bottom.',
        'Strength of vehicle cabin reinforced by interlocking large pieces of armoring panels, acting as a vehicle roll cage.',
        'Minimized welding and bolting points prevent collapse of armoring panels in the event of an explosive attack.',
        'Vehicle chassis, suspension and brakes are upgraded with heavy duty and high-performance components to accommodate the additional armoring weight.',
        'Armored engine bay and fuel tank protect essential vehicle components, ensuring vehicle functionality for evasive maneuvers.',
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
    };

    return (
        <div className="pt-24 pb-16 min-h-screen bg-brand-dark">
            {/* Page Header */}
            <div className="bg-brand-gray/5 py-12 border-b border-white/5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">Benefits</h1>
                        <p className="text-brand-gold mt-2 uppercase tracking-widest text-sm font-bold">Technology</p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Benefits Group 1 */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <ShieldCheck className="w-8 h-8 text-brand-gold" />
                            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Benefits of Pak Armoring Armor Technology</h2>
                        </div>

                        <div className="space-y-4">
                            {benefitsGroup1.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="flex items-start gap-4 bg-white/[0.03] border border-white/[0.06] rounded-lg p-4 hover:bg-white/[0.06] transition-colors"
                                >
                                    <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                                    <p className="text-brand-gray/90 text-sm leading-relaxed">{benefit}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Benefits Group 2 */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <ShieldCheck className="w-8 h-8 text-brand-gold" />
                            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Advanced Protection Features</h2>
                        </div>

                        <div className="space-y-4">
                            {benefitsGroup2.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="flex items-start gap-4 bg-white/[0.03] border border-white/[0.06] rounded-lg p-4 hover:bg-white/[0.06] transition-colors"
                                >
                                    <CheckCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                                    <p className="text-brand-gray/90 text-sm leading-relaxed">{benefit}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
