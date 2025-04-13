"use client"

import {
  SailboatIcon as Boat,
  DrillIcon as Drone,
  Play,
  Power,
  RotateCw,
  Send,
  Video,
  Wind,
  Compass,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Button } from "../ui/button"
import { Slider } from "../ui/slider"
import { Badge } from "../ui/badge"
import { Input } from "../ui/input"
import { Progress } from "../ui/progress"
import { useRef, useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { SeaFootage } from "../video/sea-footage"

export function ControlInterface() {
  const { hasPermission } = useAuth()
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [showGrid, setShowGrid] = useState(true)
  const [showInfo, setShowInfo] = useState(true)

  // Only admins can access control features
  const canControl = hasPermission("manage:control")

  return (
    <Tabs defaultValue="drone">
      <div className="flex flex-col gap-4 md:flex-row md:items-start">
        <div className="md:w-64 lg:w-72">
          <TabsList className="flex flex-col w-full h-auto gap-2">
            <TabsTrigger value="drone" className="w-full justify-start gap-2 h-10">
              <Drone className="h-4 w-4" />
              Drone Unit Alpha
            </TabsTrigger>
            <TabsTrigger value="boat" className="w-full justify-start gap-2 h-10">
              <Boat className="h-4 w-4" />
              Patrol Boat Bravo
            </TabsTrigger>
          </TabsList>

          <div className="mt-6 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Unit Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Battery</span>
                    <span className="text-xs font-medium">78%</span>
                  </div>
                  <Progress value={78} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Signal</span>
                    <span className="text-xs font-medium">92%</span>
                  </div>
                  <Progress value={92} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Storage</span>
                    <span className="text-xs font-medium">45%</span>
                  </div>
                  <Progress value={45} />
                </div>
              </CardContent>
            </Card>

            {canControl && (
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Quick Commands</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Play className="h-3 w-3 mr-2" />
                    Start Patrol
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <RotateCw className="h-3 w-3 mr-2" />
                    Return to Base
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Power className="h-3 w-3 mr-2" />
                    Power Off
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <TabsContent value="drone" className="m-0">
            <Card className="border-2 border-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Drone Unit Alpha</CardTitle>
                    <CardDescription>Aerial surveillance unit - La Goulette</CardDescription>
                  </div>
                  <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Use our new SeaFootage component */}
                <SeaFootage className="min-h-[400px]" location="La Goulette (Aerial View)" />

                {canControl && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Navigation Controls</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-3 gap-2">
                            <div></div>
                            <Button variant="outline" size="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4 rotate-0"
                              >
                                <polyline points="18 15 12 9 6 15"></polyline>
                              </svg>
                            </Button>
                            <div></div>
                            <Button variant="outline" size="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4 -rotate-90"
                              >
                                <polyline points="18 15 12 9 6 15"></polyline>
                              </svg>
                            </Button>
                            <Button variant="outline" size="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                            </Button>
                            <Button variant="outline" size="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4 rotate-90"
                              >
                                <polyline points="18 15 12 9 6 15"></polyline>
                              </svg>
                            </Button>
                            <div></div>
                            <Button variant="outline" size="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4 rotate-180"
                              >
                                <polyline points="18 15 12 9 6 15"></polyline>
                              </svg>
                            </Button>
                            <div></div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs">Altitude</span>
                              <span className="text-xs font-medium">120m</span>
                            </div>
                            <Slider defaultValue={[60]} max={100} step={1} />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs">Speed</span>
                              <span className="text-xs font-medium">15 km/h</span>
                            </div>
                            <Slider defaultValue={[30]} max={100} step={1} />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs">Zoom</span>
                              <span className="text-xs font-medium">{zoomLevel}x</span>
                            </div>
                            <Slider
                              defaultValue={[zoomLevel]}
                              max={10}
                              min={1}
                              step={0.5}
                              onValueChange={(value) => setZoomLevel(value[0])}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Command Center</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Input placeholder="Enter coordinates..." />
                            <Button variant="outline" size="icon">
                              <Send className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="space-y-2">
                            <Button variant="outline" className="w-full justify-start" size="sm">
                              <Video className="h-3 w-3 mr-2" />
                              Toggle Camera Mode
                            </Button>
                            <Button variant="outline" className="w-full justify-start" size="sm">
                              <Compass className="h-3 w-3 mr-2" />
                              Lock Target
                            </Button>
                            <Button variant="outline" className="w-full justify-start" size="sm">
                              <Wind className="h-3 w-3 mr-2" />
                              Weather Data
                            </Button>
                          </div>

                          <div className="pt-2 border-t">
                            <h4 className="text-xs font-medium mb-2">Current Position</h4>
                            <div className="text-xs">36.8183, 10.3050 (La Goulette)</div>
                            <div className="text-xs text-muted-foreground mt-1">Altitude: 120m</div>
                            <div className="text-xs text-muted-foreground">Heading: 145° SE</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {!canControl && (
                  <Card>
                    <CardContent className="py-6">
                      <div className="text-center">
                        <p className="text-muted-foreground">You don't have permission to control this unit.</p>
                        <p className="text-sm text-muted-foreground mt-1">Contact an administrator for access.</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="boat" className="m-0">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Patrol Boat Bravo</CardTitle>
                    <CardDescription>Surface patrol unit - Sidi Bou Said</CardDescription>
                  </div>
                  <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                </div>
              </CardHeader>
              <CardContent>
                {/* Use our new SeaFootage component with different location */}
                <SeaFootage className="min-h-[400px]" location="Sidi Bou Said (Surface View)" />

                {canControl ? (
                  <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Navigation Controls</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-3 gap-2">
                            <div></div>
                            <Button variant="outline" size="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4 rotate-0"
                              >
                                <polyline points="18 15 12 9 6 15"></polyline>
                              </svg>
                            </Button>
                            <div></div>
                            <Button variant="outline" size="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4 -rotate-90"
                              >
                                <polyline points="18 15 12 9 6 15"></polyline>
                              </svg>
                            </Button>
                            <Button variant="outline" size="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                            </Button>
                            <Button variant="outline" size="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4 rotate-90"
                              >
                                <polyline points="18 15 12 9 6 15"></polyline>
                              </svg>
                            </Button>
                            <div></div>
                            <Button variant="outline" size="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4 rotate-180"
                              >
                                <polyline points="18 15 12 9 6 15"></polyline>
                              </svg>
                            </Button>
                            <div></div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs">Speed</span>
                              <span className="text-xs font-medium">12 knots</span>
                            </div>
                            <Slider defaultValue={[40]} max={100} step={1} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Command Center</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Input placeholder="Enter coordinates..." />
                            <Button variant="outline" size="icon">
                              <Send className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="space-y-2">
                            <Button variant="outline" className="w-full justify-start" size="sm">
                              <Video className="h-3 w-3 mr-2" />
                              Toggle Camera
                            </Button>
                            <Button variant="outline" className="w-full justify-start" size="sm">
                              <Play className="h-3 w-3 mr-2" />
                              Start Patrol
                            </Button>
                            <Button variant="outline" className="w-full justify-start" size="sm">
                              <RotateCw className="h-3 w-3 mr-2" />
                              Return to Base
                            </Button>
                          </div>

                          <div className="pt-2 border-t">
                            <h4 className="text-xs font-medium mb-2">Current Position</h4>
                            <div className="text-xs">36.8679, 10.3414 (Sidi Bou Said)</div>
                            <div className="text-xs text-muted-foreground mt-1">Heading: 210° SW</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <div className="mt-6 text-center py-6">
                    <p className="text-muted-foreground">You don't have permission to control this unit.</p>
                    <p className="text-sm text-muted-foreground mt-1">Contact an administrator for access.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </div>
    </Tabs>
  )
}
