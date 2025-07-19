import React from 'react'
import './globals.css'
import { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
} 