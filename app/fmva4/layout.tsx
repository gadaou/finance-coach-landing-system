import "./globals.css"
import { ClarityScript } from "@/components/clarity-script"

export default function Fmva4Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ClarityScript />
      {children}
    </>
  )
}
