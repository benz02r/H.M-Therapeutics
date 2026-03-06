import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const painRelief = [
    {
        id: "back-pain",
        title: "Back Pain Relief",
        icon: "accessibility",
        description: "Relieve chronic back pain without painkillers, surgery, or ineffective treatments.",
        causes: [
            "Poor posture from prolonged sitting",
            "Incorrect lifting techniques",
            "Muscle strain and tension buildup",
            "Previous injuries not fully healed",
        ],
        tips: [
            "Avoid prolonged sitting or resting gentle movement reduces stiffness",
            "Stay hydrated to help your body heal naturally",
            "Ensure 7 to 9 hours of quality sleep per night",
            "Practice proper lifting techniques",
        ],
    },
    {
        id: "neck-shoulders",
        title: "Neck & Shoulder Pain Relief",
        icon: "self_improvement",
        description: "Prevent headaches and sleep disturbances caused by neck and shoulder tension.",
        causes: [
            "Stress and tension buildup",
            "Poor sleeping position",
            "Extended computer or phone use",
            "Repetitive strain injuries",
        ],
        tips: [
            "Take regular breaks from desk work",
            "Stay hydrated to reduce muscle tension",
            "Practice gentle neck stretches throughout the day",
            "Ensure proper pillow support while sleeping",
        ],
    },
    {
        id: "feet-calves",
        title: "Foot & Calf Pain Relief",
        icon: "directions_walk",
        description: "Your foot health is the foundation of your leg's overall well being.",
        causes: [
            "Wearing unsupportive footwear",
            "Overuse from sports or standing",
            "Plantar fasciitis",
            "Poor circulation",
        ],
        tips: [
            "Wear properly fitted, supportive shoes",
            "Use quality insoles for arch support",
            "Elevate feet when resting",
            "Perform regular calf stretches",
        ],
    },
];

const specialisedServices = [
    {
        id: "sports-massage",
        title: "Sports Massage Therapy",
        icon: "sports_kabaddi",
        description: "Enhance athletic performance, prevent injuries, and accelerate recovery.",
        benefits: [
            "Improved flexibility and range of motion",
            "Faster muscle recovery",
            "Enhanced athletic performance",
            "Injury prevention",
        ],
    },
    {
        id: "cupping",
        title: "Cupping Therapy",
        icon: "spa",
        description: "Ancient healing technique to improve circulation and reduce muscle tension.",
        benefits: [
            "Improved blood circulation",
            "Reduced muscle tension",
            "Toxin removal",
            "Pain relief",
        ],
    },
    {
        id: "sauna",
        title: "Infrared Sauna Pod",
        icon: "hot_tub",
        description: "Cutting edge treatment for detoxification, pain relief, and skin health.",
        benefits: [
            "Full body detoxification",
            "Improved circulation",
            "Muscle relaxation",
            "Skin rejuvenation",
        ],
    },
    {
        id: "deep-tissue",
        title: "Deep Tissue Massage",
        icon: "healing",
        description: "Targeted treatment for chronic pain and deep muscle tension.",
        benefits: [
            "Relief from chronic pain",
            "Breaking down scar tissue",
            "Improved posture",
            "Stress reduction",
        ],
    },
];

const packages = [
    {
        title: "Wellness Package",
        description: "3 sessions of any massage therapy",
        features: ["Choose your preferred treatments", "Valid for 3 months", "Flexible scheduling"],
    },
    {
        title: "Recovery Bundle",
        description: "5 sessions and 1 free sauna treatment",
        features: ["Mix and match services", "Valid for 6 months", "Priority booking"],
        popular: true,
    },
    {
        title: "Athletic Performance",
        description: "10 sessions and 2 free treatments",
        features: ["Customised recovery plan", "Valid for 12 months", "Progress tracking"],
    },
];

export default function Services() {
    const [openService, setOpenService] = useState(null);
    const [activeTab, setActiveTab] = useState("pain-relief");

    // FAQ Schema Markup for Google Rich Snippets
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How long is each session?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Session lengths vary depending on the specific treatment. Initial appointments include a full consultation."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need to bring anything?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Just yourself! I provide everything needed for your treatment. Wear comfortable clothing and complete your consultation form before arrival."
                }
            },
            {
                "@type": "Question",
                "name": "How often should I book treatments?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "This depends on your individual needs. For chronic pain, weekly sessions are recommended initially. For maintenance and relaxation, bi weekly or monthly visits work well."
                }
            },
            {
                "@type": "Question",
                "name": "What is your cancellation policy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "I require 24 hours notice for cancellations or rescheduling. Please see the policy page for full details."
                }
            }
        ]
    };

    return (
        <>
            <Head>
                <title>Massage Therapy Services Wolverhampton | HM Therapeutics</title>
                <meta
                    name="description"
                    content="Professional massage therapy services in Wolverhampton: sports massage, pain relief, cupping therapy, infrared sauna. Book your appointment today."
                />
                <meta
                    name="keywords"
                    content="massage therapy wolverhampton, sports massage, back pain treatment, cupping therapy, sauna treatment, deep tissue massage"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Massage Therapy Services Wolverhampton | HM Therapeutics" />
                <meta property="og:description" content="Explore our premium sports and relaxation massage treatments in the West Midlands." />
                <meta property="og:url" content="https://www.hmtherapeutics.co.uk/services" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.hmtherapeutics.co.uk/images/hero.jpg" />
                <meta property="og:site_name" content="HM Therapeutics" />
                <meta property="og:locale" content="en_GB" />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Massage Therapy Services | HM Therapeutics" />
                <meta name="twitter:description" content="Expert massage therapy for sports injuries, relaxation, and pain relief." />
                <meta name="twitter:image" content="https://www.hmtherapeutics.co.uk/images/hero.jpg" />

                <link rel="canonical" href="https://www.hmtherapeutics.co.uk/services" />

                {/* Inject FAQ Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            </Head>

            <div className="min-h-screen bg-background text-secondary font-sans">
                <Navbar />

                {/* Hero Section */}
                <section className="relative h-[60vh] min-h-[450px] bg-primary flex items-center justify-center text-white text-center">
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
                            Professional Therapeutic Services
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
                            Our Treatments
                        </h1>
                        <p className="text-lg md:text-xl font-light tracking-wide text-gray-300 max-w-2xl mx-auto">
                            Tailored treatments for pain relief, recovery, and optimal wellness
                        </p>
                    </motion.div>
                </section>

                {/* Service Category Tabs */}
                <section className="py-8 bg-white border-b border-gray-100 sticky top-0 md:top-[72px] z-40 shadow-sm">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="flex gap-4 justify-center flex-wrap">
                            <button
                                onClick={() => setActiveTab("pain-relief")}
                                className={`px-6 py-3 rounded-sm font-semibold tracking-wide text-sm uppercase transition-colors duration-300 ${
                                    activeTab === "pain-relief"
                                        ? "bg-primary text-white"
                                        : "bg-background text-secondary hover:text-primary border border-gray-100"
                                }`}
                            >
                                Pain Relief
                            </button>
                            <button
                                onClick={() => setActiveTab("specialised")}
                                className={`px-6 py-3 rounded-sm font-semibold tracking-wide text-sm uppercase transition-colors duration-300 ${
                                    activeTab === "specialised"
                                        ? "bg-primary text-white"
                                        : "bg-background text-secondary hover:text-primary border border-gray-100"
                                }`}
                            >
                                Specialised Treatments
                            </button>
                            <button
                                onClick={() => setActiveTab("packages")}
                                className={`px-6 py-3 rounded-sm font-semibold tracking-wide text-sm uppercase transition-colors duration-300 ${
                                    activeTab === "packages"
                                        ? "bg-primary text-white"
                                        : "bg-background text-secondary hover:text-primary border border-gray-100"
                                }`}
                            >
                                Packages & Offers
                            </button>
                        </div>
                    </div>
                </section>

                {/* Pain Relief Services */}
                <AnimatePresence mode="wait">
                    {activeTab === "pain-relief" && (
                        <motion.section
                            key="pain-relief"
                            className="py-24 bg-background"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="max-w-4xl mx-auto px-6">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Pain Relief Treatments</h2>
                                    <div className="w-16 h-[1px] bg-accent mx-auto mb-6"></div>
                                    <p className="text-lg text-secondary font-light">Targeted therapy for common pain conditions</p>
                                </div>

                                <div className="space-y-6">
                                    {painRelief.map((service, index) => (
                                        <motion.div
                                            key={service.id}
                                            className="bg-white border border-gray-100 shadow-sm rounded-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.6 }}
                                        >
                                            <div
                                                className="p-8 cursor-pointer group"
                                                onClick={() => setOpenService(openService === service.id ? null : service.id)}
                                            >
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                                    <div className="flex items-start sm:items-center gap-6 flex-1">
                                                        <div className="w-14 h-14 bg-background border border-gray-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/5 transition-colors duration-300">
                                                            <span className="material-icons text-2xl text-accent">
                                                                {service.icon}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-2xl font-serif text-primary mb-2">{service.title}</h3>
                                                            <p className="text-secondary font-light text-sm">{service.description}</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-end w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-0 border-gray-50">
                                                        <span className={`material-icons text-accent transition-transform duration-300 ${openService === service.id ? "rotate-180" : ""}`}>
                                                            expand_more
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <AnimatePresence>
                                                {openService === service.id && (
                                                    <motion.div
                                                        className="px-8 pb-8"
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                                    >
                                                        <div className="pt-6 border-t border-gray-100 grid md:grid-cols-2 gap-10">
                                                            <div>
                                                                <h4 className="font-serif text-lg text-primary mb-4 flex items-center gap-2">
                                                                    <span className="material-icons text-accent text-lg">info</span>
                                                                    Common Causes
                                                                </h4>
                                                                <ul className="space-y-3">
                                                                    {service.causes.map((cause, idx) => (
                                                                        <li key={idx} className="flex items-start gap-3 text-secondary font-light text-sm">
                                                                            <span className="w-1.5 h-1.5 bg-accent/50 rounded-full mt-1.5 flex-shrink-0"></span>
                                                                            <span>{cause}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            <div>
                                                                <h4 className="font-serif text-lg text-primary mb-4 flex items-center gap-2">
                                                                    <span className="material-icons text-accent text-lg">tips_and_updates</span>
                                                                    Self Care Tips
                                                                </h4>
                                                                <ul className="space-y-3">
                                                                    {service.tips.map((tip, idx) => (
                                                                        <li key={idx} className="flex items-start gap-3 text-secondary font-light text-sm">
                                                                            <span className="material-icons text-accent text-sm mt-0.5">check</span>
                                                                            <span>{tip}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="mt-10 flex flex-wrap gap-4">
                                                            <Link
                                                                href="/contact"
                                                                className="bg-accent hover:bg-accentHover text-white px-8 py-3 rounded-sm font-semibold text-xs uppercase tracking-widest transition-colors duration-300 shadow-sm"
                                                            >
                                                                Book This Treatment
                                                            </Link>
                                                            <Link
                                                                href="/policy"
                                                                className="border border-gray-200 hover:border-primary text-primary px-8 py-3 rounded-sm font-semibold text-xs uppercase tracking-widest transition-colors duration-300"
                                                            >
                                                                View Policy
                                                            </Link>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>
                    )}

                    {/* Specialised Services */}
                    {activeTab === "specialised" && (
                        <motion.section
                            key="specialised"
                            className="py-24 bg-background"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="max-w-6xl mx-auto px-6">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Specialised Treatments</h2>
                                    <div className="w-16 h-[1px] bg-accent mx-auto mb-6"></div>
                                    <p className="text-lg text-secondary font-light">Advanced therapies for optimal wellness</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {specialisedServices.map((service, index) => (
                                        <motion.div
                                            key={service.id}
                                            className="bg-white border border-gray-100 shadow-sm rounded-sm p-10 hover:shadow-lg transition-shadow duration-300 flex flex-col"
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.6 }}
                                        >
                                            <div className="w-16 h-16 bg-background border border-gray-50 rounded-full flex items-center justify-center mb-8">
                                                <span className="material-icons text-3xl text-accent">{service.icon}</span>
                                            </div>

                                            <h3 className="text-2xl font-serif text-primary mb-3">{service.title}</h3>
                                            <p className="text-secondary font-light mb-8 flex-grow">{service.description}</p>

                                            <div className="mb-10">
                                                <h4 className="font-serif text-lg text-primary mb-4">Key Benefits</h4>
                                                <ul className="space-y-3">
                                                    {service.benefits.map((benefit, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-secondary font-light text-sm">
                                                            <span className="material-icons text-accent text-sm mt-0.5">check</span>
                                                            {benefit}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="flex justify-end items-end pt-8 border-t border-gray-100">
                                                <Link
                                                    href="/contact"
                                                    className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-sm font-semibold text-xs uppercase tracking-widest transition-colors duration-300"
                                                >
                                                    Book Now
                                                </Link>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>
                    )}

                    {/* Packages */}
                    {activeTab === "packages" && (
                        <motion.section
                            key="packages"
                            className="py-24 bg-background"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="max-w-6xl mx-auto px-6">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Value Packages</h2>
                                    <div className="w-16 h-[1px] bg-accent mx-auto mb-6"></div>
                                    <p className="text-lg text-secondary font-light">Save more with our treatment bundles</p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    {packages.map((pkg, index) => (
                                        <motion.div
                                            key={index}
                                            className={`relative bg-white rounded-sm p-10 flex flex-col transition-all duration-300 ${
                                                pkg.popular
                                                    ? "border border-accent shadow-xl md:-translate-y-4"
                                                    : "border border-gray-100 shadow-sm hover:shadow-md"
                                            }`}
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.15, duration: 0.6 }}
                                        >
                                            {pkg.popular && (
                                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                    <span className="bg-primary text-white px-4 py-1.5 text-xs tracking-widest uppercase font-semibold">
                                                        Most Popular
                                                    </span>
                                                </div>
                                            )}

                                            <div className="text-center mb-8 mt-2 pb-8 border-b border-gray-100">
                                                <h3 className="text-2xl font-serif text-primary mb-3">{pkg.title}</h3>
                                                <p className="text-secondary font-light text-sm">{pkg.description}</p>
                                            </div>

                                            <ul className="space-y-4 mb-10 flex-grow">
                                                {pkg.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-secondary font-light text-sm">
                                                        <span className="material-icons text-accent text-sm mt-0.5">check</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            <Link
                                                href="/contact"
                                                className={`block text-center py-4 rounded-sm font-semibold text-xs uppercase tracking-widest transition-colors duration-300 ${
                                                    pkg.popular
                                                        ? "bg-primary text-white hover:bg-gray-900 shadow-md"
                                                        : "bg-background text-primary border border-gray-200 hover:border-primary"
                                                }`}
                                            >
                                                Purchase Package
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>
                    )}
                </AnimatePresence>

                {/* FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-3xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Frequently Asked Questions</h2>
                            <div className="w-16 h-[1px] bg-accent mx-auto"></div>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    q: "How long is each session?",
                                    a: "Session lengths vary depending on the specific treatment. Initial appointments include a full consultation.",
                                },
                                {
                                    q: "Do I need to bring anything?",
                                    a: "Just yourself! I provide everything needed for your treatment. Wear comfortable clothing and complete your consultation form before arrival.",
                                },
                                {
                                    q: "How often should I book treatments?",
                                    a: "This depends on your individual needs. For chronic pain, weekly sessions are recommended initially. For maintenance and relaxation, bi weekly or monthly visits work well.",
                                },
                                {
                                    q: "What is your cancellation policy?",
                                    a: "I require 24 hours notice for cancellations or rescheduling. Please see the policy page for full details.",
                                },
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-background p-8 border border-gray-50 rounded-sm"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                >
                                    <h3 className="font-serif text-lg text-primary mb-3">{faq.q}</h3>
                                    <p className="text-secondary font-light text-sm leading-relaxed">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-accent text-white">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif mb-6">
                                Ready to Book Your Treatment?
                            </h2>
                            <p className="text-lg font-light mb-10 opacity-90 max-w-xl mx-auto">
                                Take the first step towards pain free living today
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block bg-primary text-white hover:bg-gray-900 px-10 py-4 uppercase tracking-widest text-sm font-semibold transition-colors duration-300 rounded-sm shadow-sm"
                            >
                                Book Appointment
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
                                    alt="HM Therapeutics Wolverhampton Logo"
                                    width={120}
                                    height={42}
                                    className="mb-4 opacity-90"
                                />
                                <p className="text-gray-400 font-light leading-relaxed max-w-sm">
                                    Professional sports and relaxation massage therapy in Wolverhampton.
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
                                    <p>Wolverhampton, UK</p>
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