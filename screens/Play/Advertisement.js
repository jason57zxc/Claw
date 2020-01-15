import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default class Advertisement extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
          {/* <Text> I am advertisement.</Text> */}
          {/* <Image 
                style={styles.ad}
                source={require('../../img/logo.png')}/> */}
          <Swiper
          autoplay={true}
          showsButtons={false}
          showsPagination={false}
          style={{paddingTop: 20,}}>
            <View style={styles.slide}>
               <View>
                <Image 
                  style={{height: 120, width: 120}}
                  source={require('../../img/nlogo.png')}/>
               </View>
               <View>
                <Image 
                  style={{height: 120, width: 180}}
                  source={require('../../img/wlogo.png')}/>
               </View>
            </View>
            <View style={styles.slide}>
               <View>
                <Image 
                  style={{height: 120, width: 120}}
                  source={require('../../img/nlogo.png')}/>
               </View>
               <View>
                <Image 
                  style={{height: 120, width: 180}}
                  source={require('../../img/wlogo.png')}/>
               </View>
            </View>
            {/* <View style={styles.slide}>
              <Text style={styles.text}>And simple</Text>
            </View> */}
          </Swiper>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 0.4,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffeaa7'
    },
    ad: {
      height: 120,
      width: 240, 

    },
    slide: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    }
  });
  
