import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import Navbar from "../components/Navbar"; // Import Navbar

const services = [
    { id: "sports-injury", icon: "sports_kabaddi", title: "Sports Injury Relief", description: "Focused massage therapy for sports-related injuries." },
    { id: "relaxation", icon: "self_improvement", title: "Relaxation / Restoration", description: "Therapeutic techniques to reduce stress and promote healing." },
    { id: "recovery", icon: "fitness_center", title: "Tailored Recovery Programme", description: "Specialized support for faster, safer recovery." },
    { id: "pain-relief", icon: "healing", title: "Pain Relief", description: "Effective pain management through targeted massage." },
    { id: "cupping", icon: "spa", title: "Cupping Therapy", description: "Reduce muscle soreness using negative pressure." },
    { id: "sauna", icon: "hot_tub", title: "Sauna Pod", description: "Improve circulation to help ease muscle tightness." },
];

export default function Home() {
    const [modalOpen, setModalOpen] = useState(null);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section with Smooth Fade-in */}
            <motion.section
                className="relative h-[500px] bg-[url('/images/hero.jpg')] bg-cover bg-center flex items-center justify-center text-center text-white mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <motion.div
                    className="relative z-10 max-w-2xl"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <h1 className="text-5xl font-extrabold">Professional Sports & Relaxation Massage</h1>
                    <p className="mt-3 text-lg opacity-90">Your path to relief starts here.</p>
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Link href="/contact" className="mt-6 inline-block bg-[#e5a900] hover:bg-[#d49000] px-6 py-3 text-white font-medium rounded-md transition">
                            Enquire about pricing & availability
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Services Section with Staggered Animations */}
            <section className="py-16 bg-gray-100">
                <motion.h2
                    className="text-center text-4xl font-bold text-gray-800 mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Our Services
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { staggerChildren: 0.2 },
                        },
                    }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            className="p-6 bg-white shadow-lg rounded-xl text-center hover:shadow-2xl transition cursor-pointer hover:-translate-y-2 border-t-4 border-[#e5a900]"
                            onClick={() => setModalOpen(service.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <span className="material-icons text-5xl text-[#e5a900]">{service.icon}</span>
                            <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
                            <p className="text-gray-600 mt-2">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Modals for Service Details */}
            {modalOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="bg-white p-6 rounded-lg w-96 text-center relative shadow-lg"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl" onClick={() => setModalOpen(null)}>
                            &times;
                        </button>
                        <h3 className="text-2xl font-semibold">{services.find((s) => s.id === modalOpen)?.title}</h3>
                        <p className="text-gray-600 mt-2">{services.find((s) => s.id === modalOpen)?.description}</p>
                    </motion.div>
                </motion.div>
            )}

            {/* Footer */}
            <footer className="bg-black text-white py-8 mt-16">
                <div className="max-w-7xl mx-auto text-center">
                    <Image src="/images/logo.png" alt="HM Therapeutics Logo" width={100} height={35} className="mx-auto" />
                    <p className="text-sm text-gray-400 mt-2">&copy; 2025 HM Therapeutics. All rights reserved.</p>
                    <nav className="flex justify-center gap-4 mt-2">
                        {["Home", "About", "Contact", "Policy", "Services"].map((item) => (
                            <Link key={item} href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-[#e5a900] text-sm transition">
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>
            </footer>
        </div>
    );
}
