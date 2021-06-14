import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import CardProducto, { FormProducto } from '../components/CardProducto'
import {
  obtenerProductosServicios,
  eliminarProductoServices,
} from '../services/productoSevicios'
import modelProducto from '../models/modelProducto'
import { useQuery } from '../hooks/useQuery'
import { obtenerCatProdServicios } from '../services/categoriasProductosServicios'

export default function PedidosPage() {
  const { data, isError, isLoading, msgError, refresh } = useQuery(
    obtenerProductosServicios
  )
  const [valProducto, setValProducto] = useState(modelProducto)
  const categorias = useQuery(obtenerCatProdServicios)

  const handleEditOrDelete = async (data, isEdit) => {
    isEdit && setValProducto(data)
    if (!isEdit) {
      const confirmarPregunta = confirm(
        'si eleminas este producto, eliminaras relaciones con los pedidos'
      )
      if (confirmarPregunta) {
        await eliminarProductoServices(data)
        refresh()
      }
    }
  }

  useEffect(async () => {
    await categorias.refresh()
    await refresh()
  }, [])

  return (
    <>
      <Helmet>
        <title>public house - pedidos</title>
      </Helmet>
      <CardProducto
        data={data}
        isError={isError}
        isLoading={isLoading}
        msgError={msgError}
        handleEditOrDelete={handleEditOrDelete}
        categorias={categorias.data}
      />
      <FormProducto
        refresh={refresh}
        setValProducto={setValProducto}
        valProducto={valProducto}
        categorias={categorias}
      />
    </>
  )
}
