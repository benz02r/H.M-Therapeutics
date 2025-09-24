import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar"; // Import Navbar
import { motion } from "framer-motion"; // For animations

export default function Policy() {
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
                    <h1 className="text-5xl font-extrabold">Our Policy</h1>
                    <p className="mt-3 text-lg opacity-90">
                        Ensuring a seamless and professional experience for all clients.
                    </p>
                </motion.div>
            </section>

            {/* Policy Content Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        className="bg-gray-100 p-8 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800 text-center">Booking & Consultation Policy</h2>
                        <p className="text-gray-600 text-center mt-2">
                            Please read our policy carefully before booking an appointment.
                        </p>

                        <div className="mt-6 space-y-4">
                            <p><strong> Enquiries:</strong> All pricing and booking inquiries must be handled via email or telephone. If you contact us by phone, an email address is still required for completing the pre-treatment consultation form and deposit payment.</p>

                            <p><strong> Missed Calls:</strong> If your call is not answered, I am likely with a client. I will call back as soon as possible. Alternatively, you can send an email, and I will get back to you promptly.</p>

                            <p><strong> Deposits:</strong> All bookings, including future and same-day bookings, require a £15 deposit, which will be deducted from your final total. Deposits are non-refundable.</p>

                            <p><strong> Cancellations & Rescheduling:</strong> A minimum of 24 hours' notice is required for cancellations or rescheduling. Failure to do so will result in a charge.</p>

                            <p><strong> No Shows:</strong> Clients who do not show up for their appointment will be charged the full price of the session.</p>

                            <p><strong> Initial Appointments:</strong> All first-time appointments last 60 minutes, including a face-to-face consultation and treatment.</p>

                            <p><strong> Consultation Form:</strong> Once you have booked, a consultation form will be sent via email. This must be completed at least one hour before your appointment.</p>
                        </div>
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
