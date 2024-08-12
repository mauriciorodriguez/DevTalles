import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { IonIcon } from '../components/shared/IonIcon';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { globalColors } from '../theme/theme';
import { StackNavigator } from './StackNavigator';
import { TopTabsNavigator } from './TopTabsNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        // headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5
        },
        headerStyle: {
          elevation: 0,
          borderColor: "transparent",
          shadowColor: "transparent"
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarActiveTintColor: globalColors.primary,
      }}
    >
      <Tab.Screen name="Tab1" options={{ title: "Tab1", tabBarIcon: ({ color, size }) => (<IonIcon name='home-outline' color={color} size={size} />) }} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{ title: "User", tabBarIcon: ({ color, size }) => (<IonIcon name='person-circle-outline' color={color} size={size} />) }} component={TopTabsNavigator} />
      <Tab.Screen name="Tab3" options={{ title: "Tab3", tabBarIcon: ({ color, size }) => (<IonIcon name='settings-outline' color={color} size={size} />) }} component={StackNavigator} />
    </Tab.Navigator>
  )
}
