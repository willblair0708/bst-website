"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { TrendingUp, Heart } from "lucide-react"

export function LifeDaysTicker() {
  const [count, setCount] = useState(1247892)
  const [isIncreasing, setIsIncreasing] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsIncreasing(true)
      setCount(prev => prev + Math.floor(Math.random() * 5) + 1)
      
      setTimeout(() => setIsIncreasing(false), 500)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])
  
  const formatNumber = (num: number) => {
    return num.toLocaleString()
  }
  
  return (
    <div className="text-center space-y-4">
      <motion.div 
        className="flex items-center justify-center gap-2 text-accent-pass/80"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Heart size={16} className="animate-pulse" />
        <span className="text-sm font-medium uppercase tracking-wider">
          Life-Days Accelerated
        </span>
        <Heart size={16} className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      </motion.div>
      
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div 
            key={count}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              y: 0,
              textShadow: isIncreasing ? "0 0 20px rgba(25, 167, 206, 0.5)" : "none"
            }}
            exit={{ scale: 1.1, opacity: 0, y: -20 }}
            transition={{ 
              type: "spring",
              damping: 15,
              stiffness: 200,
              duration: 0.4
            }}
            className="text-5xl md:text-6xl font-bold font-mono bg-gradient-to-r from-accent-pass via-white to-accent-pass bg-clip-text text-transparent"
          >
            {formatNumber(count)}
          </motion.div>
        </AnimatePresence>
        
        <AnimatePresence>
          {isIncreasing && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: -10 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex items-center gap-1 text-accent-pass text-sm font-medium"
            >
              <TrendingUp size={14} />
              <span>+{Math.floor(Math.random() * 5) + 1}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <motion.div 
        className="text-grey-400 text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        by{" "}
        <span className="text-accent-pass font-semibold">
          Bastion-hosted research
        </span>
      </motion.div>
      
      {/* Progress indicator */}
      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-xs text-grey-400">
          <span>Daily Impact</span>
          <span>Growing ↗</span>
        </div>
        <div className="w-full bg-grey-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-pass to-accent-merit rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "78%" }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  )
}