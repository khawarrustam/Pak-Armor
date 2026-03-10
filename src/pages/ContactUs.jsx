import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function ContactUs() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-brand-dark">
            <PageHeader
                title="Contact Us"
                subtitle="Get in Touch"
                breadcrumbs={[{ label: 'Contact Us' }]}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Form */}
                        <div className="p-5 sm:p-8 md:p-12">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center bg-brand-green/5 rounded-lg p-6 sm:p-8"
                                >
                                    <CheckCircle className="text-brand-success mb-4" size={40} />
                                    <h3 className="text-brand-dark text-lg sm:text-xl font-bold mb-2">Thank You!</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">We'll get back to you shortly.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-6 text-brand-gold hover:text-brand-gold-dark text-sm font-bold uppercase tracking-wider"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="space-y-4 sm:space-y-6"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div>
                                            <label className="block text-xs sm:text-sm font-bold text-brand-dark uppercase tracking-wider mb-1.5 sm:mb-2">Name <span className="text-brand-red">*</span></label>
                                            <input type="text" placeholder="Enter Your Name" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors text-brand-dark text-sm" />
                                        </div>
                                        <div>
                                            <label className="block text-xs sm:text-sm font-bold text-brand-dark uppercase tracking-wider mb-1.5 sm:mb-2">Email <span className="text-brand-red">*</span></label>
                                            <input type="email" placeholder="Enter Your Email" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors text-brand-dark text-sm" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                        <div>
                                            <label className="block text-xs sm:text-sm font-bold text-brand-dark uppercase tracking-wider mb-1.5 sm:mb-2">Contact No</label>
                                            <input type="tel" placeholder="Enter Your Contact No" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors text-brand-dark text-sm" />
                                        </div>
                                        <div>
                                            <label className="block text-xs sm:text-sm font-bold text-brand-dark uppercase tracking-wider mb-1.5 sm:mb-2">Subject <span className="text-brand-red">*</span></label>
                                            <input type="text" placeholder="Enter Your Subject" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors text-brand-dark text-sm" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs sm:text-sm font-bold text-brand-dark uppercase tracking-wider mb-1.5 sm:mb-2">Message <span className="text-brand-red">*</span></label>
                                        <textarea rows="4" placeholder="Enter Your Message" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors resize-none text-brand-dark text-sm" />
                                    </div>

                                    <button
                                        type="submit"
                                        className="group flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-sm transition-all shadow-lg shadow-brand-gold/20 uppercase tracking-widest text-xs sm:text-sm w-full sm:w-auto"
                                        style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)' }}
                                    >
                                        Submit <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </motion.form>
                            )}
                        </div>

                        {/* Contact Info + Map */}
                        <div className="bg-gray-50 p-5 sm:p-8 md:p-12 flex flex-col gap-4 sm:gap-6 border-t lg:border-t-0 lg:border-l border-gray-100">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-3 sm:space-y-4"
                            >
                                {[
                                    { icon: MapPin, title: 'Visit Us', text: 'Plot No. 2/2a, Survey 86, Sector 24, Main Korangi Creek Road, Karachi.' },
                                    { icon: Phone, title: 'Call Us', text: '0321-2112777' },
                                    { icon: Mail, title: 'Email Us', text: 'info@pakarmoring.pk' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:-translate-x-1 transition-transform">
                                        <div className="bg-brand-green-dark p-2.5 sm:p-3 rounded-sm text-brand-gold shrink-0">
                                            <item.icon size={16} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-dark uppercase tracking-wider text-xs sm:text-sm mb-0.5 sm:mb-1">{item.title}</h4>
                                            <p className="text-gray-600 text-xs sm:text-sm break-all sm:break-normal">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Map */}
                            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm flex-grow min-h-[180px] sm:min-h-[200px] lg:min-h-[200px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.8!2d67.12!3d24.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUwJzAwLjAiTiA2N8KwMDcnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: '180px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Pak Armoring Office Location"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
