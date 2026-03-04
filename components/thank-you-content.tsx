import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export type ThankYouContentProps = {
  title: string
  message: string
  backPath: string
  backLabel: string
  dir?: "rtl" | "ltr"
}

export function ThankYouContent({
  title,
  message,
  backPath,
  backLabel,
  dir = "rtl",
}: ThankYouContentProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" dir={dir}>
      <div className="max-w-xl mx-auto text-center">
        <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-6">
          <CheckCircle2 className="h-12 w-12" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">{title}</h1>
        <p className="text-muted-foreground mb-8">{message}</p>
        <Link
          href={backPath}
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          {backLabel}
        </Link>
      </div>
    </div>
  )
}
