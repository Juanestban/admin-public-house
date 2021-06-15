import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core'

export const TableProductoPedido = ({ data = [] }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>img</TableCell>
          <TableCell>producto</TableCell>
          <TableCell>cantidad</TableCell>
          <TableCell>pecio de la cantidad</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((prodPed) => (
          <TableRow key={prodPed.id}>
            <TableCell>
              <img width="50" src={prodPed.icono} alt="img-base64" />
            </TableCell>
            <TableCell>{prodPed.nombre_producto}</TableCell>
            <TableCell>{prodPed.cantidad}</TableCell>
            <TableCell>${prodPed.precio_cantidad}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)
