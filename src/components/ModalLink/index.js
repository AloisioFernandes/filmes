import React from 'react'
import { Feather } from '@expo/vector-icons'

import { BackButton, Name } from './styles'

import WebView from 'react-native-webview'

function ModalLink({ link }) {
  return (
    <View>
      <BackButton>
        <Feather name="x" size={35} color="#FFF" />
        <Name>Título do filme</Name>
      </BackButton>

      <WebView 
        source={{ uri: link }}
      />
    </View>
  )
}

export default ModalLink