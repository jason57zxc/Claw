import React from 'react';
import { Platform, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import TabBarIcon from '../components/TabBarIcon';
import PlayScreen from '../screens/PlayScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LotteryScreen from '../screens/LotteryScreen';
import BagScreen from '../screens/BagScreen';

import Exchange from '../screens/Bag/Exchange';
import Send from '../screens/Bag/Send';

import Icon from '@expo/vector-icons/Ionicons';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const PlayStack = createStackNavigator(
  {
    Play: {
      screen: PlayScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: (
            <Image
            style={{height: 30, width: 120}}
            source={require('../img/l.png')}/>
          ),
          headerLeft: (
            <Icon style={{ paddingLeft: 14 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          ),
          
        };
      },
    },

  },
);

PlayStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: '娃娃機台',
    // tabBarIcon: ({ focused }) => (
    //   <TabBarIcon
    //     focused={focused}
    //     name={
    //       Platform.OS === 'ios'
    //         ? `ios-information-circle${focused ? '' : '-outline'}`
    //         : 'md-information-circle'
    //     }
    //   />
    // ),
    tabBarIcon: ({ focused }) => (
      <Image 
      // focused={focused} 
      source={require('../img/claw-machine.png')}
      style={focused ? {height: 20, width: 20} : {height: 20, width: 20, opacity:0.4}} />
    ),
  };
};

// PlayStack.navigationOptions = {
//   tabBarLabel: 'Play',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };

PlayStack.path = '';

const LotteryStack = createStackNavigator({
  Lottery: {
    screen: LotteryScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Lottery',
        headerLeft: (
          <Icon style={{ paddingLeft: 14 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )
      };
    },
  },
});

LotteryStack.navigationOptions = {
  tabBarLabel: '抽獎活動',
  tabBarIcon: ({ focused }) => (
    <Image 
    // focused={focused} 
    source={require('../img/wheel.png')}
    style={focused ? {height: 20, width: 20} : {height: 20, width: 20, opacity:0.4}} />
  ),
};

LotteryStack.path = '';

//Bag
const BagStack = createStackNavigator({
  Bag: {
    screen: BagScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: '娃娃背包',
        headerLeft: (
          <Icon style={{ paddingLeft: 14 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )
      };
    },
  },

  Exchange: Exchange,
});

BagStack.navigationOptions = {
  tabBarLabel: '娃娃背包',
  tabBarIcon: ({ focused }) => (
    <Image 
    // focused={focused} 
    source={require('../img/backpack.png')}
    style={focused ? {height: 20, width: 20} : {height: 20, width: 20, opacity:0.4}} />
  ),
};

BagStack.path = '';
//Points
const PointsStack = createStackNavigator(
  {
    Points: SettingsScreen,
  },
  config
);

PointsStack.navigationOptions = {
  tabBarLabel: '積分商城',
  tabBarIcon: ({ focused }) => (
    // <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
    <Image 
    // focused={focused} 
    source={require('../img/stars1.png')}
    style={focused ? {height: 20, width: 20} : {height: 20, width: 20, opacity:0.4}} />
  ),
};

PointsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  PlayStack,
  LotteryStack,
  BagStack,
  PointsStack,
}, 
{
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    return {
      header: null,
      headerTitle: routeName
    };
  },
  tabBarOptions: {
    activeTintColor: '#41A7FF',
    inactiveTintColor: '#60a3bc',
  },
});

tabNavigator.path = '';

export default tabNavigator;
