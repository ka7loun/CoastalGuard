"use client"

import { useEffect, useRef, useState } from "react"
import { Maximize, Pause, Play, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

interface SeaFootageProps {
  className?: string
  showControls?: boolean
  location?: string
  timestamp?: string
}

export function SeaFootage({ className, showControls = true, location = "Gulf of Tunis", timestamp }: SeaFootageProps) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const [waveOffset, setWaveOffset] = useState(0)

  // Update current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Format timestamp
  const formattedTime = timestamp || currentTime.toISOString().replace("T", " ").substring(0, 19)

  // Canvas animation for sea waves
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Wave parameters
    const waveColors = [
      "rgba(0, 70, 120, 0.8)",
      "rgba(0, 90, 150, 0.6)",
      "rgba(0, 110, 170, 0.4)",
      "rgba(0, 130, 190, 0.3)",
    ]

    const drawWaves = () => {
      if (!isPlaying) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw sky gradient
      const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.5)
      skyGradient.addColorStop(0, "rgba(135, 206, 235, 0.8)")
      skyGradient.addColorStop(1, "rgba(200, 230, 255, 0.6)")
      ctx.fillStyle = skyGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height * 0.5)

      // Draw horizon line
      ctx.beginPath()
      ctx.moveTo(0, canvas.height * 0.5)
      ctx.lineTo(canvas.width, canvas.height * 0.5)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"
      ctx.lineWidth = 1
      ctx.stroke()

      // Draw sea gradient
      const seaGradient = ctx.createLinearGradient(0, canvas.height * 0.5, 0, canvas.height)
      seaGradient.addColorStop(0, "rgba(0, 90, 150, 0.8)")
      seaGradient.addColorStop(1, "rgba(0, 50, 100, 0.9)")
      ctx.fillStyle = seaGradient
      ctx.fillRect(0, canvas.height * 0.5, canvas.width, canvas.height * 0.5)

      // Draw waves
      waveColors.forEach((color, index) => {
        const amplitude = 5 + index * 3
        const frequency = 0.02 - index * 0.003
        const speed = 0.05 + index * 0.01
        const yPos = canvas.height * 0.5 + 20 + index * 30

        ctx.beginPath()
        ctx.moveTo(0, yPos)

        for (let x = 0; x < canvas.width; x++) {
          const y = yPos + Math.sin(x * frequency + waveOffset * speed) * amplitude
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        ctx.fillStyle = color
        ctx.fill()
      })

      // Add some random wave caps (white foam)
      if (Math.random() > 0.7) {
        const foamCount = Math.floor(Math.random() * 5) + 3
        for (let i = 0; i < foamCount; i++) {
          const x = Math.random() * canvas.width
          const y = canvas.height * 0.5 + Math.random() * 40
          const radius = Math.random() * 3 + 1

          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
          ctx.fill()
        }
      }

      // Simulate camera movement with slight jitter
      if (Math.random() > 0.8) {
        const jitter = Math.random() * 2 - 1
        ctx.translate(jitter, jitter)
      }

      // Update wave offset for animation
      setWaveOffset((prev) => prev + 0.1)

      // Continue animation loop
      animationRef.current = requestAnimationFrame(drawWaves)
    }

    // Start animation
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(drawWaves)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [isPlaying, waveOffset])

  // Toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className={cn("relative aspect-video bg-slate-950 rounded-md overflow-hidden", className)}>
      {/* Canvas for sea animation */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Overlay for camera effect */}
      <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay pointer-events-none"></div>

      {/* Camera artifacts */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scan lines */}
        <div className="absolute inset-0 bg-scan-lines opacity-10"></div>

        {/* Vignette effect */}
        <div className="absolute inset-0 bg-radial-vignette opacity-40"></div>
      </div>

      {/* Live indicator */}
      <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
        <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>
        <span className="text-xs font-medium text-white">LIVE</span>
      </div>

      {/* Location and timestamp */}
      <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs p-2 rounded font-mono z-10">
        <div>{formattedTime}</div>
        <div>{location} • TRANSMISSION SECURE</div>
      </div>

      {/* Video controls */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-center gap-4 z-20">
          <Button variant="ghost" size="icon" onClick={togglePlay} className="text-white hover:bg-white/20">
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>

          <div className="flex-1">
            <Slider defaultValue={[0]} max={100} step={1} className="h-1" />
          </div>

          <Button variant="ghost" size="icon" onClick={toggleMute} className="text-white hover:bg-white/20">
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>

          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Maximize className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
