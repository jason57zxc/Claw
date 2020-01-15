
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import TopHeader from './TopHeader';
import LiveBroadcast from './LiveBroadcast';

export default class Claw extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

   UP
   _onPressInUp = () => {
    this.setState({ pressing: true });
    return fetch('http://172.20.10.6/LED1', {
      method: "POST",
    })
  };

  //DOWN
  _onPressInDown = () => {
    this.setState({ pressing: true });
    return fetch('http://172.20.10.6/LED2', {
      method: "POST",
    })
  };


  //LEFT
  _onPressInLeft = () => {
    this.setState({ pressing: true });

    return fetch('http://172.20.10.6/LED3', {
      method: "POST",
    })
  };

  //RIGHT
  _onPressInRight = () => {
    this.setState({ pressing: true });

    return fetch('http://172.20.10.6/LED4', {
      method: "POST",
    })
  };

  //STOP
  _onPressOut = () => {
    this.setState({ pressing: false });
    return fetch('http://172.20.10.6/stop', {
      method: "POST",
    })
  };

  //CATCH
  _onPressInCatch = () => {
    this.setState({ pressing: true });

    return fetch('http://172.20.10.6/LED5', {
      method: "POST",
    })
  };


  render() {
    return (
      <View style={styles.container}>
        
        <TopHeader/>

        <LiveBroadcast/>

        <View style={styles.game}>
          <View style={styles.view_direction}>
            <View style={{height: 80, width: 80}}>
            </View>

            <View>
              <TouchableOpacity
                  onPressIn={this._onPressInUp}
                  onPressOut={this._onPressOut}>
                <Image 
                style={styles.img_direction}
                source={require('../../img/up.png')}/>
              </TouchableOpacity>
            </View>   

            <View style={{height: 80, width: 80}}>
            </View>

            <View>
            <TouchableOpacity
                  onPressIn={this._onPressInLeft}
                  onPressOut={this._onPressOut}>
                <Image 
                style={styles.img_direction}
                source={require('../../img/left.png')}/>
              </TouchableOpacity>
            </View>

            <View style={{height: 80, width: 80}}>
            </View>

            <View>
              <TouchableOpacity
                  onPressIn={this._onPressInRight}
                  onPressOut={this._onPressOut}>
                <Image 
                style={styles.img_direction}
                source={require('../../img/right.png')}/>
              </TouchableOpacity>
            </View>
            
            <View style={{height: 80, width: 80}}>
            </View>

            <View>
              <TouchableOpacity
                  onPressIn={this._onPressInDown}
                  onPressOut={this._onPressOut}>
                <Image 
                style={styles.img_direction}
                source={require('../../img/down.png')}/>
              </TouchableOpacity>
            </View>

            <View style={{height: 80, width: 80}}>
            </View>
          </View>
          <View style={styles.view_catchBtn}>
            <TouchableOpacity
              onPressIn={this._onPressInCatch}
              onPressOut={this._onPressOut}>
             <Image 
              style={styles.img_catchBtn}
              source={require('../../img/s_logo.png')}/>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    game: {
        flex: 1,
        backgroundColor: '#d2dae2',
        flexDirection: 'row'
    },
    img_direction: {
      height: 80,
      width: 80,
    },
    view_direction: {
      height: 240,
      width: 240,
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 45,
    },
    img_catchBtn: {
      height: 120,
      width: 120,
    },
    view_catchBtn:　{
      alignItems: 'center',
      justifyContent: 'center',
    }
});