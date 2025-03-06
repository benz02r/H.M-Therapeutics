import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar"; // Import Navbar
import { motion } from "framer-motion"; // Import animations

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section - FIXED: Added mt-20 to prevent overlap on mobile */}
            <section className="relative h-[450px] bg-[url('/images/about.jpg')] bg-cover bg-center flex items-center text-center text-white mt-20">
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <motion.div
                    className="relative z-10 max-w-3xl mx-auto p-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl font-extrabold">About HM Therapeutics</h1>
                    <h3 className="mt-3 text-lg opacity-90">
                        Start your wellness and healing journey through therapeutic massage
                    </h3>
                </motion.div>
            </section>

            {/* About Content */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 space-y-10 md:space-y-0 md:space-x-8">

                    {/* Image Section with Sleek Border & Background */}
                    <motion.div
                        className="w-full md:w-1/2 flex justify-center items-center p-4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="relative bg-white p-2 rounded-lg shadow-lg border border-gray-300">
                            <Image
                                src="/images/about.jpg"
                                alt="Therapist in action"
                                width={600}
                                height={400}
                                className="rounded-md border border-[#e5a900]"
                            />
                        </div>
                    </motion.div>



                    {/* Text Content */}
                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-800">Meet Your Therapist</h2>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Welcome! I’m <strong>Hanisha</strong>, the founder of HM Therapeutics.
                            I am a dedicated Sports Massage Therapist with a passion for helping athletes
                            achieve peak performance and recovery. After graduating in 2024 with a
                            Bachelor of Science (BSc) in Biochemistry, I found my passion for anatomy.
                        </p>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Whether you're preparing for a big match, recovering from an injury, or simply
                            seeking relaxation and pain relief, I’m here to support you every step of the way.
                        </p>

                        {/* CTA Button */}
                        <Link href="/contact">
                            <motion.button
                                className="mt-6 px-6 py-3 bg-[#e5a900] hover:bg-[#d49000] text-white font-medium rounded-md transition transform hover:-translate-y-1"
                                whileHover={{ scale: 1.05 }}
                            >
                                Get in Touch
                            </motion.button>
                        </Link>
                    </motion.div>
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
