import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import ceoImg from '../../assets/ceo.png';
import PageHeader from '../../components/PageHeader';

export default function CEOMessage() {
    return (
        <div className="min-h-screen bg-brand-dark">
            <PageHeader
                title="Message From The CEO"
                subtitle="About Us"
                breadcrumbs={[
                    { label: 'About', path: '/about' },
                    { label: 'CEO Message' },
                ]}
            />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 items-start">

                    {/* Portrait Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-2 flex flex-col items-center"
                    >
                        <div className="relative mx-auto max-w-[200px] sm:max-w-[250px] lg:max-w-xs group">
                            <div className="absolute -inset-3 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative rounded-xl overflow-hidden border-2 border-brand-gold/30 shadow-2xl">
                                <img src={ceoImg} alt="Dr. Dinshaw Anklesaria" className="w-full h-auto object-cover object-top" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark to-transparent p-4 sm:p-6">
                                    <h3 className="text-white font-bold text-sm sm:text-lg uppercase tracking-wide">Dr. Dinshaw Anklesaria</h3>
                                    <p className="text-brand-gold text-[0.55rem] sm:text-xs font-semibold tracking-[0.2em] uppercase">Chief Executive Officer</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-3 relative"
                    >
                        <Quote className="text-brand-gold/20 mb-3 sm:mb-4 w-8 h-8 sm:w-12 sm:h-12" />

                        <div className="space-y-3 sm:space-y-4 text-brand-gray/70 leading-relaxed text-sm sm:text-base">
                            <p className="text-white font-semibold text-base sm:text-lg">Welcome to Pak Armoring (Pvt) Ltd.</p>

                            <p>Pak Armoring Pvt. Ltd. is a security company with customers and partners around the world. Working with our partners, we are meeting a broad range of defense and security solutions for government and private sector.</p>

                            <p>Pak Armoring defense Armor products and solutions continue to grow to meet ever changing security threats in the 21st century.</p>

                            <p>With our deep industry knowledge and experience garnered in high threat environments around the world, we can help you maintain your security and protect your most valuable Assets.</p>

                            <p>We take immense pride and pleasure in celebrating our 10th years in the business, I must share that We have spent the past decade delivering the best in security products and solutions while continuing to build our brand, which has now become synonymous with high-performance, High-level security solutions.</p>

                            <p>Looking ahead, we are focused on accelerating the growth of our core business and continue to seek out new business opportunities around the county while optimizing the portfolio to increase shareholder value.</p>

                            <p>We are committed to the continued growth of our company by developing innovative products and solutions for the 21st century.</p>

                            <p>Thank you for your continued trust and support.</p>
                        </div>

                        {/* Sign-off */}
                        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-brand-gold/20">
                            <p className="text-brand-gold font-bold uppercase tracking-wider text-xs sm:text-sm">Dr. Dinshaw Anklesaria</p>
                            <p className="text-brand-gray/50 text-[0.6rem] sm:text-xs tracking-wider uppercase mt-1">Chief Executive Officer, Pak Armoring (Pvt) Ltd.</p>
                        </div>

                        {/* Contact CTA */}
                        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold py-2.5 px-6 rounded-sm uppercase tracking-[0.15em] text-xs transition-all w-full sm:w-auto justify-center"
                                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)' }}
                            >
                                Request a Meeting
                            </Link>
                            <a href="mailto:info@pakarmoring.pk" className="text-brand-gray/50 hover:text-brand-gold text-xs tracking-wider transition-colors text-center sm:text-left w-full sm:w-auto">info@pakarmoring.pk</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
