import Link from "next/link"
import { getLandings } from "@/lib/backend/landings"
import { getSubmissions } from "@/lib/backend/submissions"
import { LandingSelector } from "@/components/admin/landing-selector"

export default async function AdminLandingsPage({
  searchParams,
}: {
  searchParams: Promise<{ landing?: string }>
}) {
  const { landing: landingSlug } = await searchParams
  const landings = await getLandings()
  const selectedSlug = landingSlug && landings.some((l) => l.slug === landingSlug) ? landingSlug : landings[0]?.slug
  const selectedLanding = landings.find((l) => l.slug === selectedSlug)
  const submissions = await getSubmissions(selectedSlug)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-[hsl(142,71%,28%)]">Landings & submissions</h1>
        <LandingSelector landings={landings} currentSlug={selectedSlug} />
      </div>

      {selectedLanding && (
        <div className="rounded-xl border border-[hsl(var(--admin-border))] bg-white p-4 shadow-sm">
          <p className="text-sm text-[hsl(0,0%,45%)] mb-1">Selected landing</p>
          <p className="text-lg font-semibold text-[hsl(0,0%,20%)]">{selectedLanding.name}</p>
          <p className="text-sm text-[hsl(0,0%,50%)] mt-1">
            Path:{" "}
            <Link href={selectedLanding.path} target="_blank" rel="noopener noreferrer" className="text-[hsl(142,71%,45%)] hover:underline">
              {selectedLanding.path}
            </Link>
          </p>
        </div>
      )}

      <div className="rounded-xl border border-[hsl(var(--admin-border))] bg-white overflow-hidden shadow-sm">
        <div className="px-4 py-3 border-b border-[hsl(var(--admin-border))]">
          <h2 className="font-semibold text-[hsl(0,0%,25%)]">Form submissions</h2>
          <p className="text-sm text-[hsl(0,0%,50%)]">
            {selectedLanding ? `Submissions for ${selectedLanding.name}` : "Select a landing"}
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[hsl(var(--admin-border))] bg-[hsl(var(--admin-muted))]">
                <th className="text-left p-3 font-semibold text-[hsl(0,0%,30%)]">Name</th>
                <th className="text-left p-3 font-semibold text-[hsl(0,0%,30%)]">Email</th>
                <th className="text-left p-3 font-semibold text-[hsl(0,0%,30%)]">Phone</th>
                <th className="text-left p-3 font-semibold text-[hsl(0,0%,30%)]">Date</th>
              </tr>
            </thead>
            <tbody>
              {submissions.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-6 text-center text-[hsl(0,0%,50%)]">
                    No submissions for this landing yet.
                  </td>
                </tr>
              ) : (
                submissions.map((s) => (
                  <tr key={s.id} className="border-b border-[hsl(var(--admin-border))] hover:bg-[hsl(142,40%,98%)]">
                    <td className="p-3">{s.name}</td>
                    <td className="p-3">{s.email}</td>
                    <td className="p-3">{s.phone || "—"}</td>
                    <td className="p-3 text-[hsl(0,0%,50%)]">{new Date(s.created_at).toLocaleString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
