import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default class Payment extends Component {
  constructor(props) {
    super(props);
    that = this,
    this.state = {
    };

  }

  render() {
    return (
      <View>
        
        <TouchableOpacity
        onPress={() => {
                this.props.navigation.state.params.payment({ payment: '夾幣' }),
                this.props.navigation.goBack();
        }}>
            <View style={styles.btn}>
              <Image 
              source={require('../../img/s_logo.png')} 
              style={{ width: 40, height: 40, alignContent: 'center', margin: 10, marginLeft: 15,}} />
              <View style={{ marginLeft: 15, marginTop: 25}}><Text>夾幣</Text></View>
              {/* <View style={{ marginLeft: 15, marginTop: 10}}><Text style={{color: '#f0932b'}}>$60</Text></View> */}
            </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {
                this.props.navigation.state.params.payment({ payment: '貨到付款' }),
                this.props.navigation.goBack();
        }}>
            <View style={styles.btn}>
              <Image 
              source={require('../../img/cod.png')} 
              style={{ width: 40, height: 40, alignContent: 'center', margin: 10, marginLeft: 15,}} />
              <View style={{ marginLeft: 15, justifyContent: 'center'}}><Text>貨到付款</Text></View>
              {/* <View style={{ marginLeft: 15, marginTop: 10}}><Text style={{color: '#f0932b'}}>$60</Text></View> */}
            </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    height: 65,
    borderWidth: 0.5,
    borderColor: '#dfe6e9',
    flexDirection: 'row'
  }
});