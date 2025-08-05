"use client"

import { useReducedMotion } from "framer-motion"

export function AuroraBackground() {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div 
        className={`
          absolute inset-0 opacity-20
          ${shouldReduceMotion ? '' : 'aurora-gradient'}
        `}
        style={{
          background: shouldReduceMotion 
            ? 'linear-gradient(45deg, #19A7CE 0%, #F3C94C 25%, #FF6B6B 50%, #19A7CE 75%, #F3C94C 100%)'
            : undefined
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Abstract ribbon SVG pattern */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-10" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern 
            id="aurora-ribbons" 
            patternUnits="userSpaceOnUse" 
            width="200" 
            height="200"
          >
            <path 
              d="M0,100 Q50,50 100,100 T200,100"
              stroke="url(#ribbon-gradient)" 
              strokeWidth="2" 
              fill="none"
              opacity="0.3"
            />
            <path 
              d="M0,150 Q50,100 100,150 T200,150"
              stroke="url(#ribbon-gradient)" 
              strokeWidth="1.5" 
              fill="none"
              opacity="0.2"
            />
          </pattern>
          <linearGradient id="ribbon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#19A7CE" />
            <stop offset="50%" stopColor="#F3C94C" />
            <stop offset="100%" stopColor="#FF6B6B" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#aurora-ribbons)" />
      </svg>
    </div>
  )
}