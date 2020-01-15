import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

import DayData from './DayData';
import WeekData from './WeekData';

import {
  LineChart,
  BarChart
} from "react-native-chart-kit";

export default class GoodsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: true,
      week: false,
      month: false,
      year: false,
    };
  }

  render() {

    if(this.state.day){
    return (
      <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', width: deviceWidth}}>
          <TouchableOpacity onPress={() => this.setState({day: true, week: false, month: false, year: false,})}>
            <View style={ this.state.day ? styles.btnPress : styles.btn}>
              <Text style={{fontSize: 16,}}>一日</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({day: false, week: true, month: false, year: false,})}>
            <View style={ this.state.week ? styles.btnPress : styles.btn}>
              <Text style={{fontSize: 16,}}>一周</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({day: false, week: false, month: true, year: false,})}>
            <View style={ this.state.month ? styles.btnPress : styles.btn}>
              <Text style={{fontSize: 16,}}>一月</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({day: false, week: false, month: false, year: true,})}>
            <View style={ this.state.year ? styles.btnPress : styles.btn}>
              <Text style={{fontSize: 16,}}>一年</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <DayData/>
        </View>
    </View>  
    );
    }

    if(this.state.week){
    return (
      <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', width: deviceWidth}}>
          <TouchableOpacity onPress={() => this.setState({day: true, week: false, month: false, year: false,})}>
            <View style={ this.state.day ? styles.btnPress : styles.btn}>
              <Text style={{fontSize: 16,}}>一日</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({day: false, week: true, month: false, year: false,})}>
            <View style={ this.state.week ? styles.btnPress : styles.btn}>
              <Text style={{fontSize: 16,}}>一周</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({day: false, week: false, month: true, year: false,})}>
            <View style={ this.state.month ? styles.btnPress : styles.btn}>
              <Text style={{fontSize: 16,}}>一月</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({day: false, week: false, month: false, year: true,})}>
            <View style={ this.state.year ? styles.btnPress : styles.btn}>
              <Text style={{fontSize: 16,}}>一年</Text>
            </View>
          </TouchableOpacity>
        </View>
    <View>
      <WeekData/>
    </View>
</View>  
    );
    }

    if(this.state.month){
      return (
        <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', width: deviceWidth}}>
          <TouchableOpacity onPress={() => this.setState({day: true, week: false, month: false, year: false,})}>
            <View style={ this.state.day ? styles.btnPress : styles.btn}>
              <Text style={{fontSize: 16,}}>一日</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({day: false, week: true, month: false, year: false,})}>
            <View style={ this.state.week ? styles.btnPress : styles.btn}>
              <Text style={{fontSize: 16,}}>一周</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({day: false, week: false, month: true, year: false,})}>
            <View style={ this.state.month ? styles.btnPress : styles.btn}>
              <Text style={{fontSize: 16,}}>一月</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({day: false, week: false, month: false, year: true,})}>
            <View style={ this.state.year ? styles.btnPress : styles.btn}>
              <Text style={{fontSize: 16,}}>一年</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <DayData/>
        </View>
    </View>  
      );
      }

      if(this.state.year){
        return (
          <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', width: deviceWidth}}>
          <TouchableOpacity onPress={() => this.setState({day: true, week: false, month: false, year: false,})}>
            <View style={ this.state.day ? styles.btnPress : styles.btn}>
              <Text style={{fontSize: 16,}}>一日</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({day: false, week: true, month: false, year: false,})}>
            <View style={ this.state.week ? styles.btnPress : styles.btn}>
              <Text style={{fontSize: 16,}}>一周</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({day: false, week: false, month: true, year: false,})}>
            <View style={ this.state.month ? styles.btnPress : styles.btn}>
              <Text style={{fontSize: 16,}}>一月</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({day: false, week: false, month: false, year: true,})}>
            <View style={ this.state.year ? styles.btnPress : styles.btn}>
              <Text style={{fontSize: 16,}}>一年</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <DayData/>
        </View>
    </View>  
        );
        }
  }
}

var styles = StyleSheet.create({
  btn: {
    marginTop: 15,
    width: 60,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      width: 1,
      height: 2,
    }
  },
  btnPress: {
    marginTop: 15,
    width: 60,
    height: 35,
    backgroundColor: '#dfe6e9',
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      width: 1,
      height: 2,
    }
  }
})