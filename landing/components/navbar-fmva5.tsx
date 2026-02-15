"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@landing/components/ui/button"
import { Menu, X } from "lucide-react"

export function NavbarFmva5() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-foreground/95 backdrop-blur-lg shadow-sm" : "bg-foreground/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo2.png"
              alt="Finance Coach"
              width={160}
              height={52}
              className="h-9 w-auto md:h-10 brightness-0 invert"
            />
          </Link>

          <div className="hidden md:flex items-center">
            <Button
              onClick={() => scrollToSection("enroll")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all min-h-[44px]"
            >
              احجز مكانك في الراوند القادمة
            </Button>
          </div>

          <button
            className="md:hidden p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <Button
              onClick={() => scrollToSection("enroll")}
              className="w-full bg-primary hover:bg-primary/90 min-h-[44px]"
            >
              احجز مكانك في الراوند القادمة
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
