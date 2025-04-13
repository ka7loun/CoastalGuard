import { ControlInterface } from "@/components/control/control-interface"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export default function ControlPage() {
  return (
    <div className="flex flex-col h-full">
      <DashboardHeader title="Control Interface" />
      <div className="flex-1 p-6 overflow-auto">
        <ControlInterface />
      </div>
    </div>
  )
}
