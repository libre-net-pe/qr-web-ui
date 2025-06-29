"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Upload, Zap, BarChart3, Link2, Shield } from "lucide-react"
import QRCode from "qrcode"
import Link from "next/link"

export default function HomePage() {
  const [inputText, setInputText] = useState("")
  const [qrColor, setQrColor] = useState("#000000")
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState("M")
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [scannabilityScore, setScannabilityScore] = useState(0)

  const generateQRCode = async () => {
    if (!inputText.trim()) return

    setIsGenerating(true)
    try {
      const options = {
        errorCorrectionLevel: errorCorrectionLevel as "L" | "M" | "Q" | "H",
        color: {
          dark: qrColor,
          light: "#FFFFFF",
        },
        width: 300,
        margin: 2,
      }

      const dataUrl = await QRCode.toDataURL(inputText, options)
      setQrCodeDataUrl(dataUrl)

      // Calculate scannability score based on contrast and other factors
      const score = calculateScannabilityScore(qrColor, inputText.length)
      setScannabilityScore(score)
    } catch (error) {
      console.error("Error generating QR code:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  const calculateScannabilityScore = (color: string, textLength: number) => {
    // Simple scannability calculation based on contrast and data density
    const contrast = getContrastRatio(color, "#FFFFFF")
    const densityScore = Math.max(0, 100 - textLength * 0.5)
    const contrastScore = Math.min(100, contrast * 20)
    return Math.round((densityScore + contrastScore) / 2)
  }

  const getContrastRatio = (color1: string, color2: string) => {
    // Simplified contrast calculation
    const hex1 = color1.replace("#", "")
    const r1 = Number.parseInt(hex1.substr(0, 2), 16)
    const g1 = Number.parseInt(hex1.substr(2, 2), 16)
    const b1 = Number.parseInt(hex1.substr(4, 2), 16)
    const luminance1 = (0.299 * r1 + 0.587 * g1 + 0.114 * b1) / 255

    return Math.abs(luminance1 - 1) // Contrast with white
  }

  const downloadQRCode = async (format: "png" | "svg") => {
    if (!inputText.trim()) return

    try {
      let dataUrl: string
      const options = {
        errorCorrectionLevel: errorCorrectionLevel as "L" | "M" | "Q" | "H",
        color: {
          dark: qrColor,
          light: "#FFFFFF",
        },
        width: 512,
        margin: 2,
      }

      if (format === "svg") {
        const svgString = await QRCode.toString(inputText, { ...options, type: "svg" })
        const blob = new Blob([svgString], { type: "image/svg+xml" })
        dataUrl = URL.createObjectURL(blob)
      } else {
        dataUrl = await QRCode.toDataURL(inputText, options)
      }

      const link = document.createElement("a")
      link.download = `reliable-qr-code.${format}`
      link.href = dataUrl
      link.click()

      if (format === "svg") {
        URL.revokeObjectURL(dataUrl)
      }
    } catch (error) {
      console.error("Error downloading QR code:", error)
    }
  }

  useEffect(() => {
    if (inputText.trim()) {
      const debounceTimer = setTimeout(() => {
        generateQRCode()
      }, 500)
      return () => clearTimeout(debounceTimer)
    } else {
      setQrCodeDataUrl("")
      setScannabilityScore(0)
    }
  }, [inputText, qrColor, errorCorrectionLevel])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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
          <Card>
            <CardHeader>
              <CardTitle>QR Code Generator</CardTitle>
              <CardDescription>Enter your URL or text to generate a permanent QR code</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="input-text">URL or Text</Label>
                <Input
                  id="input-text"
                  placeholder="https://example.com or any text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="qr-color">QR Code Color</Label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      id="qr-color"
                      value={qrColor}
                      onChange={(e) => setQrColor(e.target.value)}
                      className="w-12 h-10 rounded border border-gray-300"
                    />
                    <Input value={qrColor} onChange={(e) => setQrColor(e.target.value)} className="flex-1" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="error-correction">Error Correction</Label>
                  <Select value={errorCorrectionLevel} onValueChange={setErrorCorrectionLevel}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="L">Low (7%)</SelectItem>
                      <SelectItem value="M">Medium (15%)</SelectItem>
                      <SelectItem value="Q">Quartile (25%)</SelectItem>
                      <SelectItem value="H">High (30%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Logo Upload (Coming Soon)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-gray-500">
                  <Upload className="mx-auto h-8 w-8 mb-2" />
                  <p className="text-sm">Upload logo feature available in premium plan</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 bg-transparent"
                    onClick={() => (window.location.href = "/pricing")}
                  >
                    View Premium Features
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* QR Code Preview */}
          <Card>
            <CardHeader>
              <CardTitle>QR Code Preview</CardTitle>
              <CardDescription>Your generated QR code will appear here</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                {qrCodeDataUrl ? (
                  <div className="text-center">
                    <img
                      src={qrCodeDataUrl || "/placeholder.svg"}
                      alt="Generated QR Code"
                      className="mx-auto border rounded-lg shadow-sm"
                    />
                    <div className="mt-4">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-sm font-medium">Scannability Score:</span>
                        <Badge
                          variant={
                            scannabilityScore >= 80 ? "default" : scannabilityScore >= 60 ? "secondary" : "destructive"
                          }
                        >
                          {scannabilityScore}/100
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-500">
                        {scannabilityScore >= 80
                          ? "Excellent scannability"
                          : scannabilityScore >= 60
                            ? "Good scannability"
                            : "Consider higher contrast"}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="w-64 h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                        QR
                      </div>
                      <p className="text-sm">Enter text above to generate QR code</p>
                    </div>
                  </div>
                )}
              </div>

              {qrCodeDataUrl && (
                <div className="space-y-3">
                  <div className="flex space-x-2">
                    <Button onClick={() => downloadQRCode("png")} className="flex-1" disabled={isGenerating}>
                      <Download className="w-4 h-4 mr-2" />
                      Download PNG
                    </Button>
                    <Button
                      onClick={() => downloadQRCode("svg")}
                      variant="outline"
                      className="flex-1"
                      disabled={isGenerating}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download SVG
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
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
                See how many people scan your QR codes, where they're from, and what devices they use.
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
