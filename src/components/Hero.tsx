'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ShieldCheck, Star } from 'lucide-react'

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-[#0a1a3a] to-[#050a14]" />
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80')] bg-cover bg-center bg-no-repeat opacity-[0.06]"
          aria-hidden="true"
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-primary to-transparent" aria-hidden="true" />
      </div>

      <div className="relative z-10 w-full pt-12 sm:pt-14 lg:pt-0">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-center min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-80px)]">
            <motion.div
              className="lg:col-span-6 lg:col-start-1 px-0 sm:px-4 md:px-0 order-2 lg:order-1"
              style={{ y, opacity }}
            >
              <motion.div
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/60 text-[10px] font-body uppercase tracking-[0.15em] mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ShieldCheck className="w-3 h-3 text-accent" aria-hidden="true" />
                <span className="hidden xs:inline">Certified Pre-Owned Luxury</span>
                <span className="xs:hidden">Certified Luxury</span>
              </motion.div>

              <motion.h1
                id="hero-title"
                className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-medium leading-[1.08] text-white tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="block">Experience</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-accent/80">
                  Automotive
                </span>
                <span className="block">Excellence</span>
              </motion.h1>

              <motion.p
                className="text-sm text-white/60 font-body font-normal leading-relaxed max-w-md mt-3 mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Curated selection of the world&apos;s most prestigious luxury vehicles. 
                Uncompromising quality, exceptional service, and an ownership experience 
                that defines the standard.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link
                  href="/inventory"
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-primary font-body font-semibold text-sm rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore Collection
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white to-gray-100"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>

                <Link
                  href="/#contact"
                  className="group w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 bg-transparent text-white font-body font-medium text-sm rounded-full border border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                >
                  Schedule Visit
                </Link>
              </motion.div>

              <motion.div
                className="flex items-center gap-5 mt-5 pt-4 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                {[
                  { value: '200+', label: 'Vehicles' },
                  { value: '98%', label: 'Satisfaction' },
                  { value: '50+', label: 'Awards' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-lg sm:text-xl md:text-2xl font-display font-semibold text-white">{stat.value}</p>
                    <p className="text-[10px] text-white/40 font-body uppercase tracking-wider mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:col-span-6 lg:col-start-7 relative flex items-center order-1 lg:order-2"
              style={{ y: imageY }}
            >
              <div className="relative w-full">
                <motion.div
                  className="absolute -top-10 -right-10 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] bg-accent/8 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px]"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                />

                <motion.div
                  className="relative"
                  style={{ scale: imageScale }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] max-w-[280px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px] mx-auto lg:mr-0 lg:ml-auto">
                    <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent rounded-[12px] sm:rounded-[20px] blur-md sm:blur-lg" aria-hidden="true" />
                    <div className="relative rounded-[12px] sm:rounded-[20px] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4),0_0_20px_rgba(47,103,255,0.08)]">
                      <motion.img
                        src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80"
                        alt="Luxury sports car"
                        className="w-full h-full object-cover"
                        loading="eager"
                        style={{ transform: `perspective(1000px) rotateY(${mousePosition.x * 0.02}deg) rotateX(${-mousePosition.y * 0.02}deg)` }}
                        transition={{ type: "spring", stiffness: 100, damping: 30 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
                    </div>
                    <motion.div
                      className="absolute -bottom-3 -left-3 w-16 sm:w-24 h-16 sm:h-24 bg-accent/20 rounded-full blur-lg sm:blur-xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      aria-hidden="true"
                    />

                    <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 px-2 py-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-accent text-accent" aria-hidden="true" />
                        ))}
                      </div>
                      <span className="text-[10px] text-white/80 font-body font-medium">5.0</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ opacity }}
      >
        <span className="text-white/30 text-[10px] font-body uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-2 bg-white/40 rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}