import { ScrollReveal } from "./scroll-reveal"
import { GraduationCap, Users, Target, Clipboard, Clock, Award } from "lucide-react"

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Award,
      title: "ACCA-Accredited Training",
      description: "Officially approved learning resources and curriculum designed for exam success",
    },
    {
      icon: GraduationCap,
      title: "Expert Instructors",
      description: "Experienced professionals specialized in ACCA subjects with proven teaching methods",
    },
    {
      icon: Target,
      title: "Weekly Progress Tracking",
      description: "Personalized academic support and continuous performance monitoring",
    },
    {
      icon: Clipboard,
      title: "Real Exam Practice",
      description: "Mock exams and question-solving sessions that mirror actual exam conditions",
    },
    {
      icon: Clock,
      title: "Flexible Schedules",
      description: "Online and on-campus options to fit your lifestyle and learning preferences",
    },
    {
      icon: Users,
      title: "Hands-On Learning",
      description: "Bridge exam theory with real-world accounting practices and case studies",
    },
  ]

  return (
    <section id="why-choose-us" className="py-24 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Why Choose <span className="text-primary">Finance Coach?</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Finance Coach is an officially ACCA-accredited learning partner in Egypt, delivering structured,
              exam-focused preparation designed to help you pass from the first attempt.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <ScrollReveal key={index} animation="slide-in-left" delay={index * 100}>
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative p-8 rounded-2xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-balance group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-balance leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in-up">
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 p-8 rounded-2xl bg-primary/5 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  98%
                </div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="h-16 w-px bg-border" />
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  40+
                </div>
                <div className="text-sm text-muted-foreground">Expert Instructors</div>
              </div>
              <div className="h-16 w-px bg-border hidden sm:block" />
              <div className="text-center hidden sm:block group cursor-pointer">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  10+
                </div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
