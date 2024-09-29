/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import './gesture-handler';
import { MapsApp } from './src/MapsApp';

AppRegistry.registerComponent(appName, () => MapsApp);
