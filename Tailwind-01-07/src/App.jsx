import { useState } from 'react'
import './App.css'
import Botao from './components/Botao'
import Header from './components/Header'
import { linksNav } from './data/conteudo'
import Hero from './components/Hero'

function App() {

  return (
    <>
      <Header links={linksNav} />
      <Hero titulo="Café Perfeito Para o Seu Dia" subtitulo="Saboreie grãos selecionados, preparados com dedicação para transformar cada xícara em um momento especial." imagem="https://media.istockphoto.com/id/2232885441/pt/foto/white-cup-of-black-coffee-on-coffee-beans-background-top-view.jpg?s=1024x1024&w=is&k=20&c=eJ6AU9Xya2Hb31wFBG4gEKoqa-2G0GhW5gje4Lkk0_Y=" />

    </>

  )
}

export default App
