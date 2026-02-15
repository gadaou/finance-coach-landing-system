"use client"

import { ScrollReveal } from "@fmva4/components/scroll-reveal"
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
    <section className="py-5 sm:py-6 md:py-8 bg-gradient-to-br from-slate-900 via-[var(--hero-bg)] to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10 w-full max-w-[100vw] overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="fade-in-up">
            <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-5 px-2 break-words" dir="rtl">
              شاهد كيف يغير البرنامج مسارك المهني
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="scale-in">
            <div className="relative group w-full overflow-hidden">
              <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl">
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
                  Your browser does not support the video tag.
                </video>

                {videoError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-30">
                    <div className="text-center p-6 text-white">
                      <p className="mb-2">تعذر تحميل الفيديو</p>
                      <p className="text-sm text-white/80">Video could not be loaded</p>
                    </div>
                  </div>
                )}

                {isLoading && isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-20">
                    <div className="flex flex-col items-center gap-3">
                      <Loader2 className="h-10 w-10 text-white animate-spin" />
                      <p className="text-sm text-white/90">جاري التحميل...</p>
                    </div>
                  </div>
                )}

                {!isPlaying && !videoError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
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
                      className="relative w-16 h-16 min-w-[64px] min-h-[64px] sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white text-[var(--hero-bg)] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-50 ring-2 sm:ring-4 ring-white/30 ring-offset-2 sm:ring-offset-4 ring-offset-black/30 touch-manipulation"
                    >
                      {isLoading ? (
                        <Loader2 className="h-8 w-8 md:h-10 md:w-10 animate-spin" strokeWidth={2} />
                      ) : (
                        <>
                          <Play className="h-8 w-8 md:h-10 md:w-10 ml-1 fill-current" strokeWidth={2} />
                          <span className="absolute inset-0 rounded-full border-2 border-white/50 animate-pulse" />
                        </>
                      )}
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
