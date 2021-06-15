import axios from 'axios'
import URL_API from '../config/urlApi'

const currentUrl = `${URL_API}/pedidos`

export const obtenerPedidosServicios = () => axios.get(currentUrl)

export const encontrarPorIdPedidoServices = (id) =>
  axios.get(`${currentUrl}/${id}`)

export const crearPedidoServicios = (data) => axios.post(currentUrl, data)

export const actualizarPedidoServices = (id) => axios.put(`${currentUrl}/${id}`)

export const eliminarPedidoServices = (id) =>
  axios.delete(`${currentUrl}/${id}`)

// Producto pedido
const urlProductPedido = `${URL_API}/productoPedido-pedido`

export const obtenerProductoPedidoPorId = (id) =>
  axios.get(`${urlProductPedido}/${id}`)
