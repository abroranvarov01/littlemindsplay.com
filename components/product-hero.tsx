"use client"

import { Button } from "@/components/ui/button"
import { Star, ExternalLink } from "lucide-react"
import { useState } from "react"

type ProductHeroProps = {
  product: {
    name: string
    price: string
    rating: number
    reviews: number
    age: string
    images: string[]
    description: string
    amazonLink: string
  }
}

export function ProductHero({ product }: ProductHeroProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF7FC] to-[#FFFDF8] py-12 px-4">
      {/* Floating toy decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[5%] w-12 h-12 bg-[#FFD6B0] rounded-xl rotate-12 animate-float opacity-40" />
        <div className="absolute top-40 right-[8%] w-10 h-10 bg-[#B9E4D3] rounded-xl -rotate-6 animate-float-slow opacity-40" />
        <div
          className="absolute bottom-32 left-[10%] w-14 h-14 bg-[#D9C7F8] rounded-xl rotate-45 animate-float opacity-40"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-[60%] right-[15%] w-8 h-8 bg-[#FFF4AE] rounded-full animate-float-slow opacity-40"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image carousel */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-3xl p-8 shadow-2xl border-4 border-[#FFD6B0]/20">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Thumbnail navigation */}
            
          </div>

          {/* Product info */}
          <div className="space-y-6">
            <div>
              <h1
                className="text-4xl md:text-5xl font-bold mb-4 text-balance"
                style={{ fontFamily: "var(--font-baloo)" }}
              >
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < product.rating ? "fill-[#FFF4AE] text-[#FFF4AE]" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-foreground/70">({product.reviews} reviews)</span>
              </div>
              <p className="text-xl text-foreground/80 mb-2">
                Ages: <span className="font-semibold">{product.age}</span>
              </p>
            </div>

            

            <p className="text-lg leading-relaxed text-foreground/80">{product.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="flex-1 bg-gradient-to-r from-[#FFD6B0] to-[#FFF4AE] hover:opacity-90 text-foreground font-semibold rounded-full h-14 shadow-lg hover:shadow-xl transition-all text-lg group"
                asChild
              >
                <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                  View on Amazon
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Safety badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="bg-[#B9E4D3] px-4 py-2 rounded-full text-sm font-semibold">BPA-Free</div>
              <div className="bg-[#D9C7F8] px-4 py-2 rounded-full text-sm font-semibold">Non-Toxic</div>
              <div className="bg-[#FFF4AE] px-4 py-2 rounded-full text-sm font-semibold">Eco-Friendly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
