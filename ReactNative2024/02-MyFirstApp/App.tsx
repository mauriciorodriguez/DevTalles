import React from 'react'
import { SafeAreaView } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import IonIcon from "react-native-vector-icons/Ionicons"
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen'

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon {...props} />
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/*<HelloWordScreen name='Mauricio Ezequiel Rodriguez' />*/}
        {/*<CounterScreen />*/}
        <CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>
  )
}
