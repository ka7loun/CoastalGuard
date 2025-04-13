import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { LiveMap } from "@/components/dashboard/live-map"
import { RecentAlerts } from "@/components/dashboard/recent-alerts"
import { UnitStatus } from "@/components/dashboard/unit-status"

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <DashboardHeader />
      <div className="flex-1 p-6 space-y-6 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UnitStatus />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <LiveMap className="lg:col-span-2" />
          <DashboardStats />
        </div>
        <RecentAlerts />
      </div>
    </div>
  )
}
