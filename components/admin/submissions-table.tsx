"use client"

import { useMemo, useState } from "react"
import type { Submission } from "@/lib/backend/submissions"

function escapeCsvCell(value: string): string {
  const s = String(value ?? "")
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

function formatMetaSummary(meta: Record<string, unknown>): string {
  if (!meta || Object.keys(meta).length === 0) return ""
  return Object.entries(meta)
    .map(([k, v]) => `${k}: ${typeof v === "object" ? JSON.stringify(v) : String(v)}`)
    .join(", ")
}

function downloadCsv(submissions: Submission[]) {
  const headers = ["Name", "Email", "Phone", "Date", "Meta"]
  const rows = submissions.map((s) => [
    escapeCsvCell(s.name),
    escapeCsvCell(s.email),
    escapeCsvCell(s.phone ?? ""),
    escapeCsvCell(new Date(s.created_at).toLocaleString()),
    escapeCsvCell(
      Object.keys(s.meta ?? {}).length > 0 ? JSON.stringify(s.meta) : ""
    ),
  ])
  const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\r\n")
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `submissions-${new Date().toISOString().slice(0, 10)}.csv`
  a.click()
  URL.revokeObjectURL(url)
}

export function SubmissionsTable({
  submissions,
  pathTitle,
}: {
  submissions: Submission[]
  pathTitle: string
}) {
  const [searchName, setSearchName] = useState("")
  const [searchEmail, setSearchEmail] = useState("")
  const [dateFrom, setDateFrom] = useState("")
  const [dateTo, setDateTo] = useState("")

  const filtered = useMemo(() => {
    let list = submissions
    if (searchName.trim()) {
      const q = searchName.trim().toLowerCase()
      list = list.filter((s) => s.name.toLowerCase().includes(q))
    }
    if (searchEmail.trim()) {
      const q = searchEmail.trim().toLowerCase()
      list = list.filter((s) => s.email.toLowerCase().includes(q))
    }
    if (dateFrom) {
      const from = new Date(dateFrom)
      from.setHours(0, 0, 0, 0)
      list = list.filter((s) => new Date(s.created_at) >= from)
    }
    if (dateTo) {
      const to = new Date(dateTo)
      to.setHours(23, 59, 59, 999)
      list = list.filter((s) => new Date(s.created_at) <= to)
    }
    return list
  }, [submissions, searchName, searchEmail, dateFrom, dateTo])

  return (
    <div className="rounded-xl border border-[hsl(var(--admin-border))] bg-white overflow-hidden shadow-sm">
      <div className="px-4 py-3 border-b border-[hsl(var(--admin-border))] flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-semibold text-[hsl(0,0%,25%)]">Form submissions</h2>
          <p className="text-sm text-[hsl(0,0%,50%)]">Path: {pathTitle}</p>
        </div>
        <button
          type="button"
          onClick={() => downloadCsv(filtered)}
          className="admin-btn-primary text-sm px-4 py-2 rounded-lg font-medium disabled:opacity-50"
          disabled={filtered.length === 0}
        >
          Export CSV
        </button>
      </div>

      <div className="p-4 border-b border-[hsl(var(--admin-border))] bg-[hsl(var(--admin-muted))] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div>
          <label htmlFor="filter-name" className="block text-xs font-medium text-[hsl(0,0%,40%)] mb-1">
            Filter by name
          </label>
          <input
            id="filter-name"
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Search name..."
            className="w-full rounded-lg border border-[hsl(var(--admin-border))] bg-white px-3 py-2 text-sm admin-ring"
          />
        </div>
        <div>
          <label htmlFor="filter-email" className="block text-xs font-medium text-[hsl(0,0%,40%)] mb-1">
            Filter by email
          </label>
          <input
            id="filter-email"
            type="text"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
            placeholder="Search email..."
            className="w-full rounded-lg border border-[hsl(var(--admin-border))] bg-white px-3 py-2 text-sm admin-ring"
          />
        </div>
        <div>
          <label htmlFor="filter-date-from" className="block text-xs font-medium text-[hsl(0,0%,40%)] mb-1">
            Date from
          </label>
          <input
            id="filter-date-from"
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="w-full rounded-lg border border-[hsl(var(--admin-border))] bg-white px-3 py-2 text-sm admin-ring"
          />
        </div>
        <div>
          <label htmlFor="filter-date-to" className="block text-xs font-medium text-[hsl(0,0%,40%)] mb-1">
            Date to
          </label>
          <input
            id="filter-date-to"
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="w-full rounded-lg border border-[hsl(var(--admin-border))] bg-white px-3 py-2 text-sm admin-ring"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[hsl(var(--admin-border))] bg-[hsl(var(--admin-muted))]">
              <th className="text-left p-3 font-semibold text-[hsl(0,0%,30%)]">Name</th>
              <th className="text-left p-3 font-semibold text-[hsl(0,0%,30%)]">Email</th>
              <th className="text-left p-3 font-semibold text-[hsl(0,0%,30%)]">Phone</th>
              <th className="text-left p-3 font-semibold text-[hsl(0,0%,30%)]">Date</th>
              <th className="text-left p-3 font-semibold text-[hsl(0,0%,30%)]">Meta</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-6 text-center text-[hsl(0,0%,50%)]">
                  No submissions match the filters.
                </td>
              </tr>
            ) : (
              filtered.map((s) => (
                <tr key={s.id} className="border-b border-[hsl(var(--admin-border))] hover:bg-[hsl(142,40%,98%)]">
                  <td className="p-3">{s.name}</td>
                  <td className="p-3">{s.email}</td>
                  <td className="p-3">{s.phone || "—"}</td>
                  <td className="p-3 text-[hsl(0,0%,50%)]">{new Date(s.created_at).toLocaleString()}</td>
                  <td className="p-3 text-[hsl(0,0%,45%)] max-w-[12rem] truncate" title={formatMetaSummary(s.meta)}>
                    {formatMetaSummary(s.meta) || "—"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
