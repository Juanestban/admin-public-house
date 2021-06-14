import {
  Box,
  FormControl,
  TextField,
  FormHelperText,
  IconButton,
  Typography,
  Button,
  Select,
  InputLabel,
  MenuItem,
} from '@material-ui/core'
import { InsertPhotoOutlined } from '@material-ui/icons'
import { CardSecondary } from '../Card'
import modelProducto from '../../models/modelProducto'
import { useStyleForm } from './style'

export const RenderFormProducto = ({
  value = modelProducto,
  onChange,
  onChangeFile,
  onSubmit,
  handleCleanData,
  categorias = [],
}) => {
  const classes = useStyleForm()

  return (
    <CardSecondary>
      <Box display="flex" justifyContent="space-between" marginBottom={2}>
        <Typography variant="h5">Formulario productos</Typography>
        {(value.nombre !== '' ||
          value.icono !== '' ||
          value.imagen !== '' ||
          value.id_categoria_producto !== '' ||
          value.precio !== '' ||
          value.stock !== '') && (
          <Button onClick={handleCleanData}>limpiar</Button>
        )}
      </Box>
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <TextField
            label="Nombre que tendra el producto"
            variant="filled"
            onChange={onChange}
            value={value.nombre}
            name="nombre"
          />
          <FormHelperText>Nombre que tendra el producto</FormHelperText>
        </FormControl>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="select-categoria">
            categoria a la que pertenece
          </InputLabel>
          <Select
            labelId="select-categoria"
            value={value.id_categoria_producto}
            name="id_categoria_producto"
            onChange={onChange}
          >
            {categorias.length > 0 ? (
              categorias.map((categoria) => (
                <MenuItem key={categoria.id} value={categoria.id}>
                  {categoria.nombre}
                </MenuItem>
              ))
            ) : (
              <MenuItem value="">NaN</MenuItem>
            )}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            label="stock"
            variant="filled"
            onChange={onChange}
            value={value.stock}
            name="stock"
            type="number"
          />
          <FormHelperText>
            cantidad del stock que tendra del producto
          </FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            label="precio"
            variant="filled"
            onChange={onChange}
            value={value.precio}
            name="precio"
            type="number"
          />
          <FormHelperText>precio del producto</FormHelperText>
        </FormControl>
        <FormControl className={`${classes.formControl} ${classes.formIcon}`}>
          <input
            accept="image/*"
            className={classes.input}
            id="button-icon-upload"
            type="file"
            name="icono"
            onChange={onChangeFile}
          />
          <label htmlFor="button-icon-upload">
            <IconButton
              component="span"
              className={classes.iconButton}
              aria-label="upload image"
            >
              <InsertPhotoOutlined />
              <Typography variant="subtitle2">subir icono</Typography>
            </IconButton>
          </label>
          <input
            accept="image/*"
            className={classes.input}
            id="button-icon-upload-2"
            type="file"
            name="imagen"
            onChange={onChangeFile}
          />
          <label htmlFor="button-icon-upload-2">
            <IconButton
              component="span"
              className={classes.iconButton}
              aria-label="upload image"
            >
              <InsertPhotoOutlined />
              <Typography variant="subtitle2">subir imagen</Typography>
            </IconButton>
          </label>
        </FormControl>
        <FormControl
          className={`${classes.formControl} ${classes.formIcon}`}
          style={{ margin: '10px 0', justifyContent: 'space-around' }}
        >
          {value.icono !== '' && (
            <img width="100" src={value.icono} alt="base64-1" />
          )}
          {value.imagen !== '' && (
            <img width="100" src={value.imagen} alt="base64-2" />
          )}
        </FormControl>
        <FormControl className={classes.formControl}>
          <Button type="submit" variant="outlined" onClick={onSubmit}>
            {value.id ? 'Editar producto' : 'Crear producto'}
          </Button>
        </FormControl>
      </form>
    </CardSecondary>
  )
}
