import React from 'react'
import Header from '../../components/Header'

import {} from './styles'

function Movies() {
  return (
    <Container>
      <Header title="Meus filmes" />

      <ListMovies data={[]} />
    </Container>
  )
}

export default Movies