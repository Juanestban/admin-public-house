import { useState } from 'react'
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableFooter,
  TablePagination,
  Typography,
  CircularProgress,
} from '@material-ui/core'

export const TableDefault = ({
  children,
  isLoading = false,
  isError = false,
  msgError = '',
  lengthData = 0,
}) => {
  const [pagina, setPagina] = useState(0)
  const [filasPorPagina, setFilasPorPaginas] = useState(5)

  const handleChangePage = (_, newPage) => setPagina(newPage)

  const handleChangeRowsPerPage = ({ target: { value } }) => {
    setFilasPorPaginas(parseInt(value, 10))
    setPagina(0)
  }

  return (
    <TableContainer>
      <Table>
        <TableBody>{children}</TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={5}
              count={lengthData}
              rowsPerPage={filasPorPagina}
              page={pagina}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
      {!isLoading && isError && (
        <Typography variant="h5">{msgError}</Typography>
      )}
      {isLoading && <CircularProgress />}
    </TableContainer>
  )
}
