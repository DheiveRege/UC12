import { useState } from 'react'
import './App.css'
import Botao from './components/Botao'
import Header from './components/Header'
import { linksNav } from './data/conteudo'
import Hero from './components/Hero'
import TituloSecao from './components/TituloSecao'
import CardProduto from './components/CardProduto'
import Depoimento from './components/Depoimento'

function App() {

  return (
    <>
      <Header links={linksNav} />
      <Hero titulo="Café Perfeito Para o Seu Dia"
        subtitulo="Saboreie grãos selecionados, preparados com dedicação para transformar cada xícara em um momento especial."
        imagem="https://media.istockphoto.com/id/2232885441/pt/foto/white-cup-of-black-coffee-on-coffee-beans-background-top-view.jpg?s=1024x1024&w=is&k=20&c=eJ6AU9Xya2Hb31wFBG4gEKoqa-2G0GhW5gje4Lkk0_Y=" />

      <TituloSecao
        eyebrow="" />

      <CardProduto
        nome="Café Preto"
        descricao="Café preto encorpado, preparado com grãos selecionados. Aroma intenso e sabor marcante para qualquer momento do dia."
        preco="20,00"
      />
      <Depoimento
        texto="O melhor café que já experimentei. Chegou quentinho e com um aroma incrível!"
        autor="Ana Souza"
        cargo="Cliente"
      />

      <CardProduto
        nome="Cappuccino"
        descricao="Mistura cremosa de café, leite vaporizado e espuma aveludada, finalizada com um toque de chocolate."
        preco="24,90"
      />
      <Depoimento
        texto="Ambiente aconchegante e atendimento excelente. Sempre volto para tomar um cappuccino."
        autor="Carlos Lima"
        cargo="Cliente Frequente"
      />

      <CardProduto
        nome="Latte"
        descricao="Espresso suave combinado com leite vaporizado, proporcionando uma bebida leve, cremosa e equilibrada."
        preco="22,50"
      />
      <Depoimento
        texto="Os grãos são de ótima qualidade e o sabor é marcante. Recomendo para qualquer amante de café."
        autor="Mariana Oliveira"
        cargo="Apaixonada por Café"
      />

      <CardProduto
        nome="Mocha"
        descricao="A combinação perfeita de café expresso, chocolate e leite vaporizado, com um sabor doce e intenso."
        preco="26,90"
      />
      <Depoimento
        texto="Perfeito para começar o dia. Café delicioso, preço justo e atendimento nota dez."
        autor="Lucas Martins"
        cargo="Cliente"
      />



    </>

  )
}

export default App
