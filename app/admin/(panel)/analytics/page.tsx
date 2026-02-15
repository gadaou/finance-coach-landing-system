export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[hsl(142,71%,28%)]">Tracking & analytics</h1>
      <div className="rounded-xl border-2 border-dashed border-[hsl(var(--admin-border))] bg-white p-12 text-center">
        <p className="text-[hsl(0,0%,50%)] mb-2">
          Real-time tracking data will appear here.
        </p>
        <p className="text-sm text-[hsl(0,0%,60%)]">
          You can inject charts and analytics into this section later.
        </p>
      </div>
    </div>
  )
}
