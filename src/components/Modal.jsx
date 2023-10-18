import { useState } from "react"
import Mensaje from "./Mensaje"
import CerrarBtn from "../img/cerrar.svg"


const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {

const [nombre, setNombre] = useState("")
const [cantidad, setCantidad] = useState(0)
const [categoria, setCategoria] = useState("")
const [mensaje, setMensaje] = useState("")



const ocultarModal = () => {
    
    setAnimarModal(false)
    
    setTimeout(()=>{setModal(false)},500)
}
const handleSubmit = e => { 
    e.preventDefault()
    if([nombre, cantidad, categoria].includes("")){
        setMensaje("Todos los campos son obligatorios")
        setTimeout(()=>{setMensaje("")},3000)
        return
    }

    guardarGasto({nombre, cantidad, categoria})
}


  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
        </div>
        <form onSubmit={handleSubmit} action="" className={`formulario ${animarModal?"animar":"cerrar"}`}>
            <legend>Nuevo Gasto</legend>
            {mensaje && <Mensaje tipo = "error"> {mensaje} </Mensaje>}
            <div className="campo">
                <label htmlFor="nombre">Nombre Gasto</label>
                <input type="text" name="" id="nombre" placeholder="Añade el nombre del gasto" value={nombre} onChange={e=> setNombre(e.target.value)}/>
            </div>
            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>
                <input type="number" name="" id="cantidad" placeholder="Añade la cantidad del gasto ej. 300" value={cantidad} onChange={e=> setCantidad(Number(e.target.value))}/>
            </div>
            <div className="campo">
                <label htmlFor="categoria">Categoria</label>
                <select name="" id="categoria" value={categoria} onChange={e=>setCategoria(e.target.value)} > 
                    <option value="">--Seleccione--</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="subscripciones">Subscripciones</option>
                </select>
                
            </div>
            <input type="submit" value="Añadir Gasto"/>



        </form>
      
    </div>
  )
}

export default Modal
