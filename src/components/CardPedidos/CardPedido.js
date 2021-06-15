import { CircularProgress, Typography } from '@material-ui/core'
import { RenderCardPedido } from './RenderCardPedido'

export const CardPedido = ({
  isLoading,
  isError,
  msgError,
  data = [],
  handleEditOrDelete,
}) => {
  return (
    <>
      {isLoading && <CircularProgress />}
      {isError && <Typography>{msgError}</Typography>}
      {!isLoading &&
        !isError &&
        data.length > 0 &&
        data.map((pedido) => (
          <RenderCardPedido
            key={pedido.id}
            handleEditOrDelete={handleEditOrDelete}
            {...pedido}
          />
        ))}
    </>
  )
}
