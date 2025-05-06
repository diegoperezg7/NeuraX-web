"use client"

import { useState, useEffect } from "react"
import type { ReactNode } from "react"
import { ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface Stat {
  label: string
  value: string
}

interface AgentCardProps {
  icon: ReactNode
  name: string
  description: string
  stats: Stat[]
  gradient: string
  onExplore?: () => void
}

export function AgentCard({ icon, name, description, stats, gradient, onExplore }: AgentCardProps) {
  const [animateIcon, setAnimateIcon] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);
  
  useEffect(() => {
    // Pequeña animación al cargar
    const timer = setTimeout(() => {
      setAnimateIcon(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className="relative group h-full w-full mx-auto" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      {/* Elementos decorativos */}
      <div className="absolute -right-16 top-0 w-48 h-48 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
      <div className="absolute -left-16 bottom-0 w-48 h-48 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all duration-500"></div>
      
      {/* Patrón de cuadrícula decorativo */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:16px_16px] rounded-xl"></div>
      
      {/* Badge sobresaliendo la mitad superior, perfectamente alineado y nunca cortado */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-12 z-20" style={{ pointerEvents: 'none' }}>
        <motion.div 
          className={`p-4 rounded-full bg-gradient-to-br ${gradient} shadow-lg shadow-blue-500/30 border-2 border-blue-400/30`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 15 }}
        >
          <motion.div 
            className="w-20 h-20 flex items-center justify-center bg-black/40 rounded-full backdrop-blur-md"
            animate={{
              rotate: animateIcon ? [0, 5, -5, 0] : 0,
              scale: animateIcon ? [1, 1.05, 1, 1.02] : 1
            }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            {icon}
          </motion.div>
          
          {/* Destellos decorativos alrededor del icono */}
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-blue-400/60"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-purple-400/60"></div>
          
          {/* Esquinas decorativas */}
          <div className="absolute -top-2 -left-2 w-3 h-3 border-t-2 border-l-2 border-blue-300/40 rounded-tl"></div>
          <div className="absolute -top-2 -right-2 w-3 h-3 border-t-2 border-r-2 border-blue-300/40 rounded-tr"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 border-b-2 border-l-2 border-blue-300/40 rounded-bl"></div>
          <div className="absolute -bottom-2 -right-2 w-3 h-3 border-b-2 border-r-2 border-blue-300/40 rounded-br"></div>
        </motion.div>
      </div>

      {/* Recuadro principal con animaciones sutiles */}
      <div
        className="bg-black/20 backdrop-blur-lg rounded-2xl border border-blue-900/50 shadow-2xl pt-14 pb-6 px-8 h-full flex flex-col relative z-10 group-hover:border-blue-700/50 transition-all duration-300 w-full"
        style={{ minHeight: '28rem' }} /* Aumentada la altura y anchura mínima para evitar recortes */
      >
        {/* Borde con gradiente animado al pasar el ratón */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20"></div>
        </div>
        
        {/* Esquinas decorativas */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-blue-500/30 rounded-tl"></div>
        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-blue-500/30 rounded-tr"></div>
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-blue-500/30 rounded-bl"></div>
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-blue-500/30 rounded-br"></div>
        
        {/* Fondo glassmorphism y contenido */}
        <div className="relative z-10 bg-black/30 rounded-xl pt-8 pb-10 px-2 flex flex-col min-h-[22rem] shadow-inner border border-blue-900/30"> 
          <div className="text-center px-2 mt-3">
            <h3 className="text-2xl font-extrabold text-white drop-shadow-sm mb-1 break-words group-hover:text-blue-200 transition-colors duration-300">{name}</h3>
            <div className="h-1 w-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1 mx-auto group-hover:w-24 transition-all duration-300"></div>
            <p className="text-blue-100/90 text-base mt-3 mb-2 break-words group-hover:text-blue-100 transition-colors duration-300">{description}</p>
          </div>

          {/* Stats vistosos */}
          <div className="flex flex-col items-center gap-2 mt-4 px-2">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="w-full px-3 py-1.5 bg-black/40 text-white rounded-full text-sm font-semibold shadow-md border border-blue-600/40 backdrop-blur-sm text-center group-hover:border-blue-500/60 transition-all duration-300"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              >
                <span className="text-lg font-bold mr-1 text-blue-200/95">{stat.value}</span>
                <span className="opacity-80">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Espacio flexible para empujar el botón hacia arriba */}
          <div className="flex-grow"></div>

          {onExplore && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6"
            >
              <Button
                variant="outline"
                className="w-full justify-center gap-2 border-2 border-blue-700/40 bg-black/40 text-white font-bold shadow-md group-hover:border-blue-600/60 group-hover:bg-black/50 transition-all duration-300"
                onClick={() => {
                  onExplore?.();
                  setShowCloseButton(true);
                }}
                style={{ textShadow: '0 0 6px #5eefff66' }}
              >
                <span>Explorar agentes</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          )}

          {showCloseButton && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 text-center"
            >
              <Button
                variant="ghost"
                className="w-full justify-center gap-2 text-red-400 hover:text-red-300"
                onClick={() => {
                  setShowCloseButton(false);
                  onExplore?.();
                }}
              >
                <X className="w-4 h-4" />
                <span>Cerrar</span>
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
