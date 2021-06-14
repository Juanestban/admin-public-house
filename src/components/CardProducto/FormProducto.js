import { useTransformBase64 } from '../../hooks/useTransformBase64'
import {
  crearProductoServicios,
  actualizarProductoServices,
} from '../../services/productoSevicios'
import { RenderFormProducto } from './RenderFormProducto'
import modelProducto from '../../models/modelProducto'

export const FormProducto = ({
  refresh,
  setValProducto,
  valProducto,
  categorias = { data: [] },
}) => {
  const transformBase64 = useTransformBase64()

  const handleChange = ({ target: { name, value } }) =>
    setValProducto({ ...valProducto, [name]: value })

  const handleChangeFile = ({ target: { files, name } }) => {
    const img = files[0]
    transformBase64(img, (base64) =>
      setValProducto({ ...valProducto, [name]: base64 })
    )
  }

  const handleCleanData = () => setValProducto(modelProducto)

  const handleSubmit = async (e) => {
    e.preventDefault()
    !valProducto.id
      ? await crearProductoServicios(valProducto)
      : await actualizarProductoServices(valProducto.id, valProducto)
    setValProducto(modelProducto)
    refresh()
  }

  return (
    <RenderFormProducto
      onChange={handleChange}
      onChangeFile={handleChangeFile}
      onSubmit={handleSubmit}
      value={valProducto}
      imgBase64={valProducto.icono}
      handleCleanData={handleCleanData}
      categorias={categorias.data}
    />
  )
}
