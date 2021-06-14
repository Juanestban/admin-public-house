import { useTransformBase64 } from '../../hooks/useTransformBase64'
import {
  crearCatProdServicios,
  actualizarCatProdServices,
} from '../../services/categoriasProductosServicios'
import { RenderFormCategory } from './RenderFormCategory'
import modelCategoria from '../../models/modelCategoria'

export const FormCategory = ({ refresh, setValCategoria, valCategoria }) => {
  const transformBase64 = useTransformBase64()

  const handleChange = ({ target: { name, value } }) =>
    setValCategoria({ ...valCategoria, [name]: value })

  const handleChangeFile = ({ target: { files } }) => {
    const img = files[0]
    transformBase64(img, (base64) =>
      setValCategoria({ ...valCategoria, icono: base64 })
    )
  }

  const handleCleanData = () => setValCategoria(modelCategoria)

  const handleSubmit = async (e) => {
    e.preventDefault()
    !valCategoria.id
      ? await crearCatProdServicios(valCategoria)
      : await actualizarCatProdServices(valCategoria.id, valCategoria)
    setValCategoria(modelCategoria)
    refresh()
  }

  return (
    <RenderFormCategory
      onChange={handleChange}
      onChangeFile={handleChangeFile}
      onSubmit={handleSubmit}
      value={valCategoria}
      imgBase64={valCategoria.icono}
      handleCleanData={handleCleanData}
    />
  )
}
