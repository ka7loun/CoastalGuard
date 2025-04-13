"use client"

import { AlertTriangle, BarChart3, FileText, Home, LifeBuoy, LogOut, Settings, ShipWheel } from "lucide-react"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from "./ui/sidebar"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { Button } from "./ui/button"

export function AppSidebar() {
  const pathname = usePathname()
  const { user, hasPermission, logout } = useAuth()

  // Remove this check since the sidebar is now only rendered in the dashboard layout
  // if (pathname === "/login") return null

  const routes = [
    { path: "/", label: "Dashboard", icon: Home, permission: "view:dashboard" },
    { path: "/environmental", label: "Environmental", icon: BarChart3, permission: "view:environmental" },
    { path: "/alerts", label: "Alerts", icon: AlertTriangle, permission: "view:alerts" },
    { path: "/control", label: "Control", icon: ShipWheel, permission: "manage:control" },
    { path: "/settings", label: "Settings", icon: Settings, permission: "manage:settings" },
    { path: "/reports", label: "Reports", icon: FileText, permission: "manage:reports" },
  ]

  // Filter routes based on user permissions
  const authorizedRoutes = routes.filter((route) => hasPermission(route.permission))

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between">
        <div className="flex items-center gap-2 px-2">
          <LifeBuoy className="w-6 h-6 text-primary" />
          <span className="font-bold">Coastal Guard</span>
        </div>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {authorizedRoutes.map((route) => (
                <SidebarMenuItem key={route.path}>
                  <SidebarMenuButton asChild isActive={pathname === route.path} tooltip={route.label}>
                    <Link href={route.path}>
                      <route.icon className="w-4 h-4" />
                      <span>{route.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {user && (
          <SidebarGroup>
            <SidebarGroupLabel>User</SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{user.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {user.role === "admin" ? "Administrator" : "Regular User"}
                    </div>
                  </div>
                </div>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarFooter className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={logout}>
            <LogOut className="h-4 w-4" />
          </Button>
          <div className="text-xs text-muted-foreground">v1.0.0</div>
        </div>
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}
