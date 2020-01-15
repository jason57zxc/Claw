import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
// import TopHeader_user from './TopHeader_user';
import Advertisement from './Play/Advertisement';
import BtnGroup from './Play/categoryBtnGroup';
import PlayList from './Play/PlayList';


export default class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <TopHeader_user /> */}
        <Advertisement />
        <BtnGroup />
        <PlayList navigate={this.props.navigation.navigate} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});