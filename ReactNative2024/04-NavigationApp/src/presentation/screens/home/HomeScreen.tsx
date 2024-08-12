import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { HambuerguerMenu } from '../../components/shared/HambuerguerMenu'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { RootStackParams } from '../../routes/StackNavigator'
import { globalStyles } from '../../theme/theme'

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <HambuerguerMenu />
      <PrimaryButton
        label='Productos'
        onPress={() => navigation.navigate("Products")}
      />
      <PrimaryButton
        label='Settings'
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  )
}
