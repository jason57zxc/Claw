import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator, FlatList} from 'react-native';

export default class MachineList extends Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
        pickerSelection: 'Default',
        pickerDisplayed: false,
        count: 0,
        countGuarantee: 0,
        id: 29,
      };
      // this._Add = this._Add.bind(this);
    }
  
    componentDidMount(){
      this.getData()
    }

    componentDidUpdate(){
      this.getData()
    }

    getData = async () => {
      const { id } = this.state;
      return fetch('http://172.20.10.3/myApp/machinesList.php', {
        method: 'POST',
        header: {
            Accept: 'application/json',
            'Contect-type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson,
        }, function(){
        });

      })
      .catch((error) =>{
        console.error(error);
      });
    }
      // _Add() {
  //   this.refs.myMachine.showME();
  // }

  // renderList({ item }) {
  //   return (
  //     <View style={styles.machine}>
  //       <View style={{marginTop: 25, }}>
  //         <View style={styles.machineList}>
  //         <Image 
  //             style={{height: 120, width:120,}}
  //             source={require('../img/123.png')} />
  //         </View>
  //         <View style={styles.machineBtn}>
  //           <View style={{flex: 0.8, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center'}}>
  //             <Text style={{fontSize: 18,}}>{item.m_name}</Text>
  //           </View>
  //           <View style={{flex: 1, flexDirection: 'row'}}>
  //             <TouchableOpacity 
  //             style={styles.toBtn_left}
  //             onPress={() => this.state.navigation.navigate('MachineManage')}>
  //             <View><Text style={{fontSize: 12,}}>機台管理</Text></View>
  //             </TouchableOpacity>
              
  //             <TouchableOpacity style={styles.toBtn_right}>
  //             <View><Text style={{fontSize: 12,}}>商品設定</Text></View>
  //             </TouchableOpacity>
  //           </View>
  //         </View>
  //       </View>
  //     </View>
  //   );
  // }

  render() {
    
    if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        )
      }
    return (
        <View style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator = {false}
            numColumns={2}
            data={this.state.data}
            renderItem={({item}) => 
                <View style={styles.machine}>
                  <View style={{marginTop: 10, marginBottom: 5}}>
                     <TouchableOpacity 
                        // style={styles.toBtn_left}
                        onPress={() => {this.props.navigate('MachineData',{
                            m_id: item.m_id,
                            m_name: item.m_name,
                            m_photo: item.m_photo,
                            m_guarantee: item.m_guarantee,
                            m_address1:	item.m_address1,
                           
                        });}}>
                        <View style={styles.machineList}>
                        <Image 
                            style={{height: 120, width:120, borderRadius: 10}}
                            source={item.m_photo != null ? {uri: item.m_photo} :　require('../../img/123.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.machineBtn}>
                      <View style={{flex: 0.8, backgroundColor: '#eccc68', alignItems: 'center', justifyContent: 'center',}}>
                        <Text style={{fontSize: 18,}}>{item.m_name}</Text>
                      </View>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <TouchableOpacity 
                        style={styles.toBtn_left}
                        onPress={() => {this.props.navigate('MachineManage', {
                          m_id: item.m_id,
                          m_name: item.m_name,
                          m_photo: item.m_photo,
                          m_guarantee: item.m_guarantee,
                          m_address1:	item.m_address1,
                          m_power:	item.m_power,
                      });}}>
                        <View><Text style={{fontSize: 14,}}>機台管理</Text></View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                        style={styles.toBtn_right}
                        onPress={() => {this.props.navigate('ProductScreen',{
                            m_id: item.m_id,
                        });}}>
                        <View><Text style={{fontSize: 14,}}>商品設定</Text></View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>}
            keyExtractor={({m_id}, index) => m_id}
          />
        </View>
  
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      // backgroundColor: 'pink',
    },
    machine: {
      flex: 3.15,
    },
    machineList: {
      width: 170,
      height: 150,
      marginLeft: 10,
      backgroundColor: '#dfe4ea',
      alignItems: 'center', 
      justifyContent: 'center',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    machineBtn: {
      backgroundColor: '#dfe4ea',
      height: 75,
      width: 170,
      marginLeft: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,

    },
    toBtn_left: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#fff',
      borderBottomLeftRadius: 10,
      borderRightWidth: 0.5,
    },
    toBtn_right: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#fff',
      borderBottomRightRadius: 10,
      borderLeftWidth: 0.5,
    }
  });