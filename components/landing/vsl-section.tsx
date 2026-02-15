"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { useState, useRef, useEffect } from "react"
import { Loader2 } from "lucide-react"

export function VSLSection() {
  const [isLoading, setIsLoading] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const checkVideo = async () => {
      try {
        const response = await fetch("/rel.mp4", { method: "HEAD" })
        if (!response.ok) setVideoError(true)
      } catch {
        setVideoError(true)
      }
    }
    checkVideo()
  }, [])

  return (
    <section className="pt-12 md:pt-20 pb-12 md:pb-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10" dir="rtl">
            <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2 text-balance">
              شاهد كيف يغيّر البرنامج مسارك المهني
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              من المحاسبة الروتينية إلى مقعد اتخاذ القرار
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-in-up" delay={100}>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden bg-muted border border-border shadow-xl">
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                controls
                playsInline
                preload="metadata"
                onLoadStart={() => setIsLoading(true)}
                onCanPlay={() => setIsLoading(false)}
                onWaiting={() => setIsLoading(true)}
                onPlaying={() => setIsLoading(false)}
                onError={() => {
                  setIsLoading(false)
                  setVideoError(true)
                }}
              >
                <source src="/rel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {videoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted z-20" dir="rtl">
                  <div className="text-center p-6">
                    <p className="text-foreground font-medium mb-1">تعذر تحميل الفيديو</p>
                    <p className="text-muted-foreground text-sm">Video could not be loaded</p>
                  </div>
                </div>
              )}

              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/80 z-10">
                  <Loader2 className="h-8 w-8 text-primary animate-spin" />
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
