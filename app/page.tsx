import { Metadata } from "next"
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, BarChart3, Link2, Shield } from "lucide-react"
import Link from "next/link"
import { GeneratorForm } from "@/components/GeneratorForm"
import { QrCodePreview } from "@/components/QrCodePreview"

export const metadata: Metadata = {
  title: "Free QR Code Generator | Create QR Codes That Never Expire",
  description:
    "Instantly create free, high-quality QR codes that never expire. No sign-up, no tracking, just permanent static QR codes for any purpose.",
  alternates: {
    canonical: "https://qr.libre.net.pe",
  },
}

export default function HomePage() {
  const [inputText, setInputText] = useState("")
  const [qrColor, setQrColor] = useState("#000000")
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState("Q")

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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Generator Form */}
          <GeneratorForm
            inputText={inputText}
            setInputText={setInputText}
            qrColor={qrColor}
            setQrColor={setQrColor}
            errorCorrectionLevel={errorCorrectionLevel}
            setErrorCorrectionLevel={setErrorCorrectionLevel}
          />

          {/* QR Code Preview */}
          <QrCodePreview
            inputText={inputText}
            qrColor={qrColor}
            errorCorrectionLevel={errorCorrectionLevel}
          />
        </div>

        {/* Fake Doors for Premium Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <CardTitle className="text-blue-900">Advanced Analytics</CardTitle>
              </div>
              <CardDescription>Track scans, locations, devices, and more</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                See how many people scan your QR codes, where they&apos;re from, and what devices they use.
              </p>
              <Button
                variant="outline"
                className="w-full border-blue-300 text-blue-700 hover:bg-blue-100 bg-transparent"
                onClick={() => (window.location.href = "/pricing")}
              >
                <Zap className="w-4 h-4 mr-2" />
                Unlock Analytics
              </Button>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Link2 className="w-5 h-5 text-purple-600" />
                <CardTitle className="text-purple-900">Dynamic QR Codes</CardTitle>
              </div>
              <CardDescription>Edit content after creation, no reprinting needed</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Change your linked content anytime without generating new QR codes.
              </p>
              <Button
                variant="outline"
                className="w-full border-purple-300 text-purple-700 hover:bg-purple-100 bg-transparent"
                onClick={() => (window.location.href = "/pricing")}
              >
                <Zap className="w-4 h-4 mr-2" />
                Make QR Editable
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <CardTitle className="text-green-900">Enhanced Security</CardTitle>
              </div>
              <CardDescription>Password protection and branded domains</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">Add password protection and use your own branded short URLs.</p>
              <Button
                variant="outline"
                className="w-full border-green-300 text-green-700 hover:bg-green-100 bg-transparent"
                onClick={() => (window.location.href = "/pricing")}
              >
                <Zap className="w-4 h-4 mr-2" />
                Upgrade Security
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
