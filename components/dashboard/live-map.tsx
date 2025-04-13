"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Layers, Maximize, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { cn } from "@/lib/utils"
import dynamic from "next/dynamic"

interface LiveMapProps {
  className?: string
}

// Dynamically import the map component with no SSR
const MapComponent = dynamic(() => import("../map/map-component"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-800 rounded-b-lg">
      <div className="text-white">Loading map...</div>
    </div>
  ),
})

export function LiveMap({ className }: LiveMapProps) {
  return (
    <Card className={cn("h-[500px]", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Live Map</CardTitle>
          <CardDescription>Real-time unit locations and alerts</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-xs">Drone</span>
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            <span className="text-xs">Boat</span>
          </Badge>
          <Badge variant="destructive" className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-white"></span>
            <span className="text-xs">Alert</span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="relative p-0 h-[430px]">
        <MapComponent />

        {/* Map controls */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          <Button variant="secondary" size="icon" className="h-8 w-8">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="h-8 w-8">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="h-8 w-8">
            <Layers className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="h-8 w-8">
            <Maximize className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
