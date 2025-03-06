import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    // Detect scroll and update navbar background
    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolling ? "bg-black shadow-lg" : "bg-black"
            }`}
        >
            <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        alt="HM Therapeutics Logo"
                        width={140}
                        height={50}
                        className="cursor-pointer"
                    />
                </Link>

                {/* Desktop Navigation with Buttons */}
                <nav className="hidden md:flex gap-4">
                    {[
                        { name: "Home", path: "/" },
                        { name: "About", path: "/about" },
                        { name: "Services", path: "/services" }, // ✅ ADDED SERVICES PAGE
                        { name: "Contact", path: "/contact" },
                        { name: "Policy", path: "/policy" }
                    ].map((item) => (
                        <Link key={item.name} href={item.path}>
                            <button className="px-5 py-2 rounded-full text-white bg-[#e5a900] hover:bg-[#d49000] transition-all">
                                {item.name}
                            </button>
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-black transition-all duration-300 ${
                    menuOpen ? "opacity-100 visible p-6" : "opacity-0 invisible"
                }`}
            >
                {[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                    { name: "Services", path: "/services" }, // ✅ ADDED SERVICES PAGE
                    { name: "Contact", path: "/contact" },
                    { name: "Policy", path: "/policy" }
                ].map((item) => (
                    <Link key={item.name} href={item.path} onClick={() => setMenuOpen(false)}>
                        <button className="block w-full text-left px-5 py-3 rounded-full text-white bg-[#e5a900] hover:bg-[#d49000] transition-all mb-2">
                            {item.name}
                        </button>
                    </Link>
                ))}
            </div>
        </header>
    );
}
