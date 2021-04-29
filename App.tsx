import React from 'react'
import {Welcome} from './src/screens/Welcome'
import {useFonts, Jost_400Regular, Jost_600SemiBold} from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading'
import { UserIdentification } from './src/screens/UserIdentification'

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })
  
  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return(
    <UserIdentification/>
  )
}
