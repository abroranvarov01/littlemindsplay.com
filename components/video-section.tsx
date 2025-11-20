"use client"

export function VideoSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#EAF7FC] to-[#FFFDF8] relative overflow-hidden">
      {/* Floating musical notes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[15%] text-[#FFD6B0] animate-float opacity-30">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
        <div
          className="absolute bottom-32 right-[20%] text-[#B9E4D3] animate-float-slow opacity-30"
          style={{ animationDelay: "1s" }}
        >
          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            Learning through Play
          </h2>
          <p className="text-lg text-foreground/70">See how our toys spark joy and development</p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          <div className="aspect-video">
            <img
              src="/happy-children-playing-with-educational-toys.jpg"
              alt="Children learning and playing with educational toys"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
