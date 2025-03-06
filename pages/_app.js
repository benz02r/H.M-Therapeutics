import Head from "next/head";
import "../styles/globals.css"; // Import Tailwind globally

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* Material Icons CDN for icons */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
