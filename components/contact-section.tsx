"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#EAF7FC] to-[#FFFDF8]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            Send Us a Balloon Message
          </h2>
          <p className="text-lg text-foreground/70">We'd love to hear from you!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-3xl shadow-xl">
          <div>
            <Input
              placeholder="Your Name"
              required
              className="rounded-full border-2 border-[#FFD6B0]/30 focus:border-[#FFD6B0] h-12"
            />
          </div>

          <div>
            <Input
              type="email"
              placeholder="Your Email"
              required
              className="rounded-full border-2 border-[#B9E4D3]/30 focus:border-[#B9E4D3] h-12"
            />
          </div>

          <div>
            <Textarea
              placeholder="Your Message"
              required
              rows={6}
              className="rounded-3xl border-2 border-[#D9C7F8]/30 focus:border-[#D9C7F8] resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-[#FFD6B0] to-[#FFF4AE] hover:opacity-90 text-foreground font-semibold rounded-full h-12 shadow-lg hover:shadow-xl transition-all"
          >
            {submitted ? "✓ Message Sent!" : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  )
}
