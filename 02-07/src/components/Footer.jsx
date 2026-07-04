import React from 'react'

function Footer({ nota, redes }) {
  return (
    <footer className="bg-texto-principal py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs font-mono text-fundo-elevado">
        <p>‹ {nota} ›</p>
        <div className="flex gap-4 items-center">
          {redes.map((rede) => (
            <a key={rede.nome} href={rede.href} className="hover:text-amarelo-selo transition-colors">
              {rede.nome}
            </a>
          ))}
          <span>© 2026 Selo</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer