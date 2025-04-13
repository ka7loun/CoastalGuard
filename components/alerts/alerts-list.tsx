"use client"

import { AlertTriangle, ArrowUpDown, Eye, Fish, MoreHorizontal, ShieldAlert, Waves } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { useAuth } from "@/lib/auth-context"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"

export function AlertsList() {
  const { hasPermission } = useAuth()
  const canManageAlerts = hasPermission("manage:alerts")

  const [alerts, setAlerts] = useState([
    {
      id: 1,
      title: "Illegal Trap Detected",
      description: "Drone unit detected illegal trap at coordinates 36.8183, 10.3050 near La Goulette",
      type: "trap",
      severity: "high",
      status: "new",
      time: "10 minutes ago",
      unit: "Drone Unit Alpha",
      location: "36.8183, 10.3050 (La Goulette)",
    },
    {
      id: 2,
      title: "Unauthorized Vessel",
      description: "Drone unit spotted unauthorized vessel in protected zone near Sidi Bou Said",
      type: "activity",
      severity: "high",
      status: "in-progress",
      time: "25 minutes ago",
      unit: "Drone Unit Alpha",
      location: "36.8679, 10.3414 (Sidi Bou Said)",
    },
    {
      id: 3,
      title: "Water Temperature Alert",
      description: "Water temperature exceeding threshold in Gulf of Tunis (28.5°C)",
      type: "environmental",
      severity: "medium",
      status: "new",
      time: "45 minutes ago",
      unit: "Patrol Boat Bravo",
      location: "36.8400, 10.3200 (Gulf of Tunis)",
    },
    {
      id: 4,
      title: "Oil Spill Detected",
      description: "Small oil spill detected near coastal area at Gammarth",
      type: "environmental",
      severity: "medium",
      status: "in-progress",
      time: "1 hour ago",
      unit: "Drone Unit Alpha",
      location: "36.9150, 10.2900 (Gammarth)",
    },
    {
      id: 5,
      title: "Fishing in Protected Area",
      description: "Multiple fishing boats detected in marine sanctuary near La Marsa",
      type: "activity",
      severity: "high",
      status: "resolved",
      time: "1.5 hours ago",
      unit: "Patrol Boat Bravo",
      location: "36.8800, 10.3250 (La Marsa)",
    },
    {
      id: 6,
      title: "Damaged Coral Reef",
      description: "Drone detected damaged coral reef section near Carthage, possible boat anchor damage",
      type: "environmental",
      severity: "medium",
      status: "new",
      time: "2 hours ago",
      unit: "Drone Unit Alpha",
      location: "36.8550, 10.3300 (Carthage)",
    },
    {
      id: 7,
      title: "Illegal Net Detected",
      description: "Large fishing net detected in restricted fishing zone near Korbous",
      type: "trap",
      severity: "high",
      status: "in-progress",
      time: "2.5 hours ago",
      unit: "Drone Unit Alpha",
      location: "36.8100, 10.5700 (Korbous)",
    },
  ])

  // Rest of the component remains the same

  const updateAlertStatus = (id: number, status: string) => {
    if (!canManageAlerts) {
      toast({
        title: "Permission Denied",
        description: "You don't have permission to update alert status.",
        variant: "destructive",
      })
      return
    }

    setAlerts(alerts.map((alert) => (alert.id === id ? { ...alert, status } : alert)))

    toast({
      title: "Alert Updated",
      description: `Alert status changed to ${status}.`,
    })
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "trap":
        return <Fish className="h-4 w-4" />
      case "activity":
        return <ShieldAlert className="h-4 w-4" />
      case "environmental":
        return <Waves className="h-4 w-4" />
      default:
        return <AlertTriangle className="h-4 w-4" />
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge variant="secondary">New</Badge>
      case "in-progress":
        return (
          <Badge variant="outline" className="text-blue-500 border-blue-500">
            In Progress
          </Badge>
        )
      case "resolved":
        return (
          <Badge variant="outline" className="text-green-500 border-green-500">
            Resolved
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg">Alerts</CardTitle>
        <div className="flex items-center gap-2">
          {canManageAlerts && (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setAlerts(
                    alerts.map((alert) => (alert.status === "new" ? { ...alert, status: "in-progress" } : alert)),
                  )
                  toast({
                    title: "Alerts Updated",
                    description: "All new alerts marked as in progress.",
                  })
                }}
              >
                Mark All as In Progress
              </Button>
              <Button variant="outline" size="sm">
                Export
              </Button>
            </>
          )}
        </div>
      </CardHeader>
      <CardContent className="h-[calc(100%-80px)] overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Alert
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Time
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alerts.map((alert) => (
              <TableRow key={alert.id}>
                <TableCell>{getAlertIcon(alert.type)}</TableCell>
                <TableCell>
                  <div className="font-medium">{alert.title}</div>
                  <div className="text-xs text-muted-foreground">{alert.description}</div>
                </TableCell>
                <TableCell>{getSeverityBadge(alert.severity)}</TableCell>
                <TableCell>{getStatusBadge(alert.status)}</TableCell>
                <TableCell>{alert.time}</TableCell>
                <TableCell>{alert.unit}</TableCell>
                <TableCell>{alert.location}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            {getAlertIcon(alert.type)}
                            {alert.title}
                          </DialogTitle>
                          <DialogDescription>Alert details and actions</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">Severity:</span>
                              {getSeverityBadge(alert.severity)}
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">Status:</span>
                              {getStatusBadge(alert.status)}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="text-sm font-medium">Description</h4>
                            <p className="text-sm">{alert.description}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <h4 className="text-sm font-medium">Detected by</h4>
                              <p className="text-sm">{alert.unit}</p>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-sm font-medium">Time</h4>
                              <p className="text-sm">{alert.time}</p>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-sm font-medium">Location</h4>
                              <p className="text-sm">{alert.location}</p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <h4 className="text-sm font-medium">Image Capture</h4>
                            <div className="h-[200px] w-full bg-slate-800 rounded-md flex items-center justify-center">
                              <span className="text-sm text-muted-foreground">Image from {alert.unit}</span>
                            </div>
                          </div>

                          {canManageAlerts && (
                            <div className="flex justify-between">
                              <Button variant="outline">Send Command to Unit</Button>
                              <Button onClick={() => updateAlertStatus(alert.id, "resolved")}>Mark as Resolved</Button>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>

                    {canManageAlerts && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => updateAlertStatus(alert.id, "in-progress")}>
                            Mark as In Progress
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateAlertStatus(alert.id, "resolved")}>
                            Mark as Resolved
                          </DropdownMenuItem>
                          <DropdownMenuItem>Assign to Team</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>View on Map</DropdownMenuItem>
                          <DropdownMenuItem>Generate Report</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
