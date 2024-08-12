import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { HambuerguerMenu } from '../components/shared/HambuerguerMenu';
import { AboutScreen } from '../screens/about/AboutScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <>
      <HambuerguerMenu />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: globalColors.primary
        }}
      >
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  )
}
