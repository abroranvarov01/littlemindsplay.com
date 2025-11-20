"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted")
    if (!accepted) {
      setShow(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookies-accepted", "true")
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#FFD6B0] shadow-2xl p-4 md:p-6 z-50 animate-in slide-in-from-bottom">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/80 leading-relaxed">
          This website uses cookies to improve your experience. By continuing, you agree to our use of cookies.
        </p>
        <Button
          onClick={handleAccept}
          className="bg-[#FFD6B0] hover:bg-[#FFD6B0]/90 text-foreground rounded-full px-8 whitespace-nowrap"
        >
          Accept Cookies
        </Button>
      </div>
    </div>
  )
}
