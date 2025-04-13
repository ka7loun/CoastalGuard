import { AlertsFilters } from "@/components/alerts/alerts-filters"
import { AlertsList } from "@/components/alerts/alerts-list"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export default function AlertsPage() {
  return (
    <div className="flex flex-col h-full">
      <DashboardHeader title="Alerts Management" />
      <div className="flex-1 p-6 space-y-6 overflow-auto">
        <AlertsFilters />
        <div className="h-[calc(100vh-280px)]">
          <AlertsList />
        </div>
      </div>
    </div>
  )
}
