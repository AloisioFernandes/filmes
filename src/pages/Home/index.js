import React from 'react'
import { Feather } from '@expo/vector-icons'

import { Container, SearchContainer, Input, SearchButton } from './styles'
import Header from '../../components/Header'

function Home() {
  return (
    <Container>
      <Header title="React Prime"/>
      <SearchContainer>
        <Input 
          placeholder="Ex Vingadores" 
          placeholderTextColor="#ddd"
        />
        <SearchButton>
          <Feather name="search" size={30} color="#FFF" />
        </SearchButton>
      </SearchContainer>
    </Container>
  )
}

export default Home
// 03:00