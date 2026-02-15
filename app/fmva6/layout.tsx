import "@landing/styles/globals.css"
import "./theme.css"

export default function Fmva6Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="dark" dir="rtl">
      {children}
    </div>
  )
}
