"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
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
    <div className="relative group h-[420px] w-full max-w-[340px] bg-[rgba(16,16,30,0.85)] backdrop-blur-lg border border-blue-500/30 rounded-2xl shadow-[0_8px_32px_0_rgba(59,130,246,0.25)] overflow-visible flex flex-col items-center justify-between transition-all duration-300 hover:shadow-[0_0_32px_8px_rgba(59,130,246,0.25)]">
      {/* Icono grande y centrado */}
      <div className="flex flex-col items-center w-full pt-8 pb-2 z-20">
        <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-700/60 to-purple-600/40 shadow-xl mb-2 border-4 border-blue-500/30">
  <div className="absolute -inset-1 rounded-full bg-blue-500/20 blur-xl"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/40 to-purple-500/30 blur-2xl"></div>
          <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-[#18182f] shadow-lg">
  <span className="absolute inset-0 rounded-full bg-blue-500/30 blur-md"></span>
            <span className="text-white text-5xl flex items-center justify-center drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]">{icon}</span>
          </div>
        </div>
      </div>
      {/* Card interior */}
      <div className="flex flex-col flex-1 w-full px-6 pb-3 z-30">
        {/* Nombre */}
        <h3 className="text-white text-2xl font-extrabold text-center mb-1 tracking-wide drop-shadow-lg uppercase">{name}</h3>
        {/* Descripción */}
        <p className="text-[#b3b3c3] text-base text-center mb-4 leading-snug min-h-[40px]">{description}</p>
        {/* Stats */}
        <div className="flex flex-col gap-3 mb-2 w-full">
          {stats && stats.length > 0 && stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between w-full px-5 py-2 rounded-lg bg-[rgba(24,24,47,0.95)] border border-blue-500/40 text-white shadow-sm backdrop-blur-md"
              style={{ background: gradient }}
            >
              <span className="text-lg font-extrabold text-blue-400 drop-shadow">{stat.value}</span>
              <span className="text-xs font-semibold text-[#b3b3c3] ml-2 uppercase tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
        {/* Botón */}
        <div className="mt-auto w-full flex items-center justify-center">
          <button
            className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-700/90 to-purple-700/90 text-white font-bold shadow-lg hover:from-blue-600 hover:to-purple-600 border border-blue-500/50 flex items-center justify-center gap-2 transition-all duration-300 tracking-wide uppercase"
            onClick={onExplore}
          >
            Explorar agentes
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
      {/* Bordes decorativos */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-blue-500/40 rounded-tl"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-blue-500/40 rounded-tr"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-blue-500/40 rounded-bl"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-blue-500/40 rounded-br"></div>
        {/* Líneas decorativas */}
        <div className="absolute left-1/2 top-0 w-1 h-8 bg-gradient-to-b from-blue-500/30 to-transparent rounded-b-lg -translate-x-1/2"></div>
        <div className="absolute right-0 top-1/2 h-1 w-8 bg-gradient-to-l from-blue-500/30 to-transparent rounded-l-lg -translate-y-1/2"></div>
        <div className="absolute left-1/2 bottom-0 w-1 h-8 bg-gradient-to-t from-blue-500/30 to-transparent rounded-t-lg -translate-x-1/2"></div>
        <div className="absolute left-0 top-1/2 h-1 w-8 bg-gradient-to-r from-blue-500/30 to-transparent rounded-r-lg -translate-y-1/2"></div>
      </div>
      {/* Decoración sutil fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A23] to-[#1A1A3F] opacity-60 rounded-3xl z-0"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:16px_16px] opacity-20 rounded-3xl z-0"></div>
    </div>
  );
}
