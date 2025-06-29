import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Users, Lock, Globe, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">Reliable QR</h1>
              </Link>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Generator
                </Link>
                <Link
                  href="/about"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Reliable QR</h2>
          <p className="text-lg text-gray-600 mb-6">Building trust through transparency in QR code generation</p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-red-500" />
              <CardTitle>Our Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Reliable QR was created to address the frustrating experiences users face with existing QR code
              generators. We believe in providing a genuinely free service for basic QR code generation, with complete
              transparency about what's free and what's premium. No hidden costs, no expiring codes, no data hostage
              situations.
            </p>
          </CardContent>
        </Card>

        {/* How It Works */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">How Reliable QR Works</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Free</Badge>
                  <CardTitle className="text-lg">Static QR Codes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Generated entirely in your browser</li>
                  <li>• Data embedded directly in the QR code</li>
                  <li>• No server dependency after generation</li>
                  <li>• Never expire or get deactivated</li>
                  <li>• No tracking or analytics</li>
                  <li>• Perfect for permanent use cases</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Badge>Premium</Badge>
                  <CardTitle className="text-lg">Dynamic QR Codes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Content can be edited after creation</li>
                  <li>• Detailed scan analytics and tracking</li>
                  <li>• Custom branded short URLs</li>
                  <li>• Password protection options</li>
                  <li>• Bulk generation capabilities</li>
                  <li>• Advanced security features</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Principles */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Key Principles</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <CardTitle className="text-lg">Transparency</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Clear pricing, no hidden fees, upfront about what's free vs. premium. You'll always know exactly what
                  you're getting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-green-600" />
                  <CardTitle className="text-lg">Privacy First</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Static QR codes are generated in your browser. We don't store your data or track your usage for free
                  tier services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-purple-600" />
                  <CardTitle className="text-lg">Reliability</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Your free QR codes will never expire, break, or be held hostage. They work independently of our
                  service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Privacy Policy */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Globe className="w-6 h-6 text-blue-600" />
              <CardTitle>Privacy & Security</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What We Collect (Free Users)</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Basic analytics (page views, no personal data)</li>
                <li>• No QR code content or generated codes stored</li>
                <li>• No email addresses or personal information required</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Security Measures</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• HTTPS encryption for all data transmission</li>
                <li>• Client-side QR generation (your data stays local)</li>
                <li>• No third-party tracking scripts on generator pages</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Data Usage</h4>
              <p className="text-sm text-gray-600">
                We use minimal analytics to improve our service. For premium users, we collect only the data necessary
                to provide advanced features like scan analytics and account management. We never sell your data to
                third parties.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-green-600" />
              <CardTitle>Contact & Support</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Have questions, feedback, or need support? We're here to help with real human support, not just AI
              chatbots.
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                <strong>Email:</strong>{" "}
                <a href="mailto:support@reliableqr.com" className="text-blue-600 hover:underline">
                  support@reliableqr.com
                </a>
              </p>
              <p className="text-sm">
                <strong>Response Time:</strong> Usually within 24 hours
              </p>
            </div>
            <div className="mt-6">
              <Button asChild>
                <Link href="/">Try Our QR Generator</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
