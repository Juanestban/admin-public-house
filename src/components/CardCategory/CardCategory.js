import { Fragment } from 'react'
import { Card, CardContent, Typography, TableCell } from '@material-ui/core'
import { TableDefault } from '../Table/TableDefault'
import { obtenerCatProdServicios } from '../../services/categoriasProductosServicios'
import { useQuery } from '../../hooks/useQuery'

export const CardCategory = () => {
  const { data, isError, isLoading, msgError, refresh } = useQuery(
    obtenerCatProdServicios
  )

  return (
    <Card>
      <CardContent>
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
            data.map(({ id = 0 }) => (
              <Fragment key={id}>
                <TableCell>primer dato 1</TableCell>
                <TableCell>segundo dato</TableCell>
                <TableCell>tercero dato</TableCell>
              </Fragment>
            ))}
        </TableDefault>
      </CardContent>
    </Card>
  )
}
