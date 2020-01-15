import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from '@expo/vector-icons/Ionicons';

import Send from '../screens/Bag/Send';
import Shipping from '../screens/Bag/Shipping';
import Payment from '../screens/Bag/Payment';


const SendStack = createStackNavigator({
    Send: {screen: Send,
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: '結帳',
            headerLeft: (
              <Icon 
              style={{ paddingLeft: 14 }} 
              onPress={() => navigation.pop()} 
              name="ios-arrow-back" size={30} />
            )};
        },
      },
    Shipping: {screen: Shipping,
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: '配送方式',
            headerLeft: (
              <Icon 
              style={{ paddingLeft: 14 }} 
              onPress={() => navigation.pop()} 
              name="ios-arrow-back" size={30} />
            )};
        },
      },
    Payment: {screen: Payment,
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: '付款方式',
            headerLeft: (
              <Icon 
              style={{ paddingLeft: 14 }} 
              onPress={() => navigation.pop()} 
              name="ios-arrow-back" size={30} />
            )};
        },
      },
})

export default SendStack;
