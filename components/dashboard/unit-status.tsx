"use client"

import { Battery, SailboatIcon as Boat, DrillIcon as Drone, Wifi } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Progress } from "../ui/progress"

export function UnitStatus() {
  const units = [
    {
      id: 1,
      name: "Drone Unit Alpha",
      type: "drone",
      status: "active",
      battery: 78,
      signal: 92,
      location: "36.8183, 10.3050 (La Goulette)",
      lastUpdate: "2 minutes ago",
    },
    {
      id: 2,
      name: "Patrol Boat Bravo",
      type: "boat",
      status: "active",
      battery: 65,
      signal: 85,
      location: "36.8679, 10.3414 (Sidi Bou Said)",
      lastUpdate: "5 minutes ago",
    },
  ]

  const getUnitIcon = (type: string) => {
    switch (type) {
      case "drone":
        return <Drone className="w-5 h-5" />
      case "boat":
        return <Boat className="w-5 h-5" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
      case "maintenance":
        return (
          <Badge variant="outline" className="text-yellow-500 border-yellow-500">
            Maintenance
          </Badge>
        )
      case "offline":
        return <Badge variant="destructive">Offline</Badge>
      default:
        return null
    }
  }

  return (
    <div className="col-span-full">
      <div className="grid gap-6 md:grid-cols-2">
        {units.map((unit) => (
          <Card key={unit.id}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                {getUnitIcon(unit.type)}
                <CardTitle className="text-sm font-medium">{unit.name}</CardTitle>
              </div>
              {getStatusBadge(unit.status)}
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <CardDescription>Battery</CardDescription>
                    <div className="flex items-center gap-1">
                      <Battery className="w-4 h-4" />
                      <span className="text-xs">{unit.battery}%</span>
                    </div>
                  </div>
                  <Progress value={unit.battery} className={unit.battery < 30 ? "text-red-500" : ""} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <CardDescription>Signal</CardDescription>
                    <div className="flex items-center gap-1">
                      <Wifi className="w-4 h-4" />
                      <span className="text-xs">{unit.signal}%</span>
                    </div>
                  </div>
                  <Progress value={unit.signal} />
                </div>
              </div>
              <div className="space-y-1">
                <CardDescription>Location</CardDescription>
                <div className="text-xs">{unit.location}</div>
              </div>
              <div className="text-xs text-muted-foreground">Last update: {unit.lastUpdate}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
