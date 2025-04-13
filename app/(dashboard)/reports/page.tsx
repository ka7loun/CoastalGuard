import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ReportsArchive } from "@/components/reports/reports-archive"
import { ReportsGeneration } from "@/components/reports/reports-generation"

export default function ReportsPage() {
  return (
    <div className="flex flex-col h-full">
      <DashboardHeader title="Reports & Archive" />
      <div className="flex-1 p-6 space-y-6 overflow-auto">
        <ReportsGeneration />
        <div className="h-[calc(100vh-280px)]">
          <ReportsArchive />
        </div>
      </div>
    </div>
  )
}
