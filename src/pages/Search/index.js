import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native' 

import api, { key } from '../../services/api'

import { Container, Name } from './styles'

function Search() {
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation()
  const routes = useRoute()

  useEffect(() => {
    let isActive = true

    async function getSearchMovie() {
      const response = await api.get('/search/movie', {
        params: {
          query: route?.params?.name,
          api_key: key,
          language: 'pt-BR',
          page: 1
        }
      })

    }

    if(isActive) {
      getSearchMovie()
    }

    return () => {
      isActive = false
    }
  }, [])

  if(loading) {
    return (
      <Container>

      </Container>
    )
  }

  return(
    <Container>
      <Name>TESTE PROCURANDO</Name>
    </Container>
  )
}

export default Search