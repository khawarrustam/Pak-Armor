import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

export default function BallisticStandardsChart() {
    const nijData = [
        { type: 'I', weapons: ['38 Special RN Lead', '22 LRHV Lead'], mass: '10.2 g\n40 gr', length: '15 to 16.5 cm\n6 to 6.5 in', velocity: '320 ± 12 m/s\n1050 ± 40 ft/s' },
        { type: 'II-A', weapons: ['357 Magnum JSP', '9 mm FMJ'], mass: '10.2 g\n8.0 g', length: '10 to 12 cm\n10 to 12 cm', velocity: '381 ± 15 m/s\n1090 ± 40 ft/s' },
        { type: 'II', weapons: ['357 Magnum JSP', '9 mm FMJ'], mass: '10.2 g\n8.0 g', length: '15 to 16.5 cm\n10 to 12 cm', velocity: '425 ± 15 m/s\n1175 ± 40 ft/s' },
        { type: 'III-A', weapons: ['44 Magnum Lead SWC Gas Checked', '9 mm FMJ'], mass: '15.55 g\n8.0 g', length: '14 to 16 cm\n24 to 26 cm', velocity: '426 ± 15 m/s\n1400 ± 50 ft/s' },
        { type: 'III', weapons: ['7.62 mm (308 Winchester) FMJ'], mass: '9.7 g\n150 gr', length: '56 cm\n22 in', velocity: '838 ± 15 m/s\n2750 ± 50 ft/s' },
        { type: 'IV', weapons: ['.30-06 AP'], mass: '10.8 g\n166 gr', length: '56 cm\n22 in', velocity: '868 ± 15 m/s\n2850 ± 50 ft/s' }
    ];

    return (
        <div className="min-h-screen bg-brand-dark">
            <PageHeader
                title="Ballistic Standards Chart"
                subtitle="Products"
                breadcrumbs={[
                    { label: 'Products', path: '/products' },
                    { label: 'Ballistic Standards Chart' },
                ]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-10 sm:mb-16"
                >
                    <div className="bg-brand-gold py-3 sm:py-4 px-4 sm:px-6 rounded-t-lg border-b-4 border-brand-gold-dark shadow-lg">
                        <h2 className="text-base sm:text-xl md:text-2xl font-bold text-white uppercase tracking-wider text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                            <Target size={20} className="sm:w-6 sm:h-6" /> <span>NIJ Standard - 0108.01</span>
                        </h2>
                    </div>

                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto bg-brand-gray-dark rounded-b-lg border border-white/10 shadow-2xl">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="bg-brand-green-dark text-brand-gray text-xs uppercase tracking-wider">
                                    <th className="p-3 sm:p-4 font-bold border-b border-r border-white/5 text-center">Armor Type</th>
                                    <th className="p-3 sm:p-4 font-bold border-b border-r border-white/5">Test Ammunition</th>
                                    <th className="p-3 sm:p-4 font-bold border-b border-r border-white/5 text-center">Bullet Mass</th>
                                    <th className="p-3 sm:p-4 font-bold border-b border-r border-white/5 text-center">Barrel Length</th>
                                    <th className="p-3 sm:p-4 font-bold border-b border-white/5 text-center">Velocity</th>
                                </tr>
                            </thead>
                            <tbody className="text-brand-gray text-sm">
                                {nijData.map((row, index) => (
                                    <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="p-3 sm:p-4 border-r border-white/5 text-center font-bold text-brand-gold text-lg bg-black/20">{row.type}</td>
                                        <td className="p-3 sm:p-4 border-r border-white/5">
                                            <div className="flex flex-col gap-1">
                                                {row.weapons.map((w, i) => (
                                                    <span key={i} className="flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green-light" /> {w}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="p-3 sm:p-4 border-r border-white/5 text-center whitespace-pre-line text-brand-gray/80 font-mono text-xs">{row.mass}</td>
                                        <td className="p-3 sm:p-4 border-r border-white/5 text-center whitespace-pre-line text-brand-gray/80 font-mono text-xs">{row.length}</td>
                                        <td className="p-3 sm:p-4 text-center whitespace-pre-line font-mono text-xs text-brand-gray/90">{row.velocity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                        {nijData.map((row, index) => (
                            <div key={index} className="bg-white/[0.03] border border-white/[0.08] rounded-lg p-3 sm:p-4">
                                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                    <span className="bg-brand-gold text-white font-bold text-sm sm:text-lg px-2.5 sm:px-3 py-0.5 sm:py-1 rounded">{row.type}</span>
                                    <div className="flex flex-col gap-0.5">
                                        {row.weapons.map((w, i) => (
                                            <span key={i} className="text-brand-gray/80 text-xs sm:text-sm">{w}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 text-[0.6rem] sm:text-xs text-brand-gray/60 font-mono">
                                    <div><span className="block text-brand-gold/60 mb-0.5 sm:mb-1 font-sans font-bold uppercase tracking-wider text-[0.5rem] sm:text-[0.6rem]">Mass</span>{row.mass}</div>
                                    <div><span className="block text-brand-gold/60 mb-0.5 sm:mb-1 font-sans font-bold uppercase tracking-wider text-[0.5rem] sm:text-[0.6rem]">Barrel</span>{row.length}</div>
                                    <div><span className="block text-brand-gold/60 mb-0.5 sm:mb-1 font-sans font-bold uppercase tracking-wider text-[0.5rem] sm:text-[0.6rem]">Velocity</span>{row.velocity}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Ballistic Level Images */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="bg-brand-gold py-3 sm:py-4 px-4 sm:px-6 rounded-t-lg border-b-4 border-brand-gold-dark shadow-lg">
                        <h2 className="text-base sm:text-xl md:text-2xl font-bold text-white uppercase tracking-wider text-center">
                            Ballistic Level Comparison
                        </h2>
                    </div>

                    <div className="bg-white rounded-b-lg border border-white/10 shadow-2xl p-4 sm:p-6 md:p-8">
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                            {[
                                { src: '/Products/Ballastic Standards Chart/1.png', label: 'NIJ Standard Overview' },
                                { src: '/Products/Ballastic Standards Chart/II-A.png', label: 'Level II-A' },
                                { src: '/Products/Ballastic Standards Chart/II.png', label: 'Level II' },
                                { src: '/Products/Ballastic Standards Chart/III-A.png', label: 'Level III-A' },
                                { src: '/Products/Ballastic Standards Chart/III.png', label: 'Level III' },
                                { src: '/Products/Ballastic Standards Chart/IV.png', label: 'Level IV' },
                            ].map((chart, i) => (
                                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                                    <div className="bg-brand-green-dark px-3 sm:px-4 py-1.5 sm:py-2">
                                        <p className="text-white text-[0.6rem] sm:text-sm font-bold tracking-wider uppercase text-center">{chart.label}</p>
                                    </div>
                                    <div className="bg-white p-1.5 sm:p-2">
                                        <img src={chart.src} alt={chart.label} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
