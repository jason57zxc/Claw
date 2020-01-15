import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from '@expo/vector-icons/Ionicons';


import HomeNavigator from './HomeNavigator';
import Administrator from './ManagerStack';


const DrawerNavigator = createDrawerNavigator({
  User: {
    screen: HomeNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        drawerLabel: '玩家',
      };
    },
  },
  Administrator: {
    screen: Administrator,
    navigationOptions: ({ navigation }) => {
      return {
        drawerLabel: '台主',
      };
    },
  },
},{
  initialRouteName: 'User',
});

export default DrawerNavigator;
