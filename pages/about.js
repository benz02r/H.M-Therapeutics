import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const qualifications = [
    {
        icon: "school",
        title: "BSc in Biochemistry",
        description: "Graduated 2024 with deep understanding of human anatomy and physiology",
    },
    {
        icon: "workspace_premium",
        title: "Certified Sports Massage Therapist",
        description: "Specialised training in sports injury treatment and recovery",
    },
    {
        icon: "spa",
        title: "Holistic Therapy Expert",
        description: "Advanced techniques in cupping therapy and infrared sauna treatments",
    },
    {
        icon: "favorite",
        title: "Passionate About Wellness",
        description: "Dedicated to helping clients achieve peak performance and pain free living",
    },
];

const values = [
    {
        title: "Personalised Care",
        description: "Every client receives a customised treatment plan tailored to their unique needs and goals.",
        icon: "person",
    },
    {
        title: "Evidence Based Practice",
        description: "Combining scientific knowledge with proven therapeutic techniques for optimal results.",
        icon: "science",
    },
    {
        title: "Continuous Learning",
        description: "Staying updated with the latest advancements in sports therapy and wellness treatments.",
        icon: "auto_stories",
    },
];

export default function About() {
    return (
        <>
            <Head>
                <title>About Hanisha | Expert Sports Massage Therapist | HM Therapeutics</title>
                <meta
                    name="description"
                    content="Meet Hanisha, founder of HM Therapeutics. BSc in Biochemistry graduate and certified sports massage therapist passionate about helping athletes and clients achieve optimal wellness."
                />
                <meta
                    name="keywords"
                    content="sports massage therapist, qualified therapist Wolverhampton, BSc Biochemistry, massage therapy expert, certified therapist"
                />
                <meta property="og:title" content="About Hanisha | Expert Sports Massage Therapist | HM Therapeutics" />
                <meta property="og:description" content="Meet your dedicated sports massage therapist with expertise in injury recovery and holistic wellness." />
                <link rel="canonical" href="https://www.hmtherapeutics.co.uk/about" />
            </Head>

            <div className="min-h-screen bg-background text-secondary font-sans">
                <Navbar />

                {/* Hero Section */}
                <section className="relative h-[60vh] min-h-[450px] bg-[url('/images/about.jpg')] bg-cover bg-center flex items-center justify-center text-center text-white">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/95"></div>
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
                            Meet Your Therapist
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight font-medium">
                            About HM Therapeutics
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-200 font-light tracking-wide max-w-2xl mx-auto">
                            Your journey to wellness and healing through expert therapeutic massage
                        </p>
                    </motion.div>
                </section>

                {/* Main Story Section */}
                <section className="py-24 bg-background">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            {/* Image Section */}
                            <motion.div
                                className="order-2 md:order-1 relative"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="relative bg-white p-2 border border-gray-100 shadow-sm">
                                    <Image
                                        src="/images/about.jpg"
                                        alt="Hanisha Professional Sports Massage Therapist"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover grayscale-[20%]"
                                        priority
                                    />
                                </div>

                                {/* Floating Stats Card */}
                                <motion.div
                                    className="absolute -bottom-8 -right-4 md:-right-8 bg-primary text-white p-8 shadow-xl border-t border-accent"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                >
                                    <div className="text-4xl font-serif text-accent mb-1">500+</div>
                                    <div className="text-xs uppercase tracking-widest text-gray-300">Happy Clients</div>
                                </motion.div>
                            </motion.div>

                            {/* Text Content */}
                            <motion.div
                                className="order-1 md:order-2"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                                    Meet Hanisha
                                </h2>

                                <div className="space-y-5 text-secondary leading-relaxed font-light">
                                    <p>
                                        Welcome! I am <strong className="text-primary font-medium">Hanisha</strong>, the founder of HM Therapeutics.
                                        My journey into therapeutic massage began with a fascination for the human body and its remarkable
                                        ability to heal itself.
                                    </p>

                                    <p>
                                        After graduating in 2024 with a <strong className="text-primary font-medium">Bachelor of Science (BSc) in Biochemistry</strong>, I
                                        discovered my true passion for anatomy and the mechanics of human movement. This scientific
                                        foundation, combined with specialised training in sports massage therapy, allows me to provide
                                        evidence based treatments that deliver real results.
                                    </p>

                                    <p>
                                        As a dedicated <strong className="text-primary font-medium">Sports Massage Therapist</strong>, I work with athletes and individuals
                                        from all walks of life. Whether you are preparing for a competition, recovering from an injury,
                                        managing chronic pain, or simply seeking relaxation and stress relief, I am here to support you
                                        every step of the way.
                                    </p>

                                    <p>
                                        My approach combines traditional massage techniques with modern therapeutic methods, including
                                        cupping therapy and infrared sauna treatments, to create personalised wellness solutions that
                                        address your unique needs.
                                    </p>
                                </div>

                                {/* CTA Button */}
                                <div className="mt-10">
                                    <Link
                                        href="/contact"
                                        className="inline-block bg-accent text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-accentHover transition-colors duration-300 rounded-sm shadow-sm"
                                    >
                                        Book a Consultation
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Qualifications Section */}
                <section className="py-24 bg-primary text-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: -15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif mb-4">Qualifications & Expertise</h2>
                            <div className="w-16 h-[1px] bg-accent mx-auto mb-6"></div>
                            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
                                Combining scientific knowledge with therapeutic expertise
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {qualifications.map((qual, index) => (
                                <motion.div
                                    key={index}
                                    className="p-8 border border-gray-800 hover:border-accent/50 transition-colors duration-300 bg-white/5 backdrop-blur-sm"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="material-icons text-3xl text-accent">{qual.icon}</span>
                                        <h3 className="text-xl font-serif">{qual.title}</h3>
                                    </div>
                                    <p className="text-gray-400 font-light leading-relaxed">{qual.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: -15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">My Core Values</h2>
                            <div className="w-16 h-[1px] bg-accent mx-auto mb-6"></div>
                            <p className="text-lg text-secondary font-light max-w-2xl mx-auto">
                                The principles that guide every treatment
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-10">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-background p-10 border border-gray-100 hover:shadow-lg transition-shadow duration-300 text-center flex flex-col items-center"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, duration: 0.6 }}
                                >
                                    <div className="w-14 h-14 bg-white shadow-sm rounded-full flex items-center justify-center mb-6 border border-gray-50">
                                        <span className="material-icons text-2xl text-accent">{value.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-serif text-primary mb-4">{value.title}</h3>
                                    <p className="text-secondary font-light leading-relaxed text-sm">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Journey Section */}
                <section className="py-24 bg-background">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">
                                My Journey to Sports Therapy
                            </h2>
                            <div className="space-y-6 text-secondary font-light leading-relaxed">
                                <p>
                                    My passion for helping others achieve their wellness goals stems from my own experiences
                                    with the transformative power of therapeutic massage. During my studies in Biochemistry,
                                    I became fascinated by how the human body responds to touch and manual therapy.
                                </p>
                                <p>
                                    This curiosity led me to pursue specialised training in sports massage therapy, where I
                                    learned to combine my scientific knowledge with practical therapeutic techniques. Today,
                                    I am privileged to help athletes, active individuals, and anyone seeking relief from pain
                                    and stress achieve their wellness goals.
                                </p>
                                <div className="mt-12 mb-10 text-accent">
                                    <span className="text-6xl font-serif leading-none opacity-50 block mb-2">"</span>
                                    <p className="text-xl md:text-2xl font-serif text-primary italic max-w-2xl mx-auto">
                                        My mission is simple: to help you move better, feel better, and live better.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12">
                                <Link
                                    href="/services"
                                    className="inline-block border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-colors duration-300 rounded-sm"
                                >
                                    Explore My Services
                                </Link>
                            </div>
                        </motion.div>
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
                                Ready to Start Your Wellness Journey?
                            </h2>
                            <p className="text-lg font-light mb-10 opacity-90 max-w-xl mx-auto">
                                Let us work together to achieve your health and wellness goals
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block bg-primary text-white hover:bg-gray-900 px-10 py-4 uppercase tracking-widest text-sm font-semibold transition-colors duration-300 rounded-sm shadow-sm"
                            >
                                Get in Touch
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
                                            href={`/${item.toLowerCase()}`}
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