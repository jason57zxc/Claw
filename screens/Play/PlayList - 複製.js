import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator, FlatList, Navigator, Button} from 'react-native';
// import GameScreen from './Game';

export default class PlayList extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      pickerSelection: 'Default',
      pickerDisplayed: false,
      count: 0,
      countGuarantee: 0,
    };
  }

  componentDidMount(){
    return fetch('http://172.20.10.4/myApp/goodsList.php')
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

  renderList({ item }) {
    return (
        <TouchableOpacity onPress={()=>{this.props.navigate('Game');}}>
        <View style={styles.list}>
            <View style={styles.g_photo}>
              <Image 
                  style={{height: 120, width:120,}}
                  source={{ uri: item.g_photo }} />
            </View>
            <View style={styles.g_info}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 18, paddingTop: 15}}>商品</Text>
                <Text style={{fontSize: 18, paddingLeft: 10, paddingTop: 15}}>{item.g_name}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 18, paddingTop: 15}}>數量</Text>
                <Text style={{fontSize: 18, paddingLeft: 10, paddingTop: 15}}>{item.g_quantity}</Text>
              </View>            
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 18, paddingTop: 15}}>投幣</Text>
                <Text style={{fontSize: 18, paddingLeft: 10, paddingTop: 15}}>{item.insertcoins}</Text>
              </View>
            </View>
        </View> 
      </TouchableOpacity>
    );
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
          // numColumns={2}
          data={this.state.data}
          renderItem={({item})=> 
          <TouchableOpacity onPress={()=>{this.props.navigate('Game');}}>
          <View style={styles.list}>
              <View style={styles.g_photo}>
                <Image 
                    style={{height: 120, width:120,}}
                    source={{ uri: item.g_photo }} />
              </View>
              <View style={styles.g_info}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 18, paddingTop: 15}}>商品</Text>
                  <Text style={{fontSize: 18, paddingLeft: 10, paddingTop: 15}}>{item.g_name}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 18, paddingTop: 15}}>數量</Text>
                  <Text style={{fontSize: 18, paddingLeft: 10, paddingTop: 15}}>{item.g_quantity}</Text>
                </View>            
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 18, paddingTop: 15}}>投幣</Text>
                  <Text style={{fontSize: 18, paddingLeft: 10, paddingTop: 15}}>{item.insertcoins}</Text>
                </View>
              </View>
          </View> 
        </TouchableOpacity>}
          keyExtractor={({g_id}, index) => g_id}
        />
        
         <TouchableOpacity onPress={()=>{this.props.navigate('Queue');}}>
          <Text>123</Text>
          </TouchableOpacity>
      </View>

    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink"
  },
  list: {
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 15,
    flexDirection: 'row'
  },
  g_info: {
    marginLeft: 30,
  }
});