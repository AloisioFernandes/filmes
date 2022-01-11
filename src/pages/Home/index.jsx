import React from 'react'
import { Feather } from '@expo/vector-icons'

import { Container, SearchContainer, Input, SeactButton } from './styles'
import Header from '../../components/Header'

function Home() {
  return (
    <Container>
      <Header  title="React Prime"/>
      <SearchContainer>
        <Input 
          placeholder="Ex Vingadores" 
          placeholderTextColor="#ddd"
        />
        <SeactButton>
          <Feather name="search" size={30} color="#FFF" />
        </SeactButton>
      </SearchContainer>
    </Container>
  )
}

export default Home