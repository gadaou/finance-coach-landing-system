"use client"

import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4">
        {/* Top Section - Three Columns */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8 overflow-visible">
          {/* Left Column - Services */}
          <div className="overflow-visible">
            <h3 className="font-bold text-sm md:text-lg mb-2 md:mb-3 uppercase tracking-wider">Services</h3>
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
            <h3 className="font-bold text-sm md:text-lg mb-2 md:mb-3 uppercase tracking-wider">Resources</h3>
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
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 pt-4 md:pt-6 relative min-h-[80px] md:min-h-[100px]">
          {/* Large faded brand name in center */}
          <div className="absolute inset-0 flex items-start md:items-center justify-center pointer-events-none overflow-hidden pt-4 md:pt-0">
            <h2 className="text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-secondary-foreground/5 select-none whitespace-nowrap">
              FINANCE COACH
            </h2>
          </div>

          {/* Bottom content */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6 pt-12 md:pt-24 pb-0">
            <div className="flex gap-3 md:gap-4 flex-shrink-0 flex-wrap justify-center md:justify-start">
              <a href="/terms" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                الشروط والأحكام
              </a>
              <a href="/terms#refund-policy" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                سياسة الاسترداد
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
