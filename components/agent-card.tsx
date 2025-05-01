"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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
  return (
    <div className="relative group h-full py-2 overflow-visible z-10" style={{ overflow: 'visible' }}>
      {/* Badge sobresaliendo la mitad superior, perfectamente alineado y nunca cortado */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-7 z-20" style={{ pointerEvents: 'none', overflow: 'visible' }}>
        <div className="bg-black/30 shadow-xl rounded-full p-2 border-4 border-blue-500/30" style={{ overflow: 'visible' }}>
          <div className="w-14 h-14 flex items-center justify-center bg-black/30 rounded-full backdrop-blur-md overflow-visible">
            {icon}
          </div>
        </div>
      </div>

      {/* Recuadro principal SIN animaciones */}
      <div
        className="bg-black/20 backdrop-blur-lg rounded-2xl border border-blue-900/50 shadow-2xl pt-14 pb-6 px-4 h-full flex flex-col relative z-10 overflow-visible"
        style={{ minHeight: '22rem', paddingBottom: '2.5rem', paddingTop: '3.5rem', overflow: 'visible' }}
      >
        {/* Fondo glassmorphism y contenido */}
        <div className="relative z-10 bg-black/20 rounded-2xl pt-2 pb-4 px-2 flex flex-col gap-4 min-h-[14rem] justify-between shadow-inner" style={{overflow: 'visible'}}>
          <div className="text-center px-2 mt-6">
            <h3 className="text-2xl font-extrabold text-white drop-shadow-sm mb-1 break-words">{name}</h3>
            <p className="text-blue-100/90 text-base mb-2 break-words">{description}</p>
          </div>

          {/* Stats vistosos */}
          <div className="flex flex-wrap justify-center gap-2 mb-2 px-2">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="px-3 py-1 bg-black/30 text-white rounded-full text-sm font-semibold shadow border border-blue-600/40 backdrop-blur-sm whitespace-nowrap"
              >
                <span className="text-lg font-bold mr-1 text-blue-200/95">{stat.value}</span>
                <span className="opacity-80">{stat.label}</span>
              </div>
            ))}
          </div>

          {onExplore && (
            <Button
              variant="outline"
              className="w-full justify-center gap-2 border-2 border-blue-700/40 bg-black/30 text-white font-bold shadow-md mt-2"
              onClick={onExplore}
              style={{ textShadow: '0 0 6px #5eefff66' }}
            >
              Explorar agentes
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
