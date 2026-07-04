import './App.css'
import './index.css'

import Header from './components/header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Catalogo from './components/Catalogo'
import SessaoEscuta from './components/SessaoEscuta'
import Footer from './components/Footer'

import { linksNav, discos, redesSociais } from './data/conteudo'

function App() {
  return (
    <>
      <Header links={linksNav} />

      <Hero
        eyebrow="Loja de discos usados · Porto Alegre"
        titulo="Cada disco já foi de"
        destaque="alguém"
        subtitulo="Compramos, avaliamos e vendemos vinis com a história ainda gravada no sulco. Curadoria feita à mão, sem algoritmo."
      />

      <Sobre
        eyebrow="Sobre a loja"
        titulo="Do sebo pra tua estante"
        citacao="Avaliamos cada disco pelo estado real do vinil, não só da capa — porque é o sulco que toca, não a arte."
        texto="A Selo nasceu de uma coleção pessoal que não parava de crescer. Hoje compramos acervos inteiros, catalogamos peça por peça e vendemos com nota de conservação visível, do jeito que qualquer colecionador de verdade gostaria de encontrar."
      />

      <Catalogo
        eyebrow="Catálogo em destaque"
        titulo="O que chegou essa semana"
        discos={discos}
      />

      <SessaoEscuta
        eyebrow="Todo sábado"
        titulo="Sessão de escuta"
        texto="Traga um disco da tua coleção e toca pra loja inteira ouvir. Café por conta da casa."
        dia="Sáb"
        horario="18h - 21h"
      />

      <Footer
        nota="SELO-A1-1 · masterizado em porto alegre · toque com cuidado"
        redes={redesSociais}
      />
    </>
  )
}

export default App