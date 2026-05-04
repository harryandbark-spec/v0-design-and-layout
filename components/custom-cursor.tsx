"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(true)

  // Use motion values for smooth animation
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const trailX = useMotionValue(-100)
  const trailY = useMotionValue(-100)

  // Spring config for smooth following
  const springConfig = { damping: 25, stiffness: 300 }
  const trailSpringConfig = { damping: 30, stiffness: 150 }

  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)
  const trailXSpring = useSpring(trailX, trailSpringConfig)
  const trailYSpring = useSpring(trailY, trailSpringConfig)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      trailX.set(e.clientX)
      trailY.set(e.clientY)

      if (!isVisible) setIsVisible(true)
    },
    [cursorX, cursorY, trailX, trailY, isVisible]
  )

  const handleMouseDown = useCallback(() => setIsClicking(true), [])
  const handleMouseUp = useCallback(() => setIsClicking(false), [])
  const handleMouseLeave = useCallback(() => setIsVisible(false), [])
  const handleMouseEnter = useCallback(() => setIsVisible(true), [])

  useEffect(() => {
    // Check if touch device
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(hover: none)").matches
      )
    }

    checkTouchDevice()

    if (isTouchDevice) return

    // Add mouse event listeners
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.documentElement.addEventListener("mouseleave", handleMouseLeave)
    document.documentElement.addEventListener("mouseenter", handleMouseEnter)

    // Handle hoverable elements
    const handleElementHover = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]'
      )

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true))
        el.addEventListener("mouseleave", () => setIsHovering(false))
      })
    }

    // Initial setup and mutation observer for dynamic elements
    handleElementHover()

    const observer = new MutationObserver(handleElementHover)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter)
      observer.disconnect()
    }
  }, [
    isTouchDevice,
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
    handleMouseEnter,
  ])

  // Don't render on touch devices
  if (isTouchDevice) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="cursor-dot pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 500, damping: 28 },
          opacity: { duration: 0.2 },
        }}
      >
        <div
          className="relative flex items-center justify-center"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <div
            className={`rounded-full bg-white transition-all duration-200 ${
              isHovering ? "h-10 w-10" : "h-3 w-3"
            }`}
          />
          {isHovering && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 rounded-full border border-white/50"
            />
          )}
        </div>
      </motion.div>

      {/* Trail cursor */}
      <motion.div
        className="cursor-dot pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          x: trailXSpring,
          y: trailYSpring,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isVisible ? 0.3 : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 25 },
          opacity: { duration: 0.3 },
        }}
      >
        <div
          className="h-8 w-8 rounded-full border border-gold/50"
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </motion.div>

      {/* Glow effect on hover */}
      <motion.div
        className="cursor-dot pointer-events-none fixed top-0 left-0 z-[9997]"
        style={{
          x: trailXSpring,
          y: trailYSpring,
        }}
        animate={{
          scale: isHovering ? 1.5 : 0,
          opacity: isHovering && isVisible ? 0.15 : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 200, damping: 20 },
          opacity: { duration: 0.3 },
        }}
      >
        <div
          className="h-16 w-16 rounded-full bg-gold blur-xl"
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </motion.div>
    </>
  )
}
