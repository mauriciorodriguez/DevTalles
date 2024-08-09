import React from 'react'
import { SafeAreaView } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import IonIcon from "react-native-vector-icons/Ionicons"
import { HomeworkScreen6 } from './src/presentation/screens/Homework'

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
        {/*<CounterM3Screen />*/}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        {/* <FlexDirectionScreen /> */}
        {/* <HomeworkScreen /> */}
        {/* <HomeworkScreen1 /> */}
        {/* <HomeworkScreen2 /> */}
        {/* <HomeworkScreen3 /> */}
        {/* <HomeworkScreen4 /> */}
        {/* <HomeworkScreen5 /> */}
        <HomeworkScreen6 />
        {/* <HomeworkScreen7 /> */}
        {/* <HomeworkScreen8 /> */}
        {/* <HomeworkScreen9 /> */}
        {/* <HomeworkScreen10 /> */}
      </SafeAreaView>
    </PaperProvider>
  )
}
