/**
 * @format
 */
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import './gesture-handler';
import { ComponentsApp } from './src/ComponentsApp';

AppRegistry.registerComponent(appName, () => ComponentsApp);
