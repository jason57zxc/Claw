import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';

export default class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: true,
      coupon: false,
      doll: false,
      hero: false,
      new: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        // style={{backgroundColor: '#9FD1F0'}}
        > */}
        <View style={styles.sort}> 
            <TouchableOpacity onPress={() => this.setState({all: true, coupon: false, doll: false, hero: false, new: false,})}>
              <View style={this.state.all ? styles.btn_true: styles.btn_false}>
                <View style={{marginTop: 5, }}>
                  <Image
                    style={{height: 30, width: 30, }}
                    source={this.state.all ? require('../../img/cm_press.png'): require('../../img/cm_unpress.png')}/>
                </View>
                <View>
                  <Text 
                  style={ this.state.all ? {fontSize: 12, fontFamily: 'Trebuchet MS', marginTop: 5, color: '#3D4490'} : {fontSize: 14, fontFamily: 'Trebuchet MS', marginTop: 5, color: '#A8CBEC'}}>
                    全部
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.setState({all: false, coupon: false, doll: false, hero: false, new: true,})}>
              <View style={this.state.new ? styles.btn_true: styles.btn_false}>
                <View style={{marginTop: 5, }}>
                  <Image
                    style={{height: 30, width: 30, }}
                    source={this.state.new ? require('../../img/new_p.png'): require('../../img/new_unp.png')}/>
                </View>
                <View>
                  <Text 
                  style={ this.state.new ? {fontSize: 12, fontFamily: 'Trebuchet MS', marginTop: 5, color: '#3D4490'} : {fontSize: 14, fontFamily: 'Trebuchet MS', marginTop: 5, color: '#A8CBEC'}}>
                    新品
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.setState({all: false, coupon: false, doll: true, hero: false, new: false,})}>
              <View style={this.state.doll ? styles.btn_true: styles.btn_false}>
                <View style={{marginTop: 5, }}>
                  <Image
                    style={{height: 30, width: 30, }}
                    source={this.state.doll ? require('../../img/doll_p.png'): require('../../img/doll_unp.png')}/>
                </View>
                <View>
                  <Text 
                  style={ this.state.doll ? {fontSize: 12, fontFamily: 'Trebuchet MS', marginTop: 5, color: '#3D4490'} : {fontSize: 14, fontFamily: 'Trebuchet MS', marginTop: 5, color: '#A8CBEC'}}>
                    娃娃
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.setState({all: false, coupon: false, doll: false, hero: true, new: false,})}>
              <View style={this.state.hero ? styles.btn_true: styles.btn_false}>
                <View style={{marginTop: 5, }}>
                  <Image
                    style={{height: 30, width: 30, }}
                    source={this.state.hero ? require('../../img/superhero_p.png'): require('../../img/superhero_unp.png')}/>
                </View>
                <View>
                  <Text 
                  style={ this.state.hero ? {fontSize: 12, fontFamily: 'Trebuchet MS', marginTop: 5, color: '#3D4490'} : {fontSize: 14, fontFamily: 'Trebuchet MS', marginTop: 5, color: '#A8CBEC'}}>
                    公仔
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.setState({all: false, coupon: true, doll: false, hero: false, new: false,})}>
              <View style={this.state.coupon ? styles.btn_true: styles.btn_false}>
                <View style={{marginTop: 5, }}>
                  <Image
                    style={{height: 30, width: 30, }}
                    source={this.state.coupon ? require('../../img/coupon_p.png'): require('../../img/coupon_unp.png')}/>
                </View>
                <View>
                  <Text 
                  style={ this.state.coupon ? {fontSize: 12, fontFamily: 'Trebuchet MS', marginTop: 5, color: '#3D4490'} : {fontSize: 14, fontFamily: 'Trebuchet MS', marginTop: 5, color: '#A8CBEC'}}>
                    優惠券
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* <View style={styles.btn}>
              <TouchableOpacity>
      
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                    style={{height: '75%', width: '75%', marginTop: 3,}}
                    source={require('../../img/doll.png')}/>
                    <Text style={{fontSize: 12, fontFamily: 'Trebuchet MS'}}>Doll</Text>  
                  </View>    

              </TouchableOpacity>
            </View>

            <View style={styles.sortBtn}>
              <TouchableOpacity>
               
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                    style={{height: '75%', width: '75%', marginTop: 3,}}
                    source={require('../../img/robot.png')}/>
                    <Text style={{fontSize: 12, fontFamily: 'Trebuchet MS'}}>Robot</Text>  
                  </View>    

              </TouchableOpacity>
            </View>

            <View style={styles.sortBtn}>
              <TouchableOpacity>
               
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                    style={{height: '75%', width: '75%', marginTop: 3,}}
                    source={require('../../img/coupon.png')}/>
                    <Text style={{fontSize: 12, fontFamily: 'Trebuchet MS'}}>Coupon</Text>  
                  </View>    

              </TouchableOpacity>
            </View>

            <View style={styles.sortBtn_last}>
              <TouchableOpacity>
               
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                    style={{height: '75%', width: '75%', marginTop: 3,}}
                    source={require('../../img/coupon.png')}/>
                    <Text style={{fontSize: 12, fontFamily: 'Trebuchet MS'}}>Coupon</Text>  
                  </View>    

              </TouchableOpacity>
            </View> */}

        </View>
        {/* </ScrollView> */}
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // backgroundColor: 'pink',
    },
    sort: {
      // backgroundColor: '#DDDDDD',
      height: 75,
      flexDirection: 'row'
    },
    // sortBtn: {
    //   height: 65,
    //   width: 65,
    //   backgroundColor: '#D9E5E8',
    //   marginLeft: 5,
    //   borderRadius: 15,
    //   justifyContent: 'center',
    //   marginTop: 5,
    //   shadowOpacity: 0.4,
    //   shadowColor: '#B8CCD0',
    // },
    btn_true: {
      height: 60,
      width: 60,
      // flexDirection: 'row',
      // backgroundColor:  'pink',
      marginTop: 5,
      shadowOpacity: 0.4,
      shadowColor: '#B8CCD0',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      marginLeft: 12,
      borderWidth: 1,
      borderColor: '#3D4490',
      shadowOpacity: 0.4,
      shadowColor: '#B8CCD0',
    },
    btn_false: {
      height: 60,
      width: 60,
      // flexDirection: 'row',
      // backgroundColor:  'pink',
      marginTop: 5,
      shadowOpacity: 0.4,
      shadowColor: '#B8CCD0',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      marginLeft: 10,
      // borderWidth: 1,
      // borderColor: '#3D4490',
    },
    sortBtn_last: {
      height: 65,
      width: 65,
      backgroundColor: '#D9E5E8',
      marginLeft: 5,
      marginRight: 5,
      borderRadius: 15,
      justifyContent: 'center',
      marginTop: 5,
      shadowOpacity: 0.4,
      shadowColor: '#B8CCD0'
    },
  });
  