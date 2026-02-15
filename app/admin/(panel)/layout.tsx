import Image from "next/image"
import { redirect } from "next/navigation"
import { isAdminAuthenticated } from "@/lib/admin-auth"
import { LogoutButton } from "@/components/admin/logout-button"
import { AdminNav } from "@/components/admin/admin-nav"
import "../admin.css"

export default async function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuth = await isAdminAuthenticated()
  if (!isAuth) redirect("/admin/login")

  return (
    <div dir="ltr" lang="en" className="admin-theme flex min-h-screen">
      <aside className="admin-sidebar flex flex-col">
        <div className="admin-sidebar-logo">
          <Image src="/logo2.png" alt="" width={200} height={56} priority />
        </div>
        <AdminNav />
        <div className="mt-auto pt-4">
          <LogoutButton />
        </div>
      </aside>
      <main className="flex-1 p-6 bg-[hsl(var(--admin-bg))]">{children}</main>
    </div>
  )
}
