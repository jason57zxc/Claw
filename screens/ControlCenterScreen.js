import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

export const deviceWidth = Dimensions.get('window').width; 
export const deviceHeight = Dimensions.get('window').height;


export default class ControlCenterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
        source={require('../img/bg.jpg')}
        style={{width: deviceWidth, height: 280, paddingTop: 60}}>
          <Icon 
          style={{ paddingLeft: 14 }} 
          onPress={() => this.props.navigation.openDrawer()} 
          name="md-menu" size={30} color='white' />
        <View style={styles.name}>
          <Image 
            style={{height: 100, width: 100, marginTop: 10}}
            source={require('../img/user.png')} />
          <Text style={{fontSize: 24,}}>Jason Chiou</Text>
          <Text style={{fontSize: 18, marginTop: 5,}}>@jason57zxc</Text>
        </View>
        </ImageBackground>

        <View style={styles.message}>
          <Image 
            style={{height: 40, width: 40, marginLeft: 20,}}
            source={require('../img/mail.png')} />
            <View style={{flexDirection: 'column'}}>
              <View><Text style={{fontSize: 16, marginLeft: 20, color: '#747d8c'}}>嗨, Jason</Text></View>
              <View><Text style={{fontSize: 16, marginLeft: 20,}}>一封新訊息</Text></View>
            </View>
            
        </View>
        
        <View style={styles.features}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Data')}>
              <View style={styles.block}>
                  <Image 
                  style={{height: 40, width: 40,}}
                  source={require('../img/graph.png')} />
                  <Text style={{fontSize: 14, alignSelf: 'center', marginTop: 8,}}>數據分析</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('MachineScreen')}>
              <View style={styles.block}>
                  <Image 
                  style={{height: 40, width: 40,}}
                  source={require('../img/all.png')} />
                  <Text style={{fontSize: 14, alignSelf: 'center', marginTop: 8,}}>機台管理</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Order')}>
              <View style={styles.block}>
                  <Image 
                  style={{height: 40, width: 40,}}
                  source={require('../img/receipt.png')} />
                  <Text style={{fontSize: 14, alignSelf: 'center', marginTop: 8,}}>訂單管理</Text>
              </View>
            </TouchableOpacity>

          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Data')}>
              <View style={styles.block}>
                  <Image 
                  style={{height: 40, width: 40,}}
                  source={require('../img/money.png')} />
                  <Text style={{fontSize: 14, alignSelf: 'center', marginTop: 8,}}>財務管理</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.block}>
                  {/* <Image 
                  style={{height: 50, width: 50,}}
                  source={require('../img/investment.png')} /> */}
                  <Text style={{fontSize: 16, alignSelf: 'center', color: 'white', marginTop: 8,}}></Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.block}>
                  {/* <Image 
                  style={{height: 50, width: 50,}}
                  source={require('../img/investment.png')} /> */}
                  <Text style={{fontSize: 16, alignSelf: 'center', color: 'white', marginTop: 8,}}></Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity>
              <View style={styles.block}>
                  {/* <Image 
                  style={{height: 50, width: 50,}}
                  source={require('../img/investment.png')} /> */}
                  <Text style={{fontSize: 16, alignSelf: 'center', color: 'white', marginTop: 8,}}></Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.block}>
                  {/* <Image 
                  style={{height: 50, width: 50,}}
                  source={require('../img/investment.png')} /> */}
                  <Text style={{fontSize: 16, alignSelf: 'center', color: 'white', marginTop: 8,}}></Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.block}>
                  {/* <Image 
                  style={{height: 50, width: 50,}}
                  source={require('../img/investment.png')} /> */}
                  <Text style={{fontSize: 16, alignSelf: 'center', color: 'white', marginTop: 8,}}></Text>
              </View>
            </TouchableOpacity>

          </View>

        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe4ea',
  },
  name: {
    // flexGrow: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center', 
    // flexDirection: 'row',
    height: 200,
    marginTop: 45,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 10,
    paddingBottom: 20,
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  message: {
    // flexGrow: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    alignItems: 'center', 
    flexDirection: 'row',
    height: 60,
    marginTop: 100,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 10,
  },
  features: {
    // flexGrow: 5,
    // backgroundColor: '#253454',
    // padding: 16,
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  block: {
    height: 85,
    width: 85,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
});
