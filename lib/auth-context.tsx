"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"
import type { User, AuthState } from "./auth-types"

interface AuthContextType extends AuthState {
  login: (user: User) => void
  logout: () => void
  hasPermission: (permission: string) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  })

  // Check for stored auth on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser)
        setState({
          user,
          isAuthenticated: true,
          isLoading: false,
        })
      } catch (e) {
        localStorage.removeItem("user")
        setState({ ...state, isLoading: false })
      }
    } else {
      setState({ ...state, isLoading: false })
    }
  }, [])

  // Redirect to login if not authenticated
  useEffect(() => {
    // We don't need to redirect here anymore since the dashboard layout handles this
    // The login page is now in a different layout
  }, [])

  const login = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user))
    setState({
      user,
      isAuthenticated: true,
      isLoading: false,
    })
  }

  const logout = () => {
    localStorage.removeItem("user")
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    })
    router.push("/login")
  }

  // Simple permission system based on roles
  const hasPermission = (permission: string) => {
    if (!state.user) return false

    // Admin has all permissions
    if (state.user.role === "admin") return true

    // Define permissions for regular users
    const userPermissions = ["view:dashboard", "view:environmental", "view:alerts"]

    return state.user.role === "user" && userPermissions.includes(permission)
  }

  return <AuthContext.Provider value={{ ...state, login, logout, hasPermission }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
