import { Helmet } from 'react-helmet-async'
import CardCategory from '../components/CardCategory'

export default function CategoriasProductosPage() {
  return (
    <>
      <Helmet>
        <title>public house - CategoriasProductos</title>
      </Helmet>
      <CardCategory />
    </>
  )
}
