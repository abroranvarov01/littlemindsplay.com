"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "LBAIBB Spinning Educational Interactive Learnings",
    image: "https://m.media-amazon.com/images/I/616xPCnrScL._AC_SX679_.jpg",
    price: "$24.99",
    rating: 4,
    age: "6-12 months",
    slug: "spinning-activity-cube",
  },
  {
    id: 2,
    name: "Toddlers Montessori Wooden Educational Toys",
    image: "https://m.media-amazon.com/images/I/71KIocz1MPL._AC_SX679_.jpg",
    price: "$29.99",
    rating: 5,
    age: "12-24 months",
    slug: "montessori-wooden-farm-toy",
  },
  {
    id: 3,
    name: "Activity Montessori Toddlers Birthday Educational",
    image: "https://m.media-amazon.com/images/I/81FqlaJMUpL._AC_SX679_.jpg",
    price: "$34.99",
    rating: 5,
    age: "12-24 months",
    slug: "montessori-activity-board",
  },
  {
    id: 4,
    name: "Bluey Plush Dress Up Play Baby",
    image: "https://m.media-amazon.com/images/I/71kIzdkDpbL._AC_SX679_.jpg",
    price: "$19.99",
    rating: 5,
    age: "0-12 months",
    slug: "bluey-plush-dress-play",
  },
  {
    id: 5,
    name: "Cltoyvers Wooden Abacus for Kids Math",
    image: "https://m.media-amazon.com/images/I/71W0pLdqE5L._AC_SX679_.jpg",
    price: "$15.99",
    rating: 5,
    age: "3-5 years",
    slug: "wooden-counting-abacus",
  },
  {
    id: 6,
    name: "LEGO Jurassic Dinosaur Fossils Triceratops",
    image: "https://m.media-amazon.com/images/I/81zC6Fbp23L._AC_SX679_.jpg",
    price: "$44.99",
    rating: 5,
    age: "2-3 years",
    slug: "lego-jurassic-fossils",
  },
]

export function BestSellers() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#FFFDF8] to-[#EAF7FC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            Best Sellers
          </h2>
          <p className="text-lg text-foreground/70">Our most loved toys by happy families</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-3xl border-2 border-transparent hover:border-[#FFD6B0] group"
            >
              <Link href={`/products/${product.slug}`}>
                <div className="aspect-square bg-gradient-to-br from-[#EAF7FC] to-[#FFFDF8] p-8">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < product.rating ? "fill-[#FFF4AE] text-[#FFF4AE]" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-balance" style={{ fontFamily: "var(--font-baloo)" }}>
                    {product.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-3">Ages {product.age}</p>
                  <div className="flex items-center justify-between">
                    <Button size="sm" className="bg-[#B9E4D3] hover:bg-[#B9E4D3]/90 text-foreground rounded-full">
                      View
                    </Button>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#FFD6B0] text-foreground hover:bg-[#FFD6B0] rounded-full px-8 bg-transparent"
            asChild
          >
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
