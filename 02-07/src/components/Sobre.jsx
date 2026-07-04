import React from 'react'

function Sobre({ eyebrow, titulo, citacao, texto }) {
  return (
    <section id="sobre" className="py-20 px-6 bg-fundo-elevado">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <p className="font-mono text-xs tracking-widest text-texto-secundario uppercase mb-4">
            {eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold text-texto-principal leading-tight">
            {titulo}
          </h2>
        </div>

        <div className="border-l-2 border-vermelho-selo pl-6">
          <p className="font-display text-xl text-texto-principal leading-snug mb-4">
            {citacao}
          </p>
          <p className="text-texto-secundario leading-relaxed">
            {texto}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Sobre