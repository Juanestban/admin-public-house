import {
  Box,
  FormControl,
  TextField,
  FormHelperText,
  Typography,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core'
import { CardSecondary } from '../Card'
import { useStyleForm } from './style'
import modelPedidos from '../../models/modelPedidos'

export const RenderFormPedidos = ({
  value = modelPedidos,
  onChange,
  onChangeOther,
  onSubmit,
  handleCleanData,
  productos = [],
}) => {
  const classes = useStyleForm()

  return (
    <CardSecondary>
      <Box display="flex" justifyContent="space-between" marginBottom={2}>
        <Typography variant="h5">Formulario Pedidos</Typography>
        {(value.precio_total !== '' ||
          value.productos[0].cantidad !== '' ||
          value.productos[0].id_producto !== '' ||
          value.productos[0].precio_cantidad !== '') && (
          <Button onClick={handleCleanData}>limpiar</Button>
        )}
      </Box>
      <form autoComplete="off">
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="select-producto">producto a pedir</InputLabel>
          <Select
            labelId="select-producto"
            value={value.productos[0].id_producto}
            name="id_producto"
            onChange={onChangeOther}
          >
            {productos.length > 0 ? (
              productos.map(({ id, nombre }) => (
                <MenuItem key={id} value={id}>
                  {nombre}
                </MenuItem>
              ))
            ) : (
              <MenuItem value="">NaN</MenuItem>
            )}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            label="Pecio total"
            variant="filled"
            onChange={onChange}
            value={value.precio_total}
            name="precio_total"
            type="number"
          />
          <FormHelperText>Precio total que tendra el pedido</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            label="Cantidad"
            variant="filled"
            value={value.productos[0].cantidad}
            onChange={onChangeOther}
            name="cantidad"
            type="number"
          />
          <FormHelperText>cantidad para cada producto</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            label="Precio de cantidad"
            variant="filled"
            value={value.productos[0].precio_cantidad}
            onChange={onChangeOther}
            name="precio_cantidad"
            type="number"
          />
          <FormHelperText>precio de cantidad del producto</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl} style={{ marginTop: 10 }}>
          <Button type="submit" variant="outlined" onClick={onSubmit}>
            Crear pedido
          </Button>
        </FormControl>
      </form>
    </CardSecondary>
  )
}
