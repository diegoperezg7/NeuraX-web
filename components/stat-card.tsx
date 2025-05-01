"use client"

import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface StatCardProps {
  icon: ReactNode
  title: string
  value: string
  description: string
  color?: "blue" | "purple" | "green" | "yellow"
}

export function StatCard({ 
  icon, 
  title, 
  value, 
  description, 
  color = "blue" 
}: StatCardProps) {
  const [animateValue, setAnimateValue] = useState(false);
  
  useEffect(() => {
    // Retraso para la animación del valor
    const timer = setTimeout(() => {
      setAnimateValue(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const colorVariants = {
    blue: "from-blue-600/30 to-blue-900/40 border-blue-500/30 hover:border-blue-400/60",
    purple: "from-purple-600/30 to-purple-900/40 border-purple-500/30 hover:border-purple-400/60",
    green: "from-green-600/30 to-green-900/40 border-green-500/30 hover:border-green-400/60",
    yellow: "from-yellow-600/30 to-yellow-900/40 border-yellow-500/30 hover:border-yellow-400/60"
  };

  const iconColorVariants = {
    blue: "text-blue-400 group-hover:text-blue-300",
    purple: "text-purple-400 group-hover:text-purple-300",
    green: "text-green-400 group-hover:text-green-300",
    yellow: "text-yellow-400 group-hover:text-yellow-300"
  };

  const valueColorVariants = {
    blue: "text-blue-100",
    purple: "text-purple-100",
    green: "text-green-100",
    yellow: "text-yellow-100"
  };

  return (
    <motion.div
      className={cn(
        "bg-gradient-to-br backdrop-blur-sm rounded-xl border p-6 relative overflow-hidden group shadow-lg shadow-black/10",
        colorVariants[color]
      )}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative elements */}
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/10 rounded-full blur-lg group-hover:bg-blue-500/20 transition-all duration-700"></div>
      <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-purple-500/10 rounded-full blur-lg group-hover:bg-purple-500/20 transition-all duration-700"></div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:20px_20px] rounded-xl"></div>

      {/* Decorative corner accents */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-blue-500/50 rounded-tl"></div>
      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-blue-500/50 rounded-tr"></div>
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-blue-500/50 rounded-bl"></div>
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-blue-500/50 rounded-br"></div>

      {/* Contenido principal */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
          {title}
        </h3>
        <motion.div
          className={cn("relative p-3 rounded-full bg-blue-900/40", iconColorVariants[color])}
          whileHover={{ rotate: 15, scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
          <div className="absolute -inset-1 bg-blue-500/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.div>
      </div>

      <div className="relative z-10">
        <motion.div 
          className="relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: animateValue ? 1 : 0, 
            scale: animateValue ? 1 : 0.8,
            transition: { type: "spring", stiffness: 300, damping: 10 }
          }}
        >
          <motion.p 
            className={cn("text-5xl md:text-6xl font-extrabold mb-2 group-hover:scale-110 transition-transform", valueColorVariants[color])}
            animate={{ 
              y: animateValue ? 0 : 40,
              transition: { 
                type: "spring", 
                stiffness: 200, 
                damping: 15
              }
            }}
          >
            {value}
          </motion.p>
          <div className="h-1.5 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-full transition-all duration-700"></div>
        </motion.div>
        <p className="text-blue-100/70 mt-5 text-lg group-hover:text-blue-100 transition-colors duration-300 font-medium">
          {description}
        </p>
      </div>

      {/* Efecto de brillo al pasar el ratón */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      {/* Decorative dots */}
      <div className="absolute bottom-3 right-3 flex space-x-1">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-purple-400/60"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60"></div>
      </div>
    </motion.div>
  )
}
