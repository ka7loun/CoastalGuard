"use client"

import { ArrowUpDown, Download, FileText, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"

export function ReportsArchive() {
  const reports = [
    {
      id: 1,
      name: "Weekly Activity Report",
      date: "April 1-7, 2025",
      type: "Weekly",
      size: "2.4 MB",
      format: "PDF",
    },
    {
      id: 2,
      name: "Monthly Environmental Data",
      date: "March 2025",
      type: "Monthly",
      size: "5.8 MB",
      format: "PDF",
    },
    {
      id: 3,
      name: "Quarterly Patrol Summary",
      date: "Q1 2025",
      type: "Quarterly",
      size: "8.2 MB",
      format: "PDF",
    },
    {
      id: 4,
      name: "Incident Report #2458",
      date: "March 28, 2025",
      type: "Incident",
      size: "1.5 MB",
      format: "PDF",
    },
    {
      id: 5,
      name: "Weekly Activity Report",
      date: "March 24-31, 2025",
      type: "Weekly",
      size: "2.2 MB",
      format: "PDF",
    },
    {
      id: 6,
      name: "Environmental Alert Summary",
      date: "March 2025",
      type: "Monthly",
      size: "3.1 MB",
      format: "PDF",
    },
    {
      id: 7,
      name: "Patrol Zone Coverage Analysis",
      date: "Q1 2025",
      type: "Analysis",
      size: "4.7 MB",
      format: "PDF",
    },
  ]

  const getReportTypeBadge = (type: string) => {
    switch (type) {
      case "Weekly":
        return (
          <Badge variant="outline" className="text-blue-500 border-blue-500">
            Weekly
          </Badge>
        )
      case "Monthly":
        return (
          <Badge variant="outline" className="text-green-500 border-green-500">
            Monthly
          </Badge>
        )
      case "Quarterly":
        return (
          <Badge variant="outline" className="text-purple-500 border-purple-500">
            Quarterly
          </Badge>
        )
      case "Incident":
        return (
          <Badge variant="outline" className="text-red-500 border-red-500">
            Incident
          </Badge>
        )
      case "Analysis":
        return (
          <Badge variant="outline" className="text-yellow-500 border-yellow-500">
            Analysis
          </Badge>
        )
      default:
        return <Badge variant="outline">Other</Badge>
    }
  }

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Reports Archive</CardTitle>
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search reports..." className="pl-8" />
        </div>
      </CardHeader>
      <CardContent className="h-[calc(100%-80px)] overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Report Name
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-1">
                  Date
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Format</TableHead>
              <TableHead className="w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.id}>
                <TableCell>
                  <FileText className="h-4 w-4 text-primary" />
                </TableCell>
                <TableCell className="font-medium">{report.name}</TableCell>
                <TableCell>{report.date}</TableCell>
                <TableCell>{getReportTypeBadge(report.type)}</TableCell>
                <TableCell>{report.size}</TableCell>
                <TableCell>{report.format}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
