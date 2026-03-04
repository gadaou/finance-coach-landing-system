"use client"

import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="overflow-hidden border-t border-white/10 w-full max-w-[100vw]"
      style={{ backgroundColor: "var(--hero-bg)" }}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <a href="#enroll" className="text-slate-300 hover:text-white transition-colors">
              Contact Us
            </a>
            <span className="text-white/40">·</span>
            <a href="/terms" className="text-slate-300 hover:text-white transition-colors">
              الشروط والأحكام
            </a>
            <span className="text-white/40">·</span>
            <a href="/terms#refund-policy" className="text-slate-300 hover:text-white transition-colors">
              سياسة الاسترداد
            </a>
            <span className="text-white/40">·</span>
            <a
              href="mailto:info@financecoach.co"
              className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5 break-all"
            >
              <Mail className="h-3.5 w-3.5 flex-shrink-0" />
              info@financecoach.co
            </a>
          </div>
          <div className="text-[11px] text-slate-400 sm:text-right">
            © {new Date().getFullYear()} Finance Coach Academy
          </div>
        </div>
      </div>
    </footer>
  )
}
