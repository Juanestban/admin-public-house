import { Helmet } from 'react-helmet-async'
import LayoutPrincipal from '../components/LayoutPrincipal'

export default function CategoriasProductosPage() {
  return (
    <>
      <Helmet>
        <title>public house - CategoriasProductos</title>
      </Helmet>
      <LayoutPrincipal>
        <h1>Categorias de los productos</h1>
      </LayoutPrincipal>
    </>
  )
}
