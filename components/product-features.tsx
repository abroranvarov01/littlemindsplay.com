import { Check } from "lucide-react"

type ProductFeaturesProps = {
  features: string[]
}

export function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            Features
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFD6B0] to-[#FFF4AE] mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-white to-[#EAF7FC]/30 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#B9E4D3] to-[#D9C7F8] rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed pt-1">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
