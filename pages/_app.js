import Head from "next/head";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "../styles/globals.css";

// Configure premium fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export default function MyApp({ Component, pageProps }) {
    return (
        <div className={`${inter.variable} ${playfair.variable} font-sans text-secondary`}>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            {/* Your existing Scripts (Facebook Pixel, Mailchimp) go here */}

            <Component {...pageProps} />
        </div>
    );
}