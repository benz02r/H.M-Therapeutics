import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
    {
        id: "back-pain",
        title: "Reduce Back Pain",
        description: "Relieve chronic back pain without painkillers, surgery, or ineffective readjustments.",
        details: [
            "You were told to just rest and take painkillers.",
            "You lifted objects incorrectly and hurt your back.",
            "You tried stretches and exercises, but they didn’t work immediately.",
        ],
        tips: [
            "Avoid sitting and resting for too long – movement reduces stiffness.",
            "Stay hydrated! Hydration helps the body heal naturally.",
            "Sleep 7-9 hours per night for optimal recovery and pain relief.",
        ],
    },
    {
        id: "neck-shoulders",
        title: "Stop Neck & Shoulder Pain",
        description: "Prevent headaches and sleep disturbances caused by neck and shoulder pain.",
        details: [
            "You were told to just rest and take painkillers.",
            "You have a buildup of stress and tension in this area.",
            "You tried stretches and exercises, but they didn’t work immediately.",
        ],
        tips: [
            "Avoid staying still for too long. Light movement reduces stiffness.",
            "Stay hydrated – it plays a major role in reducing pain.",
            "Sleep 7-9 hours per night to aid healing and recovery.",
        ],
    },
    {
        id: "feet-calves",
        title: "Minimize Chronic Foot & Calf Pain",
        description: "Your foot health is the foundation of the rest of your leg’s well-being.",
        details: [
            "You were told to just rest and take painkillers.",
            "You're wearing the wrong type of shoes.",
            "You tried stretches and exercises, but they didn’t work immediately.",
        ],
        tips: [
            "Avoid keeping still for too long – gentle movement reduces stiffness.",
            "Wear insoles that keep your feet supported.",
            "Stay hydrated and ensure proper sleep for recovery.",
        ],
    },
];

export default function Services() {
    const [openService, setOpenService] = useState(null);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <motion.section
                className="relative h-[400px] bg-black flex items-center justify-center text-white text-center mt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <motion.div
                    className="relative z-10 max-w-3xl px-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <h1 className="text-5xl font-extrabold">Our Services</h1>
                    <p className="mt-3 text-lg opacity-90">
                        Learn more about how our treatments can relieve your pain.
                    </p>
                </motion.div>
            </motion.section>

            {/* Services Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">How We Can Help</h2>

                    {/* Interactive Service Sections */}
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            className="mb-6 bg-gray-100 p-6 rounded-lg shadow-md cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setOpenService(openService === service.id ? null : service.id)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                                <span className="material-icons text-[#e5a900] text-3xl">
                  {openService === service.id ? "expand_less" : "expand_more"}
                </span>
                            </div>

                            {/* Expanded Section */}
                            <AnimatePresence>
                                {openService === service.id && (
                                    <motion.div
                                        className="mt-4 text-gray-700"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <p className="text-lg text-gray-600">{service.description}</p>

                                        <h4 className="mt-4 font-semibold text-gray-800">Possible Causes:</h4>
                                        <ul className="list-disc pl-6 text-gray-600">
                                            {service.details.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul>

                                        <h4 className="mt-4 font-semibold text-gray-800">Quick Tips for Relief:</h4>
                                        <ul className="list-disc pl-6 text-gray-600">
                                            {service.tips.map((tip, index) => (
                                                <li key={index}>{tip}</li>
                                            ))}
                                        </ul>

                                        <Link href="/contact">
                                            <motion.button
                                                className="mt-6 px-6 py-3 bg-[#e5a900] hover:bg-[#d49000] text-white font-medium rounded-md transition transform hover:-translate-y-1"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                Book a Consultation
                                            </motion.button>
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </section>

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
