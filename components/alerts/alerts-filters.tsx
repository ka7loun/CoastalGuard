"use client"

import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Calendar, Filter, MapPin, Search } from "lucide-react"
import { Badge } from "../ui/badge"

export function AlertsFilters() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Filter Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search alerts..." className="pl-8" />
          </div>

          <div className="flex flex-wrap gap-4">
            <Select defaultValue="all-types">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Alert Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-types">All Types</SelectItem>
                <SelectItem value="trap">Trap Detection</SelectItem>
                <SelectItem value="activity">Illegal Activity</SelectItem>
                <SelectItem value="environmental">Environmental</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all-status">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-status">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all-severity">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-severity">All Severity</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon">
              <Calendar className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="icon">
              <MapPin className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="secondary" className="flex items-center gap-1">
            Type: Trap Detection
            <Button variant="ghost" size="icon" className="h-4 w-4 ml-1 hover:bg-transparent">
              <span className="sr-only">Remove filter</span>×
            </Button>
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            Status: New
            <Button variant="ghost" size="icon" className="h-4 w-4 ml-1 hover:bg-transparent">
              <span className="sr-only">Remove filter</span>×
            </Button>
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            Last 24 hours
            <Button variant="ghost" size="icon" className="h-4 w-4 ml-1 hover:bg-transparent">
              <span className="sr-only">Remove filter</span>×
            </Button>
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
