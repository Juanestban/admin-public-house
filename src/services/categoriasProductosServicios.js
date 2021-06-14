import axios from 'axios'
import URL_API from '../config/urlApi'

export const obtenerCatProdServicios = () =>
  axios.get(`${URL_API}/categoriasProductos`)
