"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"

export function EnvironmentalCharts() {
  // Sample data for charts
  const temperatureData = [
    { time: "00:00", surface: 22.4, underwater: 20.1 },
    { time: "04:00", surface: 21.8, underwater: 20.0 },
    { time: "08:00", surface: 22.2, underwater: 20.2 },
    { time: "12:00", surface: 24.5, underwater: 20.5 },
    { time: "16:00", surface: 25.1, underwater: 20.8 },
    { time: "20:00", surface: 23.8, underwater: 20.6 },
    { time: "24:00", surface: 22.9, underwater: 20.3 },
  ]

  const salinityData = [
    { time: "00:00", value: 34.8 },
    { time: "04:00", value: 34.9 },
    { time: "08:00", value: 35.0 },
    { time: "12:00", value: 35.1 },
    { time: "16:00", value: 35.0 },
    { time: "20:00", value: 34.9 },
    { time: "24:00", value: 34.8 },
  ]

  const waterLevelData = [
    { time: "00:00", level: 3.1 },
    { time: "04:00", level: 3.0 },
    { time: "08:00", level: 3.2 },
    { time: "12:00", level: 3.4 },
    { time: "16:00", level: 3.3 },
    { time: "20:00", level: 3.2 },
    { time: "24:00", level: 3.1 },
  ]

  const airQualityData = [
    { time: "00:00", aqi: 45 },
    { time: "04:00", aqi: 42 },
    { time: "08:00", aqi: 48 },
    { time: "12:00", aqi: 52 },
    { time: "16:00", aqi: 55 },
    { time: "20:00", aqi: 50 },
    { time: "24:00", aqi: 47 },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Temperature</CardTitle>
          <CardDescription>Surface and underwater temperature (°C)</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="line">
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="line">Line</TabsTrigger>
                <TabsTrigger value="area">Area</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="line" className="h-[400px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={temperatureData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="surface" stroke="#ef4444" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="underwater" stroke="#3b82f6" />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="area" className="h-[400px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={temperatureData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="surface" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                  <Area type="monotone" dataKey="underwater" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Water Salinity</CardTitle>
          <CardDescription>Salinity levels (ppt)</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salinityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={[34.5, 35.5]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#10b981" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Water Level</CardTitle>
          <CardDescription>Water level measurements (meters)</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={waterLevelData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={[2.8, 3.6]} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="level" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Air Quality</CardTitle>
          <CardDescription>Air Quality Index (AQI)</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={airQualityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="aqi" stroke="#8b5cf6" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
