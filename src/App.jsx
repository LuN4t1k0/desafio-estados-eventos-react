import {useState} from 'react'
import './App.css'
import Formulario from './components/Formulario'

function App() {
const [nombre, setNombre] = useState("")
const [password, setPassword] = useState("")



  return (
    <div className="App">
      <Formulario setPassword={setPassword} password={password} nombre={nombre} setNombre={setNombre}/>
    </div>
  )
}

export default App
