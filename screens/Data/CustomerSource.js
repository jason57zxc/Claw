// import React, { Component } from 'react';
// import { View, Text, Dimensions } from 'react-native';

// import {
//   PieChart,
// } from "react-native-chart-kit";

// export default class CustomerSource extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {

//     const data = [
//       {
//         name: "Male",
//         population: 215000,
//         color: "rgba(131, 167, 234, 1)",
//         legendFontColor: "#7F7F7F",
//         legendFontSize: 15
//       },
//       {
//         name: "Female",
//         population: 28000,
//         color: "#F00",
//         legendFontColor: "#7F7F7F",
//         legendFontSize: 15
//       },
//       {
//         name: "None",
//         population: 52761,
//         color: "#192a56",
//         legendFontColor: "#7F7F7F",
//         legendFontSize: 15
//       },
//     ];



//     return (
//       <View style={{justifyContent: 'center', alignItems: 'center'}}>
//         <Text style={{fontSize: 20, margin: 15,}}>性別比例</Text>
//           <PieChart
//           data={data}
//           width={Dimensions.get("window").width}
//           height={220}
//           chartConfig={{
//             backgroundColor: "#000000",
//             backgroundGradientFrom: "#000000",
//             backgroundGradientTo: "#000000",
//             decimalPlaces: 2, // optional, defaults to 2dp
//             color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             style: {
//               borderRadius: 15
//             },
//             propsForDots: {
//               r: "6",
//               strokeWidth: "4",
//               stroke: "#ffffff"
//             }
//           }}
//           accessor="population"
//           backgroundColor="transparent"
//           paddingLeft="15"
//           />
//       </View>
//     );
//   }
// }


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
        name: "男性",
        population: 2150,
        color: "#f6b93b",
        legendFontColor: "#000",
        legendFontSize: 15
      },
      {
        name: "女性",
        population: 2800,
        color: "#4b7bec",
        legendFontColor: "#000",
        legendFontSize: 15
      },
      {
        name: "未知",
        population: 527,
        color: "#58B19F",
        legendFontColor: "#000",
        legendFontSize: 15
      },
    ];
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{justifyContent:'center', alignItems: 'flex-start', marginTop: 20}}>
          <Text style={{fontSize: 20, marginLeft: 18,}}>玩家分布</Text>
          <View style={{backgroundColor: '#ffeaa7', marginTop: 10}}>
          <PieChart
          data={data}
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
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          />
          </View>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', height: 105, width: deviceWidth}}>
            <View style={{ marginLeft: 25,}}>
                <Text style={{fontSize: 16, fontWeight: '800', marginTop: 30}}>偏好商品</Text>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-end'}}>
              <View style={{ marginRight: 25, flexDirection: 'row'}}>
                <Text style={{fontSize: 15, marginTop: 15,}}>男性</Text>

                <Text style={{fontSize: 15, marginLeft: 15, marginTop: 15,}}>公仔</Text>
              </View>
              <View style={{ marginRight: 25, flexDirection: 'row'}}>
                <Text style={{fontSize: 15}}>女性</Text>

                <Text style={{fontSize: 15, marginLeft: 15,}}>娃娃</Text>
              </View>
            </View>
        </View>

        <View style={{borderBottomWidth: 1, borderColor: '#dfe6e9', width: deviceWidth-50, alignItems: 'center'}}/>

        <View style={{justifyContent: 'space-between', flexDirection: 'row', height: 105, width: deviceWidth}}>
            <View style={{ marginLeft: 25,}}>
                <Text style={{fontSize: 16, fontWeight: '800', marginTop: 30}}>平均消費金額(元)</Text>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-end'}}>
              <View style={{ marginRight: 25, flexDirection: 'row'}}>
                <Text style={{fontSize: 15, marginTop: 15,}}>男性</Text>

                <Text style={{fontSize: 15, marginLeft: 15, marginTop: 15,}}>44.5</Text>
              </View>
              <View style={{ marginRight: 25, flexDirection: 'row'}}>
                <Text style={{fontSize: 15}}>女性</Text>

                <Text style={{fontSize: 15, marginLeft: 15,}}>70.2</Text>
              </View>
            </View>

        </View>

        <View style={{borderBottomWidth: 1, borderColor: '#dfe6e9', width: deviceWidth-50, alignItems: 'center'}}/>

        <View style={{justifyContent: 'space-between', flexDirection: 'row', height: 105, width: deviceWidth}}>
            <View style={{ marginLeft: 25,}}>
                <Text style={{fontSize: 16, fontWeight: '800', marginTop: 30}}>線上vs線下比例</Text>
            </View>
            <View style={{flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-end'}}>
              <View style={{ marginRight: 25, flexDirection: 'row'}}>
                <Text style={{fontSize: 15, marginTop: 15,}}>線上</Text>

                <Text style={{fontSize: 15, marginLeft: 15, marginTop: 15,}}>36.4%</Text>
              </View>
              <View style={{ marginRight: 25, flexDirection: 'row'}}>
                <Text style={{fontSize: 15}}>線下</Text>

                <Text style={{fontSize: 15, marginLeft: 15,}}>63.6%</Text>
              </View>
            </View>

        </View>
        

      </View>
    );
  }
}
