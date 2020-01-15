import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
 
          <View style={styles.topHeader}>
              <View>
                <Image
                style={{ height: 75, width: 150, marginTop: 30}}
                source={require('../../img/wlogo.png')} />
              </View>
              <View style={styles.topHeader_bgcolor}>
                    <View style={{ marginLeft: 5, justifyContent: 'center'}}>
                        <Image       
                        style={styles.topHeader_logo}
                        source={require('../../img/s_logo.png')} />
                    </View>
                    <View style={{ marginLeft: 20}}>
                        <Text style={{fontSize: 14}}>
                            125
                        </Text>
                    </View>
              </View>
              <View style={styles.topHeader_bgcolor}>
                    <View style={{ marginLeft: 5, justifyContent: 'center'}}>
                        <Image       
                        style={styles.topHeader_logo}
                        source={require('../../img/coin.png')} />
                    </View>
                    <View style={{ marginLeft: 20}}>
                        <Text style={{fontSize: 14}}>
                            125
                        </Text>
                    </View>
              </View>
          </View>
          
    );
  }
}

const styles = StyleSheet.create({
    topHeader: {
        flex: 0.3,
        backgroundColor: '#d2dae2',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection:　'row',
    },
    topHeader_logo: {
        width: 25,
        height: 25,
        // justifyContent: 'space-between',
    },
    topHeader_bgcolor: {
        flexDirection:　'row',
        height: 30,
        width: 100,
        // paddingTop: 2,
        marginTop: 35,
        // marginRight: 10,
        backgroundColor: 'white',
        borderRadius: 30,
        alignItems: 'center'
    },
});
