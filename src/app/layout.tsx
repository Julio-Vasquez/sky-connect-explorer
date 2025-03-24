import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import FloatingHomeButton from '@components/molecules/FloatingHomeButton'
import ClientSideToastContainer from '@components/atoms/ClientSideToastContainer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'SkyConnect Explorer',
  description:
    'Advanced platform for real-time flight monitoring and management. 🚀✈️',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen w-full text-white `}
      >
        {/* Capa oscura encima de la imagen */}
        <div className="absolute inset-0 bg-[#0d1a32]/80 z-0 " />
        <FloatingHomeButton />

        {/* Contenido principal */}
        <main className="relative z-10 w-full flex flex-col justify-center min-h-screen px-6 py-10 sm:p-20 gap-16 font-[family-name:var(--font-geist-sans)]">
          <ClientSideToastContainer />
          {children}
        </main>
      </body>
    </html>
  )
}
