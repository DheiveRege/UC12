import { useState } from 'react'
import Botao from './Components/Botao'
import './App.css'
import Card from './Components/Card'
import img0 from './assets/clique.png'
import img1 from './assets/chat.png'
import img2 from './assets/chat2.png'

function App() {
  const [foto, setFoto] = useState(img0)

  const trocarFoto = () => {
    if (foto === img0) {
      setFoto(img1)
    } else if (foto === img1) {
      setFoto(img2)
    } else {
      setFoto(img0)
    }
    console.log("TESTE")
  }

  return (
    <div>
      <h1>SextafeiraSemBarra</h1>
      <Botao forma={"btn-primario"} texto={"CLique"} />
      <Botao forma={"btn-segundario"} texto={"Saiba menos"} />
      <Botao forma={"btn-desativado"} texto={"vender"} />
      <div>
        <Card foto={foto} onTrocarFoto={trocarFoto} />
      </div>
    </div>
  )
}

export default App