"use client"

import { ScrollReveal } from "@fmva3/components/scroll-reveal"
import { Award, CheckCircle2, XCircle, BadgeDollarSign } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@fmva3/components/ui/table"

export function QualityAssuranceSection() {
  const comparison = [
    { criterion: "معتمدون دولياً (CFA + FMVA)", us: true, others: false },
    { criterion: "خبرة ميدانية كمدراء ماليين", us: true, others: false },
    { criterion: "تحضير كامل للامتحان + بنك أسئلة", us: true, others: "أحياناً" },
    { criterion: "تخفيض رسوم الامتحان", us: true, others: false },
  ]

  return (
    <section className="pt-8 md:pt-16 lg:pt-12 pb-8 md:pb-16 lg:pb-12 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10 px-2" dir="rtl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 border border-primary/20 rounded-full text-xs sm:text-sm font-medium text-primary mb-3 sm:mb-4">
              <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              ضمان الجودة والاعتماد
            </div>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-balance leading-snug break-words">
              لماذا <span className="text-primary">مدربونا</span> مختلفون؟
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <ScrollReveal animation="slide-in-right">
            <div className="rounded-xl md:rounded-2xl bg-card border-2 border-primary/20 shadow-xl overflow-x-auto" dir="rtl">
              <Table className="min-w-[280px] sm:min-w-0 w-full">
                <TableHeader>
                  <TableRow className="border-primary/20 hover:bg-transparent">
                    <TableHead className="text-right font-bold bg-muted/50 text-xs sm:text-sm py-3 px-2 sm:px-4">المعيار</TableHead>
                    <TableHead className="text-center font-bold bg-primary/10 text-primary text-xs sm:text-sm py-3 px-2 sm:px-4 whitespace-nowrap">مدربونا</TableHead>
                    <TableHead className="text-center font-bold bg-muted/50 text-xs sm:text-sm py-3 px-2 sm:px-4 whitespace-nowrap">آخرون</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparison.map((row, index) => (
                    <TableRow key={index} className="border-border">
                      <TableCell className="text-right font-medium text-xs sm:text-sm py-2.5 px-2 sm:px-4 break-words min-w-0">{row.criterion}</TableCell>
                      <TableCell className="text-center py-2.5 px-2 sm:px-4">
                        {row.us === true ? (
                          <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary mx-auto flex-shrink-0" />
                        ) : (
                          <span className="text-xs sm:text-sm">{String(row.us)}</span>
                        )}
                      </TableCell>
                      <TableCell className="text-center py-2.5 px-2 sm:px-4">
                        {row.others === false ? (
                          <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground mx-auto flex-shrink-0" />
                        ) : (
                          <span className="text-xs sm:text-sm text-muted-foreground">{row.others}</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-in-left">
            <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border-2 border-primary/20 shadow-lg flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center" dir="rtl">
              <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <BadgeDollarSign className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-base sm:text-lg mb-1.5 sm:mb-2">تخفيض رسوم الامتحان</h3>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
                  نوضح لطلابنا كيفية الاستفادة من سياسة تخفيض رسوم الامتحان المعتمدة. عند التسجيل معنا تحصل على دليل واضح لخطوات الاستفادة من التخفيض وتقديم الطلبات المطلوبة.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
