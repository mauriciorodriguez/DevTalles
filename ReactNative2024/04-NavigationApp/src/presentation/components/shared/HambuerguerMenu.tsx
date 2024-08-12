import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Pressable, Text } from 'react-native';

export const HambuerguerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
        >
          <Text>Menu</Text>
        </Pressable>
      )
    });
  }, [])

  return (<></>);
}
