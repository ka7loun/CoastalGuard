import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { EnvironmentalCharts } from "@/components/environmental/environmental-charts"
import { EnvironmentalControls } from "@/components/environmental/environmental-controls"
import { EnvironmentalStats } from "@/components/environmental/environmental-stats"

export default function EnvironmentalPage() {
  return (
    <div className="flex flex-col h-full">
      <DashboardHeader title="Environmental Dashboard" />
      <div className="flex-1 p-6 space-y-6 overflow-auto">
        <EnvironmentalStats />
        <EnvironmentalControls />
        <EnvironmentalCharts />
      </div>
    </div>
  )
}
