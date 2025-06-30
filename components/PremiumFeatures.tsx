'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, BarChart3, Link2, Shield } from "lucide-react"

export function PremiumFeatures() {
  return (
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
  )
}
