import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { IonIcon } from '../components/shared/IonIcon';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { BottomTabsNavigator } from './BottomTabsNavigator';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: dimensions.width >= 720 ? "permanent" : "slide",
        headerShown: false,
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        }
      }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen
        options={{ drawerIcon: ({ color, size }) => (<IonIcon name='bonfire-outline' color={color} size={size} />) }} name="Tabs" component={BottomTabsNavigator} />
      <Drawer.Screen
        options={{ drawerIcon: ({ color, size }) => (<IonIcon name='person-outline' color={color} size={size} />) }}
        name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  )
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          backgroundColor: globalColors.primary,
          height: 200,
          margin: 30,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}