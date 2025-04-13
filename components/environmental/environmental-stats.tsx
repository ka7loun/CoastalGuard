"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Droplets, Thermometer, Waves, Wind } from "lucide-react"

export function EnvironmentalStats() {
  const stats = [
    {
      title: "Surface Temperature",
      value: "24.5°C",
      change: "+0.8°C",
      icon: Thermometer,
      description: "From yesterday",
    },
    {
      title: "Water Salinity",
      value: "35 ppt",
      change: "-0.2 ppt",
      icon: Droplets,
      description: "From yesterday",
    },
    {
      title: "Water Level",
      value: "3.2 m",
      change: "+0.1 m",
      icon: Waves,
      description: "From yesterday",
    },
    {
      title: "Air Quality",
      value: "Good",
      change: "Stable",
      icon: Wind,
      description: "From yesterday",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center mt-1">
              <span
                className={`text-xs font-medium ${
                  stat.change.includes("+")
                    ? "text-green-500"
                    : stat.change.includes("-")
                      ? "text-red-500"
                      : "text-muted-foreground"
                }`}
              >
                {stat.change}
              </span>
              <CardDescription className="ml-2 text-xs">{stat.description}</CardDescription>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
