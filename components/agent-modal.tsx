"use client"

import { useState, useEffect } from "react"
import type { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Feature {
  text: string
}

export interface AgentDetailProps {
  name: string
  area: string
  description: string
  features: Feature[]
  subFeatures?: { [key: number]: Feature[] }
  icon: ReactNode
  gradient: string
  isOpen: boolean
  onClose: () => void
}

export function AgentModal({
  name,
  area,
  description,
  features,
  subFeatures,
  icon,
  gradient,
  isOpen,
  onClose,
}: AgentDetailProps) {
  const [isClosing, setIsClosing] = useState(false)

  // Manejar cierre del modal con escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose()
      }
    }
    
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [isOpen])

  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0 overflow-y-auto pt-32 pb-8">
          {/* Backdrop with blur - fondo más oscuro */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />

          {/* Modal Content */}
          <motion.div
            className="bg-gradient-to-br from-blue-950/95 to-black/95 backdrop-blur-md rounded-2xl border border-blue-500/30 max-w-3xl w-full max-h-[80vh] overflow-y-auto relative z-50 shadow-xl shadow-blue-500/20 mt-8"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: isClosing ? 0.9 : 1, opacity: isClosing ? 0 : 1, y: isClosing ? 20 : 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-blue-500/20 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center relative flex-shrink-0`}
                >
                  <motion.div
                    className="text-white"
                    animate={{ 
                      rotate: [0, 10, -10, 10, 0], 
                      scale: [1, 1.1, 1.1, 1.1, 1] 
                    }}
                    transition={{ 
                      duration: 0.8,
                      delay: 0.2,
                      repeat: 1
                    }}
                  >
                    {icon}
                  </motion.div>
                  
                  {/* Decorative circles */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-blue-400/30"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-purple-400/30"></div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 text-transparent bg-clip-text">
                    {name}
                  </h3>
                  <p className="text-blue-300 opacity-80">
                    {area}
                  </p>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                className="text-blue-300 hover:text-white hover:bg-blue-800/40 rounded-full"
                onClick={handleClose}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6">
              <p className="text-blue-100/80 mb-6 text-lg">
                {description}
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium">{feature.text}</p>
                        
                        {/* Sub-features if any */}
                        {subFeatures && subFeatures[index] && (
                          <ul className="mt-2 ml-1 space-y-2">
                            {subFeatures[index].map((subFeature, subIndex) => (
                              <motion.li 
                                key={subIndex}
                                className="flex items-start gap-2 text-blue-100/70"
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + (index * 0.1) + (subIndex * 0.05) }}
                              >
                                <div className="w-1 h-1 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                                <span>{subFeature.text}</span>
                              </motion.li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 border-t border-blue-500/20 flex justify-end">
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                onClick={handleClose}
              >
                Cerrar
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
} 