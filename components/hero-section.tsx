"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Dna, Shield, Rocket, Sparkles, Zap, Globe } from "lucide-react"
import { Badge } from "./ui/badge"
import { LifeDaysTicker } from "./life-days-ticker"
import { PerformanceBadge } from "./performance-badge"
import { useRef } from "react"

// Fix: Use correct type for 'type' property in framer-motion transitions
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

// Use type: "spring" as an enum value, not a string literal
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 25,
      stiffness: 120
    }
  }
}

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center px-4 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-pass/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-merit/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-fail/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="max-w-7xl mx-auto w-full"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left column - Hero content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badges with enhanced animation */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <Badge metric="Diseases Cured" value="2" state="pass" />
              <Badge metric="Remaining" value="10,000" state="warn" />
              <Badge metric="Network Health" value="99.9%" state="pass" />
              <PerformanceBadge />
            </motion.div>

            {/* Main headline with enhanced typography */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2 text-accent-pass text-sm font-medium uppercase tracking-wide"
                >
                  <Sparkles size={16} />
                  Command Center for Cures
                </motion.div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
                  <span className="block text-white">The Future of</span>
                  <span className="block bg-gradient-to-r from-accent-pass via-accent-merit to-accent-fail bg-clip-text text-transparent">
                    Medicine
                  </span>
                  <motion.span 
                    className="block text-grey-300 text-3xl md:text-4xl lg:text-5xl font-light"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    at software speed
                  </motion.span>
                </h1>
              </div>
              
              <motion.p 
                className="text-xl text-grey-300 max-w-2xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Bastion unifies the entire translational stack—from OpenFDA safety feeds 
                to NIH genomic lakes—into one federated lattice we call{" "}
                <span className="font-semibold text-accent-pass bg-accent-pass/10 px-2 py-1 rounded">
                  CureGraph
                </span>.
              </motion.p>
            </motion.div>

            {/* Estelion's charge with enhanced styling */}
            <motion.blockquote 
              variants={itemVariants}
              className="relative p-6 rounded-xl bg-gradient-to-r from-accent-pass/5 to-transparent border-l-4 border-accent-pass"
            >
              <div className="absolute top-2 left-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-2 h-2 bg-accent-pass rounded-full"
                />
              </div>
              <p className="text-lg text-grey-300 italic font-light mb-2">
                &ldquo;Two diseases cured; ten‑thousand remain. Translation must move at software speed.&rdquo;
              </p>
              <footer className="text-accent-pass font-medium">— Estelion&apos;s Charge</footer>
            </motion.blockquote>

            {/* Enhanced CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(25, 167, 206, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-accent-pass to-accent-pass/80 text-white rounded-xl font-semibold flex items-center justify-center gap-3 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <Zap size={20} />
                Join the Graph
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(32, 35, 43, 0.8)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-grey-600 text-grey-300 rounded-xl font-semibold hover:border-accent-pass/50 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Globe size={20} />
                Explore Connectors
              </motion.button>
            </motion.div>
          </div>

          {/* Right column - Enhanced metrics & visual */}
          <div className="lg:col-span-5 space-y-6">
            {/* Life days ticker with enhanced design */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative p-8 rounded-2xl border border-grey-700/50 bg-gradient-to-br from-grey-800/40 to-grey-900/60 backdrop-blur-xl shadow-2xl"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-pass/5 to-accent-merit/5" />
              <div className="relative">
                <LifeDaysTicker />
              </div>
            </motion.div>

            {/* Enhanced feature highlights */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Dna, label: "Genomic", desc: "NIH dbGaP", color: "accent-pass" },
                { icon: Shield, label: "Regulatory", desc: "OpenFDA", color: "accent-merit" },
                { icon: Rocket, label: "Velocity", desc: "CI/CD", color: "accent-fail" },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30, rotateY: -15 }}
                    animate={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ 
                      delay: 1 + index * 0.1,
                      type: "spring" as const,
                      damping: 20,
                      stiffness: 100
                    }}
                    whileHover={{ 
                      y: -8, 
                      rotateY: 5,
                      transition: { type: "spring" as const, damping: 15, stiffness: 300 }
                    }}
                    className="group relative p-6 rounded-xl border border-grey-700/50 bg-grey-800/30 text-center backdrop-blur cursor-pointer"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 bg-${item.color}/10 text-${item.color}`}
                      >
                        <Icon size={24} />
                      </motion.div>
                      <div className="text-lg font-semibold text-white group-hover:text-accent-pass transition-colors">
                        {item.label}
                      </div>
                      <div className="text-sm text-grey-400">{item.desc}</div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Floating metrics */}
            <motion.div
              variants={itemVariants}
              className="flex justify-between text-center"
            >
              {[
                { value: "10K+", label: "Researchers" },
                { value: "50+", label: "Institutions" },
                { value: "99.9%", label: "Uptime" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="text-2xl font-bold text-accent-pass">{stat.value}</div>
                  <div className="text-sm text-grey-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}