import Gasto from "./Gasto"

const ListadoGastos = ({gastos, gastoEditar, setGastoEditar}) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{gastos.length? "Gastos":"No hay gastos aun"}</h2>
        {gastos.map( gasto => (
        <Gasto
            key= {gasto.id}
            gasto ={gasto}
            gastoEditar = {gastoEditar}
            setGastoEditar = {setGastoEditar}
        />))}

    </div>
  )
}

export default ListadoGastos
