"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Activity, AlertTriangle, Fish, LifeBuoy, ShieldAlert, Waves } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      title: "Traps Detected",
      value: 24,
      change: "+5",
      icon: Fish,
      description: "Last 24 hours",
    },
    {
      title: "Illegal Activities",
      value: 12,
      change: "+2",
      icon: ShieldAlert,
      description: "Last 24 hours",
    },
    {
      title: "Environmental Alerts",
      value: 8,
      change: "-3",
      icon: Waves,
      description: "Last 24 hours",
    },
    {
      title: "Rescues Initiated",
      value: 3,
      change: "+1",
      icon: LifeBuoy,
      description: "Last 24 hours",
    },
  ]

  return (
    <Card className="h-[500px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Quick Stats
        </CardTitle>
        <CardDescription>Overview of monitoring activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col p-3 border rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">{stat.title}</span>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-end justify-between mt-2">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div
                  className={`text-xs font-medium ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                >
                  {stat.change}
                </div>
              </div>
              <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium">Active Alerts</span>
            </div>
            <span className="text-sm font-bold">5</span>
          </div>

          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-yellow-500 to-red-500 w-[40%]"></div>
          </div>

          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Low</span>
            <span>Medium</span>
            <span>High</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
