import { Helmet } from 'react-helmet-async'
import { Box } from '@material-ui/core'
import CardDefault from '../components/Card'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>public house - Home</title>
      </Helmet>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <CardDefault
          titulo="Categorias de los productos"
          to="/categorias-productos"
        />
        <CardDefault titulo="Productos" icon="Food" to="/productos" />
        <CardDefault titulo="Pedidos" icon="Ballot" to="/pedidos" />
      </Box>
    </>
  )
}
