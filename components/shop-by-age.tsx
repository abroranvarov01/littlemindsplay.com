"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const ageGroups = [
  {
    range: "0-6 mo",
    title: "0-6 Months",
    color: "bg-[#FFD6B0]",
    description: "Soft textures, gentle sounds, high contrast patterns",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    range: "6-12 mo",
    title: "6-12 Months",
    color: "bg-[#B9E4D3]",
    description: "Grasping toys, stacking blocks, musical instruments",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    range: "1-2 yrs",
    title: "1-2 Years",
    color: "bg-[#D9C7F8]",
    description: "Shape sorters, push toys, simple puzzles",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    range: "2-3 yrs",
    title: "2-3 Years",
    color: "bg-[#FFF4AE]",
    description: "Building sets, pretend play, art supplies",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function ShopByAge() {
  const [selectedAge, setSelectedAge] = useState<(typeof ageGroups)[0] | null>(null)

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            Shop by Age
          </h2>
          <p className="text-lg text-foreground/70">Find the perfect toys for your child's development stage</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ageGroups.map((group, index) => (
            <button
              key={index}
              onClick={() => setSelectedAge(group)}
              className={`${group.color} p-8 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group cursor-pointer`}
            >
              <div className="text-center">
                <div
                  className="text-5xl font-bold mb-3 text-foreground group-hover:scale-110 transition-transform"
                  style={{ fontFamily: "var(--font-baloo)" }}
                >
                  {group.range}
                </div>
                <div className="text-sm font-semibold text-foreground/80">Click to explore</div>
              </div>
            </button>
          ))}
        </div>

        {/* Age Group Modal */}
        <Dialog open={!!selectedAge} onOpenChange={() => setSelectedAge(null)}>
          <DialogContent className="max-w-2xl rounded-3xl">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
                {selectedAge?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <img
                src={selectedAge?.image || "/placeholder.svg"}
                alt={selectedAge?.title}
                className="w-full rounded-2xl"
              />
              <p className="text-lg leading-relaxed text-foreground/80">{selectedAge?.description}</p>
              <Button className="w-full bg-[#FFD6B0] hover:bg-[#FFD6B0]/90 text-foreground rounded-full" size="lg">
                Shop This Age Group
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
