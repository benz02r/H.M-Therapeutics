import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Script from "next/script";

const services = [
    {
        id: "sports-injury",
        icon: "sports_kabaddi",
        title: "Sports Injury Relief",
        description:
            "Professional massage therapy for sports-related injuries, helping athletes recover faster and perform better.",
    },
    {
        id: "relaxation",
        icon: "self_improvement",
        title: "Relaxation & Restoration",
        description:
            "Reduce stress and promote overall well-being with our expert therapeutic relaxation techniques.",
    },
    {
        id: "recovery",
        icon: "fitness_center",
        title: "Tailored Recovery Programs",
        description:
            "Customized recovery plans designed to accelerate healing and prevent future injuries.",
    },
    {
        id: "pain-relief",
        icon: "healing",
        title: "Effective Pain Relief Therapy",
        description:
            "Targeted massage therapy for chronic pain management and improved mobility.",
    },
    {
        id: "cupping",
        icon: "spa",
        title: "Cupping Therapy for Muscle Recovery",
        description:
            "Boost circulation and reduce muscle tension with our cupping therapy services.",
    },
    {
        id: "sauna",
        icon: "hot_tub",
        title: "Infrared Sauna Pod Treatment",
        description:
            "Improve circulation, detoxify, and relieve muscle stiffness with our cutting-edge sauna pod treatments.",
    },
];

export default function Home() {
    const [modalOpen, setModalOpen] = useState(null);

    return (
        <>
            <Head>
                <title>Sports & Relaxation Massage | HM Therapeutics</title>
                <meta
                    name="description"
                    content="Expert massage therapy for sports injuries, relaxation, and pain relief. Book with HM Therapeutics for cupping therapy, sauna treatments & recovery programs."
                />
                <meta
                    name="keywords"
                    content="sports massage, pain relief, cupping therapy, relaxation, muscle recovery, sauna therapy, injury recovery"
                />
                <meta
                    property="og:title"
                    content="Sports & Relaxation Massage | HM Therapeutics"
                />
                <meta
                    property="og:description"
                    content="Professional massage therapy for sports injuries, pain relief, and relaxation. Visit HM Therapeutics today for recovery treatments!"
                />
                <meta property="og:url" content="https://www.hmtherapeutics.co.uk" />
                <meta property="og:type" content="website" />
            </Head>

            {/* ✅ Mailchimp Connected Sites Script */}
            <Script
                id="mcjs"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            !function(c,h,i,m,p){
              m=c.createElement(h),p=c.getElementsByTagName(h)[0],
              m.async=1,m.src=i,p.parentNode.insertBefore(m,p)
            }(document,"script",
            "https://chimpstatic.com/mcjs-connected/js/users/9d8e8ae2f4c2b7f6d37106745/59a407cac89cf3acf67e0635c.js");
          `,
                }}
            />

            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="bg-black h-[80px] md:h-[100px] lg:h-[120px]"></div>

                {/* Hero Section */}
                <motion.section
                    className="relative h-[500px] bg-[url('/images/hero.jpg')] bg-cover bg-center flex items-center justify-center text-center text-white"
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
                        <h1 className="text-5xl font-extrabold mt-16 sm:mt-6">
                            Expert Sports & Relaxation Massage Therapy
                        </h1>
                        <p className="mt-3 text-lg opacity-90">
                            Recover faster, relieve pain, and enhance your well-being with our
                            specialized treatments.
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Link
                                href="/contact"
                                className="mt-6 inline-block bg-[#e5a900] hover:bg-[#d49000] px-6 py-3 text-white font-medium rounded-md transition"
                            >
                                Book Your Session Today
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Services Section */}
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
                <span className="material-icons text-5xl text-[#e5a900]">
                  {service.icon}
                </span>
                                <h3 className="text-2xl font-semibold mt-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mt-2">{service.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Footer */}
                <footer className="bg-black text-white py-8 mt-16">
                    <div className="max-w-7xl mx-auto text-center">
                        <Image
                            src="/images/logo.png"
                            alt="HM Therapeutics Logo"
                            width={100}
                            height={35}
                            className="mx-auto"
                        />
                        <p className="text-sm text-gray-400 mt-2">
                            &copy; 2025 HM Therapeutics. All rights reserved.
                        </p>
                        <nav className="flex justify-center gap-4 mt-2">
                            {["Home", "About", "Contact", "Policy", "Services"].map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase()}`}
                                    className="text-gray-400 hover:text-[#e5a900] text-sm transition"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </footer>
            </div>
        </>
    );
}
