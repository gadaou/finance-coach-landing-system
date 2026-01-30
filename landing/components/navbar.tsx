"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
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
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo2.png" alt="Finance Coach" width={180} height={60} className="h-12 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("why-acca")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Why ACCA
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection("program")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Program
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Success Stories
            </button>
            <Button
              onClick={() => scrollToSection("enroll")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
              Start Your Journey
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border bg-white rounded-b-2xl">
            <button
              onClick={() => scrollToSection("why-acca")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              Why ACCA
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection("program")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              Program
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              Success Stories
            </button>
            <Button onClick={() => scrollToSection("enroll")} className="w-full bg-primary hover:bg-primary/90">
              Start Your Journey
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
