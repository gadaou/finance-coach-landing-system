"use client"

import Image from "next/image"
import { Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Create FormData from the form
    const formDataToSubmit = new FormData(e.currentTarget)
    
    try {
      // Submit to FormSubmit
      const response = await fetch("https://formsubmit.co/info@financecoach.co", {
        method: "POST",
        body: formDataToSubmit,
      })
      
      if (response.ok) {
        setEmail("")
        // You can add a success message here if needed
      }
    } catch (error) {
      console.error("Form submission error:", error)
      // Clear email even on error for better UX
      setEmail("")
    }
  }

  return (
    <footer className="bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        {/* Top Section - Two Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          {/* Left Column - Resources */}
          <div>
            <h3 className="font-bold text-sm md:text-base mb-2 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-1 md:space-y-1.5 text-sm">
              <li>
                <a href="#enroll" className="hover:text-primary transition-colors block py-1">
                  Contact Us
                </a>
              </li>
              <li className="flex items-start gap-2 break-words">
                <Mail className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:info@financecoach.co" 
                  className="hover:text-primary transition-colors break-all"
                >
                  info@financecoach.co
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Join Our Community */}
          <div>
            <h3 className="font-bold text-sm md:text-base mb-2 uppercase tracking-wider">Join Our Community</h3>
            <p className="text-xs text-secondary-foreground/80 mb-2">
              Subscribe for exclusive insights and special offers
            </p>
            <form 
              action="https://formsubmit.co/info@financecoach.co" 
              method="POST"
              onSubmit={handleSubscribe} 
              className="space-y-2"
            >
              <input type="hidden" name="_subject" value="Newsletter Subscription" />
              <input type="hidden" name="_captcha" value="false" />
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background/10 border-secondary-foreground/20 text-foreground placeholder:text-secondary-foreground/60 h-10 text-sm w-full"
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-10 text-sm min-h-[44px]"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 pt-3 md:pt-4 relative overflow-hidden">
          {/* Large faded brand name in center */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground/5 select-none whitespace-nowrap hidden sm:block">
              FINANCE COACH
            </h2>
          </div>

          {/* Bottom content */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 pt-6 md:pt-8 pb-2">
            {/* Social Media Icons */}
            <div className="flex gap-4 flex-shrink-0">
              <a
                href="https://www.facebook.com/share/1H2Kg4o6ZM/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-primary transition-colors p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/the.finance.coach?igsh=MWZ6bHBhYmF2bWNpbA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-primary transition-colors p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/school/financecoach/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-primary transition-colors p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-xs text-secondary-foreground/60 text-center md:text-right flex-shrink-0 w-full md:w-auto px-2">
              <div className="flex flex-col md:inline-block">
                <span className="block md:inline">© {new Date().getFullYear()} Finance Coach Academy.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
