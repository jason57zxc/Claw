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
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {  
          data: [1241, 596, 793, 689, 948, 941, 867]
        }
      ]
    };

    return (
      <View style={{justifyContent:'center', alignItems: 'center', }}>

        <View style={{justifyContent:'center', alignItems: 'flex-start', marginTop: 20}}>
          <Text style={{fontSize: 20, marginLeft: 18,}}>本周投幣量</Text>
          <View style={{marginTop: 10}}>
          <LineChart
              data={data}
              width={Dimensions.get("window").width} // from react-native
              height={250}
              // yAxisLabel={"$"}
              // yAxisSuffix={"k"}
              chartConfig={{
                backgroundColor: "#ffeaa7",
                backgroundGradientFrom: "#ffeaa7",
                backgroundGradientTo: "#ffeaa7",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              // bezier
              style={{
                marginVertical: 8,
              }}
            />
          </View>
        </View>
        <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', height: 70, width: deviceWidth}}>
            <View style={{ marginLeft: 25,}}>
                <Text style={{fontSize: 16, fontWeight: '800'}}>本周總投幣量</Text>
            </View>
            <View style={{ marginRight: 25,}}>
                <Text style={{fontSize: 15}}>6076次</Text>
            </View>
        </View>
        <View style={{borderBottomWidth: 1, borderColor: '#dfe6e9', width: deviceWidth-50, alignItems: 'center'}}/>
        
        <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', height: 70, width: deviceWidth}}>
            <View style={{ marginLeft: 25,}}>
                <Text style={{fontSize: 16, fontWeight: '800'}}>線上投幣量</Text>
            </View>
            <View style={{ marginRight: 25,}}>
                <Text style={{fontSize: 15}}>2016次</Text>
            </View>
        </View>
        <View style={{borderBottomWidth: 1, borderColor: '#dfe6e9', width: deviceWidth-50, alignItems: 'center'}}/>

        <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', height: 70, width: deviceWidth}}>
            <View style={{ marginLeft: 25,}}>
                <Text style={{fontSize: 16, fontWeight: '800'}}>熱門日</Text>
            </View>
            <View style={{ marginRight: 25,}}>
                <Text style={{fontSize: 15}}>禮拜天</Text>
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
            source={require('../../img/redtri.png')}/>
                <Text style={{fontSize: 15}}>12%</Text>
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