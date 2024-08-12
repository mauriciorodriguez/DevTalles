import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import "../gesture-handler";
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <SideMenuNavigator />
      {/* <BottomTabsNavigator /> */}
    </NavigationContainer>
  )
}