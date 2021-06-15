import { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  IconButton,
  Chip,
  Button,
  CircularProgress,
} from '@material-ui/core'
import { DeleteOutlineOutlined } from '@material-ui/icons'
import { CardSecondary } from '../Card'
import { useStyleCard } from './style'
import TableProductoPedido from '../TableProductoPedido'
import { obtenerProductoPedidoPorId } from '../../services/pedidosServicios'

export const RenderCardPedido = ({
  id = 0,
  precio_total = '',
  estado_pedido = '',
  handleEditOrDelete = () => {},
}) => {
  const classes = useStyleCard()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const refresh = async () => {
    try {
      setError(false)
      setLoading(true)
      const { data } = await obtenerProductoPedidoPorId(id)
      setLoading(false)
      setData(data)
    } catch {
      setLoading(false)
      setError(true)
    }
  }

  useEffect(refresh, [])

  return (
    <CardSecondary>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5">Pedido #{id}</Typography>
        <Chip
          variant="outlined"
          color={estado_pedido === 'FINALIZADO' ? 'secondary' : 'primary'}
          size="small"
          label={estado_pedido}
        />
      </Box>
      <Typography variant="subtitle1">pecio total: ${precio_total}</Typography>
      <Typography variant="overline">Productos</Typography>
      {loading && <CircularProgress />}
      {!loading && !error && data.length > 0 && (
        <TableProductoPedido data={data} />
      )}
      <Box display="flex" marginTop={2} justifyContent="space-between">
        <Button
          variant="outlined"
          onClick={() => handleEditOrDelete(id, true)}
          disabled={estado_pedido === 'FINALIZADO'}
        >
          Finalizar pedido
        </Button>
        <IconButton
          size="small"
          className={classes.buttonEditDelete}
          color="secondary"
          onClick={() => handleEditOrDelete(id)}
        >
          <DeleteOutlineOutlined />
        </IconButton>
      </Box>
    </CardSecondary>
  )
}
