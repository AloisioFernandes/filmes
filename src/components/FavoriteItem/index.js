import React from 'react'

import { Ionicons, Feather } from '@expo/vector-icons'

function FavoriteItem() {
  return (
    <Container>
      <Title size={22}>Titulo do filme</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#E7A74E" />
        <Rate>6.2/10</Rate>
      </RateContainer>

      <ActionContainer>
        <DetailButton>
          <Title size={14}>Ver Detalhes</Title>
        </DetailButton>

        <DeleteButton>
          <Feather name="trash" size={24} color="#FFF" />
        </DeleteButton>
      </ActionContainer>
    </Container>
  )
}

export default FavoriteItem