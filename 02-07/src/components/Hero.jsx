import React from 'react'
import Botao from './Botao'

function Hero({ eyebrow, titulo, destaque, subtitulo }) {
  return (
    <section id="inicio" className="pt-32 pb-20 px-6 bg-fundo-base">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <p className="font-mono text-xs tracking-widest text-texto-secundario uppercase mb-4">
            {eyebrow}
          </p>

          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-tight text-texto-principal">
            {titulo}{" "}
            <span className="text-verde-selo">{destaque}</span>.
          </h1>

          <p className="mt-6 text-lg text-texto-secundario max-w-md">
            {subtitulo}
          </p>

          <div className="mt-8 flex gap-4">
            <Botao texto="Ver catálogo" variante="primario" href="#catalogo" />
            <Botao texto="Como avaliamos" variante="secundario" href="#sobre" />
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-80 h-80">
            <span className="absolute -top-4 -right-2 rotate-6 bg-amarelo-selo text-texto-principal text-xs font-mono px-3 py-1 rounded-md shadow-sm">
              SELO · 001
            </span>

            <svg viewBox="0 0 300 300" className="w-full h-full">
              <circle cx="150" cy="150" r="145" fill="#1a1a1a" />
              <path id="curva" d="M 150,40 A 110,110 0 1 1 149,40" fill="none" />
              <text fontSize="11" fill="#f4f1ea" letterSpacing="2">
                <textPath href="#curva" startOffset="2%">
                  SELO DISCOS · 33⅓ RPM · SELO DISCOS · 33⅓ RPM
                </textPath>
              </text>
              <circle cx="150" cy="150" r="55" fill="#e0a94f" />
              <circle cx="150" cy="150" r="4" fill="#1a1a1a" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero