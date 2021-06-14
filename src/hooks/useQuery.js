import { useState } from 'react'

export const useQuery = (fetchAxios) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [msgError, setMsgError] = useState('')

  const fetchQuery = async () => {
    try {
      setIsError(false)
      setIsLoading(true)
      const { data } = await fetchAxios()
      setData(data)
      setIsLoading(false)
    } catch ({ response: { mensaje } }) {
      setIsLoading(false)
      setIsError(true)
      setMsgError(mensaje || 'Error en el servidor')
    }
  }

  // falta post, put y delete

  const refresh = () => fetchQuery()

  return { data, isLoading, isError, msgError, refresh }
}
