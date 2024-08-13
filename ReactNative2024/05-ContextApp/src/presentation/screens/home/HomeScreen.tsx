import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../../config/app-theme';
import { useCounterStore } from '../../store/counter-store';
import { useProfileStore } from '../../store/profile-store';

export const HomeScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const count = useCounterStore(state => state.count);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{name}</Text>
      <Text style={globalStyles.title}>{email}</Text>
      <Text style={globalStyles.title}>Count: {count}</Text>
    </View>
  )
}
