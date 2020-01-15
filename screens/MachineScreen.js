import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator, FlatList} from 'react-native';

import MachineList from './Entery/MachineList';

export default class MachineScreen extends Component {


  render() {

    return (
      <View style={{flex: 1}}>
        <MachineList navigate={this.props.navigation.navigate}/>       
      </View>
 
    );
  }
}
