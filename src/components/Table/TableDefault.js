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
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>{children}</TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              // length of array
              count={lengthData}
              // rowsPerPage={}
              // page={}
              // SelectProps={}
              // onChangePage={}
              // onChangeRowsPerPage={}
              // ActionsComponent={}
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
