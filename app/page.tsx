import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { BestSellers } from "@/components/best-sellers"
import { ShopByAge } from "@/components/shop-by-age"
import { VideoSection } from "@/components/video-section"
import { SafetySection } from "@/components/safety-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhySection />
      <BestSellers />
      <ShopByAge />
      <VideoSection />
      <SafetySection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
