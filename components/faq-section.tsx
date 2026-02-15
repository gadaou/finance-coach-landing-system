import { ScrollReveal } from "./scroll-reveal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "How long does it take to complete the ACCA qualification?",
      answer:
        "The timeline depends on exemptions and study pace. Typically, it takes 2-3 years to complete all three phases of the ACCA program. However, with dedicated study and our expert guidance, many students progress faster.",
    },
    {
      question: "Do you offer online classes?",
      answer:
        "Yes, Finance Coach offers both online and on-campus study options. Our online classes provide the same quality instruction with live sessions, recorded materials, and interactive support to ensure you get the full learning experience.",
    },
    {
      question: "What makes Finance Coach different from other ACCA providers?",
      answer:
        "As an officially ACCA-accredited learning partner, we combine expert instructors, personalized support, real exam practice, and proven teaching methods. Our 98% success rate and continuous performance tracking ensure you're prepared for exam success.",
    },
    {
      question: "Can I work while studying for ACCA?",
      answer:
        "The ACCA program is designed to be flexible. Many of our students work full-time while studying. We offer various schedule options including evening and weekend classes to accommodate working professionals.",
    },
    {
      question: "What career opportunities are available after ACCA?",
      answer:
        "ACCA opens doors to diverse roles including Financial Analyst, Auditor, Tax Consultant, Management Accountant, CFO, and more. The qualification is recognized globally across industries like banking, consulting, corporate finance, and public accounting.",
    },
  ]

  return (
    <section className="pt-0 pb-24 bg-gradient-to-br from-background to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Find answers to common questions about ACCA certification and Finance Coach programs
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="scale-in">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
