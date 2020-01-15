import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.logo}>
        <Image 
        style={styles.img_logo}
        source={require('../../img/logo.png')} />

        <Text style={styles.title}>
          Welcome!
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    logo: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    img_logo: {
      width: 200,
      height: 100,
    },
    title: {
      color: 'white',
      marginTop: 10,
      opacity: 0.9,
    }
  });