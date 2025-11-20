import { Sparkles, Brain, Heart, StarIcon, Shield } from "lucide-react"

type ProductBenefitsProps = {
  benefits: string[]
}

export function ProductBenefits({ benefits }: ProductBenefitsProps) {
  const icons = [Sparkles, Brain, Heart, StarIcon, Shield]

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#FFFDF8] to-[#EAF7FC]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            Benefits
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#B9E4D3] to-[#D9C7F8] mx-auto rounded-full" />
        </div>

        <div className="space-y-6">
          {benefits.map((benefit, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={index}
                className="flex items-start gap-6 p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] border-2 border-transparent hover:border-[#FFD6B0]"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#FFD6B0] to-[#FFF4AE] rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon className="w-7 h-7 text-foreground" strokeWidth={2} />
                </div>
                <p className="text-xl text-foreground/80 leading-relaxed pt-2">{benefit}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
