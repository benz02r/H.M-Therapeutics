import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* Material Icons */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
            </Head>

            {/* 📊 Facebook Pixel Code */}
            <Script
                id="facebook-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3039279902900287');
            fbq('track', 'PageView');
          `,
                }}
            />

            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: "none" }}
                    src="https://www.facebook.com/tr?id=3039279902900287&ev=PageView&noscript=1"
                    alt="facebook pixel"
                />
            </noscript>

            {/* 📨 Mailchimp Connected Sites */}
            <Script
                id="mailchimp"
                strategy="afterInteractive"
                src="https://chimpstatic.com/mcjs-connected/js/users/9d8e8ae2f4c2b7f6d37106745/0134608e26e5b8c6e0359ec06.js"
            />

            {/* Render All Pages */}
            <Component {...pageProps} />
        </>
    );
}
