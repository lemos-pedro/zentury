import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Zentury - Soluções Digitais Inteligentes | Angola",
  description:
    "Startup tecnológica especializada em automação, IA, saúde digital e soluções inteligentes. Transformando o futuro através da tecnologia.",
  keywords: "Zentury, tecnologia Angola, IA, automação, saúde digital, startup, inovação",
  authors: [{ name: "Zentury" }],
  creator: "Zentury",
  openGraph: {
    type: "website",
    locale: "pt_AO",
    url: "https://zentury.pt",
    title: "Zentury - Pensar alto fazer certo é Zentury",
    description: "Transformando o futuro através da tecnologia inteligente",
    siteName: "Zentury ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zentury - Pensar alto fazer certo é Zentury",
    description: "Transformando o futuro através da tecnologia inteligente",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-AO" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <div className="relative min-h-screen bg-black">
          {/* Background grid */}
          <div className="fixed inset-0 tech-grid opacity-20 pointer-events-none" />

          {/* Gradient overlays */}
          <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none" />

          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
