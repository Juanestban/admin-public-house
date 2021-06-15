import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Box } from '@material-ui/core'
import {
  obtenerPedidosServicios,
  actualizarPedidoServices,
  eliminarPedidoServices,
} from '../services/pedidosServicios'
import { useQuery } from '../hooks/useQuery'
import CardPedido, { FormPedidos } from '../components/CardPedidos'
import { obtenerProductosServicios } from '../services/productoSevicios'

export default function PedidosPage() {
  const { data, refresh } = useQuery(obtenerPedidosServicios)
  const productos = useQuery(obtenerProductosServicios)

  const handleEditOrDelete = async (id, isEdit) => {
    isEdit && (await actualizarPedidoServices(id))
    if (!isEdit) {
      const confirmarPregunta = confirm(
        'si eleminas este pedido, eliminaras relaciones que tengan'
      )
      confirmarPregunta && (await eliminarPedidoServices(id))
    }
    refresh()
  }

  useEffect(async () => {
    await productos.refresh()
    await refresh()
  }, [])

  return (
    <>
      <Helmet>
        <title>public house - pedidos</title>
      </Helmet>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        flexWrap="wrap"
        alignSelf="baseline"
        justifyContent="space-around"
        marginTop="10px"
      >
        <FormPedidos refresh={refresh} productos={productos.data} />
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          alignSelf="baseline"
          justifyContent="space-around"
          marginTop="10px"
        >
          <CardPedido data={data} handleEditOrDelete={handleEditOrDelete} />
        </Box>
      </Box>
    </>
  )
}
