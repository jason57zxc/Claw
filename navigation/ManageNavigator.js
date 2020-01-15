import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from '@expo/vector-icons/Ionicons';

import MachineEntry from '../screens/Entery/MachineEntry';
import MachineScreen from '../screens/MachineScreen';
import MachineManage from '../screens/Entery/MachineManage';
import ProductScreen from '../screens/ProductScreen';
import MachineData from '../screens/Entery/MachineData';

const ManageStack = createStackNavigator({
    MachineScreen: {screen: MachineScreen, 
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: '機台管理',
            headerLeft: (
              <Icon 
              style={{ paddingLeft: 14 }} 
              onPress={() => navigation.pop()} 
              name="ios-arrow-back" size={30} />
            ),
            headerRight: (
              <Icon 
              style={{ paddingRight: 14,}} 
              onPress={() => navigation.navigate('MachineEntry')} 
              name="ios-add" size={40} />
            )};
        },
      },
    MachineEntry: {screen: MachineEntry, 
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: '新增機台',
            headerLeft: (
              <Icon 
              style={{ paddingLeft: 14 }} 
              onPress={() => navigation.pop()} 
              name="ios-arrow-back" size={30} />
            ),
            // headerRight: (
            //   <Icon 
            //   style={{ paddingRight: 14,}} 
            //   onPress={() => navigation.pop()} 
            //   name="ios-add" size={40} />
            // )
          };
        },
      },
      MachineData: {screen: MachineData, 
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: 'Machine Data',
            headerLeft: (
              <Icon 
              style={{ paddingLeft: 14 }} 
              onPress={() => navigation.pop()} 
              name="ios-arrow-back" size={30} />
            ),
            // headerRight: (
            //   <Icon 
            //   style={{ paddingRight: 14,}} 
            //   onPress={() => navigation.pop()} 
            //   name="ios-add" size={40} />
            // )
          };
        },
      },
    MachineManage: {screen: MachineManage, 
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: '機台管理',
            headerLeft: (
              <Icon 
              style={{ paddingLeft: 14 }} 
              onPress={() => navigation.pop()} 
              name="ios-arrow-back" size={30} />
            )};
        },
      },
    ProductScreen: {screen: ProductScreen, 
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: '商品設定',
            headerLeft: (
              <Icon 
              style={{ paddingLeft: 14 }} 
              onPress={() => navigation.pop()} 
              name="ios-arrow-back" size={30} />
            )};
        },
      },

    
    },
    // {
    //     initialRouteName: 'ProductEntry',
    // }
);

export default ManageStack;
