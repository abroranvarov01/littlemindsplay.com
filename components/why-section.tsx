import { Brain, Palette, Heart } from "lucide-react"

export function WhySection() {
  const features = [
    {
      icon: Brain,
      title: "Stimulate Mind",
      description: "Cognitive development through playful exploration",
      color: "bg-[#D9C7F8]",
    },
    {
      icon: Palette,
      title: "Encourage Creativity",
      description: "Imagination and artistic expression",
      color: "bg-[#FFD6B0]",
    },
    {
      icon: Heart,
      title: "Build Connection",
      description: "Bonding moments between parent and child",
      color: "bg-[#B9E4D3]",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ fontFamily: "var(--font-baloo)" }}>
            Why LittleMindsPlay?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Our philosophy: every toy should inspire wonder and support healthy development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="text-center p-8 rounded-3xl hover:scale-105 transition-transform duration-300"
              >
                <div
                  className={`w-20 h-20 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <Icon className="w-10 h-10 text-foreground" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: "var(--font-baloo)" }}>
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Illustration */}
        <div className="max-w-2xl mx-auto">
          <img
            src="/happy-parent-and-toddler-playing-together-on-color.jpg"
            alt="Parent and child playing on a colorful playmat"
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
