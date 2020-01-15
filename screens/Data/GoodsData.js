import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;


import {
  PieChart, ContributionGraph 
} from "react-native-chart-kit";

export default class GoodsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const data = [
      {
        name: "娃娃",
        num: 1315,
        color: "#58B19F",
        legendFontColor: "#000000",
        legendFontSize: 15
      },
      {
        name: "公仔",
        num: 880,
        color: "#EE6600",
        legendFontColor: "#000000",
        legendFontSize: 15
      },
      {
        name: "食物",
        num: 327,
        color: "#4b7bec",
        legendFontColor: "#000000",
        legendFontSize: 15
      },
      {
        name: "3C產品",
        num: 653,
        color: "#f6b93b",
        legendFontColor: "#000000",
        legendFontSize: 15
      },

    ];


    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{justifyContent:'center', alignItems: 'flex-start', marginTop: 20}}>
          <Text style={{fontSize: 20, marginLeft: 18,}}>商品喜好度</Text>
          <View style={{backgroundColor: '#ffeaa7', marginTop: 10}}>
            <PieChart
            data={data}
            width={deviceWidth}
            height={260}
            chartConfig={{
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 15
              },
              propsForDots: {
                r: "6",
                strokeWidth: "4",
                stroke: "#ffffff"
              }
            }}
            accessor="num"
            backgroundColor="transparent"
            paddingLeft="30"
            
            />
          </View>
        </View>
        <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', height: 70, width: deviceWidth}}>
            <View style={{ marginLeft: 25,}}>
                <Text style={{fontSize: 16, fontWeight: '800'}}>總夾取次數</Text>
            </View>
            <View style={{ marginRight: 25,}}>
                <Text style={{fontSize: 15}}>3175次</Text>
            </View>
        </View>
        <View style={{borderBottomWidth: 1, borderColor: '#dfe6e9', width: deviceWidth-50, alignItems: 'center'}}/>
        
        <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', height: 70, width: deviceWidth}}>
            <View style={{ marginLeft: 25,}}>
                <Text style={{fontSize: 16, fontWeight: '800'}}>保夾次數</Text>
            </View>
            <View style={{ marginRight: 25, flexDirection: 'row'}}>
                <Text style={{fontSize: 15}}>2401次</Text>
            </View>
        </View>

        <View style={{borderBottomWidth: 1, borderColor: '#dfe6e9', width: deviceWidth-50, alignItems: 'center'}}/>

        <View style={{justifyContent: 'space-between', flexDirection: 'row', height: 140, width: deviceWidth}}>
            <View style={{ marginLeft: 25,}}>
                <Text style={{fontSize: 16, fontWeight: '800', marginTop: 30}}>與上周相比</Text>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-end'}}>
              <View style={{ marginRight: 25, flexDirection: 'row'}}>
                <Text style={{fontSize: 15}}>娃娃</Text>
                <Image 
                style={{width: 15, height: 15, marginRight: 5, marginTop: 1,}}
                source={require('../../img/redtri.png')}/>
                <Text style={{fontSize: 15}}>10%</Text>
              </View>
              <View style={{ marginRight: 25, flexDirection: 'row'}}>
                <Text style={{fontSize: 15}}>公仔</Text>
                <Image 
                style={{width: 15, height: 15, marginRight: 5, marginTop: 1,}}
                source={require('../../img/greentri.png')}/>
                <Text style={{fontSize: 15}}>2%</Text>
              </View>
              <View style={{ marginRight: 25, flexDirection: 'row'}}>
                <Text style={{fontSize: 15}}>食物</Text>
                <Image 
                style={{width: 15, height: 15, marginRight: 5, marginTop: 1,}}
                source={require('../../img/greentri.png')}/>
                <Text style={{fontSize: 15}}>2%</Text>
              </View>
              <View style={{ marginRight: 25, flexDirection: 'row'}}>
                <Text style={{fontSize: 15,}}>3C產品</Text>
                <Image 
                style={{width: 15, height: 15, marginRight: 5, marginTop: 1,}}
                source={require('../../img/greentri.png')}/>
                <Text style={{fontSize: 15}}>6%</Text>
              </View>
            </View>

        </View>
        <View style={{borderBottomWidth: 1, borderColor: '#dfe6e9', width: deviceWidth-50, alignItems: 'center'}}/>

        <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', height: 70, width: deviceWidth}}>
            <View style={{ marginLeft: 25,}}>
                <Text style={{fontSize: 16, fontWeight: '800'}}>熱門商品</Text>
            </View>
            <View style={{ marginRight: 25,}}>
                <Text style={{fontSize: 15}}>娃娃</Text>
            </View>
        </View>

      
         

      {/* <Text style={{fontSize: 20, margin: 15,}}>熱門時段</Text>
      <ContributionGraph 
        values={commitsData} 
        endDate={new Date('2017-04-01')}
        numDays={120} 
        width={Dimensions.get("window").width} 
        height={220} 
        chartConfig={{
          backgroundColor: "#000000",
          backgroundGradientFrom: "#000000",
          backgroundGradientTo: "#000000",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 15
          },
          propsForDots: {
            r: "6",
            strokeWidth: "4",
            stroke: "#ffffff"
          }
        }} />
         */}
      </View>
    );
  }
}
