"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"
import QRCode from "qrcode"
import * as d3 from "d3";

interface QrCodePreviewProps {
  inputText: string
  qrColor: string
  errorCorrectionLevel: string
}

export function QrCodePreview({ inputText, qrColor, errorCorrectionLevel }: QrCodePreviewProps) {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [scannabilityScore, setScannabilityScore] = useState(0)

  const addTextToQRCode = (dataUrl: string): Promise<string> => {
    return new Promise((resolve) => {
      const image = new Image()
      image.onload = () => {
        const canvas = document.createElement("canvas")
        const context = canvas.getContext("2d")

        const qrWidth = image.width
        const qrHeight = image.height
        const textHeight = 30
        const textMargin = 10

        canvas.width = qrWidth
        canvas.height = qrHeight + textHeight + textMargin

        if (context) {
          context.fillStyle = "#FFFFFF"
          context.fillRect(0, 0, canvas.width, canvas.height)

          context.drawImage(image, 0, 0)

          context.fillStyle = "#000000"
          context.font = "bold 16px Arial"
          context.textAlign = "center"
          context.fillText("Created with https://qr.libre.net.pe", canvas.width / 2, qrHeight + textHeight)
        }

        resolve(canvas.toDataURL("image/png"))
      }
      image.src = dataUrl
    })
  }

  const addTextToSVG = (svgString: string, width: number): string => {
    const text = "Created with https://qr.libre.net.pe";
    const textHeight = 40;
    const newHeight = width + textHeight;

    const container = d3.create("div");
    container.html(svgString);

    const svg = container.select("svg");
    console.log(svgString);

    // svg.attr("height", newHeight)
    //    .attr("viewBox", `0 0 ${width} ${newHeight}`);

    svg.append("text")
       .attr("x", 12)
       .attr("y", 24)
       .attr("text-anchor", "middle")
       .attr("font-family", "Arial")
       .attr("font-size", "1")
       .attr("font-weight", "bold")
       .attr("fill", "#000000")
       .text(text);

    return container.html();
  };


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
        let svgString = await QRCode.toString(inputText, { ...options, type: "svg" })
        svgString = addTextToSVG(svgString, options.width);
        const blob = new Blob([svgString], { type: "image/svg+xml" })
        dataUrl = URL.createObjectURL(blob)
      } else {
        const pngDataUrl = await QRCode.toDataURL(inputText, options)
        dataUrl = await addTextToQRCode(pngDataUrl)
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
    const generateQRCode = async () => {
      if (!inputText.trim()) {
        setQrCodeDataUrl("")
        setScannabilityScore(0)
        return
      }

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
        const finalDataUrl = await addTextToQRCode(dataUrl)
        setQrCodeDataUrl(finalDataUrl)

        // Calculate scannability score based on contrast and other factors
        const score = calculateScannabilityScore(qrColor, inputText.length)
        setScannabilityScore(score)
      } catch (error) {
        console.error("Error generating QR code:", error)
      } finally {
        setIsGenerating(false)
      }
    }

    const debounceTimer = setTimeout(() => {
      generateQRCode()
    }, 500)
    return () => clearTimeout(debounceTimer)
  }, [inputText, qrColor, errorCorrectionLevel])

  return (
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
  )
}
