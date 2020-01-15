import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import DrawerNavigator from './DrawerNavigator';
import SignNavigator from './SignNavigator';
import Game from '../screens/Play/Game';
// import Game from '../screens/Play/LiveBroadcast';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Sign: SignNavigator,
    Main: DrawerNavigator,
    // Game: Game
  },
  {
    initialRouteName: 'Main',
  })
);
