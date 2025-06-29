"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload } from "lucide-react"

interface GeneratorFormProps {
  inputText: string;
  setInputText: (value: string) => void;
  qrColor: string;
  setQrColor: (value: string) => void;
  errorCorrectionLevel: string;
  setErrorCorrectionLevel: (value: string) => void;
}

export function GeneratorForm({
  inputText,
  setInputText,
  qrColor,
  setQrColor,
  errorCorrectionLevel,
  setErrorCorrectionLevel,
}: GeneratorFormProps) {
  return (
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
  )
}