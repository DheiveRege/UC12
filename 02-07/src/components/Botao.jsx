import React from 'react'

function Botao({ texto, variante = "primario", href }) {
  const estilos = {
    primario:
      "bg-amarelo-selo text-texto-principal hover:bg-vermelho-selo hover:text-white",

    secundario:
      "bg-transparent text-texto-principal border-1 border-texto-principal hover:bg-texto-principal hover:text-fundo-base",
  };

  return (
    <a
      href={href}
      className={`inline-block px-6 py-3 rounded-full font-body font-medium transition-all duration-300 ${estilos[variante]}`}
    >
      {texto}
    </a>
  );
}

export default Botao;