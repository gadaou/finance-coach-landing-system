import Image from "next/image"
import { Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="Finance Coach"
              width={200}
              height={67}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Egypt's leading finance and accounting training provider since 2017. Empowering professionals with
              globally recognized certifications.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
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

          <div>
            <h3 className="font-bold text-lg mb-4">Accreditations</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>ACCA - UK</li>
              <li>CFA Institute - US</li>
              <li>CISI Institute - UK</li>
              <li>AFP Institute - US</li>
              <li>IMA Institute - US</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@financecoach.co" className="hover:text-primary transition-colors">
                  info@financecoach.co
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/80">Nasr City, Dokki, Alexandria, Egypt</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/80">UAE, Saudi Arabia, Kuwait</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Finance Coach Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.financecoach.academy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-primary transition-colors"
            >
              www.financecoach.academy
            </a>
            <div className="flex gap-3">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
