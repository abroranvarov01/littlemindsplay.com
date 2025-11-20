import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Mail, MessageCircle, MapPin } from "lucide-react"

export const metadata = {
  title: "Contact Us - LittleMindsPlay",
  description: "Get in touch with our team. We love hearing from parents!",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="bg-gradient-to-b from-[#EAF7FC] to-[#FFFDF8] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance" style={{ fontFamily: "var(--font-baloo)" }}>
            Let's Connect
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed">Have a question? We'd love to hear from you!</p>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-[#FFD6B0]/20 to-[#FFF4AE]/20 rounded-3xl">
              <div className="w-16 h-16 bg-[#FFD6B0] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: "var(--font-baloo)" }}>
                Email Us
              </h3>
              <p className="text-foreground/70">hello@littlemindsplay.com</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-[#B9E4D3]/20 to-[#D9C7F8]/20 rounded-3xl">
              <div className="w-16 h-16 bg-[#B9E4D3] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: "var(--font-baloo)" }}>
                Live Chat
              </h3>
              <p className="text-foreground/70">Available Mon-Fri, 9am-5pm EST</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-[#D9C7F8]/20 to-[#FFD6B0]/20 rounded-3xl">
              <div className="w-16 h-16 bg-[#D9C7F8] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: "var(--font-baloo)" }}>
                Location
              </h3>
              <p className="text-foreground/70">Portland, Oregon, USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <ContactSection />

      <Footer />
    </main>
  )
}
