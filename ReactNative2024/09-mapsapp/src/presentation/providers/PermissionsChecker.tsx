import {NavigationProp, useNavigation} from '@react-navigation/native';
import {PropsWithChildren, useEffect} from 'react';
import {AppState} from 'react-native';
import {RootStackParams} from '../navigation/StackNavigator';
import {usePermissionStore} from '../store/permissions/usePermissionStore';

export const PermissionsChecker = ({children}: PropsWithChildren) => {
  const {locationStatus, checkLocationPermission} = usePermissionStore();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    checkLocationPermission();
  }, []);

  useEffect(() => {
    if (locationStatus === 'granted') {
      navigation.reset({
        routes: [
          {
            name: 'MapsScreen',
          },
        ],
      });
    } else if (locationStatus !== 'undetermined') {
      navigation.reset({
        routes: [
          {
            name: 'PermissionsScreen',
          },
        ],
      });
    }
  }, [locationStatus]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        checkLocationPermission();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return children;
};
