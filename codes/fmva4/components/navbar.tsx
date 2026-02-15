"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@fmva4/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--hero-bg)]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo2.png"
              alt="Finance Coach"
              width={180}
              height={60}
              className="h-12 w-auto brightness-0 invert"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Button
              onClick={() => scrollToSection("enroll")}
              size="lg"
              className="bg-white text-[var(--hero-bg)] hover:bg-slate-100 shadow-lg hover:shadow-xl transition-all"
            >
              احجز استشارة مجانية
            </Button>
          </div>

          <button
            className="md:hidden p-2 -m-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-white/20 bg-[var(--hero-bg)] rounded-b-2xl">
            <Button
              onClick={() => scrollToSection("enroll")}
              className="w-full bg-white text-[var(--hero-bg)] hover:bg-slate-100"
            >
              احجز استشارة مجانية
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
