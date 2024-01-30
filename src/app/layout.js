import ChatbotContainer from "@/components/Chatbot/Chatbot";
import { Navbar } from "@/components";
import "@splidejs/react-splide/css";
import "leaflet/dist/leaflet.css";
import "@/styles/global.scss";

import Script from "next/script";
import localFont from "next/font/local";
import { Short_Stack } from "next/font/google";

import "@/styles/chatbot.scss";

export const juli_font = Short_Stack({ preload: false, variable: "--juli-font", weight: "400" });

export const neueHassDisplay = localFont({
    preload: true,
    variable: "--font-neue",
    src: [
        {
            path: "../../public/resources/fonts/neue_hass_display/NeueHaasDisplay-Bold.woff2",
            weight: "bold",
            style: "normal",
        },
        {
            path: "../../public/resources/fonts/neue_hass_display/NeueHaasDisplay-BoldItalic.woff2",
            weight: "bold",
            style: "italic",
        },
        {
            path: "../../public/resources/fonts/neue_hass_display/NeueHaasDisplay-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/resources/fonts/neue_hass_display/NeueHaasDisplay-LightItalic.woff2",
            weight: "300",
            style: "italic",
        },
        {
            path: "../../public/resources/fonts/neue_hass_display/NeueHaasDisplay-Medium.woff2",
            weight: "normal",
            style: "normal",
        },
        {
            path: "../../public/resources/fonts/neue_hass_display/NeueHaasDisplay-MediumItalic.woff2",
            weight: "500",
            style: "italic",
        },
        {
            path: "../../public/resources/fonts/neue_hass_display/NeueHaasDisplay-Roman.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/resources/fonts/neue_hass_display/NeueHaasDisplay-RomanItalic.woff2",
            weight: "500",
            style: "italic",
        },
        {
            path: "../../public/resources/fonts/neue_hass_display/NeueHaasDisplay-Thin.woff2",
            weight: "100",
            style: "normal",
        },
        {
            path: "../../public/resources/fonts/neue_hass_display/NeueHaasDisplay-ThinItalic.woff2",
            weight: "100",
            style: "italic",
        },
    ],
});

export const addington = localFont({
    preload: true,
    variable: "--font-addigton",
    src: [
        {
            path: "../../public/resources/fonts/addigton_cf/AddingtonCF-Bold.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/resources/fonts/addigton_cf/AddingtonCF-BoldItalic.woff2",
        },
        {
            path: "../../public/resources/fonts/addigton_cf/AddingtonCF-DemiBold.woff2",
        },
        {
            path: "../../public/resources/fonts/addigton_cf/AddingtonCF-DemiBoldItalic.woff2",
        },
        {
            path: "../../public/resources/fonts/addigton_cf/AddingtonCF-ExtraBold.woff2",
        },
        {
            path: "../../public/resources/fonts/addigton_cf/AddingtonCF-ExtraBoldItalic.woff2",
        },
        {
            path: "../../public/resources/fonts/addigton_cf/AddingtonCF-Light.woff2",
        },
        {
            path: "../../public/resources/fonts/addigton_cf/AddingtonCF-LightItalic.woff2",
        },
        {
            path: "../../public/resources/fonts/addigton_cf/AddingtonCF-Medium.woff2",
        },
        {
            path: "../../public/resources/fonts/addigton_cf/AddingtonCF-MediumItalic.woff2",
        },
        {
            path: "../../public/resources/fonts/addigton_cf/AddingtonCF-Regular.woff2",
        },
        {
            path: "../../public/resources/fonts/addigton_cf/AddingtonCF-RegularItalic.woff2",
        },
    ],
});

export const metadata = {
    title: "Desarrollos Delsud",
    description: "Venta de terrenos con escritura inmediata en la ciudad de La Plata. Conocé nuestros planes de financiación.",
};

export default function RootLayout({ children }) {
    return (
        <html lang='es'>
            <Script id='google-tag-manager' strategy='afterInteractive'>
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KTQ52MD');`}
            </Script>
            <meta name='google-site-verification' content='aHUHuJLETRTEJLrsFPwV0b8N4bbRERyIkO7QPtHAB9Y' />
            <body className={`${neueHassDisplay.variable} ${addington.variable} ${juli_font.variable} `}>
                <iframe
                    src='https://www.googletagmanager.com/ns.html?id=GTM-KTQ52MD'
                    height='0'
                    width='0'
                    style={{ display: "none", visibility: "hidden" }}
                ></iframe>
                <Navbar />
                <ChatbotContainer />
                {children}
            </body>
        </html>
    );
}
