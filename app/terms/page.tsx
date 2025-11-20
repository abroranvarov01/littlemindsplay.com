import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service - LittleMindsPlay",
  description: "Terms and conditions for using LittleMindsPlay",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-[#EAF7FC] to-[#FFFDF8] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-baloo)" }}>
            Terms of Service
          </h1>
          <p className="text-lg text-foreground/70">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            1. Acceptance of Terms
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            By accessing and using LittleMindsPlay.com, you accept and agree to be bound by the terms and provision of
            this agreement.
          </p>

          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            2. Use License
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Permission is granted to temporarily access the materials (information or software) on LittleMindsPlay.com
            for personal, non-commercial transitory viewing only.
          </p>

          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            3. Amazon Associates Program
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            LittleMindsPlay is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
            program designed to provide a means for sites to earn advertising fees by advertising and linking to
            Amazon.com. As an Amazon Associate, we earn from qualifying purchases.
          </p>

          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            4. Product Information
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            We strive to provide accurate product descriptions and pricing. However, we do not warrant that product
            descriptions, pricing, or other content on this site is accurate, complete, reliable, current, or
            error-free.
          </p>

          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            5. External Links
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Our website may contain links to external sites, including Amazon.com. We are not responsible for the
            content or practices of these external sites.
          </p>

          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            6. Disclaimer
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            The materials on LittleMindsPlay.com are provided on an 'as is' basis. LittleMindsPlay makes no warranties,
            expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
            implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
            of intellectual property or other violation of rights.
          </p>

          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            7. Limitations
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            In no event shall LittleMindsPlay or its suppliers be liable for any damages (including, without limitation,
            damages for loss of data or profit, or due to business interruption) arising out of the use or inability to
            use the materials on LittleMindsPlay.com.
          </p>

          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            8. Revisions
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            LittleMindsPlay may revise these terms of service at any time without notice. By using this website, you are
            agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            9. Contact Information
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            If you have any questions about these Terms, please contact us at hello@littlemindsplay.com.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
