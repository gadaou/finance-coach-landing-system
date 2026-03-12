import "@landing/styles/globals.css"
import "./theme.css"
import { ClarityScript } from "@/components/clarity-script"

export default function Fmva6Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="dark" dir="rtl">
      <ClarityScript />
      {children}
    </div>
  )
}
