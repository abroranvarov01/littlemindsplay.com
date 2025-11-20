import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - LittleMindsPlay",
  description: "How we collect, use, and protect your information",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-gradient-to-b from-[#EAF7FC] to-[#FFFDF8] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-baloo)" }}>
            Privacy Policy
          </h1>
          <p className="text-lg text-foreground/70">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            1. Information We Collect
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            We collect information that you provide directly to us, including when you contact us through our website,
            subscribe to our newsletter, or engage with our content.
          </p>

          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            2. How We Use Your Information
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/80">
            <li>Respond to your inquiries and provide customer service</li>
            <li>Send you updates about products and promotions (with your consent)</li>
            <li>Improve our website and user experience</li>
            <li>Analyze site usage and trends</li>
          </ul>

          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            3. Cookies
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            We use cookies to enhance your experience on our website. Cookies are small files that a site or its service
            provider transfers to your computer's hard drive through your web browser that enables the site's systems to
            recognize your browser and capture certain information.
          </p>

          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            4. Third-Party Services
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            We use Amazon Services LLC Associates Program. When you click on product links and make purchases through
            Amazon, they may collect information according to their own privacy policies. We encourage you to review
            Amazon's privacy policy.
          </p>

          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            5. Data Security
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            We implement appropriate technical and organizational measures to protect your personal information against
            unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>

          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            6. Children's Privacy
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Our website is not directed to children under the age of 13. We do not knowingly collect personal
            information from children under 13. If you are a parent or guardian and believe your child has provided us
            with personal information, please contact us.
          </p>

          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            7. Your Rights
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/80">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            8. Changes to This Policy
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new
            privacy policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
            9. Contact Us
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            If you have any questions about this Privacy Policy, please contact us at hello@littlemindsplay.com.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
