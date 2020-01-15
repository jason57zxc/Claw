import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

export default class Shipping extends Component {
  constructor(props) {
    super(props);
    that = this,
    this.state = {
      address: '',
    };

  }

  Back() {
   
  }

//   componentWillUnmount() {
//     alert("123")
//   }

  render() {
    return (
      <View>
        {/* <Text> Shipping </Text> */}
        <TouchableOpacity
        onPress={() => {
                this.props.navigation.state.params.onSelect({ selected: '7-11', cost: 60 }),
                this.props.navigation.goBack();
        }}>
            <View style={styles.btn}>
              <Image 
              source={require('../../img/7-11.png')} 
              style={{ width: 40, height: 40, alignContent: 'center', margin: 10, marginLeft: 15,}} />
              <View style={{ marginLeft: 15, marginTop: 10}}><Text>7-11</Text></View>
              <View style={{ marginLeft: 15, marginTop: 10}}><Text style={{color: '#f0932b'}}>$60</Text></View>
              
            </View>
            
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {
                this.props.navigation.state.params.onSelect({ selected: '全家', cost: 60  }),
                this.props.navigation.goBack();
        }}>
            <View style={styles.btn}>
              <Image 
              source={require('../../img/family.png')} 
              style={{ width: 40, height: 40, alignContent: 'center', margin: 10, marginLeft: 15,}} />
              <View style={{ marginLeft: 15, marginTop: 10}}><Text>全家</Text></View>
              <View style={{ marginLeft: 15, marginTop: 10}}><Text style={{color: '#f0932b'}}>$60</Text></View>
              
            </View>
            
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {
            this.input.focus()             
        }}>
          <View>
            <View style={styles.btn}>
              <Image 
              source={require('../../img/cat.jpg')} 
              style={{ width: 40, height: 40, alignContent: 'center', margin: 10, marginLeft: 15,}} />
              <View >
                <View style={{ marginLeft: 15, marginTop: 10, flexDirection: 'row'}}>
                  <Text>宅配</Text>
                  <Text style={{color: '#f0932b'}}>$80</Text>
                </View>
                <View>
                  <TextInput 
                  onChangeText={address => this.setState({address})}
                  style={{ marginLeft: 15, marginTop: 10,}}
                  placeholder='地址'
                  returnKeyType='done'
                  keyboardType='default'
                  ref={input => { this.input = input}}
                  onSubmitEditing={() => {
                    this.props.navigation.state.params.onSelect({ selected: '宅配', cost: 80,  address: this.state.address}),
                    this.props.navigation.goBack();
                  }}/>
                </View>
              </View>
            </View>
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
  },
});