import {useState,useEffect} from 'react'

const ControlPresupuesto = ({presupuesto, gastos}) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(()=>{
        
    },[gastos])
  
    const formatearCantidad = cantidad => {
        return cantidad.toLocaleString("en-US",{
            style: "currency", 
            currency: "USD"
        })
    }
  
    return (

   

    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Grafica aqui</p>
        </div>
        <div className="contenido-presupuesto">
            <p> <span>Presupuesto:</span> {formatearCantidad(presupuesto)} </p>
            <p> <span>Disponible:</span> {formatearCantidad(disponible)} </p>
            <p> <span>Gastado:</span> {formatearCantidad(gastado)} </p>
        </div>
      
    </div>
  )
}

export default ControlPresupuesto
