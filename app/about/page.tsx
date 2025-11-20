import { Footer } from "@/components/footer"
import { Heart, Leaf, Shield, Users } from "lucide-react"

export const metadata = {
  title: "About Us - LittleMindsPlay",
  description:
    "Learn about our mission to create safe, eco-friendly educational toys that inspire curiosity and joy in children.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every toy is designed with care by parents who understand what children need",
    },
    {
      icon: Leaf,
      title: "Eco-Conscious",
      description: "Sustainable materials and environmentally responsible manufacturing",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "All products meet the highest safety standards and certifications",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "We listen to parents and continuously improve based on feedback",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="bg-gradient-to-b from-[#EAF7FC] to-[#FFFDF8] py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[10%] w-20 h-20 bg-[#FFD6B0] rounded-3xl rotate-12 animate-float opacity-40" />
          <div className="absolute top-40 right-[15%] w-16 h-16 bg-[#B9E4D3] rounded-3xl -rotate-6 animate-float-slow opacity-40" />
          <div className="absolute bottom-20 left-[20%] w-24 h-24 bg-[#D9C7F8] rounded-3xl rotate-45 animate-float opacity-40" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance" style={{ fontFamily: "var(--font-baloo)" }}>
            About LittleMindsPlay
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Creating educational toys that inspire wonder, creativity, and lifelong learning
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-baloo)" }}>
              Our Story
            </h2>
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              LittleMindsPlay was born from a simple observation: children learn best when they're having fun. As
              parents ourselves, we noticed how our little ones were drawn to toys that engaged their senses, challenged
              their minds, and sparked their imagination.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              We also noticed something else - many toys on the market were either unsafe, unsustainable, or simply
              uninspiring. We knew we could do better. So in 2023, we set out to create a toy company that would never
              compromise on safety, sustainability, or educational value.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              Today, LittleMindsPlay is trusted by thousands of families around the world. Every toy we create is tested
              by real parents and children, made from sustainable materials, and designed to support healthy development
              at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#FFFDF8] to-[#EAF7FC]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: "var(--font-baloo)" }}>
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-[#FFD6B0]"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFD6B0] to-[#FFF4AE] rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-foreground" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: "var(--font-baloo)" }}>
                    {value.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-baloo)" }}>
            Our Mission
          </h2>
          <p className="text-2xl text-foreground/80 leading-relaxed font-semibold">
            To create a world where every child has access to safe, sustainable, and inspiring toys that support their
            natural curiosity and help them grow into confident, creative learners.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
