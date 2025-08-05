"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Search, User, Bell, GitBranch, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const navItems = [
  { name: "Discover", href: "/discover" },
  { name: "Workspace", href: "/workspace" },
  { name: "CureGraph", href: "/curegraph" },
  { name: "Ops Dash", href: "/ops" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Ecosystem", href: "/ecosystem" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 12, 16, 0.8)", "rgba(10, 12, 16, 0.95)"]
  )
  const borderOpacity = useTransform(scrollY, [0, 100], [0.3, 0.6])

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
    >
      <motion.div 
        style={{ borderBottomColor: `rgba(32, 35, 43, ${borderOpacity})` }}
        className="border-b"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 focus-ring rounded-lg p-2">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-accent-pass to-accent-merit flex items-center justify-center shadow-lg"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
                <GitBranch size={20} className="text-white relative z-10" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-grey-300 bg-clip-text text-transparent">
                Bastion
              </span>
            </Link>

            {/* Main navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="group relative px-4 py-2 text-grey-300 hover:text-white transition-all duration-300 rounded-lg"
                  >
                    <span className="relative z-10 font-medium">{item.name}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent-pass/10 to-accent-merit/10 rounded-lg opacity-0 group-hover:opacity-100"
                      layoutId="navbar-hover"
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 text-grey-300 hover:text-white hover:bg-grey-800/50 rounded-xl transition-all duration-300 focus-ring"
              >
                <Search size={20} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-3 text-grey-300 hover:text-white hover:bg-grey-800/50 rounded-xl transition-all duration-300 focus-ring"
              >
                <Bell size={20} />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2 w-2 h-2 bg-accent-fail rounded-full"
                />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 text-grey-300 hover:text-white hover:bg-grey-800/50 rounded-xl transition-all duration-300 focus-ring"
              >
                <User size={20} />
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-3 text-grey-300 hover:text-white hover:bg-grey-800/50 rounded-xl transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? "auto" : 0, 
            opacity: isOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-grey-900/95 backdrop-blur-xl border-t border-grey-700/50"
        >
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0, 
                  x: isOpen ? 0 : -20 
                }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-grey-300 hover:text-white hover:bg-grey-800/50 rounded-lg transition-all duration-300"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.nav>
  )
}