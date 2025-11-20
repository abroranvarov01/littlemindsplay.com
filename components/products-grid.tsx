"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const allProducts = [
  {
    id: 1,
    name: "LBAIBB Spinning Educational Interactive Learnings",
    image: "https://m.media-amazon.com/images/I/616xPCnrScL._AC_SX679_.jpg",
    price: "$24.99",
    rating: 4,
    reviews: 150,
    age: "6-12 months",
    skill: "Motor Skills",
    material: "Plastic",
    slug: "spinning-activity-cube",
    shortReview: "Engaging spinning cube that sparks curiosity and builds motor skills with colorful interactive fun!",
  },
  {
    id: 2,
    name: "Toddlers Montessori Wooden Educational Toys",
    image: "https://m.media-amazon.com/images/I/71KIocz1MPL._AC_SX679_.jpg",
    price: "$29.99",
    rating: 5,
    reviews: 200,
    age: "12-24 months",
    skill: "Cognitive",
    material: "Wood",
    slug: "montessori-wooden-farm-toy",
    shortReview: "Wooden farm set that teaches shapes, colors, and fruits while enhancing problem-solving through hands-on play",
  },
  {
    id: 3,
    name: "Activity Montessori Toddlers Birthday Educational",
    image: "https://m.media-amazon.com/images/I/81FqlaJMUpL._AC_SX679_.jpg",
    price: "$34.99",
    rating: 5,
    reviews: 180,
    age: "12-24 months",
    skill: "Creative",
    material: "Wood",
    slug: "montessori-activity-board",
    shortReview: "Montessori activity board packed with sensory zones for endless exploration and developmental milestones",
  },
  {
    id: 4,
    name: "Bluey Plush Dress Up Play Baby",
    image: "https://m.media-amazon.com/images/I/71kIzdkDpbL._AC_SX679_.jpg",
    price: "$19.99",
    rating: 5,
    reviews: 250,
    age: "0-12 months",
    skill: "Social",
    material: "Fabric",
    slug: "bluey-plush-dress-play",
    shortReview: "Cuddly Bluey plush for imaginative dress-up and emotional bonding, inspired by the hit show",
  },
  {
    id: 5,
    name: "Cltoyvers Wooden Abacus for Kids Math",
    image: "https://m.media-amazon.com/images/I/71W0pLdqE5L._AC_SX679_.jpg",
    price: "$15.99",
    rating: 4.7,
    reviews: 1223,
    age: "3-5 years",
    skill: "Cognitive",
    material: "Wood",
    slug: "wooden-counting-abacus",
    shortReview: "Rainbow abacus with math cards that turns counting and operations into engaging, hands-on learning",
  },
  {
    id: 6,
    name: "LEGO Jurassic Dinosaur Fossils Triceratops",
    image: "https://m.media-amazon.com/images/I/81zC6Fbp23L._AC_SX679_.jpg",
    price: "$44.99",
    rating: 5,
    reviews: 140,
    age: "2-3 years",
    skill: "Creative",
    material: "Plastic",
    slug: "lego-jurassic-fossils",
    shortReview: "Buildable dinosaur fossils and Triceratops that ignite paleontology passion and building creativity",
  },
  {
    id: 7,
    name: "Montessori Sensory Teething Learning Developmental",
    image: "https://m.media-amazon.com/images/I/61c6EVMqg2L._SX679_.jpg",
    price: "$16.99",
    rating: 5,
    reviews: 160,
    age: "0-6 months",
    skill: "Motor Skills",
    material: "Silicone",
    slug: "montessori-sensory-teether",
    shortReview: "Textured sensory teether that soothes gums while fostering early grasping and exploration",
  },
  {
    id: 8,
    name: "Animals Friction Powered Vehicles Toddlers",
    image: "https://m.media-amazon.com/images/I/71X+HsU7R3S._AC_SX679_.jpg",
    price: "$27.99",
    rating: 5,
    reviews: 110,
    age: "1-2 years",
    skill: "Motor Skills",
    material: "Plastic",
    slug: "animals-friction-vehicles",
    shortReview: "Friction-powered animal cars that zoom with a push, boosting coordination and animal fun",
  },
  {
    id: 9,
    name: "Moonkie Stacking Educational Silicone Teething",
    image: "https://m.media-amazon.com/images/I/61wt3TrgNpL._SX679_.jpg",
    price: "$15.99",
    rating: 4.9,
    reviews: 2770,
    age: "6-12 months",
    skill: "Cognitive",
    material: "Silicone",
    slug: "stacking-silicone-cups",
    shortReview: "Stackable teething cups with numbers and textures for sensory stacking and early math discovery",
  },
]

export function ProductsGrid() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  const toggleFlip = (productId: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(productId)) {
        newSet.delete(productId)
      } else {
        newSet.add(productId)
      }
      return newSet
    })
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {allProducts.map((product) => {
        const isFlipped = flippedCards.has(product.id)

        return (
          <div key={product.id} className="relative h-[500px] perspective-1000" style={{ perspective: "1000px" }}>
            <div
              className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
              style={{
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front of card */}
              <Card
                className="absolute inset-0 overflow-hidden rounded-3xl border-2 border-transparent hover:border-[#FFD6B0] hover:shadow-2xl transition-all backface-hidden"
                style={{ backfaceVisibility: "hidden" }}
                onMouseEnter={() => toggleFlip(product.id)}
              >
                <div className="h-full flex flex-col">
                  <div className="aspect-square bg-gradient-to-br from-[#EAF7FC] to-[#FFFDF8] p-8">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-balance" style={{ fontFamily: "var(--font-baloo)" }}>
                      {product.name}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-3">Ages {product.age}</p>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < product.rating ? "fill-[#FFF4AE] text-[#FFF4AE]" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="text-sm text-foreground/60 ml-2">({product.reviews})</span>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      
                    </div>
                  </div>
                </div>
              </Card>

              {/* Back of card */}
              <Card
                className="absolute inset-0 overflow-hidden rounded-3xl border-2 border-[#FFD6B0] shadow-2xl backface-hidden rotate-y-180"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
                onMouseLeave={() => toggleFlip(product.id)}
              >
                <div className="h-full flex flex-col bg-gradient-to-br from-[#FFD6B0] to-[#FFF4AE] p-6">
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < product.rating ? "fill-foreground text-foreground" : "text-foreground/30"}`}
                        />
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground" style={{ fontFamily: "var(--font-baloo)" }}>
                      {product.name}
                    </h3>
                    <p className="text-foreground/80 mb-4 italic leading-relaxed">"{product.shortReview}"</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold">Skill:</span>
                        <span className="bg-white/50 px-3 py-1 rounded-full">{product.skill}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold">Material:</span>
                        <span className="bg-white/50 px-3 py-1 rounded-full">{product.material}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-foreground hover:bg-foreground/90 text-white rounded-full" asChild>
                      <Link href={`/products/${product.slug}`}>Learn More</Link>
                    </Button>
                    
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )
      })}
    </div>
  )
}
