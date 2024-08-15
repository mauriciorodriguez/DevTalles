/**
 * @format
 */
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import './gesture-handler';
import { App } from './src/App';

AppRegistry.registerComponent(appName, () => App);
