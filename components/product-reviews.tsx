import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

type ProductReviewsProps = {
  productName: string
}

const mockReviews = [
  {
    name: "Sarah M.",
    rating: 5,
    date: "January 15, 2025",
    review:
      "My 8-month-old absolutely loves these! The colors are vibrant and the quality is outstanding. I love that they're made from sustainable wood.",
    verified: true,
  },
  {
    name: "James R.",
    rating: 5,
    date: "January 10, 2025",
    review:
      "Perfect size for tiny hands. Our daughter has been playing with these every day for months. They're durable and safe for teething.",
    verified: true,
  },
  {
    name: "Emily K.",
    rating: 5,
    date: "January 5, 2025",
    review: "Best toy purchase we've made! Educational and fun. Love supporting eco-friendly brands too.",
    verified: true,
  },
  {
    name: "Michael T.",
    rating: 4,
    date: "December 28, 2024",
    review:
      "Great quality and my son enjoys them. Would have loved a few more pieces in the set, but overall very satisfied.",
    verified: true,
  },
]

export function ProductReviews({ productName }: ProductReviewsProps) {
  return (
    null
  )
}
