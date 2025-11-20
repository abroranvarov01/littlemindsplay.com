import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EAF7FC] to-[#FFFDF8] flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="relative">
          <h1 className="text-9xl font-bold text-[#FFD6B0]/20" style={{ fontFamily: "var(--font-baloo)" }}>
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/placeholder.svg?height=200&width=200" alt="Lost toy" className="w-48 h-48 animate-float" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-baloo)" }}>
          Oops! Toy Not Found
        </h2>
        <p className="text-xl text-foreground/70 leading-relaxed">
          Looks like this toy wandered off! Let's get you back to the playroom.
        </p>
        <Button size="lg" className="bg-[#FFD6B0] hover:bg-[#FFD6B0]/90 text-foreground rounded-full px-8" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}
