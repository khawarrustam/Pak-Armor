import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ShieldCheck, Car, Users, Award, ArrowRight, Phone, Mail } from 'lucide-react';

/* ── Animated counter ─────────────────────────────────────────── */
function Counter({ target, suffix = '' }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let current = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
            current += step;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(current);
        }, 25);
        return () => clearInterval(timer);
    }, [isInView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Client Marquee Row ───────────────────────────────────────── */
function MarqueeRow({ logos, reverse = false, speed = 40 }) {
    return (
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
                className="flex gap-3 sm:gap-4 lg:gap-6 w-max"
                style={{ animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${speed}s linear infinite` }}
            >
                {[...logos, ...logos].map((logo, i) => (
                    <div key={i} className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 flex-shrink-0 flex items-center justify-center bg-white rounded-md p-2 sm:p-3 shadow-sm border border-gray-100">
                        <img src={`/Client/${logo}`} alt="Client" className="w-full h-full object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ── Home Component ───────────────────────────────────────────── */
export default function Home() {
    const clientLogos = [
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
    const row1 = clientLogos.slice(0, 34);
    const row2 = clientLogos.slice(34);

    const topVehicles = [
        { name: 'Land Cruiser', image: '/Products/VIP/ToyotaLANDCRUISER.png' },
        { name: 'Range Rover', image: '/Products/VIP/RangeRover.png' },
        { name: 'BMW X Series', image: '/Products/VIP/BMW-X.png' },
        { name: 'Fortuner', image: '/Products/VIP/ToyotaFORTUNER.png' },
    ];

    return (
        <div className="overflow-hidden">

            {/* ═══ SECTION 1 — HERO ═══ */}
            <section className="relative min-h-[85vh] sm:min-h-screen flex items-center">
                <div className="absolute inset-0">
                    <img src="/Products/Multi Purpose Vehicles.png" alt="Armored Vehicle" className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 sm:from-black/85 sm:via-black/60 sm:to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/30" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="inline-flex items-center gap-1.5 sm:gap-2 bg-brand-gold/20 border border-brand-gold/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6"
                        >
                            <ShieldCheck size={12} className="text-brand-gold sm:w-3.5 sm:h-3.5" />
                            <span className="text-brand-gold text-[0.6rem] sm:text-xs font-semibold tracking-[0.12em] sm:tracking-[0.2em] uppercase">Advanced Armored Solutions</span>
                        </motion.div>

                        {/* Title */}
                        <h1 className="text-white font-black uppercase leading-[0.95]" style={{ fontSize: 'clamp(2rem, 7vw, 5rem)', letterSpacing: '-0.03em' }}>
                            Protecting What
                            <span className="block text-brand-gold">Matters Most</span>
                        </h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-brand-gray/70 text-sm sm:text-base md:text-lg leading-relaxed mt-4 sm:mt-6 max-w-xl"
                        >
                            Pakistan's premier armored vehicle manufacturer. Delivering world-class ballistic protection
                            with B4 to B7 certification for heads of state, executives, and security forces.
                        </motion.p>

                        {/* CTAs — stack on mobile, row on sm+ */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8"
                        >
                            <Link
                                to="/products"
                                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold py-3.5 px-8 rounded-sm uppercase tracking-[0.15em] text-sm transition-all hover:scale-[1.02] shadow-lg shadow-brand-gold/20 w-full sm:w-auto"
                                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 20px rgba(212,162,76,0.3)' }}
                            >
                                Explore Our Fleet <ArrowRight size={16} />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white font-bold py-3.5 px-8 rounded-sm uppercase tracking-[0.15em] text-sm hover:border-brand-gold hover:text-brand-gold transition-all w-full sm:w-auto"
                            >
                                Request a Quote
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                <svg className="absolute bottom-0 left-0 w-full h-6 sm:h-10 lg:h-14" viewBox="0 0 1200 60" preserveAspectRatio="none">
                    <path d="M0 60 L1200 20 L1200 60 Z" className="fill-brand-dark" />
                </svg>
            </section>

            {/* ═══ SECTION 2 — STATS COUNTER ═══ */}
            <section className="bg-brand-green-dark relative -mt-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
                        {[
                            { icon: Award, value: 19, suffix: '+', label: 'Years Experience' },
                            { icon: Car, value: 100, suffix: '+', label: 'Vehicles Armored' },
                            { icon: Users, value: 67, suffix: '+', label: 'Trusted Clients' },
                            { icon: ShieldCheck, value: 4, suffix: '', label: 'Protection Levels (B4–B7)' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="flex flex-col items-center"
                            >
                                <stat.icon className="text-brand-gold mb-1.5 sm:mb-2" size={22} />
                                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                                    <Counter target={stat.value} suffix={stat.suffix} />
                                </p>
                                <p className="text-brand-gray/60 text-[0.6rem] sm:text-xs md:text-sm font-semibold tracking-[0.1em] sm:tracking-[0.15em] uppercase mt-0.5 sm:mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 3 — ABOUT SUMMARY ═══ */}
            <section className="section-py bg-brand-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                <div className="h-px w-8 sm:w-12 bg-brand-gold" />
                                <span className="text-brand-gold text-[0.6rem] sm:text-xs font-semibold tracking-[0.2em] uppercase">Who We Are</span>
                            </div>
                            <h2 className="text-white font-black uppercase leading-tight mb-4 sm:mb-6" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
                                Pakistan's Premier
                                <span className="block text-brand-gold">Armored Vehicle Manufacturer</span>
                            </h2>
                            <p className="text-brand-gray/70 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                                Pak Armoring Pvt. Ltd. is a security company with customers and partners around the world. Working with our partners, we meet a broad range of defense and security solutions for government and private sector.
                            </p>
                            <p className="text-brand-gray/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                                Our defense armor products and solutions continue to grow to meet ever-changing security threats in the 21st century. With deep industry knowledge and experience garnered in high-threat environments, we help protect your most valuable assets.
                            </p>
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold-light font-bold uppercase tracking-[0.15em] text-sm transition-colors group"
                            >
                                Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative"
                        >
                            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/5">
                                <img src="/Pictures/15.png" alt="Armored Vehicle" className="w-full h-56 sm:h-72 lg:h-[28rem] object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                            </div>
                            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 border-2 border-brand-gold/30 rounded-xl -z-10" />
                            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-14 h-14 sm:w-20 sm:h-20 bg-brand-gold/10 rounded-xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 4 — PRODUCT SHOWCASE ═══ */}
            <section className="section-py bg-brand-gray-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-8 sm:mb-12 lg:mb-16"
                    >
                        <span className="text-brand-gold text-[0.6rem] sm:text-xs font-semibold tracking-[0.2em] uppercase">Our Fleet</span>
                        <h2 className="text-white font-black uppercase mt-1.5 sm:mt-2" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
                            Armored VIP Vehicles
                        </h2>
                        <div className="h-1 w-12 sm:w-16 bg-brand-gold mx-auto mt-3 sm:mt-4 rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                        {topVehicles.map((vehicle, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <Link to="/products" className="block group">
                                    <div className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
                                        <div className="aspect-[4/3] flex items-center justify-center p-3 sm:p-6 bg-white">
                                            <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-700" />
                                        </div>
                                        <div className="bg-brand-green-dark group-hover:bg-brand-gold transition-colors duration-300 p-2.5 sm:p-4">
                                            <h3 className="text-white font-bold text-[0.65rem] sm:text-sm tracking-wider sm:tracking-widest uppercase text-center">{vehicle.name}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-8 sm:mt-12">
                        <Link
                            to="/products"
                            className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold py-3 px-6 sm:px-8 rounded-sm uppercase tracking-[0.15em] text-sm transition-all hover:scale-[1.02] w-full sm:w-auto"
                            style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)' }}
                        >
                            View All Vehicles <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 5 — CLIENT TRUST MARQUEE (2 rows on mobile, 2 rows on all) ═══ */}
            <section className="py-10 sm:py-14 lg:py-20 bg-brand-dark border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-6 sm:mb-8 lg:mb-12"
                    >
                        <span className="text-brand-gold text-[0.6rem] sm:text-xs font-semibold tracking-[0.2em] uppercase">Trusted By</span>
                        <h2 className="text-white font-black uppercase mt-1.5 sm:mt-2" style={{ fontSize: 'clamp(1.25rem, 3vw, 2.5rem)' }}>
                            Our Valued Clients
                        </h2>
                    </motion.div>

                    <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                        <MarqueeRow logos={row1} speed={50} />
                        <MarqueeRow logos={row2} reverse speed={55} />
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 6 — CTA BANNER ═══ */}
            <section className="section-py bg-brand-green-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-gold to-transparent" />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-white font-black uppercase mb-3 sm:mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
                            Ready to Secure Your Fleet?
                        </h2>
                        <p className="text-brand-gray/60 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                            Contact our team of armoring specialists for a personalized consultation and quote tailored to your security requirements.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-10">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold py-3.5 px-8 rounded-sm uppercase tracking-[0.15em] text-sm transition-all hover:scale-[1.02] w-full sm:w-auto"
                                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)' }}
                            >
                                Request a Quote <ArrowRight size={16} />
                            </Link>
                            <a
                                href="tel:0321-2112777"
                                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white font-bold py-3.5 px-8 rounded-sm uppercase tracking-[0.15em] text-sm hover:border-brand-gold hover:text-brand-gold transition-all w-full sm:w-auto"
                            >
                                <Phone size={16} /> Call Now
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 text-brand-gray/50 text-sm">
                            <a href="tel:0321-2112777" className="flex items-center justify-center gap-2 hover:text-brand-gold transition-colors">
                                <Phone size={14} /> 0321-2112777
                            </a>
                            <a href="mailto:info@pakarmoring.pk" className="flex items-center justify-center gap-2 hover:text-brand-gold transition-colors">
                                <Mail size={14} /> info@pakarmoring.pk
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
