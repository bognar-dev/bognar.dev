import { SignatureGallery } from "./signatures"
import { LogTable } from "./logTable"
import CountryAnalytics from "./countryAnalytics"

export function Dashboard() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <SignatureGallery />
      <LogTable />
      <CountryAnalytics />
    </div>
  )
}