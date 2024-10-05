/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import './gesture-handler';
import { ProductsApp } from './src/ProductsApp';

AppRegistry.registerComponent(appName, () => ProductsApp);
