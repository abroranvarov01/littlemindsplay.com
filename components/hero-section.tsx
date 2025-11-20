"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#EAF7FC] to-[#FFFDF8] px-4 pt-20">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cloud decorations */}
        <div className="absolute top-20 left-[10%] w-24 h-16 bg-white/60 rounded-full blur-sm animate-float-slow" />
        <div
          className="absolute top-32 right-[15%] w-32 h-20 bg-white/50 rounded-full blur-sm animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-[20%] w-28 h-18 bg-white/40 rounded-full blur-sm animate-float-slow"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating toy blocks */}
        <div
          className="absolute top-[15%] right-[25%] w-16 h-16 bg-[#FFD6B0] rounded-2xl rotate-12 animate-float opacity-80"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-[60%] left-[15%] w-14 h-14 bg-[#B9E4D3] rounded-2xl -rotate-6 animate-float-slow opacity-80"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-[25%] right-[20%] w-12 h-12 bg-[#D9C7F8] rounded-2xl rotate-45 animate-float opacity-80"
          style={{ animationDelay: "2.5s" }}
        />

        {/* Stars */}
        <div
          className="absolute top-[25%] left-[5%] w-8 h-8 text-[#FFF4AE] animate-float"
          style={{ animationDelay: "1s" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div
          className="absolute bottom-[35%] right-[8%] w-6 h-6 text-[#FFD6B0] animate-float-slow"
          style={{ animationDelay: "2s" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        {/* Animated tagline */}
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            Play. Grow. <span className="text-[#FFD6B0]">Discover</span>.
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Educational toys designed to spark curiosity and joy
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Button
            size="lg"
            className="bg-[#FFD6B0] hover:bg-[#FFD6B0]/90 text-foreground font-semibold px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            asChild
          >
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>

        {/* Playful illustration placeholder */}
        <div
          className={`transition-all duration-1000 delay-700 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"} mt-12`}
        >
          <div className="relative w-full max-w-md mx-auto aspect-square">
            <img
              src="/happy-baby-playing-with-colorful-educational-toys-.jpg"
              alt="Happy child playing with educational toys"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
