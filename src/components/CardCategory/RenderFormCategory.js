import {
  Box,
  FormControl,
  TextField,
  FormHelperText,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core'
import { InsertPhotoOutlined } from '@material-ui/icons'
import { CardSecondary } from '../Card'
import { useStyleForm } from './style'

export const RenderFormCategory = ({
  value = { nombre: '' },
  onChange,
  onChangeFile,
  onSubmit,
  imgBase64 = '',
  handleCleanData,
}) => {
  const classes = useStyleForm()

  return (
    <CardSecondary>
      <Box display="flex" justifyContent="space-between" marginBottom={2}>
        <Typography variant="h5">Formulario categoria productos</Typography>
        {(value.nombre !== '' || imgBase64 !== '') && (
          <Button onClick={handleCleanData}>limpiar</Button>
        )}
      </Box>
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <TextField
            label="Nombre de la categoria"
            variant="filled"
            onChange={onChange}
            value={value.nombre}
            name="nombre"
          />
          <FormHelperText>
            nombre de la categoria para cada producto
          </FormHelperText>
        </FormControl>
        <FormControl className={`${classes.formControl} ${classes.formIcon}`}>
          <input
            accept="image/*"
            className={classes.input}
            id="button-icon-upload"
            type="file"
            onChange={onChangeFile}
          />
          <label htmlFor="button-icon-upload">
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
          className={classes.formControl}
          style={{ margin: '10px 0', alignItems: 'center' }}
        >
          {imgBase64 !== '' && <img width="200" src={imgBase64} alt="base64" />}
        </FormControl>
        <FormControl className={classes.formControl} style={{ marginTop: 10 }}>
          <Button type="submit" variant="outlined" onClick={onSubmit}>
            {value.id ? 'Editar categoria' : 'Crear categoria'}
          </Button>
        </FormControl>
      </form>
    </CardSecondary>
  )
}
