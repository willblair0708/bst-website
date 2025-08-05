"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BadgeProps {
  metric: string
  value: string | number
  state: "pass" | "fail" | "warn" | "merit"
  className?: string
}

const stateStyles = {
  pass: "bg-accent-pass/10 text-accent-pass border-accent-pass/20",
  fail: "bg-accent-fail/10 text-accent-fail border-accent-fail/20", 
  warn: "bg-accent-warn/10 text-accent-warn border-accent-warn/20",
  merit: "bg-accent-merit/10 text-accent-merit border-accent-merit/20"
}

export function Badge({ metric, value, state, className }: BadgeProps) {
  return (
    <motion.div
      initial={{ rotateY: 0 }}
      animate={{ rotateY: 0 }}
      whileHover={{ rotateY: 180 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "inline-flex items-center gap-1 px-2 py-1 rounded border text-body-s font-medium",
        stateStyles[state],
        className
      )}
    >
      <span className="text-grey-400">{metric}:</span>
      <span className="font-mono">{value}</span>
    </motion.div>
  )
}