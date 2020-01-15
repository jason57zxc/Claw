import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import TopHeader from './TopHeader';
import LiveBroadcast from './LiveBroadcast';

export default class Claw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      g_id: this.props.navigation.state.params.g_id,
      g_name: this.props.navigation.state.params.g_name,
      g_info: this.props.navigation.state.params.g_info,
      insertcoins: this.props.navigation.state.params.insertcoins,
      g_sizeL: this.props.navigation.state.params.g_sizeL,
      g_sizeW: this.props.navigation.state.params.g_sizeW,
      g_sizeH: this.props.navigation.state.params.g_sizeH,
      g_photo: this.props.navigation.state.params.g_photo,
      id: 28,
    };
  }

  // Q = () => {

  //   const date = new Date().getDate(); 
  //   const month = new Date().getMonth() + 1; 
  //   const year = new Date().getFullYear(); 
  //   const hours = new Date().getHours(); 
  //   const min = new Date().getMinutes();
  //   const sec = new Date().getSeconds(); 
  //   const mil = new Date().getMilliseconds();
  //   const { g_id, id } = this.state;

  //   fetch('http://172.20.10.4/myApp/queue.php', {
  //     method: 'POST',
  //     header: {
  //         Accept: 'application/json',
  //         'Contect-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       g_id: g_id,
  //       id: id,
  //       YMD: year + '-' + month + '-' + date,
  //       HMS: hours + ':' + min + ':' + sec + '.' + mil,
  //       status: 'queue',
  //     })
  //     })
  //     .then((response) => response.text())
  //     .then((responseJson) => {
  //         alert(responseJson);
  //     })
  //     .catch((error) => {
  //         console.error(error);
  //     });
  //     // alert(imgurl);

  // };

  render() {
    return (
      
      <View style={styles.container}>
      
        <TopHeader/>

        <LiveBroadcast/>
        
        <View style={styles.queue}>

        <ScrollView>
            <View style={styles.queue_info}>
              <View style={styles.queue_info_details}>
                <View style={styles.view_details}>
                  <Text style={{fontSize: 16, color: '#1e272e'}}>排隊人數：0</Text>
                </View>
                <View style={styles.view_details}>
                  <Text style={{fontSize: 16, color: '#1e272e'}}>觀看人數：32</Text>
                </View>
                <TouchableOpacity>
                  <View style={styles.view_recharge}>
                    <Text style={{fontSize: 20, color: '#ff5e57'}}>儲值點數</Text>
                </View>
                </TouchableOpacity>
                
              </View>
              
              <TouchableOpacity 
              style={{flex: 1}}
              // onPress={this.Q}>
              onPress={() => this.props.navigation.navigate('Game')}>
                <View style={styles.queue_play}>
                  <Text style={{fontSize: 35, color: 'white'}}>PLAY!!{this.state.HMS}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.bottom_info}>
            <View style={styles.productList}>
                <Text 
                style={{fontSize: 20, color: '#1e272e', textAlign: 'center', paddingTop: 10, paddingBottom: 5}}>
                  商品資訊
                </Text>            
                <View style={styles.productList_info}>
                  <View style={{flex: 2, justifyContent: 'center', alignItems: 'center', marginLeft: 10,}}>
                    <Image
                    style={{height:150, width: 120, borderRadius: 10}}
                    source={{ uri: this.state.g_photo }}/>
                  </View>
                  <View style={{ justifyContent: 'flex-start', paddingTop: 25,  marginRight: 15}}>
                    <Text style={styles.text_pList}>商品名稱  {this.state.g_name}</Text>
                    <Text style={styles.text_pList}>商品介紹  {this.state.g_info}</Text>
                    <Text style={styles.text_pList}>尺寸  {this.state.g_sizeL}*{this.state.g_sizeW}*{this.state.g_sizeH}(mm)</Text>
                  </View>
                </View>
              </View>

              <View style={styles.winnerList}>
                <Text 
                style={{fontSize: 20, color: '#1e272e', textAlign: 'center', paddingTop: 10, paddingBottom: 5}}>
                  中獎名單
                </Text>            
                <View style={styles.winnerList_showList}>

                </View>
              </View>

            </View>
            </ScrollView> 
        </View>
    
      </View>

    );
  }
}



const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    queue: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#d2dae2',
    },
    queue_info: {
      flex: 1,
      flexDirection: 'row',

     },
    bottom_info: {
      flex: 1,
    },
    queue_info_details: {
      flex: 1,
      flexDirection: 'column',
      // borderRadius: 50,
    },
    queue_play: {
      flex: 1,
      margin: 15,
      backgroundColor: '#ff3f34',
      justifyContent:　'center',
      alignItems: 'center',
      borderRadius: 100,
    },
    view_details: {
      height: 45,
      marginTop: 10,
      marginLeft: 15,
      marginBottom: 1,
      justifyContent:　'center',
      alignItems: 'center',
      backgroundColor: 'white',
      // borderColor: 'white',
      // borderWidth: 2,
      borderRadius: 20,
      // borderTopRightRadius: 20,
    },
    view_recharge: {
      height: 50,
      marginTop: 10,
      marginLeft: 15,
      marginBottom: 1,
      justifyContent:　'center',
      alignItems: 'center',
      backgroundColor: '#ffc048',
      // borderWidth: 2,
      borderRadius: 25,

    },
    productList: {      
      // backgroundColor: 'black',
      height: 240,
      width: 340,
      backgroundColor: '#fff',
      marginTop: 25,
      marginBottom: 30,
      alignSelf: 'center',
      borderColor: 'white',
      borderWidth: 3,
      borderRadius: 20,
    },
    winnerList: {
      height: 300,
      width: 340,
      backgroundColor: '#fff',
      marginTop: 5,
      marginBottom: 10,
      alignSelf: 'center',
      borderColor: 'white',
      borderWidth: 3,
      borderRadius: 20,
    },
    winnerList_showList: {

    },
    productList_info: {
      flex: 1,
      flexDirection: 'row',
      marginLeft: -15,
    },
    text_pList: {
      fontSize: 16,
      marginLeft: 5,
      marginTop: 5,
      color: '#1e272e',
      marginTop: 20,
    }
});
