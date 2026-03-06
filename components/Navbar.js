import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolling(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Policy", path: "/policy" }
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolling ? "bg-primary shadow-md py-2" : "bg-transparent py-4"
            }`}
        >
            <div className="flex items-center justify-between px-6 max-w-7xl mx-auto">
                <Link href="/">
                    <Image src="/images/logo.png" alt="HM Therapeutics" width={140} height={50} className="cursor-pointer" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-white font-medium tracking-wide">
                    {navLinks.map((item) => (
                        <Link key={item.name} href={item.path} className="hover:text-accent transition-colors duration-200">
                            {item.name}
                        </Link>
                    ))}
                    {/* Only Contact/Book is a Button */}
                    <Link href="/contact">
                        <button className="px-6 py-2.5 rounded border border-accent bg-accent text-white hover:bg-transparent hover:text-accent transition-all duration-300">
                            Book Consultation
                        </button>
                    </Link>
                </nav>

                <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-primary transition-all duration-300 ${menuOpen ? "opacity-100 visible h-auto p-6" : "opacity-0 invisible h-0 overflow-hidden"}`}>
                <div className="flex flex-col gap-4 text-white text-center">
                    {navLinks.map((item) => (
                        <Link key={item.name} href={item.path} onClick={() => setMenuOpen(false)} className="block hover:text-accent transition">
                            {item.name}
                        </Link>
                    ))}
                    <Link href="/contact" onClick={() => setMenuOpen(false)}>
                        <button className="w-full mt-4 px-5 py-3 rounded bg-accent text-white font-semibold">
                            Book Consultation
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}