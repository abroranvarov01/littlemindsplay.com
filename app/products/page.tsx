import { ProductsGrid } from "@/components/products-grid"
import { ProductFilters } from "@/components/product-filters"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Educational Toys - LittleMindsPlay",
  description: "Browse our collection of safe, eco-friendly educational toys for babies and toddlers",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      {/* Header with playful decorations */}
      <section className="bg-gradient-to-b from-[#EAF7FC] to-[#FFFDF8] py-16 px-4 relative overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[10%] w-16 h-16 bg-[#FFD6B0] rounded-2xl rotate-12 animate-float opacity-60" />
          <div className="absolute top-20 right-[15%] w-12 h-12 bg-[#B9E4D3] rounded-2xl -rotate-6 animate-float-slow opacity-60" />
          <div
            className="absolute bottom-10 left-[20%] w-14 h-14 bg-[#D9C7F8] rounded-2xl rotate-45 animate-float opacity-60"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance" style={{ fontFamily: "var(--font-baloo)" }}>
            Our Toy Collection
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Discover educational toys that grow with your little one
          </p>
        </div>
      </section>

      {/* Products section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <ProductFilters />
          <ProductsGrid />
        </div>
      </section>

      <Footer />
    </main>
  )
}
