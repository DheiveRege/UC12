import { useState } from 'react'
import './App.css'
import Buton from './components/Buton'
import foto from './assets/chat.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Buton text={"TESTEEEEE"} />
      <img src={foto} alt="" />
    </>

  )
}

export default App
