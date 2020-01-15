import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from '@expo/vector-icons/Ionicons';

import ControlCenterScreen from '../screens/ControlCenterScreen';
import HomeNavigator from './HomeNavigator';
import ManageNavigator from './ManageNavigator';
import DataStack from './DataNavigator';
import Order from '../screens/Order/OrderList'
import OrderDetails from '../screens/Order/OrderDetails'

const Administrator = createStackNavigator({
  ControlCenter: {screen: ControlCenterScreen, 
    navigationOptions: ({ navigation }) => {
      return {
        // headerTitle: 'Control Center',
        header: null,
        headerLeft: (
          <Icon 
          style={{ paddingLeft: 14 }} 
          onPress={() => navigation.openDrawer()} 
          name="md-menu" size={30} />
        )};
    },
  },
  Machine: {screen: ManageNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        header: null 
      };
    },
  },
  Data: {screen: DataStack,
    navigationOptions: ({ navigation }) => {
      return {
        header: null 
      };
    },
  },
  Order: {screen: Order,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: '訂單管理',
        headerLeft: (
          <Icon 
          style={{ paddingLeft: 14 }} 
          onPress={() => navigation.pop()} 
          name="ios-arrow-back" size={30} />
        )};
    },
  },
  OrderDetails: {screen: OrderDetails,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: '訂單資訊',
        headerLeft: (
          <Icon 
          style={{ paddingLeft: 14 }} 
          onPress={() => navigation.pop()} 
          name="ios-arrow-back" size={30} />
        )};
    },
  },
})

export default Administrator;
