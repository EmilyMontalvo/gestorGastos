import Gasto from "./Gasto"

const ListadoGastos = ({gastos, gastoEditar, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) => {
  return (
    <div className="listado-gastos contenedor">
        
        {
          filtro ? ( 
            <>
            <h2>{gastosFiltrados.length? "Gastos":"No hay gastos en esta categoria"}</h2>
            {gastosFiltrados.map( gasto => (
              <Gasto
                  key= {gasto.id}
                  gasto ={gasto}
                  gastoEditar = {gastoEditar}
                  setGastoEditar = {setGastoEditar}
                  eliminarGasto = {eliminarGasto}
              />))}
              </>
          ):(
            <>
            <h2>{gastos.length? "Todos los Gastos":"No hay gastos aun"}</h2>
            {gastos.map( gasto => (
              <Gasto
                  key= {gasto.id}
                  gasto ={gasto}
                  gastoEditar = {gastoEditar}
                  setGastoEditar = {setGastoEditar}
                  eliminarGasto = {eliminarGasto}
              />))}
            </>
          )
        }
    </div>
  )
}

export default ListadoGastos
