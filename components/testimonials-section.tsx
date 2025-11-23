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
  ]

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Success <span className="text-primary">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Hear from our students who have achieved their ACCA certification and transformed their careers with
              Finance Coach
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} animation="scale-in" delay={index * 100}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative p-8 rounded-2xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />

                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in-up">
          <div className="mt-16 text-center">
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
