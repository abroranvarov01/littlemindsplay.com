"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1)
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-baloo)" }}>
            About LittleMindsPlay
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Growing plant animation */}
          <div className="relative h-96 flex items-end justify-center">
            <div className="relative w-48">
              {/* Pot */}
              <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b from-[#FFD6B0] to-[#FFD6B0]/80 rounded-t-3xl" />

              {/* Stem */}
              <div
                className="absolute bottom-24 left-1/2 -translate-x-1/2 w-2 bg-[#B9E4D3] rounded-full transition-all duration-1000 ease-out"
                style={{ height: `${scrollProgress * 200}px` }}
              />

              {/* Leaves */}
              {scrollProgress > 0.3 && (
                <>
                  <div
                    className="absolute left-1/2 w-12 h-8 bg-[#B9E4D3] rounded-full -rotate-45 transition-all duration-500"
                    style={{
                      bottom: `${120 + scrollProgress * 80}px`,
                      left: "calc(50% - 3rem)",
                      opacity: scrollProgress > 0.3 ? 1 : 0,
                    }}
                  />
                  <div
                    className="absolute w-12 h-8 bg-[#B9E4D3] rounded-full rotate-45 transition-all duration-500 delay-100"
                    style={{
                      bottom: `${140 + scrollProgress * 100}px`,
                      right: "calc(50% - 3rem)",
                      opacity: scrollProgress > 0.4 ? 1 : 0,
                    }}
                  />
                </>
              )}

              {/* Flower */}
              {scrollProgress > 0.6 && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 transition-all duration-500"
                  style={{
                    bottom: `${scrollProgress * 200 + 24}px`,
                    opacity: scrollProgress > 0.6 ? 1 : 0,
                    transform: `translateX(-50%) scale(${Math.min((scrollProgress - 0.6) * 2.5, 1)})`,
                  }}
                >
                  <div className="relative w-16 h-16">
                    {[0, 72, 144, 216, 288].map((rotation, i) => (
                      <div
                        key={i}
                        className="absolute top-0 left-1/2 w-6 h-6 bg-[#FFD6B0] rounded-full -translate-x-1/2"
                        style={{
                          transform: `translateX(-50%) rotate(${rotation}deg) translateY(-8px)`,
                        }}
                      />
                    ))}
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#FFF4AE] rounded-full -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/80">
              We believe that every child deserves toys that inspire curiosity, creativity, and joy. Founded by parents
              for parents, LittleMindsPlay is dedicated to creating educational toys that support healthy development at
              every stage.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              Our commitment goes beyond play. We source sustainable materials, use non-toxic finishes, and ensure every
              product meets the highest safety standards. Because when children play, they're not just having
              fun—they're building the foundation for a lifetime of learning.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 font-semibold">
              Join us in creating a world that grows with your child.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
