"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  const scrollToEnroll = () => {
    const element = document.getElementById("enroll")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-accent/30 to-background pt-20">
      <div className="absolute inset-0 bg-[url('/abstract-professional-finance-pattern.jpg')] opacity-5 bg-cover bg-center" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary animate-fade-in">
            <CheckCircle2 className="h-4 w-4" />
            ACCA Accredited Learning Partner
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight animate-fade-in-up">
            Become an <span className="text-primary">ACCA-Qualified</span>
            <br />
            Professional with Finance Coach
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Egypt's trusted ACCA Training Partner – empowering finance professionals since 2017
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button
              size="lg"
              onClick={scrollToEnroll}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 group"
            >
              Start Your ACCA Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToEnroll}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 transition-all hover:scale-105 bg-transparent"
            >
              Book Free Consultation
            </Button>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            {[
              { number: "176+", label: "Countries Recognition" },
              { number: "200K+", label: "ACCA Members" },
              { number: "10+", label: "Years Experience" },
              { number: "1,500+", label: "Students Annually" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
