import React from 'react'
import { Feather } from '@expo/vector-icons'

import { Container, MenuButton, Title } from './styled'

function Header() {
  return (
    <Container>
      <MenuButton>
        <Feather name="menu" size={36} color="#FFF" />
      </MenuButton>

      <Title>React Prime</Title>
    </Container>
  )
}

export default Header