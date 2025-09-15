import React from "react";
import "./globals.css";
import { Metadata, Viewport } from "next";
// import Navbar from './components/Navbar'

export const metadata: Metadata = {
  metadataBase: new URL('https://ariiellus.eth.limo'),
  title: "Ariiellus - Ethereum Research & MEV Analyst",
  description: "Personal website of Ariel (Ariiellus) - Ethereum researcher, MEV analyst, node operator, and co-founder of Kairos Research. Passionate about cryptoeconomics, security, and DeFi.",
  keywords: ["Ethereum", "MEV", "DeFi", "cryptoeconomics", "blockchain", "security", "node operator", "Kairos Research"],
  authors: [{ name: "Ariiellus", url: "https://ariiellus.eth.limo/" }],
  creator: "Ariiellus",
  openGraph: {
    title: "Ariiellus - Ethereum Research & MEV Analyst",
    description: "Personal website of Ariel (Ariiellus) - Ethereum researcher, MEV analyst, node operator, and co-founder of Kairos Research.",
    url: "https://ariiellus.eth.limo/",
    siteName: "Ariiellus",
    images: [
      {
        url: "/Fuffle1405.png",
        width: 400,
        height: 400,
        alt: "Ariiellus Profile Picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ariiellus - Ethereum Research & MEV Analyst",
    description: "Personal website of Ariel (Ariiellus) - Ethereum researcher, MEV analyst, node operator, and co-founder of Kairos Research.",
    creator: "@Ariiellus",
    images: ["/Fuffle1405.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black transition-colors duration-300 min-h-screen">
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
