import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview'

// import { Video } from 'expo-av';
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export default class LiveBroadcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      // <View style={styles.liveBroadcast}>
          <WebView
          source={{uri: 'http://172.20.10.2:8080/?action=stream'}}
          scalesPageToFit={true}
          style={{marginTop:35}}/>
    
      // </View>
 
          // <View style={styles.liveBroadcast}>
          //   {/* <Image
          //   style={{width: deviceWidth, height: 240}}
          //   source={require('../../img/123.jpg')}/> */}
          //   {/* <Video
          //   source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          //   // source={require('../../video/catch.MP4')}
          //   rate={1.0}
          //   volume={1.0}
          //   isMuted={false}
          //   resizeMode="cover"
          //   shouldPlay
          //   isLooping
          //   style={{ width: 375, height: 300 }}
          // /> */}
          // <Video
          //   source={require('../../video/catch2.mp4')}
          //   rate={1.0}
          //   volume={1.0}
          //   isMuted={false}
          //   resizeMode="cover"
          //   shouldPlay
          //   isLooping
          //   style={{ width: deviceWidth, height: 240}}/>
          // </View>

    );
  }
}

const styles = StyleSheet.create({
    liveBroadcast: {
        flex: 0.8,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        overflow:'hidden'
    },
});
// import React, { Component } from "react";
// import { StyleSheet, View, Text, ScrollView, } from "react-native";
// import { WebView } from "react-native-web";

// export default class Maps extends Component {
//   render() {
//     return (
//       <View style={{overflow: 'hidden', height:300 ,width: 300}}>
//          <WebView 
//         source={{ uri: "https://www.youtube.com" }} />
//       </View>
       

//     );
//   }
// }