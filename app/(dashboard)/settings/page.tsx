import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { SettingsTabs } from "@/components/settings/settings-tabs"

export default function SettingsPage() {
  return (
    <div className="flex flex-col h-full">
      <DashboardHeader title="System Settings" />
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-full mx-auto">
          <SettingsTabs />
        </div>
      </div>
    </div>
  )
}
