import { useState } from "react"
import Header from "./components/Header"
import IconoNuevoGasto from "./img/nuevo-gasto.svg"
import Modal from "./components/Modal"

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const handleNuevoGasto = () => {
    setModal(true)
    setTimeout(() => { setAnimarModal(true)}, 500) 

  }

  return (
    <div>
      <Header 
      presupuesto = {presupuesto}
      setPresupuesto = {setPresupuesto}
      isValidPresupuesto ={isValidPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto&&(
        // Cuando isValidPresupuesto sea verdadero con && se ejecuta la sig funcion, no hace falta el : y otra condicion
        <div className="nuevo-gasto">
        <img src={IconoNuevoGasto} alt="Icono nuevo gasto" onClick={handleNuevoGasto} />
      </div>
      )}

      {modal && <Modal
      setModal ={setModal}
      animarModal = {animarModal}
      setAnimarModal ={setAnimarModal}
      /> }

      </div>
  )
}

export default App
