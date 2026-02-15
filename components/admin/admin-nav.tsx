"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/admin/landings", label: "Landings & submissions" },
  { href: "/admin/analytics", label: "Tracking analytics" },
]

export function AdminNav() {
  const pathname = usePathname()
  return (
    <>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={pathname === href || (href === "/admin/landings" && pathname?.startsWith("/admin/landings")) ? "admin-link-active" : ""}
        >
          {label}
        </Link>
      ))}
    </>
  )
}
