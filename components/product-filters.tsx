"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ProductFilters() {
  const [activeAge, setActiveAge] = useState<string | null>(null)
  const [activeSkill, setActiveSkill] = useState<string | null>(null)
  const [activeMaterial, setActiveMaterial] = useState<string | null>(null)

  const ageFilters = ["0-6 months", "6-12 months", "1-2 years", "2-3 years"]
  const skillFilters = ["Motor Skills", "Cognitive", "Creative", "Social"]
  const materialFilters = ["Wood", "Fabric", "Silicone", "Mixed"]

  return (
    null
  )
}
