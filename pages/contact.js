import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";

const contactMethods = [
    {
        icon: "location_on",
        title: "Visit Us",
        details: ["Wolverhampton, UK", "By appointment only"],
    },
    {
        icon: "schedule",
        title: "Operating Hours",
        details: ["Monday to Friday 9AM to 7PM", "Saturday 9AM to 5PM", "Sunday Closed"],
    },
    {
        icon: "phone",
        title: "Call Us",
        details: ["Available during business hours", "Same day bookings available"],
    },
];

export default function Contact() {
    const [formMessage, setFormMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        preferredDate: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormMessage("");

        try {
            const response = await fetch("https://formspree.io/f/mzbnwvav", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setFormMessage("Thank you for your message! We will get back to you within 24 hours.");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    preferredDate: "",
                    message: "",
                });

                // Track form submission with Facebook Pixel
                if (typeof window !== "undefined" && window.fbq) {
                    window.fbq("track", "Contact");
                }
            } else {
                setFormMessage("Oops! There was a problem submitting your form. Please try again.");
            }
        } catch (error) {
            setFormMessage("Oops! There was a problem submitting your form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Head>
                <title>Contact Us | Book Your Appointment | HM Therapeutics</title>
                <meta
                    name="description"
                    content="Contact HM Therapeutics to book your massage therapy appointment. Same day bookings available. Call or use our online form to get in touch."
                />
                <meta
                    name="keywords"
                    content="book massage, contact HM Therapeutics, massage appointment, sports massage booking, therapy consultation"
                />
                <meta property="og:title" content="Contact Us | Book Your Appointment | HM Therapeutics" />
                <link rel="canonical" href="https://www.hmtherapeutics.co.uk/contact" />
            </Head>

            <div className="min-h-screen bg-background text-secondary font-sans">
                <Navbar />

                {/* Hero Section */}
                <section className="relative h-[50vh] min-h-[400px] bg-[url('/images/hero.jpg')] bg-cover bg-center flex items-center justify-center text-white text-center">
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
                            We Are Here to Help
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-lg md:text-xl font-light tracking-wide text-gray-300 max-w-2xl mx-auto">
                            Book your appointment or ask us anything about our therapeutic services
                        </p>

                        {/* Quick Stats */}
                        <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm uppercase tracking-widest font-semibold text-gray-300">
                            <div className="flex items-center gap-2">
                                <span className="material-icons text-accent">schedule</span>
                                <span>Same Day Appointments</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-icons text-accent">reply</span>
                                <span>24 Hour Response Time</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-icons text-accent">verified_user</span>
                                <span>Secure Booking</span>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Contact Methods */}
                <section className="py-16 bg-white border-b border-gray-100 relative z-10 -mt-8">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            {contactMethods.map((method, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-background border border-gray-100 p-8 rounded-sm text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                >
                                    <div className="w-14 h-14 bg-white border border-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <span className="material-icons text-2xl text-accent">{method.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-serif text-primary mb-4">{method.title}</h3>
                                    {method.details.map((detail, idx) => (
                                        <p key={idx} className="text-secondary font-light text-sm mb-1">
                                            {detail}
                                        </p>
                                    ))}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form & Map Section */}
                <section className="py-24 bg-background">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16">
                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="bg-white p-10 rounded-sm border border-gray-100 shadow-sm">
                                    <h2 className="text-3xl font-serif text-primary mb-3">Book Your Appointment</h2>
                                    <p className="text-secondary font-light text-sm mb-8">
                                        Fill out the form below and we will get back to you within 24 hours
                                    </p>

                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        {/* Name */}
                                        <div>
                                            <label htmlFor="name" className="block text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-4 bg-background border-none focus:ring-1 focus:ring-accent rounded-sm text-sm transition-all text-secondary"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-4 bg-background border-none focus:ring-1 focus:ring-accent rounded-sm text-sm transition-all text-secondary"
                                                placeholder="Enter your email address"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full p-4 bg-background border-none focus:ring-1 focus:ring-accent rounded-sm text-sm transition-all text-secondary"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>

                                        {/* Service Selection */}
                                        <div>
                                            <label htmlFor="service" className="block text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                                                Service of Interest
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full p-4 bg-background border-none focus:ring-1 focus:ring-accent rounded-sm text-sm transition-all text-secondary appearance-none cursor-pointer"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="sports-massage">Sports Massage</option>
                                                <option value="back-pain">Back Pain Relief</option>
                                                <option value="neck-shoulders">Neck & Shoulder Pain Relief</option>
                                                <option value="cupping">Cupping Therapy</option>
                                                <option value="sauna">Infrared Sauna</option>
                                                <option value="deep-tissue">Deep Tissue Massage</option>
                                                <option value="consultation">General Consultation</option>
                                            </select>
                                        </div>

                                        {/* Preferred Date */}
                                        <div>
                                            <label htmlFor="preferredDate" className="block text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                                                Preferred Date
                                            </label>
                                            <input
                                                type="date"
                                                id="preferredDate"
                                                name="preferredDate"
                                                value={formData.preferredDate}
                                                onChange={handleChange}
                                                className="w-full p-4 bg-background border-none focus:ring-1 focus:ring-accent rounded-sm text-sm transition-all text-secondary cursor-pointer"
                                                min={new Date().toISOString().split("T")[0]}
                                            />
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label htmlFor="message" className="block text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                                                Additional Information *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows="5"
                                                className="w-full p-4 bg-background border-none focus:ring-1 focus:ring-accent rounded-sm text-sm transition-all text-secondary resize-none"
                                                placeholder="Tell us about any specific concerns, injuries, or questions"
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-accent hover:bg-accentHover text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold rounded-sm shadow-sm transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="material-icons animate-spin text-sm">refresh</span>
                                                    Sending
                                                </>
                                            ) : (
                                                <>
                                                    <span className="material-icons text-sm">send</span>
                                                    Send Message
                                                </>
                                            )}
                                        </button>

                                        {/* Success/Error Message */}
                                        {formMessage && (
                                            <motion.div
                                                className={`p-4 rounded-sm text-center text-sm font-medium ${
                                                    formMessage.includes("Thank you")
                                                        ? "bg-green-50 text-green-800 border border-green-200"
                                                        : "bg-red-50 text-red-800 border border-red-200"
                                                }`}
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                            >
                                                {formMessage}
                                            </motion.div>
                                        )}
                                    </form>

                                    {/* Policy Note */}
                                    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                                        <p className="text-xs text-gray-500 font-light leading-relaxed">
                                            By submitting this form, you agree to our{" "}
                                            <Link href="/policy" className="text-accent hover:underline font-medium">
                                                booking policy
                                            </Link>
                                            . A deposit will be required to confirm your appointment.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Map & Additional Info */}
                            <motion.div
                                className="space-y-10"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Map */}
                                <div className="bg-white p-2 border border-gray-100 shadow-sm rounded-sm">
                                    <div className="relative overflow-hidden rounded-sm" style={{ height: "400px" }}>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.7744695219185!2d-2.1303776233156055!3d52.57368967207534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48709bd1eef79f6d%3A0x1184097c0c649f26!2sH.M%20Therapeutics!5e0!3m2!1sen!2suk!4v1732120674006!5m2!1sen!2suk"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="absolute inset-0 grayscale-[20%]"
                                        ></iframe>
                                    </div>
                                </div>

                                {/* Important Information Card */}
                                <div className="bg-primary border-t-2 border-accent p-10 rounded-sm shadow-xl text-white">
                                    <h3 className="text-2xl font-serif text-white mb-8">Important Information</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <span className="material-icons text-accent mt-0.5">info</span>
                                            <div>
                                                <strong className="block mb-1 font-serif text-lg">Consultation Required</strong>
                                                <p className="text-sm text-gray-400 font-light">
                                                    All first time appointments include a consultation to understand your needs
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="material-icons text-accent mt-0.5">payments</span>
                                            <div>
                                                <strong className="block mb-1 font-serif text-lg">Deposit Required</strong>
                                                <p className="text-sm text-gray-400 font-light">
                                                    Non refundable deposit required to secure your booking
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <span className="material-icons text-accent mt-0.5">event_available</span>
                                            <div>
                                                <strong className="block mb-1 font-serif text-lg">24 Hour Notice</strong>
                                                <p className="text-sm text-gray-400 font-light">
                                                    Cancellations or rescheduling require at least 24 hours notice
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <Link
                                            href="/policy"
                                            className="inline-block border border-gray-600 hover:border-accent text-white hover:text-accent px-8 py-3 uppercase tracking-widest text-xs font-semibold transition-colors duration-300 rounded-sm"
                                        >
                                            View Full Policy
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
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