import { Metadata } from "next";

import { PremiumFeatures } from "@/components/PremiumFeatures";
import Link from "next/link";
import { QrGenerator } from "@/components/QrGenerator";

export const metadata: Metadata = {
  title: "Free QR Code Generator | Create QR Codes That Never Expire",
  description:
    "Instantly create free, high-quality QR codes that never expire. No sign-up, no tracking, just permanent static QR codes for any purpose.",
  alternates: {
    canonical: "https://qr.libre.net.pe",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">Reliable QR</h1>
              </div>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Generator
                </Link>
                <Link
                  href="/about"
                  className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pricing
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Generate Free QR Codes That Never Expire
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Create static QR codes instantly. No sign-up required. No expiration dates. Ever.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
            <p className="text-green-800 font-medium">
              ✅ Your Static QR Codes created here are truly free and will never expire
            </p>
          </div>
        </div>

        <QrGenerator />

        <PremiumFeatures />
      </main>
    </div>
  )
}
