import React from 'react'
import './globals.css'
import { Metadata } from 'next'
// import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: 'Ariiellus - Personal Website',
  description: 'Ariiellus Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black transition-colors duration-300 min-h-screen">
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  )
} 