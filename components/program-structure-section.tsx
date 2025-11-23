import { ScrollReveal } from "./scroll-reveal"
import { BookOpen, Brain, Target } from "lucide-react"

export function ProgramStructureSection() {
  const phases = [
    {
      icon: BookOpen,
      title: "Applied Knowledge",
      description: "Foundation in business, law, and financial accounting principles",
      level: "Phase 1",
      color: "from-primary/20 to-primary/10",
    },
    {
      icon: Brain,
      title: "Applied Skills",
      description: "Advanced technical knowledge in financial reporting, audit, taxation, and management",
      level: "Phase 2",
      color: "from-primary/30 to-primary/20",
    },
    {
      icon: Target,
      title: "Strategic Professional",
      description: "Strategic leadership and professional expertise for senior roles",
      level: "Phase 3",
      color: "from-primary/40 to-primary/30",
    },
  ]

  return (
    <section id="program" className="pt-0 pb-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              ACCA <span className="text-primary">Program Structure</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Our ACCA learning journey at Finance Coach is designed to guide you through all 3 phases with clarity,
              exam-focused instruction, and continuous performance feedback.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto space-y-6">
          {phases.map((phase, index) => (
            <ScrollReveal key={index} animation="slide-in-right" delay={index * 150}>
              <div
                className={`relative group overflow-hidden rounded-2xl bg-gradient-to-r ${phase.color} p-1 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20`}
              >
                <div className="bg-card rounded-2xl p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
                    <div className="flex-shrink-0">
                      <div className="p-5 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <phase.icon className="h-10 w-10" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-primary mb-2 group-hover:translate-x-2 transition-transform">
                        {phase.level}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {phase.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                    </div>
                    <div className="hidden md:block text-8xl font-bold text-primary/10 group-hover:text-primary/20 transition-all duration-500 group-hover:scale-110">
                      0{index + 1}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in-up">
          <div className="mt-16 p-8 md:p-12 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group cursor-pointer relative overflow-hidden">
            {/* Base animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/8 to-primary/5 opacity-100" />
            
            {/* Animated moving gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[3000ms] ease-in-out" />
            
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
            
            {/* Animated pulsing glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 animate-pulse-glow transition-opacity duration-500" />
            
            {/* Animated dots pattern background */}
            <div className="absolute inset-0 opacity-[0.08]">
              <div 
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)',
                  backgroundSize: '40px 40px',
                  animation: 'float 4s ease-in-out infinite'
                }}
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                Complete Journey Support
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                From your first class to passing your final exam, Finance Coach provides comprehensive support, expert
                guidance, and resources designed to maximize your success at every stage of your ACCA journey.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
