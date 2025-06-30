"use client"

import { useState } from "react"
import { GeneratorForm } from "@/components/GeneratorForm"
import { QrCodePreview } from "@/components/QrCodePreview"

export function QrGenerator() {
  const [inputText, setInputText] = useState("")
  const [qrColor, setQrColor] = useState("#000000")
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState("Q")

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <GeneratorForm
        inputText={inputText}
        setInputText={setInputText}
        qrColor={qrColor}
        setQrColor={setQrColor}
        errorCorrectionLevel={errorCorrectionLevel}
        setErrorCorrectionLevel={setErrorCorrectionLevel}
      />
      <QrCodePreview
        inputText={inputText}
        qrColor={qrColor}
        errorCorrectionLevel={errorCorrectionLevel}
      />
    </div>
  )
}