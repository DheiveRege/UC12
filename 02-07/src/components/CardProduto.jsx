import React from 'react'

function CardProduto({ imagem, estado, titulo, subtitulo, codigo, preco }) {
  return (
    <div className="bg-fundo-base rounded-2xl overflow-hidden shadow-sm">
      <div className="relative aspect-square">
        <img src={imagem} alt={titulo} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-fundo-base/90 text-texto-principal text-xs font-mono px-2 py-1 rounded-full">
          {estado}
        </span>
      </div>

      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="font-display text-lg text-texto-principal">{titulo}</h3>
          <p className="text-sm italic text-texto-secundario">{subtitulo}</p>
          <p className="text-xs font-mono text-texto-secundario mt-1">{codigo}</p>
        </div>
        <span className="bg-amarelo-selo text-texto-principal text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap">
          R$ {preco}
        </span>
      </div>
    </div>
  )
}

export default CardProduto