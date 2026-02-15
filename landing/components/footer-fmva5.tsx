"use client"

import { Mail, Facebook, Instagram, Linkedin } from "lucide-react"

export function FooterFmva5() {
  return (
    <footer className="bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-5 lg:px-6 py-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
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
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/share/1H2Kg4o6ZM/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground/60 hover:text-primary transition-colors p-1.5 -m-1.5 min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/the.finance.coach?igsh=MWZ6bHBhYmF2bWNpbA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground/60 hover:text-primary transition-colors p-1.5 -m-1.5 min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/school/financecoach/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground/60 hover:text-primary transition-colors p-1.5 -m-1.5 min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-secondary-foreground/20 flex justify-center sm:justify-end">
          <span className="text-[11px] text-secondary-foreground/60">
            © {new Date().getFullYear()} Finance Coach Academy
          </span>
        </div>
      </div>
    </footer>
  )
}
