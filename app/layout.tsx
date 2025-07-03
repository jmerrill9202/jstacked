import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JStacked - Premium AI Tools for Creators',
  description: 'Discover and master the best AI tools for freelancers, creators, and remote professionals. Curated insights, in-depth reviews, and practical guides.',
  keywords: ['AI tools', 'freelancer', 'creator', 'remote work', 'productivity', 'artificial intelligence'],
  authors: [{ name: 'JStacked Team' }],
  creator: 'JStacked',
  publisher: 'JStacked',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'JStacked - Premium AI Tools for Creators',
    description: 'Discover and master the best AI tools for freelancers, creators, and remote professionals.',
    url: 'https://jstacked.com',
    siteName: 'JStacked',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JStacked - Premium AI Tools for Creators',
    description: 'Discover and master the best AI tools for freelancers, creators, and remote professionals.',
    creator: '@jstacked',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://jstacked.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 