"use client"

import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 justify-center md:justify-start text-sm">
            <a href="/terms" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              الشروط والأحكام
            </a>
            <a href="/terms#refund-policy" className="text-secondary-foreground/60 hover:text-primary transition-colors">
              سياسة الاسترداد
            </a>
            <a
              href="mailto:info@financecoach.co"
              className="text-secondary-foreground/60 hover:text-primary transition-colors inline-flex items-center gap-1.5 break-all"
            >
              <Mail className="h-4 w-4 flex-shrink-0" />
              info@financecoach.co
            </a>
          </div>
          <div className="text-xs text-secondary-foreground/60 text-center md:text-right flex-shrink-0 w-full md:w-auto px-2">
            <span className="block md:inline">© {new Date().getFullYear()} Finance Coach Academy.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
