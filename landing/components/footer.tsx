"use client"

import Image from "next/image"
import { Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribed:", email)
    setEmail("")
  }

  return (
    <footer className="bg-secondary text-secondary-foreground overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4">
        {/* Top Section - Three Columns */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8 overflow-visible">
          {/* Left Column - Services */}
          <div className="overflow-visible">
            <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 uppercase tracking-wider">Services</h3>
            <ul className="space-y-1.5 md:space-y-2 text-sm">
              <li>
                <a href="#why-acca" className="hover:text-primary transition-colors">
                  Why ACCA
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-primary transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-primary transition-colors">
                  Program Structure
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Middle Column - Resources */}
          <div className="overflow-visible">
            <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-1.5 md:space-y-2 text-sm">
              <li>
                <a href="#enroll" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-primary transition-colors">
                  Program Guide
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-primary transition-colors">
                  Accreditations
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@financecoach.co" className="hover:text-primary transition-colors">
                  info@financecoach.co
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Join Our Community */}
          <div className="overflow-visible">
            <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 uppercase tracking-wider">Join Our Community</h3>
            <p className="text-xs md:text-sm text-secondary-foreground/80 mb-2 md:mb-3">
              Subscribe for exclusive ACCA insights and special offers
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background/10 border-secondary-foreground/20 text-foreground placeholder:text-secondary-foreground/60 h-11"
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 pt-4 md:pt-6 relative min-h-[80px] md:min-h-[100px]">
          {/* Large faded brand name in center */}
          <div className="absolute inset-0 flex items-start md:items-center justify-center pointer-events-none overflow-hidden pt-4 md:pt-0">
            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-secondary-foreground/5 select-none whitespace-nowrap">
              FINANCE COACH
            </h2>
          </div>

          {/* Bottom content */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6 pt-12 md:pt-24 pb-0">
            {/* Social Media Icons */}
            <div className="flex gap-3 md:gap-4 flex-shrink-0">
              <a
                href="https://www.facebook.com/share/1H2Kg4o6ZM/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/the.finance.coach?igsh=MWZ6bHBhYmF2bWNpbA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/school/financecoach/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-xs sm:text-xs md:text-sm text-secondary-foreground/60 text-center md:text-right flex-shrink-0 max-w-full px-2 flex flex-col md:inline">
              <span className="block md:inline">© {new Date().getFullYear()} Finance Coach Academy.</span>
              <a
                href="https://gadaou.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-secondary-foreground hover:text-primary transition-colors duration-300 block md:inline md:ml-1"
              >
                Developed By Gadaou.AI
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
