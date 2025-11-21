import React from "react";
import "./globals.css";
import { Metadata, Viewport } from "next";
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  metadataBase: new URL('https://ariiellus.eth.limo'),
  title: {
    default: "Ariiellus - Low R case researcher",
    template: "%s | Ariiellus"
  },
  description: "Ethereum researcher, MEV analyst, and self-taught developer.",
  keywords: [
    "Ethereum", "MEV", "DeFi", "cryptoeconomics", "blockchain", "security",
    "node operator", "Kairos Research", "Solidity", "smart contracts",
    "Web3", "developer", "mentoring", "Ethereum Mexico", "validator",
    "Obol", "EtherFi", "hackathons", "Web3 education", "crypto research"
  ],
  authors: [{ name: "Ariiellus", url: "https://ariiellus.eth.limo/" }],
  creator: "Ariiellus",
  category: "Technology",
  openGraph: {
    title: "Ariiellus - Low R case researcher",
    description: "Ethereum researcher, MEV analyst, and self-taught developer.",
    url: "https://ariiellus.eth.limo/",
    siteName: "Ariiellus Portfolio",
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
    card: "summary_large_image",
    title: "Ariiellus - Low R case rese",
    description: "Ethereum researcher, MEV analyst, and self-taught developer.",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
