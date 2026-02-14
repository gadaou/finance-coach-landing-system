"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Play, Award, CheckCircle2, TrendingUp, Loader2 } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export function InstructorSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Check if video file is accessible
  useEffect(() => {
    const checkVideo = async () => {
      try {
        const response = await fetch("/rel.mp4", { method: "HEAD" })
        if (!response.ok) {
          console.error("Video file not found at /rel.mp4")
          setVideoError(true)
        }
      } catch (error) {
        console.error("Error checking video file:", error)
        setVideoError(true)
      }
    }
    checkVideo()
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-background to-accent/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Section */}
            <ScrollReveal animation="slide-in-right">
              <div className="relative group">
                <div className="relative aspect-[5/4] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/20 shadow-2xl">
                  {/* Video element */}
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
                    onError={(e) => {
                      setIsLoading(false)
                      setVideoError(true)
                      const video = e.currentTarget
                      console.error("Video failed to load", {
                        error: video.error,
                        code: video.error?.code,
                        message: video.error?.message,
                        networkState: video.networkState,
                      })
                    }}
                  >
                    <source src="/rel.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Error message if video fails to load */}
                  {videoError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-30">
                      <div className="text-center p-6">
                        <p className="text-white mb-2">تعذر تحميل الفيديو</p>
                        <p className="text-white/80 text-sm">Video could not be loaded</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Loading overlay */}
                  {isLoading && isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
                      <div className="flex flex-col items-center gap-3">
                        <Loader2 className="h-8 w-8 text-primary animate-spin" />
                        <p className="text-sm text-white/80">جاري التحميل...</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Play button overlay */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/30 to-black/20 z-10">
                      <button
                        onClick={async () => {
                          if (videoRef.current) {
                            setIsLoading(true)
                            try {
                              await videoRef.current.play()
                              setIsPlaying(true)
                            } catch (error) {
                              console.error("Error playing video:", error)
                              setIsLoading(false)
                            }
                          }
                        }}
                        disabled={isLoading}
                        className="group/play relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <Loader2 className="h-8 w-8 md:h-10 md:w-10 animate-spin" />
                        ) : (
                          <>
                            <Play className="h-8 w-8 md:h-10 md:w-10 ml-1 fill-current" />
                            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                          </>
                        )}
                      </button>
                    </div>
                  )}
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </ScrollReveal>

            {/* Content Section */}
            <ScrollReveal animation="slide-in-left">
              <div className="space-y-6" dir="rtl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary w-fit">
                  <Award className="h-4 w-4" />
                  لماذا تتعلم معنا؟
                </div>

                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-balance">
                  لأنك ستتعلم من{" "}
                  <span className="text-primary">الأفضل</span>
                </h2>

                <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                  مدربونا ليسوا فقط حاصلين على FMVA، بل هم{" "}
                  <span className="text-primary font-semibold">Certified</span> (CFA + CMA/FMVA) ويعملون كمدراء ماليين في كبرى الشركات.
                </p>

                <p className="text-sm md:text-lg text-foreground font-medium">
                  أنت لا تدرس منهجاً، أنت تدرس{" "}
                  <span className="text-primary">خبرة سنين</span>
                </p>

                {/* Credentials */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <Award className="h-5 w-5" />
                      </div>
                      <div className="font-semibold">CFA Certified</div>
                    </div>
                    <p className="text-sm text-muted-foreground">معتمد من معهد CFA</p>
                  </div>

                  <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div className="font-semibold">FMVA Certified</div>
                    </div>
                    <p className="text-sm text-muted-foreground">معتمد من CFI</p>
                  </div>

                  <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group col-span-2">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div className="font-semibold">مدراء ماليين في كبرى الشركات</div>
                    </div>
                    <p className="text-sm text-muted-foreground">خبرة عملية حقيقية في سوق العمل</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

