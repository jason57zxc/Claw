import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

import {
  LineChart,
  BarChart
} from "react-native-chart-kit";
import { Image } from 'react-native-elements';

export default class GoodsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const data = {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43, 23]
        }
      ]
    };

    return (
      <View style={{justifyContent:'center', alignItems: 'center', }}>

        <View style={{justifyContent:'center', alignItems: 'flex-start', marginTop: 20}}>
          <Text style={{fontSize: 20, marginLeft: 18,}}>今日投幣量</Text>
          <View style={{backgroundColor: '#ffeaa7', marginTop: 10}}>
            <Image 
            style={{width: deviceWidth, height: 260, marginTop: 5,}}
            source={require('../../img/today.png')}
            />
          </View>
        </View>
        <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', height: 70, width: deviceWidth}}>
            <View style={{ marginLeft: 25,}}>
                <Text style={{fontSize: 16, fontWeight: '800'}}>總投幣量</Text>
            </View>
            <View style={{ marginRight: 25,}}>
                <Text style={{fontSize: 15}}>867次</Text>
            </View>
        </View>
        <View style={{borderBottomWidth: 1, borderColor: '#dfe6e9', width: deviceWidth-50, alignItems: 'center'}}/>
        
        <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', height: 70, width: deviceWidth}}>
            <View style={{ marginLeft: 25,}}>
                <Text style={{fontSize: 16, fontWeight: '800'}}>線上投幣量</Text>
            </View>
            <View style={{ marginRight: 25,}}>
                <Text style={{fontSize: 15}}>247次</Text>
            </View>
        </View>
        <View style={{borderBottomWidth: 1, borderColor: '#dfe6e9', width: deviceWidth-50, alignItems: 'center'}}/>

        <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', height: 70, width: deviceWidth}}>
            <View style={{ marginLeft: 25,}}>
                <Text style={{fontSize: 16, fontWeight: '800'}}>熱門時段</Text>
            </View>
            <View style={{ marginRight: 25,}}>
                <Text style={{fontSize: 15}}>18~20</Text>
            </View>
        </View>
        <View style={{borderBottomWidth: 1, borderColor: '#dfe6e9', width: deviceWidth-50, alignItems: 'center'}}/>

        <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', height: 70, width: deviceWidth}}>
            <View style={{ marginLeft: 25,}}>
                <Text style={{fontSize: 16, fontWeight: '800'}}>收入成長</Text>
            </View>
            <View style={{ marginRight: 25, flexDirection: 'row'}}>
            <Image 
            style={{width: 15, height: 15, marginRight: 5, marginTop: 1,}}
            source={require('../../img/greentri.png')}/>
                <Text style={{fontSize: 15}}>7%</Text>
            </View>
        </View>

    </View>

    );
  }
}

var styles = StyleSheet.create({
  btn: {
    marginTop: 15,
    width: 65,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      width: 1,
      height: 2,
    }
  }
})