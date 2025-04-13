"use client"

import { AlertTriangle, ArrowRight, Fish, ShieldAlert, Waves } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import Link from "next/link"

export function RecentAlerts() {
  const alerts = [
    {
      id: 1,
      title: "Illegal Trap Detected",
      description: "Submarine unit detected illegal trap at coordinates 34.05, -118.25",
      type: "trap",
      severity: "high",
      time: "10 minutes ago",
      unit: "Submarine Unit Charlie",
    },
    {
      id: 2,
      title: "Unauthorized Vessel",
      description: "Drone unit spotted unauthorized vessel in protected zone B",
      type: "activity",
      severity: "high",
      time: "25 minutes ago",
      unit: "Drone Unit Alpha",
    },
    {
      id: 3,
      title: "Water Temperature Alert",
      description: "Water temperature exceeding threshold in sector B3 (28.5°C)",
      type: "environmental",
      severity: "medium",
      time: "45 minutes ago",
      unit: "Patrol Boat Bravo",
    },
    {
      id: 4,
      title: "Oil Spill Detected",
      description: "Small oil spill detected near coastal area at coordinates 34.06, -118.27",
      type: "environmental",
      severity: "medium",
      time: "1 hour ago",
      unit: "Drone Unit Alpha",
    },
    {
      id: 5,
      title: "Fishing in Protected Area",
      description: "Multiple fishing boats detected in marine sanctuary",
      type: "activity",
      severity: "high",
      time: "1.5 hours ago",
      unit: "Patrol Boat Bravo",
    },
  ]

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "trap":
        return <Fish className="h-5 w-5" />
      case "activity":
        return <ShieldAlert className="h-5 w-5" />
      case "environmental":
        return <Waves className="h-5 w-5" />
      default:
        return <AlertTriangle className="h-5 w-5" />
    }
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return <Badge variant="destructive">High</Badge>
      case "medium":
        return (
          <Badge variant="outline" className="text-yellow-500 border-yellow-500">
            Medium
          </Badge>
        )
      case "low":
        return (
          <Badge variant="outline" className="text-green-500 border-green-500">
            Low
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-500" />
          <CardTitle>Recent Alerts</CardTitle>
        </div>
        <Badge variant="outline">{alerts.length} alerts</Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start gap-4 p-3 border rounded-lg">
              <div className="mt-1">{getAlertIcon(alert.type)}</div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{alert.title}</h4>
                  {getSeverityBadge(alert.severity)}
                </div>
                <p className="text-sm text-muted-foreground">{alert.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                  <span className="text-xs font-medium">{alert.unit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href="/alerts" className="flex items-center justify-center gap-2">
            View All Alerts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
