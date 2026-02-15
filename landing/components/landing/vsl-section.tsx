"use client"

import { ScrollReveal } from "@landing/components/scroll-reveal"
import { Play, Loader2 } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export function VslSection() {
  const [isPlaying, setIsPlaying] = useState(false)
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
    <section className="py-2 sm:py-5 md:py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-5 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="slide-up-subtle">
            <div className="relative group">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-muted/50 border border-border shadow-lg">
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain"
                  controls={isPlaying}
                  playsInline
                  preload="metadata"
                  muted={false}
                  onLoadStart={() => setIsLoading(true)}
                  onCanPlay={() => setIsLoading(false)}
                  onWaiting={() => setIsLoading(true)}
                  onPlaying={() => setIsLoading(false)}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onError={() => {
                    setIsLoading(false)
                    setVideoError(true)
                  }}
                >
                  <source src="/rel.mp4" type="video/mp4" />
                </video>

                {videoError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-30">
                    <div className="text-center p-4" dir="rtl">
                      <p className="text-white text-sm">تعذر تحميل الفيديو</p>
                    </div>
                  </div>
                )}

                {isLoading && isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
                    <Loader2 className="h-8 w-8 text-primary animate-spin" />
                  </div>
                )}

                {!isPlaying && !videoError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
                    <button
                      onClick={async () => {
                        if (videoRef.current) {
                          setIsLoading(true)
                          try {
                            await videoRef.current.play()
                            setIsPlaying(true)
                          } catch {
                            setIsLoading(false)
                          }
                        }
                      }}
                      disabled={isLoading}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl hover:scale-105 transition-transform disabled:opacity-50 min-w-[44px] min-h-[44px]"
                      aria-label="Play video"
                    >
                      <Play className="h-7 w-7 md:h-8 md:w-8 ml-0.5 fill-current" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
