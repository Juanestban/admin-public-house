import { Typography, TableRow, TableCell, IconButton } from '@material-ui/core'
import { DeleteOutlineOutlined, Edit } from '@material-ui/icons'
import { CardSecondary } from '../Card'
import { TableDefault } from '../Table/TableDefault'
import { useStyleCard } from './style'

export const CardProducto = ({
  isLoading,
  isError,
  msgError,
  data,
  handleEditOrDelete,
  categorias = [],
}) => {
  const classes = useStyleCard()

  return (
    <CardSecondary>
      <Typography variant="h5">Tabla - productos</Typography>
      <TableDefault
        isLoading={isLoading}
        isError={isError}
        msgError={msgError}
        lengthData={data.length}
      >
        {!isLoading &&
          !isError &&
          data.length > 0 &&
          data.map((prod) => (
            <TableRow key={prod.id}>
              <TableCell>
                <img
                  width="50"
                  src={prod.icono}
                  alt={`base64-${prod.nombre}`}
                />
              </TableCell>
              <TableCell>
                <img
                  width="50"
                  src={prod.imagen}
                  alt={`base64-${prod.nombre}`}
                />
              </TableCell>
              <TableCell>{prod.nombre}</TableCell>
              <TableCell>{prod.precio}</TableCell>
              <TableCell>{prod.stock}</TableCell>
              <TableCell>
                {
                  categorias.find(({ id }) => prod.id_categoria_producto === id)
                    .nombre
                }
              </TableCell>
              <TableCell width="120px">
                <IconButton
                  size="small"
                  className={classes.buttonEditDelete}
                  onClick={() => handleEditOrDelete(prod, true)}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  size="small"
                  className={classes.buttonEditDelete}
                  color="secondary"
                  onClick={() => handleEditOrDelete(prod.id)}
                >
                  <DeleteOutlineOutlined />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
      </TableDefault>
    </CardSecondary>
  )
}
