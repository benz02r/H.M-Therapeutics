import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const policyItems = [
    {
        icon: "mail",
        title: "Enquiries",
        description: "All pricing and booking inquiries must be handled via email or telephone. If you contact us by phone, an email address is still required for completing the pre treatment consultation form and deposit payment.",
    },
    {
        icon: "phone_missed",
        title: "Missed Calls",
        description: "If your call is not answered, I am likely with a client. I will call back as soon as possible. Alternatively, you can send an email, and I will get back to you promptly.",
    },
    {
        icon: "payments",
        title: "Deposits",
        description: "All bookings, including future and same day bookings, require a deposit, which will be deducted from your final total. Deposits are non refundable.",
        highlight: true,
    },
    {
        icon: "event_busy",
        title: "Cancellations & Rescheduling",
        description: "A minimum of 24 hours notice is required for cancellations or rescheduling. Failure to do so will result in a charge.",
        highlight: true,
    },
    {
        icon: "person_off",
        title: "No Shows",
        description: "Clients who do not show up for their appointment will be charged the full price of the session.",
        highlight: true,
    },
    {
        icon: "schedule",
        title: "Initial Appointments",
        description: "All first time appointments include a comprehensive face to face consultation prior to treatment.",
    },
    {
        icon: "assignment",
        title: "Consultation Form",
        description: "Once you have booked, a consultation form will be sent via email. This must be completed at least one hour before your appointment.",
    },
];

const faqs = [
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit and debit cards as well as bank transfers. Deposits can be paid online via the link provided in your booking confirmation email.",
    },
    {
        question: "Can I change my appointment?",
        answer: "Yes, you can reschedule your appointment as long as you provide at least 24 hours notice. Please contact us via phone or email to arrange a new time.",
    },
    {
        question: "What happens if I am late?",
        answer: "If you arrive late, your appointment time may be shortened to accommodate other clients. The full session fee will still apply. Please aim to arrive early for your appointment.",
    },
    {
        question: "Do you offer refunds?",
        answer: "The booking deposit is non refundable. Full session refunds are not available, but you may reschedule your appointment with at least 24 hours notice.",
    },
    {
        question: "What should I bring to my appointment?",
        answer: "Just yourself! We provide everything needed for your treatment. Please wear or bring comfortable clothing if needed. Most importantly, ensure your consultation form is completed before arrival.",
    },
];

export default function Policy() {
    return (
        <>
            <Head>
                <title>Booking Policy & Terms | HM Therapeutics</title>
                <meta
                    name="description"
                    content="Read HM Therapeutics booking policy, cancellation terms, and appointment guidelines. Deposit required. 24 hours cancellation notice needed."
                />
                <meta
                    name="keywords"
                    content="booking policy, cancellation policy, appointment terms, massage therapy policy, treatment guidelines"
                />
                <meta property="og:title" content="Booking Policy & Terms | HM Therapeutics" />
                <link rel="canonical" href="https://www.hmtherapeutics.co.uk/policy" />
            </Head>

            <div className="min-h-screen bg-background text-secondary font-sans">
                <Navbar />

                {/* Hero Section */}
                <section className="relative h-[50vh] min-h-[400px] bg-primary flex items-center justify-center text-white text-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95"></div>
                    <motion.div
                        className="relative z-10 max-w-4xl mx-auto px-6 mt-16 md:mt-0"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <motion.div
                            className="inline-block mb-4 text-accent uppercase tracking-[0.2em] text-sm font-semibold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            Important Information
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
                            Booking Policy
                        </h1>
                        <p className="text-lg md:text-xl font-light tracking-wide text-gray-300 max-w-2xl mx-auto">
                            Please read our policy carefully before securing your appointment
                        </p>
                    </motion.div>
                </section>

                {/* Key Policy Highlights */}
                <section className="py-12 bg-white -mt-16 relative z-10 border-b border-gray-100">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-6">
                            <motion.div
                                className="bg-background border border-gray-100 p-8 rounded-sm text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="text-4xl font-serif text-accent mb-3 flex justify-center">
                                    <span className="material-icons text-4xl">payments</span>
                                </div>
                                <div className="text-sm font-semibold uppercase tracking-widest text-primary">Required Deposit</div>
                                <div className="text-xs text-secondary mt-2 font-light">Non refundable booking fee</div>
                            </motion.div>
                            <motion.div
                                className="bg-background border border-gray-100 p-8 rounded-sm text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="text-4xl font-serif text-accent mb-3 flex justify-center">
                                    <span className="material-icons text-4xl">update</span>
                                </div>
                                <div className="text-sm font-semibold uppercase tracking-widest text-primary">24 Hours</div>
                                <div className="text-xs text-secondary mt-2 font-light">Cancellation notice required</div>
                            </motion.div>
                            <motion.div
                                className="bg-background border border-gray-100 p-8 rounded-sm text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="text-4xl font-serif text-accent mb-3 flex justify-center">
                                    <span className="material-icons text-4xl">assignment</span>
                                </div>
                                <div className="text-sm font-semibold uppercase tracking-widest text-primary">Consultation</div>
                                <div className="text-xs text-secondary mt-2 font-light">Mandatory prior to treatment</div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Detailed Policy Section */}
                <section className="py-24 bg-background">
                    <div className="max-w-5xl mx-auto px-6">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: -15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Complete Policy Details</h2>
                            <div className="w-16 h-[1px] bg-accent mx-auto mb-6"></div>
                            <p className="text-lg text-secondary font-light">Everything you need to know about booking with us</p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {policyItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`bg-white p-8 border ${
                                        item.highlight ? "border-accent shadow-md" : "border-gray-100 shadow-sm"
                                    } rounded-sm hover:shadow-lg transition-shadow duration-300`}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                >
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 bg-background border border-gray-50 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="material-icons text-2xl text-accent">{item.icon}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-serif text-primary mb-3">{item.title}</h3>
                                            <p className="text-secondary text-sm font-light leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                    {item.highlight && (
                                        <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-semibold pt-4 border-t border-gray-50">
                                            <span className="material-icons text-sm">info</span>
                                            Important policy point
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What to Expect Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: -15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">What to Expect</h2>
                            <div className="w-16 h-[1px] bg-accent mx-auto mb-6"></div>
                            <p className="text-lg text-secondary font-light">Your appointment journey from booking to treatment</p>
                        </motion.div>

                        <div className="grid md:grid-cols-4 gap-10">
                            {[
                                {
                                    step: "1",
                                    title: "Book Online",
                                    description: "Contact us via phone or email to inquire about availability",
                                },
                                {
                                    step: "2",
                                    title: "Pay Deposit",
                                    description: "Secure your appointment with a non refundable deposit",
                                },
                                {
                                    step: "3",
                                    title: "Complete Form",
                                    description: "Fill out the consultation form sent to your email at least 1 hour before",
                                },
                                {
                                    step: "4",
                                    title: "Your Treatment",
                                    description: "Arrive on time for your personalised therapeutic session",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center flex flex-col items-center"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                >
                                    <div className="w-16 h-16 bg-background border border-gray-100 text-accent rounded-full flex items-center justify-center text-2xl font-serif mb-6 shadow-sm">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-serif text-primary mb-3">{item.title}</h3>
                                    <p className="text-secondary text-sm font-light leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-background">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: -15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Frequently Asked Questions</h2>
                            <div className="w-16 h-[1px] bg-accent mx-auto mb-6"></div>
                            <p className="text-lg text-secondary font-light">Common questions about our policy</p>
                        </motion.div>

                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-8 border border-gray-50 rounded-sm shadow-sm"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                >
                                    <h3 className="text-lg font-serif text-primary mb-3 flex items-start gap-3">
                                        <span className="material-icons text-accent mt-0.5">help_outline</span>
                                        {faq.question}
                                    </h3>
                                    <p className="text-secondary text-sm font-light leading-relaxed pl-9">{faq.answer}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="mt-16 text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-secondary font-light mb-6">Still have questions?</p>
                            <Link
                                href="/contact"
                                className="inline-block border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 uppercase tracking-widest text-sm font-semibold transition-colors duration-300 rounded-sm"
                            >
                                Contact Us
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Important Notice Section */}
                <section className="py-24 bg-accent text-white">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="material-icons text-5xl mb-6 opacity-90">verified</span>
                            <h2 className="text-3xl md:text-4xl font-serif mb-6">Your Agreement</h2>
                            <p className="text-lg font-light opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto">
                                By booking an appointment with HM Therapeutics, you acknowledge that you have read,
                                understood, and agree to abide by our booking policy. This includes all deposit,
                                cancellation, and no show policies outlined above.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block bg-primary text-white hover:bg-gray-900 px-10 py-4 uppercase tracking-widest text-sm font-semibold transition-colors duration-300 rounded-sm shadow-sm"
                            >
                                I Understand & Book Now
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-primary text-white py-12">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
                            <div className="md:col-span-2 flex flex-col items-center md:items-start">
                                <Image
                                    src="/images/logo.png"
                                    alt="HM Therapeutics Logo"
                                    width={120}
                                    height={42}
                                    className="mb-4 opacity-90"
                                />
                                <p className="text-gray-400 font-light leading-relaxed max-w-sm">
                                    Professional sports and relaxation massage therapy in Walsall.
                                    Expert care for injury recovery, pain relief, and wellness.
                                </p>
                            </div>

                            <div className="flex flex-col items-center md:items-start">
                                <h3 className="text-lg font-serif mb-4 text-white">Quick Links</h3>
                                <nav className="flex flex-col gap-3">
                                    {["Home", "About", "Services", "Contact", "Policy"].map((item) => (
                                        <Link
                                            key={item}
                                            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                            className="text-gray-400 hover:text-accent uppercase tracking-wider text-xs transition-colors"
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            <div className="flex flex-col items-center md:items-start">
                                <h3 className="text-lg font-serif mb-4 text-white">Contact</h3>
                                <div className="text-gray-400 font-light space-y-2 text-sm">
                                    <p>Walsall, UK</p>
                                    <p>By appointment only</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-800 pt-8 flex flex-col items-center">
                            <p className="text-sm text-gray-500 font-light">
                                &copy; {new Date().getFullYear()} HM Therapeutics. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}