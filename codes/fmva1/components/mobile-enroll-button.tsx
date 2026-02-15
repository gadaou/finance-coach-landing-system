"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

export function MobileEnrollButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Find the hero section (first section element)
      const sections = document.querySelectorAll("section")
      const heroSection = sections[0]
      
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const scrollPosition = window.scrollY
        
        // Show button when scrolled past 80% of hero section
        setIsVisible(scrollPosition > heroBottom * 0.8)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check on mount

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToEnroll = () => {
    const element = document.getElementById("enroll")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToEnroll}
      className="fixed bottom-6 right-6 z-40 md:hidden flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold text-base animate-fade-in"
      aria-label="سجل الآن"
    >
      <span>سجل الآن</span>
      <ArrowRight className="h-5 w-5" />
    </button>
  )
}

