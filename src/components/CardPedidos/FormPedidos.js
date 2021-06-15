import { useState } from 'react'
import modelPedidos from '../../models/modelPedidos'
import { RenderFormPedidos } from './RenderFormPedidos'
import { crearPedidoServicios } from '../../services/pedidosServicios'

export const FormPedidos = ({ refresh, productos = [] }) => {
  const [datosPedidos, setDatosPedidos] = useState(modelPedidos)

  const handleChange = ({ target: { name, value } }) =>
    setDatosPedidos({ ...datosPedidos, [name]: value })

  const handleChangeOther = ({ target: { name, value } }) =>
    setDatosPedidos({
      ...datosPedidos,
      productos: [{ ...datosPedidos.productos[0], [name]: value }],
    })

  const handleCleanData = () => setDatosPedidos(modelPedidos)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await crearPedidoServicios(datosPedidos)
    handleCleanData()
    refresh()
  }

  return (
    <RenderFormPedidos
      value={datosPedidos}
      handleCleanData={handleCleanData}
      onSubmit={handleSubmit}
      onChange={handleChange}
      onChangeOther={handleChangeOther}
      productos={productos}
    />
  )
}
