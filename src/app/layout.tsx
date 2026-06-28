import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Apex Motors | Luxury Automotive Dealership',
  description: 'Discover premium luxury vehicles at Apex Motors. Featuring certified pre-owned Mercedes-Benz, BMW, Porsche, Lexus, and Genesis vehicles with nationwide delivery.',
  keywords: ['luxury cars', 'premium dealership', 'Mercedes-Benz', 'BMW', 'Porsche', 'Lexus', 'Genesis', 'certified pre-owned'],
  authors: [{ name: 'Apex Motors' }],
  openGraph: {
    title: 'Apex Motors | Luxury Automotive Dealership',
    description: 'Discover premium luxury vehicles at Apex Motors.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Apex Motors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Motors | Luxury Automotive Dealership',
    description: 'Discover premium luxury vehicles at Apex Motors.',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  themeColor: '#081324',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body">
        {children}
      </body>
    </html>
  )
}