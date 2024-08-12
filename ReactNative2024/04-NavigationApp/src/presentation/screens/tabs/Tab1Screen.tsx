import React from 'react';
import { Text, View } from 'react-native';
import { HambuerguerMenu } from '../../components/shared/HambuerguerMenu';
import { IonIcon } from '../../components/shared/IonIcon';

export const Tab1Screen = () => {
  return (
    <View>
      <HambuerguerMenu />
      <Text>Tab1Screen</Text>
      <IonIcon name="rocket-outline" size={30} color="#000" />
    </View>
  )
}
