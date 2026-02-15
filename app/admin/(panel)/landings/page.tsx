import { getLandings } from "@/lib/backend/landings"
import { getSubmissions } from "@/lib/backend/submissions"
import { LandingSelector } from "@/components/admin/landing-selector"
import { SubmissionsTable } from "@/components/admin/submissions-table"

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
  const pathTitle = selectedLanding ? selectedLanding.path : "/"

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-[hsl(142,71%,28%)]">Landings & submissions</h1>
        <LandingSelector landings={landings} currentSlug={selectedSlug} />
      </div>

      <SubmissionsTable submissions={submissions} pathTitle={pathTitle} />
    </div>
  )
}
