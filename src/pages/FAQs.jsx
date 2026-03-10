import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const faqsData = [
    { question: "Who is Pak Armoring (Pvt) Ltd.?", answer: "Pak Armoring (Pvt) Ltd. (Pak Armoring) is a premier vehicle armoring company that armors all major makes and models of cars and SUV's while maintaining the vehicle's original appearance and performance. Since beginning operations over 10 years ago. Pak Armoring has produced in excess of 100 armored passenger vehicles. By using proprietary armoring designs and installation techniques as well as the latest lightweight armoring materials. Pak Armoring provides the most technologically advanced protected vehicles available. These vehicles have been delivered to heads of state, corporate executives, celebrities, religious leaders, and civilian contractors all over the world." },
    { question: "How can I determine what level of armoring do I need?", answer: "Armor levels are determined by each individual's perceived threat and location of the vehicles use. One size (i.e., Level of Package) does not fit all security threats. Call our Pak Armoring professional to help you determine the best armoring level and package." },
    { question: "What parts of a vehicle get armored?", answer: "The purpose of armoring a car is to protect the passengers. Towards that end, armor engineers focus on the occupants first by creating a cocoon of protection by enveloping the passenger cabin. Pak Armoring armors the entire passenger compartment, the glass, floors, pillar posts, roofs, doors – thus providing a maximum coverage of protection for vehicle passengers. In addition, other areas (battery, fuel tank, tires, ECM module, etc.) of the vehicle are, or can be protected." },
    { question: "How long will it take to armor my vehicle?", answer: "Our delivery times currently vary from 45 to 60 working days on the majority of vehicle models. Pak Armoring is able to accomplish this due to the volume of vehicles being armored and by keeping in stock armor components for most of the popular luxury vehicles." },
    { question: "How far will run flat tires carry me if they are shot out?", answer: "Run-flat tires will carry you, safety, for 50 miles at 50 miles per hour depending on road conditions. This is generally much more adequate than is required to escape or leave a dangerous situation to a safe zone." },
    { question: "Can any vehicle be armored?", answer: "Yes. Some vehicles, however, are more conductive to be armored than others. Again, please call the experts at Pak Armoring to discuss your specific needs." },
    { question: "Does an armored vehicle make more noise?", answer: "The armoring acts as an acoustic buffer making the armored vehicle quieter. Occasionally with time noises may occur. For this reason, we offer Two years Guarantee to fix any such problems quickly and accurately." },
    { question: "Does the resale value of an armored vehicle change much?", answer: "The armoring is an added feature, therefore when the vehicle is to be sold it should be appraised with the added value of this protection." },
    { question: "What warrantees are included with an armored vehicle?", answer: "We guarantee the armoring of our vehicles for 24 months. Our suppliers provide materials tested with the most rigid international standards of protection. And we count, on an extremely qualified customer service team to attend to our customer's needs, at their work, home, or office." },
    { question: "Is there any legal requirement for owning the Armoring vehicles?", answer: "Yes, No Objection Certificate (N.O.C) is required from Ministry of Interior Government of Pakistan." },
];

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="min-h-screen bg-brand-dark">
            <PageHeader
                title="Frequently Asked Questions"
                subtitle="FAQs"
                breadcrumbs={[{ label: 'FAQs' }]}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-2 sm:space-y-3"
                >
                    {faqsData.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-brand-gold shadow-md shadow-brand-gold/10' : 'border-white/10 bg-white/[0.02]'
                                }`}
                        >
                            <button
                                className={`w-full px-4 sm:px-6 py-3.5 sm:py-5 flex items-center justify-between text-left font-bold transition-colors ${openIndex === index ? 'bg-brand-gold text-white' : 'text-brand-gray/80 hover:text-white hover:bg-white/5'
                                    }`}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="pr-4 sm:pr-8 text-xs sm:text-sm md:text-base leading-snug">{faq.question}</span>
                                <span className="shrink-0 p-1 flex items-center justify-center rounded-full bg-white/20">
                                    {openIndex === index ? <Minus size={12} className="text-white" /> : <Plus size={12} className="text-brand-gold" />}
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial="collapsed"
                                        animate="open"
                                        exit="collapsed"
                                        variants={{
                                            open: { opacity: 1, height: "auto" },
                                            collapsed: { opacity: 0, height: 0 }
                                        }}
                                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <div className="px-4 sm:px-6 py-4 sm:py-5 text-brand-gray/70 leading-relaxed text-xs sm:text-sm lg:text-base border-t border-brand-gold/10">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 sm:mt-12 bg-gradient-to-r from-brand-green-dark to-brand-dark p-6 sm:p-8 rounded-xl text-center border border-white/5"
                >
                    <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-2">Still Have Questions?</h3>
                    <p className="text-brand-gray/60 mb-4 sm:mb-6 text-xs sm:text-sm">Our team is ready to help you with any inquiries about armored vehicles.</p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold py-3 px-6 sm:px-8 rounded-sm uppercase tracking-[0.15em] text-xs sm:text-sm transition-all w-full sm:w-auto justify-center"
                        style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)' }}
                    >
                        Contact Our Team
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
