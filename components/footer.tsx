import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#FFFDF8] to-[#EAF7FC] py-12 px-4 border-t-2 border-[#FFD6B0]/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#FFD6B0]" style={{ fontFamily: "var(--font-baloo)" }}>
              LittleMindsPlay
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Educational toys designed to spark curiosity and joy
            </p>
          </div>

          {/* Quick Links */}
          

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: "var(--font-baloo)" }}>
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-[#B9E4D3] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/70 hover:text-[#B9E4D3] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-foreground/70 hover:text-[#B9E4D3] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-foreground/70 hover:text-[#B9E4D3] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-foreground/10 text-center text-sm text-foreground/60 space-y-2">
          <p>&copy; 2025 LittleMindsPlay. All rights reserved.</p>
          <p>Participant in the Amazon Associates Program.</p>
          <p className="text-xs">As an Amazon Associate we earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  )
}
