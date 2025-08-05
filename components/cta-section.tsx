"use client"

import { motion, useInView } from "framer-motion"
import { ArrowRight, GitBranch, Zap, Shield, Code, Database, Globe2, Users } from "lucide-react"
import { useRef } from "react"

const actions = [
  {
    icon: GitBranch,
    title: "Fork",
    description: "Start with a protocol template",
    href: "/workspace/fork",
    color: "accent-pass",
    features: ["Pre-validated protocols", "Regulatory templates", "Version control"]
  },
  {
    icon: Zap,
    title: "Simulate",
    description: "Run power calculations",
    href: "/workspace/simulate",
    color: "accent-merit",
    features: ["Statistical modeling", "Power analysis", "Risk assessment"]
  },
  {
    icon: Shield,
    title: "Merge",
    description: "Submit to regulatory review",
    href: "/workspace/merge",
    color: "accent-fail",
    features: ["Compliance checking", "Audit trails", "Review workflow"]
  }
]

const stats = [
  { icon: Code, value: "2,847", label: "Active Protocols", trend: "+12%" },
  { icon: Database, value: "847TB", label: "Research Data", trend: "+34%" },
  { icon: Globe2, value: "23", label: "Countries", trend: "+8%" },
  { icon: Users, value: "12,043", label: "Researchers", trend: "+19%" }
]

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-grey-900 via-grey-800 to-grey-900" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-pass/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-merit/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-pass/10 to-accent-merit/10 border border-accent-pass/20 text-accent-pass text-sm font-medium mb-6"
          >
            <div className="w-2 h-2 bg-accent-pass rounded-full animate-pulse" />
            Command Center Active
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-grey-100 to-white bg-clip-text text-transparent">
            Collapse the distance between
            <span className="block bg-gradient-to-r from-accent-pass via-accent-merit to-accent-fail bg-clip-text text-transparent">
              idea and cure
            </span>
          </h2>
          
          <p className="text-xl text-grey-300 max-w-3xl mx-auto leading-relaxed">
            Join the federated lattice where every idea, dataset, simulation, and protocol 
            becomes computable, shareable, and merge‑able—so translation moves at software speed.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                className="text-center p-6 rounded-xl bg-grey-800/40 border border-grey-700/50 backdrop-blur-sm"
              >
                <Icon size={32} className="mx-auto mb-3 text-accent-pass" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-grey-400 mb-2">{stat.label}</div>
                <div className="text-xs text-accent-pass font-medium">{stat.trend}</div>
              </motion.div>
            )
          })}
        </motion.div>
        
        {/* Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  delay: 0.8 + index * 0.2, 
                  duration: 0.8,
                  type: "spring",
                  damping: 20
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-pass/10 to-accent-merit/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 rounded-2xl border border-grey-700/50 bg-grey-800/60 backdrop-blur-xl hover:border-accent-pass/30 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="p-4 rounded-xl bg-gradient-to-br from-accent-pass/20 to-accent-pass/5 text-accent-pass group-hover:shadow-lg group-hover:shadow-accent-pass/20"
                    >
                      <Icon size={28} />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-accent-pass transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-grey-400 group-hover:text-grey-300 transition-colors">
                        {action.description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {action.features.map((feature, idx) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1 + index * 0.2 + idx * 0.1 }}
                        className="flex items-center text-sm text-grey-400"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-pass mr-3" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.a
                    href={action.href}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-pass/10 to-accent-pass/20 text-accent-pass rounded-xl font-semibold hover:from-accent-pass/20 hover:to-accent-pass/30 transition-all duration-300 border border-accent-pass/20 hover:border-accent-pass/40"
                  >
                    Get started
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(25, 167, 206, 0.3)",
              backgroundColor: "rgba(25, 167, 206, 0.9)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-accent-pass to-accent-merit text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Join the CureGraph Revolution
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}