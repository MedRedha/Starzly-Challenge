import { AppRegistry, LogBox } from 'react-native';

import starzly from './App';
import { name as appName } from './app.json';

// ! KEEP IT CALM
LogBox.ignoreLogs([
  'Warning:', // ? ignores useless warnings
  'Require cycle:', // ? ignores components cycle warning
]);

AppRegistry.registerComponent(appName, () => starzly);
