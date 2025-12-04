'use client'

import { ScrollReveal } from "./scroll-reveal"
import { Quote, Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sara Ahmed",
      role: "ACCA Candidate",
      image: "/professional-woman-finance.png",
      content:
        "Finance Coach made the ACCA journey so much easier. Their instructors helped me understand the logic behind every topic, and the mock exams boosted my confidence tremendously.",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      role: "Finance Professional",
      image: "/professional-accountant.png",
      content:
        "I passed on the first attempt thanks to the structured support and personalized guidance at Finance Coach. The quality of instruction is truly world-class.",
      rating: 5,
    },
    {
      name: "Nour Mohamed",
      role: "ACCA Graduate",
      image: "/professional-accountant-woman.png",
      content:
        "The hands-on approach and real-world examples made complex topics easy to understand. Finance Coach doesn't just prepare you for exams—they prepare you for your career.",
      rating: 5,
    },
    {
      name: "Mohamed Ali",
      role: "Senior Accountant",
      image: "/professional-accountant.png",
      content:
        "The comprehensive curriculum and expert guidance helped me pass all my ACCA exams. The support system at Finance Coach is unmatched in Egypt.",
      rating: 5,
    },
    {
      name: "Fatima Ibrahim",
      role: "Finance Manager",
      image: "/professional-woman-finance.png",
      content:
        "After completing my ACCA certification with Finance Coach, I was promoted to Finance Manager. The practical knowledge I gained was invaluable.",
      rating: 5,
    },
    {
      name: "Omar Khaled",
      role: "ACCA Graduate",
      image: "/professional-accountant.png",
      content:
        "The study materials and mock exams were excellent. Finance Coach's approach to teaching complex accounting concepts is second to none.",
      rating: 5,
    },
  ]

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="pt-6 pb-24 bg-gradient-to-br from-background to-accent/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Success <span className="text-primary">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Hear from our students who have achieved their ACCA certification and transformed their careers with
              Finance Coach
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden px-4">
            <div className="flex animate-scroll-smooth gap-4 hover:[animation-play-state:paused]">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative group flex-shrink-0 w-[380px] sm:w-[420px] lg:w-[460px]"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative p-5 rounded-2xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <Quote className="h-8 w-8 text-primary/20 mb-3 flex-shrink-0" />

                    <div className="flex gap-1 mb-3 flex-shrink-0">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic flex-grow">"{testimonial.content}"</p>

                    <div className="flex items-center gap-3 mt-auto flex-shrink-0">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-sm">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ScrollReveal animation="fade-in-up">
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Trusted by thousands of students</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <Star className="h-6 w-6 fill-primary text-primary" />
                <span className="text-2xl font-bold">4.9/5</span>
                <span className="text-muted-foreground">on Google Reviews</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
