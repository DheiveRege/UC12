import React from 'react'

function SessaoEscuta({ eyebrow, titulo, texto, dia, horario }) {
  return (
    <section className="bg-texto-principal py-16 px-6">
      <div className="max-w-6xl mx-auto bg-fundo-base rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-mono text-xs tracking-widest text-verde-selo uppercase mb-3">
            {eyebrow}
          </p>
          <h3 className="font-display text-3xl font-semibold text-texto-principal mb-2">
            {titulo}
          </h3>
          <p className="text-texto-secundario max-w-sm">{texto}</p>
        </div>

        <div className="flex items-center gap-6 border-l border-fundo-elevado pl-6">
          <span className="w-2 h-2 rounded-full bg-vermelho-selo" />
          <div>
            <p className="font-display text-2xl text-texto-principal">{dia}</p>
            <p className="text-sm text-texto-secundario">{horario}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SessaoEscuta