import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import BottomTabNavigator from './BottomTabNavigator';
import Queue from '../screens/Play/Queue';
import Game from '../screens/Play/Game';
import SendStack from './SendStack';


import Icon from '@expo/vector-icons/Ionicons';

const HomeStack = createStackNavigator({
  Tabs: BottomTabNavigator,
  Queue: {screen: Queue,
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
        headerLeft: (
          <Icon 
          style={{ paddingLeft: 14 }} 
          onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )};
    },
  },
  Game: {screen: Game,
    defaultNavigationOptions: {
      header: null
    },
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
        headerLeft: (
          <Icon 
          style={{ paddingLeft: 14 }} 
          onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )};
    },
  },
  SendStack: {screen: SendStack,
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
        // headerLeft: (
        //   <Icon 
        //   style={{ paddingLeft: 14 }} 
        //   onPress={() => navigation.pop()} 
        //   name="ios-arrow-back" size={30} />
        // )
      };
    },
  },
},
// {
//   defaultNavigationOptions: {
    
//   }
// }
);

export default HomeStack;
