import axios from 'axios'
import URL_API from '../config/urlApi'

const currentUrl = `${URL_API}/productos`

export const obtenerProductosServicios = () => axios.get(currentUrl)

export const encontrarPorIdProductoServices = (id) =>
  axios.get(`${currentUrl}/${id}`)

export const crearProductoServicios = (data) => axios.post(currentUrl, data)

export const actualizarProductoServices = (id, data) =>
  axios.put(`${currentUrl}/${id}`, data)

export const eliminarProductoServices = (id) =>
  axios.delete(`${currentUrl}/${id}`)
