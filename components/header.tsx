"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b-4 border-[#FFD4A3] shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFD4A3] to-[#FFA8B5] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 rotate-6 group-hover:rotate-12">
                <span className="text-2xl">🧸</span>
              </div>
            </div>
            <div>
              <span
                className="text-2xl font-bold bg-gradient-to-r from-[#FFA8B5] to-[#B9E4D3] bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-baloo)" }}
              >
                LittleMindsPlay
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-[#FFA8B5] font-medium transition-colors duration-200 relative group"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFA8B5] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-[#FFD4A3]/20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#FFD4A3]">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-[#FFA8B5] font-medium py-2 px-4 rounded-2xl hover:bg-[#FFD4A3]/10 transition-colors"
                  style={{ fontFamily: "var(--font-poppins)" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
