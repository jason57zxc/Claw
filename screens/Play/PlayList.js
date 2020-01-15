import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator, FlatList, Navigator, Button, Dimensions } from 'react-native';
// import GameScreen from './Game';

export const deviceWidth = Dimensions.get('window').width;      //裝置的寬度
export const deviceHeight = Dimensions.get('window').height;

export default class PlayList extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      pickerSelection: 'Default',
      pickerDisplayed: false,
      count: 0,
      countGuarantee: 0,
    };
  }

  componentDidMount() {
    this.getData()
  }

  componentWillUpdate() {
    this.getData()
  }

  getData = () => {
    return fetch('http://172.20.10.3/myApp/goodsList.php')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        data: responseJson,
      }, function () {
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          data={this.state.data}
          renderItem={({ item }) =>
          <View style={{
            shadowOpacity: 0.1,
            shadowRadius: 1,
            shadowOffset: {
              width: 1,
              height: 2,
            },}}>
            <TouchableOpacity 
            onPress={() => { this.props.navigate('Queue', 
            { g_id: item.g_id, 
              g_name: item.g_name, 
              g_info: item.g_info, 
              insertcoins: item.insertcoins,
              g_sizeL: item.g_sizeL,
              g_sizeW: item.g_sizeW,
              g_sizeH: item.g_sizeH,
              g_photo: item.g_photo,}); }}>
              <View style={styles.list}>
                <View style={styles.g_photo}>
                  <Image
                    style={{ height:  deviceWidth/2-30, width: deviceWidth/2-30}}
                    source={{ uri: item.g_photo }} />
                </View>
                <View style={styles.g_info}>
                  <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, paddingTop: 5}}>{item.g_name}</Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Image
                        style={{ height: 20, width: 20, marginTop: 10}}
                        source={require('../../img/bear.png')} />
                      <Text style={{ fontSize: 14,}}>{item.g_quantity}個</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                      {/* <Text style={{ fontSize: 14, paddingLeft: 10, paddingTop: 15}}>投幣金額</Text> */}
                      <Image
                        style={{ height: 20, width: 20, marginTop: 10}}
                        source={require('../../img/s_logo.png')} />
                      
                      <Text style={{ fontSize: 14, marginLeft: 1}}>{item.insertcoins}／次</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          }
          keyExtractor={({ g_id }, index) => g_id}
        />

      </View>

    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "black"
  },
  list: {
    // borderBottomWidth: 1,
    // borderColor: 'black',
    backgroundColor: "#FDFDFD",
    height:  deviceWidth/1.7,
    width: deviceWidth/2-30,
    // flexDirection: 'row',
    marginBottom: 8,
    marginLeft: 15,
    marginRight: 5,
    marginTop: 8,
    borderRadius: 10,
  },
  g_info: {
    // marginLeft: 30,
  },
  g_photo: {
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
    overflow: 'hidden'
  }
});