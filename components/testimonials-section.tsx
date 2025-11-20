"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria & Sofia",
    age: "8 months",
    photo: "/parent-sarah-with-baby-noah.jpg",
    quote: "The Rainbow Stacking Blocks have been Sofia's favorite! She's learning colors and developing motor skills.",
    rating: 5,
  },
  {
    name: "Jessica & Liam",
    age: "18 months",
    photo: "/parent-emily-with-baby-mila.jpg",
    quote: "Such high quality toys! Liam loves the shape sorter and it keeps him engaged for hours.",
    rating: 5,
  },
  {
    name: "David & Emma",
    age: "2 years",
    photo: "/parent-james-with-toddler-theo.jpg",
    quote: "Finally found toys that are both educational AND fun. Emma is learning so much through play!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#FFFDF8] to-[#EAF7FC]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            Parent Stories
          </h2>
          <p className="text-lg text-foreground/70">Hear from families who love our toys</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-[#FFD6B0] relative overflow-hidden group"
            >
              {/* Cloud shape background */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#FFD6B0]/20 to-[#FFF4AE]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.photo || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-[#B9E4D3]"
                  />
                  <div>
                    <h3 className="font-semibold text-lg" style={{ fontFamily: "var(--font-baloo)" }}>
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-foreground/60">Baby {testimonial.age}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFF4AE] text-[#FFF4AE]" />
                  ))}
                </div>

                <p className="text-foreground/80 leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
