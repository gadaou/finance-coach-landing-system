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
    <section id="why-choose-us" className="pt-6 pb-24 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Why Choose <span className="text-primary">Finance Coach?</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Finance Coach is an officially ACCA-accredited learning partner in Egypt
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <ScrollReveal key={index} animation="slide-in-left" delay={index * 100}>
              <div className="relative group cursor-pointer will-change-transform">
                {/* Animated glow effect - optimized */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Shimmer effect - optimized with transform */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-2xl pointer-events-none will-change-transform" />
                
                {/* Main card - optimized */}
                <div className="relative p-6 rounded-2xl bg-card border border-border shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-3 hover:border-primary/50 hover:scale-[1.02] overflow-hidden will-change-transform">
                  {/* Animated background gradient - simplified */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Icon container - optimized */}
                  <div className="relative z-10 mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-[background-color,color,transform] duration-300 ease-out group-hover:scale-110 group-hover:rotate-6 will-change-transform">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  
                  {/* Content - optimized */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-2 text-balance group-hover:text-primary transition-[color,transform] duration-300 ease-out group-hover:translate-x-1 will-change-transform">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-balance leading-relaxed group-hover:text-foreground transition-color duration-300">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Animated corner accent - simplified */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
