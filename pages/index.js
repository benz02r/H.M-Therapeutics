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
        description: "Professional sports therapy in Wolverhampton for athletes and active individuals.",
    },
    {
        id: "relaxation",
        icon: "self_improvement",
        title: "Relaxation & Restoration",
        description: "Reduce stress and promote overall wellness with our expert massage techniques.",
    },
    {
        id: "recovery",
        icon: "fitness_center",
        title: "Tailored Recovery Programs",
        description: "Customised recovery plans designed to accelerate healing and prevent future injuries.",
    },
    {
        id: "pain-relief",
        icon: "healing",
        title: "Effective Pain Relief Therapy",
        description: "Targeted massage therapy for chronic pain management and improved mobility.",
    },
    {
        id: "cupping",
        icon: "spa",
        title: "Cupping Therapy",
        description: "Boost circulation and reduce muscle tension with our specialised cupping services.",
    },
    {
        id: "sauna",
        icon: "hot_tub",
        title: "Infrared Sauna Pod",
        description: "Improve circulation, detoxify, and relieve stiffness with cutting edge sauna treatments.",
    },
];

export default function Home() {
    const [modalOpen, setModalOpen] = useState(null);

    // This is the invisible code that tells Google exactly where you are for "Near Me" searches
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        "name": "HM Therapeutics",
        "image": "https://www.hmtherapeutics.co.uk/images/logo.png",
        "description": "Expert sports therapy and relaxation massage in Wolverhampton, West Midlands.",
        "@id": "https://www.hmtherapeutics.co.uk",
        "url": "https://www.hmtherapeutics.co.uk",
        "telephone": "", // Add your phone number here later if you wish
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "", // Add street if you want it public
            "addressLocality": "Wolverhampton",
            "addressRegion": "West Midlands",
            "postalCode": "", // Add your postcode to boost "Near Me" accuracy
            "addressCountry": "UK"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "52.5869", // Approximate Wolverhampton latitude
            "longitude": "-2.1288" // Approximate Wolverhampton longitude
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "19:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "17:00"
            }
        ],
        "priceRange": "££",
        "areaServed": ["Wolverhampton", "West Midlands", "Walsall", "Dudley"]
    };

    return (
        <>
            <Head>
                {/* Optimised Title & Meta for your requested keywords */}
                <title>Sports Therapy & Massage Wolverhampton | HM Therapeutics</title>
                <meta name="description" content="Expert sports therapy and relaxation massage in Wolverhampton, West Midlands. Book a premium massage near you for pain relief, recovery, and wellness." />
                <meta name="keywords" content="massage wolverhampton, sports therapy wolverhampton, massage near me, massage west midlands, sports massage, pain relief clinic" />

                {/* Open Graph / Social Media Tags */}
                <meta property="og:title" content="Sports Therapy & Massage Wolverhampton | HM Therapeutics" />
                <meta property="og:description" content="Professional massage therapy in Wolverhampton. Visit HM Therapeutics today for sports recovery and relaxation treatments in the West Midlands." />
                <meta property="og:url" content="https://www.hmtherapeutics.co.uk" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.hmtherapeutics.co.uk/images/hero.jpg" />
                <meta property="og:site_name" content="HM Therapeutics" />
                <meta property="og:locale" content="en_GB" />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Sports Therapy & Massage Wolverhampton | HM Therapeutics" />
                <meta name="twitter:description" content="Expert massage therapy in Wolverhampton for sports injuries, relaxation, and pain relief." />
                <meta name="twitter:image" content="https://www.hmtherapeutics.co.uk/images/hero.jpg" />

                {/* Inject Local Business Schema JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>

            {/* Mailchimp Connected Sites Script */}
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

            <div className="min-h-screen bg-background text-secondary">
                <Navbar />

                {/* Hero Section */}
                <motion.section
                    className="relative h-[85vh] min-h-[500px] bg-[url('/images/hero.jpg')] bg-cover bg-center flex items-center justify-center text-center text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/95"></div>

                    <motion.div
                        className="relative z-10 max-w-3xl px-6 mt-16 md:mt-0"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight font-medium">
                            Wolverhampton Sports Therapy & Massage
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-200 font-light tracking-wide max-w-2xl mx-auto">
                            Expert clinical massage therapy in the West Midlands tailored to restore your body and mind.
                        </p>
                        <div className="mt-10">
                            <Link href="/contact" className="inline-block bg-accent text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold rounded-sm shadow-lg hover:bg-accentHover transition-colors duration-300">
                                Book Your Session Today
                            </Link>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Services Section */}
                <section className="py-24 bg-background">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: -15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-serif text-primary mb-4">Our Premium Services</h2>
                        <div className="w-16 h-1 bg-accent mx-auto"></div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 },
                            },
                        }}
                    >
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                className="p-8 bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-sm cursor-pointer group flex flex-col items-center text-center"
                                onClick={() => setModalOpen(service.id)}
                                variants={{
                                    hidden: { opacity: 0, y: 15 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                                    <span className="material-icons text-4xl text-accent">
                                        {service.icon}
                                    </span>
                                </div>
                                <h3 className="text-xl font-serif text-primary mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-secondary text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Footer */}
                <footer className="bg-primary text-white py-12">
                    <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                        <Image
                            src="/images/logo.png"
                            alt="HM Therapeutics Wolverhampton Logo"
                            width={120}
                            height={42}
                            className="opacity-90"
                        />
                        <nav className="flex flex-wrap justify-center gap-6 mt-8 mb-6">
                            {["Home", "About", "Services", "Contact", "Policy"].map((item) => (
                                <Link
                                    key={item}
                                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                    className="text-gray-400 hover:text-accent text-sm uppercase tracking-wider transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                        <div className="w-24 h-[1px] bg-gray-700 mb-6"></div>
                        <p className="text-sm text-gray-500 font-light">
                            &copy; {new Date().getFullYear()} HM Therapeutics Wolverhampton. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}