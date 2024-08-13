import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../../config/app-theme'
import { useProfileStore } from '../../store/profile-store'

export const ProfileScreen = () => {

  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{name}</Text>
      <Text style={globalStyles.title}>{email}</Text>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => useProfileStore.setState({ name: "MER" })}
      >
        <Text>Cambiar nombre</Text>
      </Pressable>
      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => useProfileStore.setState({ email: "MER@MER.com" })}
      >
        <Text>Cambiar email</Text>
      </Pressable>
      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => changeProfile("test", "test@test.com")}
      >
        <Text>Regresar a test</Text>
      </Pressable>

    </View>
  )
}
