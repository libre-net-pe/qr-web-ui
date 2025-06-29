import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Reliable QR - Free QR Code Generator That Never Expires",
  description:
    "Generate truly free QR codes that never expire. No sign-up required, no hidden costs, no data hostage situations.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-foreground`}>{children}</body>
    </html>
  )
}
