"use client"

import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-5 lg:px-6 py-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
            <a href="#enroll" className="hover:text-primary transition-colors">
              Contact Us
            </a>
            <span className="text-secondary-foreground/40">·</span>
            <a
              href="mailto:info@financecoach.co"
              className="hover:text-primary transition-colors inline-flex items-center gap-1.5 break-all"
            >
              <Mail className="h-3.5 w-3.5 flex-shrink-0" />
              info@financecoach.co
            </a>
            <span className="text-secondary-foreground/40">·</span>
            <a href="/terms" className="hover:text-primary transition-colors">
              الشروط والأحكام
            </a>
            <span className="text-secondary-foreground/40">·</span>
            <a href="/terms#refund-policy" className="hover:text-primary transition-colors">
              سياسة الاسترداد
            </a>
          </div>
          <div className="text-[11px] text-secondary-foreground/60 sm:text-right">
            © {new Date().getFullYear()} Finance Coach Academy
          </div>
        </div>
      </div>
    </footer>
  )
}
