import React, { Component } from 'react';
import { View, Text, Alert, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height; 

export default class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        id: 28
    };
  }
  componentDidMount(){
    this.getData()
  }

  componentDidUpdate(){
    this.getData()
  }

  getData = async () => {
    const { id } = this.state;
    return fetch('http://172.20.10.3/myApp/orderList.php', {
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
            data={this.state.data}
            renderItem={({item}) => 
            <View style={styles.detailed}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('OrderDetails',{
                  order_No: item.order_No,
                  g_name: item.g_name,
                  g_photo: item.g_photo,
                  cost: item.cost,
                  shipping_method: item.shipping_method,
                  send_address1: item.send_address1,
                  message: item.message,
                  datetime: item.datetime,
                  m_id: item.m_id,
                  user_name: item.user_name,
                  payment: item.payment,
                })}>
                    <View style={{backgroundColor: '#dfe4ea', flexDirection: 'row', margin: 10, borderRadius: 10}}>
                        <View style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10, overflow: 'hidden'}}>
                            <Image 
                            style={{height: 120, width:120,}}
                            source={{ uri: item.g_photo }} 
                            />
                        </View>
                        <View style={styles.btn}>
                            {/* <Text style={{fontSize: 15}}>編號：{item.o_id}</Text> */}
                            <Text style={{fontSize: 15, color: '#2f3542'}}>訂單編號  {item.order_No}</Text>
                            <Text style={{fontSize: 15, color: '#2f3542'}}>出貨商品  {item.g_name}</Text>
                            <Text style={{fontSize: 15, color: '#2f3542'}}>寄送方式  {item.shipping_method}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>}
            keyExtractor={({order_No}, index) => order_No} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f1e3',
    },
    detailed: {
        // backgroundColor: 'orange',
        height: 120,
        width: deviceWidth,
        marginBottom: 5,
        marginTop: 15,
        justifyContent: 'center',
        shadowOpacity: 0.1,
        shadowRadius: 1,
        shadowOffset: {
          width: 1,
          height: 2,
        },
    },
    btn: {
        // backgroundColor: 'skyblue',
        justifyContent: 'space-around', 
        alignItems: 'stretch', 
        paddingLeft: 5,
        
    },
  });
  
