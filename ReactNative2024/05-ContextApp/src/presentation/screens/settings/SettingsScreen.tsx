import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../../config/app-theme'
import { useCounterStore } from '../../store/counter-store'

export const SettingsScreen = () => {

  const count = useCounterStore(state => state.count);
  const incrementBy = useCounterStore(state => state.incrementBy);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `Settings ${count}`
    });
  }, [count])


  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Count: {count}</Text>
      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => incrementBy(1)}
      >
        <Text>+1</Text>
      </Pressable>
      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => incrementBy(-1)}
      >
        <Text>-1</Text>
      </Pressable>
    </View>
  )
}
