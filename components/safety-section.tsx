import { Shield, Leaf, Sparkles } from "lucide-react"

export function SafetySection() {
  const certifications = [
    {
      icon: Shield,
      title: "BPA-Free",
      description: "Safe for little hands and mouths",
    },
    {
      icon: Leaf,
      title: "Organic Wood",
      description: "Sustainably sourced materials",
    },
    {
      icon: Sparkles,
      title: "Non-Toxic Paint",
      description: "Water-based, eco-friendly colors",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            Safe & Eco-Friendly
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Every toy is carefully crafted with your child's safety and our planet's future in mind
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 border-transparent hover:border-[#B9E4D3]"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#B9E4D3] to-[#D9C7F8] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: "var(--font-baloo)" }}>
                  {cert.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{cert.description}</p>
              </div>
            )
          })}
        </div>

        {/* Safety badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <div className="bg-gradient-to-r from-[#FFD6B0] to-[#FFF4AE] px-6 py-3 rounded-full font-semibold shadow-md">
            ASTM Certified
          </div>
          <div className="bg-gradient-to-r from-[#B9E4D3] to-[#D9C7F8] px-6 py-3 rounded-full font-semibold shadow-md">
            CE Approved
          </div>
          <div className="bg-gradient-to-r from-[#D9C7F8] to-[#FFD6B0] px-6 py-3 rounded-full font-semibold shadow-md">
            Made with Love
          </div>
        </div>
      </div>
    </section>
  )
}
