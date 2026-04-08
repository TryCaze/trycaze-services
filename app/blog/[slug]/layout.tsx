'use client'

import { ReactNode, useEffect, useState } from "react"
import { Navbar } from "@/app/components/ui/nav"

export default function BlogLayout({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrolled = (scrollTop / docHeight) * 100
      setProgress(scrolled)
    }

    window.addEventListener("scroll", updateProgress)
    updateProgress()

    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[3px] z-[100] bg-transparent">
        <div
          className="h-full bg-white transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {children}
    </>
  )
}