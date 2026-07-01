import Botao from './Components/Botao'
import './App.css'
import Card from './Components/Card'
import img0 from './assets/clique.png'
import img1 from './assets/chat.png'
import img2 from './assets/chat2.png'

function App() {


  return (
    <div>
      <h1>SextafeiraSemBarra</h1>
      <Botao forma={"btn-primario"} texto={"CLique"} />
      <Botao forma={"btn-segundario"} texto={"Saiba menos"} />
      <Botao forma={"btn-desativado"} texto={"vender"} />
      <div>
        
        <Card foto = {img0} if (button onclick){
          foto = {img1}
          foto = {img2}
        } {
          
        }/>
      </div>
    </div>


  )
}

export default App
