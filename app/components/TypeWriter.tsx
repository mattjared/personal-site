"use client"

import { useEffect, useState } from "react"
import { site } from "@/siteData"

export default function TypeWriter() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  
  const speed = 50
  const delay = 1500
  const textArray = site.titles

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, delay)
      return () => clearTimeout(timeout)
    }

    if (isTyping && !isDeleting && !isPaused) {
      if (currentIndex < textArray[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + textArray[currentTextIndex][currentIndex])
          setCurrentIndex(currentIndex + 1)
        }, speed)
      } else {
        if (currentTextIndex < textArray.length - 1) {
          setIsPaused(true)
        } else {
          setIsTyping(false)
        }
      }
    }

    if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1))
        }, speed / 2)
      } else {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % textArray.length)
        setCurrentIndex(0)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, currentTextIndex, delay, displayText, isDeleting, isPaused, isTyping, speed, textArray])

  return (
    <div className="mb-4 mt-24">
      <span className="text-2xl font-semibold mb-12">
        {displayText}
        {(isTyping || isDeleting) && <span className="animate-blink font-bold text-3xl">|</span>}
      </span>
    </div>
  )
}
