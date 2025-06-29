import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Zap, Headphones } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const features = {
    free: [
      "Static QR code generation",
      "Basic color customization",
      "PNG & SVG downloads",
      "Error correction levels",
      "Scannability checker",
      "No expiration dates",
      "No sign-up required",
    ],
    premium: [
      "Everything in Free",
      "Dynamic QR codes (editable)",
      "Advanced scan analytics",
      "Custom branded domains",
      "Logo embedding",
      "Bulk QR generation",
      "Password protection",
      "Priority support",
      "API access",
      "Team collaboration",
      "White-label options",
    ],
  }

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
                  className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pricing
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-lg text-gray-600 mb-6">
            Start free, upgrade when you need advanced features. No hidden costs, ever.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-yellow-800 font-medium">
              💡 All prices shown include taxes. Annual plans are billed yearly with no monthly surprises.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Free Plan */}
          <Card className="border-2 border-green-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Free</CardTitle>
                  <CardDescription>Perfect for personal use</CardDescription>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Popular
                </Badge>
              </div>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-500">/forever</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {features.free.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link href="/">Start Generating Free</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="border-2 border-blue-500 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-500">Most Popular</Badge>
            </div>
            <CardHeader>
              <div>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <CardDescription>For businesses and professionals</CardDescription>
              </div>
              <div className="mt-4">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-sm text-gray-500">Billed annually at $108/year</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {features.premium.slice(0, 8).map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" disabled>
                Coming Soon
              </Button>
              <p className="text-xs text-center text-gray-500 mt-2">Join waitlist to be notified when available</p>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="border-2 border-purple-200">
            <CardHeader>
              <div>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>For large teams and organizations</CardDescription>
              </div>
              <div className="mt-4">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-sm text-gray-500">Billed annually at $348/year</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {features.premium.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-purple-600" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full bg-transparent" disabled>
                Contact Sales
              </Button>
              <p className="text-xs text-center text-gray-500 mt-2">Custom solutions available</p>
            </CardContent>
          </Card>
        </div>

        {/* Feature Comparison */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Feature Comparison</h3>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Free</th>
                  <th className="text-center p-4 font-semibold">Pro</th>
                  <th className="text-center p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">Static QR Codes</td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Dynamic QR Codes</td>
                  <td className="text-center p-4">
                    <X className="w-5 h-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Scan Analytics</td>
                  <td className="text-center p-4">
                    <X className="w-5 h-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Custom Domains</td>
                  <td className="text-center p-4">
                    <X className="w-5 h-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">API Access</td>
                  <td className="text-center p-4">
                    <X className="w-5 h-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <X className="w-5 h-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4">Priority Support</td>
                  <td className="text-center p-4">
                    <X className="w-5 h-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Will my free QR codes really never expire?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Yes, absolutely. Static QR codes generated with our free plan embed the data directly in the code
                  itself. They don&apos;t depend on our servers and will work forever.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What&apos;s the difference between static and dynamic?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Static QR codes contain the actual data (like your URL). Dynamic QR codes contain a short link that
                  redirects to your content, allowing you to change the destination later.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I upgrade or downgrade anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Yes, you can upgrade to Pro anytime. If you downgrade, your dynamic QR codes will continue working,
                  but you won&apos;t be able to edit them or access analytics.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer refunds?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  We offer a 30-day money-back guarantee for all paid plans. If you&apos;re not satisfied, contact us for a
                  full refund within 30 days of purchase.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create Reliable QR Codes?</h3>
          <p className="text-gray-600 mb-6">Start with our free plan and upgrade when you need advanced features.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">
                <Zap className="w-4 h-4 mr-2" />
                Start Free Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" disabled>
              <Headphones className="w-4 h-4 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
