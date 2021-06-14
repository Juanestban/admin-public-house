import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import CardCategory, { FormCategory } from '../components/CardCategory'
import {
  eliminarCatProdServices,
  obtenerCatProdServicios,
} from '../services/categoriasProductosServicios'
import modelCategoria from '../models/modelCategoria'
import { useQuery } from '../hooks/useQuery'

export default function CategoriasProductosPage() {
  const { data, isError, isLoading, msgError, refresh } = useQuery(
    obtenerCatProdServicios
  )
  const [valCategoria, setValCategoria] = useState(modelCategoria)

  const handleEditOrDelete = async (data, isEdit) => {
    isEdit && setValCategoria(data)
    if (!isEdit) {
      const confirmarPregunta = confirm(
        'si eleminas esta categoria, eliminaras los productos que tengan relacion con esta categoria'
      )
      if (confirmarPregunta) {
        await eliminarCatProdServices(data)
        refresh()
      }
    }
  }

  useEffect(refresh, [])

  return (
    <>
      <Helmet>
        <title>public house - CategoriasProductos</title>
      </Helmet>
      <CardCategory
        data={data}
        isError={isError}
        isLoading={isLoading}
        msgError={msgError}
        handleEditOrDelete={handleEditOrDelete}
      />
      <FormCategory
        refresh={refresh}
        setValCategoria={setValCategoria}
        valCategoria={valCategoria}
      />
    </>
  )
}
