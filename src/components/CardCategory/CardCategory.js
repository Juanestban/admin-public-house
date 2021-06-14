import { Typography, TableRow, TableCell, IconButton } from '@material-ui/core'
import { DeleteOutlineOutlined, Edit } from '@material-ui/icons'
import { CardSecondary } from '../Card'
import { TableDefault } from '../Table/TableDefault'
import { useStyleCard } from './style'

export const CardCategory = ({
  isLoading,
  isError,
  msgError,
  data,
  handleEditOrDelete,
}) => {
  const classes = useStyleCard()

  return (
    <CardSecondary>
      <Typography variant="h5">Tabla - Categorias de productos</Typography>
      <TableDefault
        isLoading={isLoading}
        isError={isError}
        msgError={msgError}
        lengthData={data.length}
      >
        {!isLoading &&
          !isError &&
          data.length > 0 &&
          data.map(({ id = 0, nombre, icono }) => (
            <TableRow key={id}>
              <TableCell>
                <img width="50" src={icono} alt={`base64-${nombre}`} />
              </TableCell>
              <TableCell>{nombre}</TableCell>
              <TableCell>
                <IconButton
                  size="small"
                  className={classes.buttonEditDelete}
                  onClick={() =>
                    handleEditOrDelete({ id, nombre, icono }, true)
                  }
                >
                  <Edit />
                </IconButton>
                <IconButton
                  size="small"
                  className={classes.buttonEditDelete}
                  color="secondary"
                  onClick={() => handleEditOrDelete(id)}
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
