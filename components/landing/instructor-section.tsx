"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Play, Award, CheckCircle2, TrendingUp } from "lucide-react"
import { useState } from "react"

export function InstructorSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-br from-background to-accent/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Section */}
            <ScrollReveal animation="slide-in-right">
              <div className="relative group">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/20 shadow-2xl">
                  {/* Video placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted/30">
                    {!isPlaying ? (
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="group/play relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-primary/50"
                      >
                        <Play className="h-8 w-8 md:h-10 md:w-10 ml-1 fill-current" />
                        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                      </button>
                    ) : (
                      <div className="text-center p-8">
                        <p className="text-muted-foreground mb-4">سيتم إضافة الفيديو هنا</p>
                        <button
                          onClick={() => setIsPlaying(false)}
                          className="text-sm text-primary hover:underline"
                        >
                          إغلاق
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </ScrollReveal>

            {/* Content Section */}
            <ScrollReveal animation="slide-in-left">
              <div className="space-y-6" dir="rtl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary w-fit">
                  <Award className="h-4 w-4" />
                  لماذا تتعلم معنا؟
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                  لأنك ستتعلم من{" "}
                  <span className="text-primary">الأفضل</span>
                </h2>
                <div className="text-lg md:text-xl">
                  <span className="text-primary font-semibold">Double Certified</span> (CFA + CMA/FMVA)
                </div>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  مدربونا ليسوا فقط حاصلين على FMVA، بل هم Double Certified ويعملون كمدراء ماليين في كبرى الشركات.
                </p>

                <p className="text-base md:text-lg text-foreground font-medium">
                  أنت لا تدرس منهجاً، أنت تدرس{" "}
                  <span className="text-primary">خبرة سنين</span>
                </p>

                {/* Credentials */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <Award className="h-5 w-5" />
                      </div>
                      <div className="font-semibold">CFA Certified</div>
                    </div>
                    <p className="text-sm text-muted-foreground">معتمد من معهد CFA</p>
                  </div>

                  <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div className="font-semibold">FMVA Certified</div>
                    </div>
                    <p className="text-sm text-muted-foreground">معتمد من CFI</p>
                  </div>

                  <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group col-span-2">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div className="font-semibold">مدراء ماليين في كبرى الشركات</div>
                    </div>
                    <p className="text-sm text-muted-foreground">خبرة عملية حقيقية في سوق العمل</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

