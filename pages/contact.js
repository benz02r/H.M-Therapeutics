import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar"; // Import Navbar
import { useState } from "react";
import { motion } from "framer-motion"; // For animations

export default function Contact() {
    const [formMessage, setFormMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const response = await fetch("https://formspree.io/f/mzbnwvav", {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
        });

        if (response.ok) {
            setFormMessage("Thank you for your message! We will get back to you soon.");
            form.reset();
        } else {
            setFormMessage("Oops! There was a problem submitting your form.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[400px] bg-black flex items-center justify-center text-white text-center mt-20">
                <motion.div
                    className="relative z-10 max-w-3xl px-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl font-extrabold">Contact Us</h1>
                    <p className="mt-3 text-lg opacity-90">
                        Get in touch with HM Therapeutics for professional massage therapy and holistic healing solutions.
                    </p>
                </motion.div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        className="bg-gray-100 p-8 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800 text-center">Get in Touch</h2>
                        <p className="text-gray-600 text-center mt-2">Fill out the form and we will get back to you as soon as possible.</p>

                        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border border-gray-300 rounded-lg" />
                            <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border border-gray-300 rounded-lg" />
                            <input type="tel" name="phone" placeholder="Your Phone (Optional)" className="w-full p-3 border border-gray-300 rounded-lg" />
                            <textarea name="message" placeholder="Your Message" required className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
                            <button type="submit" className="w-full bg-[#e5a900] hover:bg-[#d49000] text-white font-medium py-3 rounded-lg transition">
                                Send Message
                            </button>
                        </form>

                        {formMessage && <p className="mt-4 text-center text-green-600">{formMessage}</p>}
                    </motion.div>
                </div>
            </section>

            {/* Google Maps Section */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-800 text-center">Find Us</h2>
                    <p className="text-gray-600 text-center mt-2">We are located at HM Therapeutics.</p>

                    <motion.div
                        className="bg-white p-4 rounded-lg shadow-lg mt-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.7744695219185!2d-2.1303776233156055!3d52.57368967207534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48709bd1eef79f6d%3A0x1184097c0c649f26!2sH.M%20Therapeutics!5e0!3m2!1sen!2suk!4v1732120674006!5m2!1sen!2suk"
                            width="100%"
                            height="300"
                            style={{ borderRadius: "10px" }}
                            allowFullScreen
                            loading="lazy"
                            className="shadow-lg"
                        ></iframe>
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
