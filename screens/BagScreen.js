import React, { Component } from 'react';
import { View, Text, Alert, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height; 

export default class BagScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        id: 28
    };
  }
  componentDidMount(){
    this.getData()
  }

  componentDidUpdate(){
    this.getData()
  }

  getData = async () => {
    const { id } = this.state;
    return fetch('http://172.20.10.3/myApp/bagList.php', {
      method: 'POST',
      header: {
          Accept: 'application/json',
          'Contect-type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        data: responseJson,
      }, function(){
      });

    })
    .catch((error) =>{
      console.error(error);
    });
  }

  _exchange = async () => {
    const { o_id } = this.state.data[0];
    return fetch('http://172.20.10.4/myApp/bagChange.php', {
      method: 'POST',
      header: {
          Accept: 'application/json',
          'Contect-type': 'application/json',
      },
      body: JSON.stringify({
        o_id: o_id,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      alert(responseJson)
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  _alert = () => {
    Alert.alert(
      '兌換積分',
      '是否將商品兌換成100積分?',
      [
        {
          text: '取消',
          // onPress: () => alert('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'Yes', onPress:this._exchange},
        // {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
    )}
  

  render() {
    if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }
    return (
      <View style={styles.container}>
        <FlatList
            data={this.state.data}
            renderItem={({item}) => 
            <View style={styles.detailed}>
                    <View style={{flexDirection: 'row', margin: 10, borderRadius: 10,}}>
                        <View style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10, overflow: 'hidden'}}>
                            <Image 
                            style={{height: 120, width:120,}}
                            source={{ uri: item.g_photo }} />
                        </View>
                        <View>
                          <TouchableOpacity onPress={() => this.props.navigation.navigate('Send',{
                              o_id: item.o_id,
                              g_name: item.g_name,
                              g_photo: item.g_photo,
                              g_sizeL: item.g_sizeL,
                              g_sizeW: item.g_sizeW,
                              g_sizeH: item.g_sizeH,
                              m_id: item.m_id,
                            })}>
                          <View style={styles.btn}>
                              {/* <Text style={{fontSize: 15}}>編號：{item.o_id}</Text> */}
                              <Text style={{fontSize: 20, color: '#485460'}}>  {item.g_name}</Text>
                              <Text style={{fontSize: 14, color: '#57606f'}}>夾取日期  {item.datetime}</Text>
                              <Text style={{fontSize: 14, color: '#57606f'}}>剩餘時間  {item.holdingtime}天</Text>
                          </View>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={this._alert}>
                              <View style={styles.exchange}>
                                  <Text style={{fontSize: 15}}>兌換積分</Text>
                              </View>
                            </TouchableOpacity>
                        </View>

                    </View>
            </View>}
            keyExtractor={({o_id}, index) => o_id} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    detailed: {
        // backgroundColor: 'orange',
        height: 120,
        width: deviceWidth,
        // marginBottom: 5,
        marginTop: 25,
        justifyContent: 'center',
        shadowRadius: 1,
        shadowOpacity: 0.1,
        shadowRadius: 1,
        shadowOffset: {
          width: 1,
          height: 2,
        },
    },
    btn: {
        backgroundColor: '#fff',
        justifyContent: 'space-around', 
        alignItems: 'stretch', 
        paddingLeft: 5,
        width: 225,
        height: 120,
        borderTopRightRadius: 10,
         borderBottomRightRadius: 10,
    },
    exchange: {
        // position: 'absolute',
        height: 40, 
        backgroundColor:'#f5f6fa', 
        width: deviceWidth/4, 
        alignSelf: 'flex-end', 
        bottom: 40, 
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 10,
    }
  });
  
