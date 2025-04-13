"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Slider } from "../ui/slider"

export function SettingsTabs() {
  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="users">Users</TabsTrigger>
        <TabsTrigger value="zones">Patrol Zones</TabsTrigger>
        <TabsTrigger value="alerts">Alert Settings</TabsTrigger>
      </TabsList>

      <TabsContent value="general" className="mt-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>Configure general system settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="system-name">System Name</Label>
                <Input id="system-name" defaultValue="Coastal Guard Monitoring System" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Base Location</Label>
                <Input id="location" defaultValue="34.052235, -118.243683" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="utc-8">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                    <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                    <SelectItem value="utc-0">UTC</SelectItem>
                    <SelectItem value="utc+1">Central European Time (UTC+1)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="units">Measurement Units</Label>
                <Select defaultValue="metric">
                  <SelectTrigger id="units">
                    <SelectValue placeholder="Select units" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="metric">Metric (km, °C)</SelectItem>
                    <SelectItem value="imperial">Imperial (mi, °F)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="auto-refresh">Auto-refresh Data</Label>
                <Switch id="auto-refresh" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="notifications">Enable Notifications</Label>
                <Switch id="notifications" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="sound-alerts">Sound Alerts</Label>
                <Switch id="sound-alerts" defaultChecked />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset to Defaults</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Communication Settings</CardTitle>
              <CardDescription>Configure communication methods for units</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="primary-comm">Primary Communication</Label>
                <Select defaultValue="wifi">
                  <SelectTrigger id="primary-comm">
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wifi">Wi-Fi</SelectItem>
                    <SelectItem value="satellite">Satellite</SelectItem>
                    <SelectItem value="radio">Radio</SelectItem>
                    <SelectItem value="cellular">Cellular</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="backup-comm">Backup Communication</Label>
                <Select defaultValue="radio">
                  <SelectTrigger id="backup-comm">
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wifi">Wi-Fi</SelectItem>
                    <SelectItem value="satellite">Satellite</SelectItem>
                    <SelectItem value="radio">Radio</SelectItem>
                    <SelectItem value="cellular">Cellular</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="refresh-rate">Data Refresh Rate (seconds)</Label>
                <div className="flex items-center gap-4">
                  <Slider defaultValue={[5]} min={1} max={60} step={1} className="flex-1" />
                  <span className="w-12 text-center">5s</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="video-quality">Video Stream Quality</Label>
                <Select defaultValue="high">
                  <SelectTrigger id="video-quality">
                    <SelectValue placeholder="Select quality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low (480p)</SelectItem>
                    <SelectItem value="medium">Medium (720p)</SelectItem>
                    <SelectItem value="high">High (1080p)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset to Defaults</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="users" className="mt-6">
        <Card className="h-[calc(100vh-220px)]">
          <CardHeader>
            <CardTitle>User Management</CardTitle>
            <CardDescription>Manage users and permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[calc(100vh-350px)] flex items-center justify-center">
              <p className="text-center">
                <span className="block">User management interface</span>
                <span className="text-sm text-muted-foreground">Add, edit, and manage user permissions</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="zones" className="mt-6">
        <Card className="h-[calc(100vh-220px)]">
          <CardHeader>
            <CardTitle>Patrol Zones</CardTitle>
            <CardDescription>Configure patrol zones and boundaries</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[calc(100vh-350px)] flex items-center justify-center">
              <p className="text-center">
                <span className="block">Patrol zones configuration</span>
                <span className="text-sm text-muted-foreground">Define and manage patrol areas</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="alerts" className="mt-6">
        <Card className="h-[calc(100vh-220px)]">
          <CardHeader>
            <CardTitle>Alert Settings</CardTitle>
            <CardDescription>Configure alert thresholds and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[calc(100vh-350px)] flex items-center justify-center">
              <p className="text-center">
                <span className="block">Alert settings configuration</span>
                <span className="text-sm text-muted-foreground">
                  Set up environmental thresholds for automatic alerts
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
