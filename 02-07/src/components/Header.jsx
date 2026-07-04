import React from 'react'

function Header({ links }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-fundo-base border-b border-fundo-elevado shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="font-display text-3xl text-texto-principal">
          Disco
        </h1>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="font-body text-texto-secundario hover:text-vermelho-selo transition-colors duration-300"
            >
              {link.texto}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header