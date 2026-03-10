import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

export default function Overview() {
    return (
        <div className="min-h-screen bg-brand-dark">
            <PageHeader
                title="Preamble"
                subtitle="About Us"
                breadcrumbs={[
                    { label: 'About', path: '/about' },
                    { label: 'Preamble' },
                ]}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-brand-gray/80 leading-relaxed text-sm sm:text-base md:text-lg mb-5 sm:mb-6 first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-black first-letter:text-brand-gold first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]">
                        Though armored cars have been used since the beginning of time, the modern light armored cars were developed in the early 1990s. The basic philosophy of being able to drive down the street with complete protection, but without advertising oneself, requires a complex process of engineering and design. Such a car would enable the user to have the convenience and luxury of using a personal car of choice, but with the added protection to handle emergencies.
                    </p>

                    <div className="bg-brand-green/10 border-l-4 border-brand-gold p-5 sm:p-8 rounded-r-xl my-6 sm:my-8">
                        <p className="text-brand-gold italic text-base sm:text-lg leading-relaxed font-medium">
                            "The concept of armoring a vehicle is to make it look stock. No one should be able to tell from just looking at the vehicle that it's been armored."
                        </p>
                    </div>

                    <p className="text-brand-gray/80 leading-relaxed text-sm sm:text-base md:text-lg mb-5 sm:mb-6">
                        There are many facets involved in armoring, the least being use of high-quality engineering steel and certified transparent armor. While protection for the passengers is important, the vehicle must be able to perform and carry the additional weight.
                    </p>

                    <p className="text-brand-gray/80 leading-relaxed text-sm sm:text-base md:text-lg mb-5 sm:mb-6">
                        Running gear components need to be upgraded to meet the demands of the extra weight. And, the armoring factory needs to have had the experience and the expertise to tackle these complex engineering and design problems. Special focus on the overall comfort of the vehicle must be maintained.
                    </p>

                    <p className="text-brand-gray/80 leading-relaxed text-sm sm:text-base md:text-lg mb-5 sm:mb-6">
                        The production of a discreet, armored car is no simple task. The team at Pak Armoring (PVT) Ltd. has developed expertise in design, research and development, and production. When you buy a Pak Armoring Car, you get the most progressive, safety-tried and test- proven armored vehicle available in Pakistan.
                    </p>

                    <p className="text-brand-gray/80 leading-relaxed text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                        Our top-quality and value added service for luxury armored vehicles has received worldwide recognition from Heads of State, Dignitaries, and Diplomates (Embassies and High Commissions), International Oil Companies operating in Pakistan and many large and mid-size companies, to name a few.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-brand-green-dark to-brand-dark p-6 sm:p-8 rounded-xl text-center border border-white/5"
                >
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3">Discover Our Vision & Mission</h3>
                    <p className="text-brand-gray/60 mb-4 sm:mb-6 text-xs sm:text-sm">Learn about the principles that drive our commitment to excellence.</p>
                    <Link
                        to="/about/vision-mission"
                        className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold-light font-bold uppercase tracking-[0.15em] text-xs sm:text-sm transition-colors group"
                    >
                        Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
