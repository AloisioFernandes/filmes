import React from 'react'
import { ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { 
  Container, 
  SearchContainer, 
  Input, 
  Title, 
  BannerButton, 
  Banner 
} from './styles'
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

      <ScrollView>
        <Title>Em cartaz</Title>
        <BannerButton>
          <Banner 
            source={{ uri: 'https://images.unsplash.com/photo-1593814681464-eef5af2b0628?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' }}
          />
        </BannerButton>
      </ScrollView>
    </Container>
  )
}

export default Home
// 10:30