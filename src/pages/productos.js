import { Helmet } from 'react-helmet-async'
import LayoutPrincipal from '../components/LayoutPrincipal'

export default function ProductosPage() {
  return (
    <>
      <Helmet>
        <title>public house - Productos</title>
      </Helmet>
      <LayoutPrincipal>
        <h1>Productos</h1>
      </LayoutPrincipal>
    </>
  )
}
