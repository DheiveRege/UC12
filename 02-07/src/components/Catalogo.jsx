import React from 'react'
import CardProduto from './CardProduto'

function Catalogo({ eyebrow, titulo, discos }) {
  return (
    <section id="catalogo" className="py-20 px-6 bg-fundo-elevado">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-mono text-xs tracking-widest text-verde-selo uppercase mb-3">
            {eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold text-texto-principal">
            {titulo}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {discos.map((disco) => (
            <CardProduto key={disco.codigo} {...disco} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Catalogo