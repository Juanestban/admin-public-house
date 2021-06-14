import axios from 'axios'
import URL_API from '../config/urlApi'

const currentUrl = `${URL_API}/categoriasProductos`

export const obtenerCatProdServicios = () => axios.get(currentUrl)

export const encontrarPorIdCatProdServices = (id) =>
  axios.get(`${currentUrl}/${id}`)

export const crearCatProdServicios = (data) => axios.post(currentUrl, data)

export const actualizarCatProdServices = (id, data) =>
  axios.put(`${currentUrl}/${id}`, data)

export const eliminarCatProdServices = (id) =>
  axios.delete(`${currentUrl}/${id}`)
