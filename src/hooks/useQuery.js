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
    } catch ({ response: { mensaje } }) {
      setMsgError(mensaje || 'Error en el servidor')
    }
  }

  const refresh = () => fetchQuery()

  return { data, isLoading, isError, msgError, refresh }
}
