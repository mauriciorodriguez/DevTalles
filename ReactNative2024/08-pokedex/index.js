/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import './gesture-handler';
import { PokedexApp } from './src/PokedexApp';

AppRegistry.registerComponent(appName, () => PokedexApp);
