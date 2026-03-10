import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

export default function Clients() {
    const logos = [
        '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png',
        'abtak.jpg', 'alkaram.jpg', 'anoudGroup.jpg', 'artistic.jpg', 'ary.jpg', 'axact.jpg',
        'bahrianEmbasy.jpg', 'bahriatown.jpg', 'balochistanPolice.jpg', 'bankAlHabib.jpg',
        'bolnews.jpg', 'chinaEmbassy.jpg', 'ChinaPower.jpg', 'citibank.jpg', 'coastguard.jpg',
        'colgate-palmolive.jpg', 'CU.jpg', 'dawn.jpg', 'denimClothing.jpg', 'dhl.jpg',
        'dingroup.jpg', 'egale.jpg', 'embasyKorea.jpg', 'exide.jpg', 'generalTyre.jpg',
        'geonews.jpg', 'germanConsalte.jpg', 'gulahmed.jpg', 'habibMetroBank.jpg',
        'habibuniversity.jpg', 'hilton.jpg', 'iqrauniversity.jpg', 'iranEmabssy.jpg',
        'italianEmbassy.jpg', 'japanEmbasy.jpg', 'kpkGovt.jpg', 'kpkPolice.jpg', 'kpt.jpg',
        'luckycement.jpg', 'meezanBank.jpg', 'nestle.jpg', 'pepsi.jpg', 'pfizer.jpg',
        'phonexBattery.jpg', 'qatarembassy.jpg', 'samaa.jpg', 'shan.jpg', 'siemens.jpg',
        'sindhHighCourt.jpg', 'sindhPolice.jpg', 'southCity.jpg', 'ssp.jpg',
        'standardChartard.jpg', 'toyota.jpg', 'unileiver.jpg', 'unitedNation.jpg', 'ziaudinhospital.jpg',
    ];

    const row1 = logos.slice(0, 22);
    const row2 = logos.slice(22, 44);
    const row3 = logos.slice(44);

    return (
        <div className="min-h-screen bg-brand-dark">
            <PageHeader
                title="Our Valuable Clients"
                subtitle="About Us"
                breadcrumbs={[
                    { label: 'About', path: '/about' },
                    { label: 'Our Clients' },
                ]}
            />

            {/* Stats Bar */}
            <div className="bg-brand-green-dark border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-12 text-center">
                        {[
                            { value: '67+', label: 'Clients Served' },
                            { value: '10+', label: 'Government Agencies' },
                            { value: '8+', label: 'International Embassies' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                            >
                                <p className="text-2xl sm:text-3xl font-black text-brand-gold">{stat.value}</p>
                                <p className="text-brand-gray/50 text-[0.6rem] sm:text-xs font-semibold tracking-[0.15em] uppercase mt-0.5 sm:mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Marquee Trust Wall */}
            <div className="py-10 sm:py-14 lg:py-16 space-y-3 sm:space-y-4 lg:space-y-6 overflow-hidden">
                {[row1, row2, row3].map((row, ri) => (
                    <div
                        key={ri}
                        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
                    >
                        <div
                            className="flex gap-3 sm:gap-4 lg:gap-6 w-max"
                            style={{ animation: `${ri % 2 === 1 ? 'marquee-reverse' : 'marquee'} ${40 + ri * 5}s linear infinite` }}
                        >
                            {[...row, ...row].map((logo, i) => (
                                <div key={i} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0 flex items-center justify-center bg-white rounded-md p-2 sm:p-3 shadow-sm border border-gray-100">
                                    <img
                                        src={`/Client/${logo}`}
                                        alt="Client"
                                        className="w-full h-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
