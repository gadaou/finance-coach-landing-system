import { ScrollReveal } from "./scroll-reveal"
import { Globe, TrendingUp, Users, Award, Building2, BookOpen } from "lucide-react"

export function WhyAccaSection() {
  const benefits = [
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Recognized in 176+ countries with unmatched international credibility",
    },
    {
      icon: TrendingUp,
      title: "Higher Employability",
      description: "Competitive salaries and enhanced career opportunities worldwide",
    },
    {
      icon: BookOpen,
      title: "Flexible Structure",
      description: "Study at your own pace with a flexible exam structure",
    },
    {
      icon: Building2,
      title: "Diverse Industries",
      description: "Applicable across accounting, finance, consulting, banking, and more",
    },
    {
      icon: Users,
      title: "500K+ Students",
      description: "Join a global community of ambitious finance professionals",
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Opens doors to corporate leadership and strategic roles",
    },
  ]

  return (
    <section id="why-acca" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Why Choose <span className="text-primary">ACCA?</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              The ACCA (Association of Chartered Certified Accountants) is one of the world's leading professional
              accountancy bodies, opening global career opportunities across accounting, auditing, finance, consulting,
              banking, and corporate leadership.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} animation="scale-in" delay={index * 100}>
              <div className="group p-8 rounded-2xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50">
                <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-balance">{benefit.title}</h3>
                <p className="text-muted-foreground text-balance leading-relaxed">{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
