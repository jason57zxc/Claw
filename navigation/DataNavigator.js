import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import InsertCoins from '../screens/Data/InsertCoins';
import GoodsData from '../screens/Data/GoodsData';
import CustomerSource from '../screens/Data/CustomerSource';

import Icon from '@expo/vector-icons/Ionicons';

const DataNavigator = createMaterialTopTabNavigator({
  InsertCoins: {
    screen: InsertCoins,
    navigationOptions: () => {
      return {
        tabBarLabel: '營收曲線',
      };
    },
  },
  GoodsData: {
    screen: GoodsData,
    navigationOptions: () => {
      return {
        tabBarLabel: '商品數據',
      };
    },
  },
  CustomerSource: {
    screen: CustomerSource,
    navigationOptions: () => {
      return {
        tabBarLabel: '顧客樣態',
      };
    },
  },
},{
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
      color: 'black',
    },
    style: {
      backgroundColor: 'white',
    },
    indicatorStyle: {
      backgroundColor: 'gray',
    },
  }
}
);

const DataStack = createStackNavigator({
  Data: {screen: DataNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: '數據分析',
        headerLeft: (
          <Icon 
          style={{ paddingLeft: 14 }} 
          onPress={() => navigation.pop()} 
          name="ios-arrow-back" size={30} />
        )};
    },
  },
})

export default DataStack;
