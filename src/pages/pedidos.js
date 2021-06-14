import { Helmet } from 'react-helmet-async'
import LayoutPrincipal from '../components/LayoutPrincipal'

export default function PedidosPage() {
  return (
    <>
      <Helmet>
        <title>public house - pedidos</title>
      </Helmet>
      <LayoutPrincipal>
        <h1>pedidos</h1>
      </LayoutPrincipal>
    </>
  )
}
