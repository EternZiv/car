'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'James Mitchell',
    role: 'CEO, Mitchell Capital',
    content: 'Exceptional service from the moment I walked in. The team at Apex Motors made acquiring my S-Class an effortless experience. Truly a world-class dealership with an extraordinary level of attention to detail.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Victoria Chen',
    role: 'Fashion Designer',
    content: 'I have never experienced such personalized attention when purchasing a vehicle. Every detail was handled with the utmost care and professionalism. The white-glove delivery was impeccable.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    name: 'Robert Kensington',
    role: 'Managing Partner',
    content: 'The white-glove delivery service exceeded my expectations. My Porsche arrived in perfect condition, and the concierge team has been incredibly attentive to every request since.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    name: 'Sarah Al-Mansour',
    role: 'Real Estate Developer',
    content: 'Apex Motors redefines what a luxury dealership experience should be. From the curated selection to the transparent pricing, every aspect reflects genuine care for their clientele.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-20 md:py-24 lg:py-28 bg-primary overflow-hidden" aria-labelledby="testimonials-title">
      <div className="absolute inset-0 mesh-gradient-dark pointer-events-none" aria-hidden="true" />
      <motion.div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 id="testimonials-title" className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white mb-3">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Testimonials</span>
          </h2>
          <p className="text-base md:text-lg text-white/50 font-body max-w-2xl mx-auto">Hear from our distinguished clientele</p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="min-h-[260px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[24px] p-8 md:p-10 text-center">
                  <div className="text-5xl font-display text-accent/30 leading-none mb-4">&ldquo;</div>

                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
                    ))}
                  </div>

                  <p className="text-base md:text-lg text-white/80 font-body leading-relaxed mb-8 max-w-xl mx-auto">
                    {testimonials[current].content}
                  </p>

                  <div className="flex items-center justify-center gap-3">
                    <img src={testimonials[current].image} alt={testimonials[current].name} className="w-10 h-10 rounded-full object-cover ring-2 ring-accent/30" />
                    <div className="text-left">
                      <h4 className="text-sm font-body font-semibold text-white">{testimonials[current].name}</h4>
                      <p className="text-xs text-white/50 font-body">{testimonials[current].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            <motion.button
              className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all"
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-accent w-5' : 'bg-white/20'}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all"
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}