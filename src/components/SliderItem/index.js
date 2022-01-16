import React from 'react'

import { 
  Container,
  BannerItem,
  Title,
  RateContainer,
  Rate
} from './styles'

import { Ionicons } from '@expo/vector-icons'

function SliderItem() {
  return (
    <Container>
      <BannerItem 
        source={{ uri: 'https://images.unsplash.com/photo-1593814681464-eef5af2b0628?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' }}
      />

      <Title>Título Filme</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#E7A74E" />
        <Rate>9/10</Rate>
      </RateContainer>
    </Container>
  )
}

export default SliderItem