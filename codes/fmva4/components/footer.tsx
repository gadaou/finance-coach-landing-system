"use client"

import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="overflow-hidden border-t border-white/10 w-full max-w-[100vw]"
      style={{ backgroundColor: "var(--hero-bg)" }}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 pt-3 pb-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="min-w-0">
            <h3 className="font-bold text-xs uppercase tracking-wider text-white/80 mb-1.5">Resources</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#enroll" className="text-slate-300 hover:text-white transition-colors py-1 flex items-center min-h-[36px]">
                  Contact Us
                </a>
              </li>
              <li className="flex items-center gap-2 break-words min-h-[36px]">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/90">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                <a
                  href="mailto:info@financecoach.co"
                  className="text-slate-300 hover:text-white transition-colors break-all text-sm"
                >
                  info@financecoach.co
                </a>
              </li>
            </ul>
          </div>
          <div className="border-t border-white/10 sm:border-t-0 sm:border-l sm:border-white/10 pt-2 sm:pt-0 sm:pl-4 text-xs text-slate-400 sm:text-right">
            © {new Date().getFullYear()} Finance Coach Academy.
          </div>
        </div>
      </div>
    </footer>
  )
}
