import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, Button, Alert} from 'react-native';


import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class MachineManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      m_id: this.props.navigation.state.params.m_id,
      m_name: this.props.navigation.state.params.m_name,
      image: this.props.navigation.state.params.m_photo,
      m_guarantee: this.props.navigation.state.params.m_guarantee,
      m_address1: this.props.navigation.state.params.m_address1,
      m_power: this.props.navigation.state.params.m_power,
    };
  }


  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  pressCounterPlus = () => {
    this.setState({
      m_guarantee: parseInt(this.state.m_guarantee)+10
    })
  }

  pressCounterMinus = () => {
    this.setState({
      m_guarantee: parseInt(this.state.m_guarantee)-10
    })
  }

  pressPowerPlus = () => {
    this.setState({
      m_power: parseInt(this.state.m_power)+1
    })
  }

  pressPowerMinus = () => {
    this.setState({
      m_power: parseInt(this.state.m_power)-1
    })
  }

  submit = () => {
    const { m_id, m_name, m_address1, m_guarantee, image, m_power } = this.state;

    if( m_guarantee%10 == 0 && m_guarantee != 0 && m_name != null &&  m_address1 != null && image != null ){
      const data = new FormData();
      data.append('name', 'claw'); // you can append anyone.
      data.append('image', {
        uri: image,
        type: 'image/png', // or photo.type
        name: '123.png'
      });
      fetch('https://api.imgur.com/3/upload', {
        method: 'post',
        headers:{ 'Authorization' : 'Client-ID 030f9a2e73a70a3' },
        body: data
      })
      .then((response) => response.json())
      .then((responseJson) => {
        const imgurl = responseJson.data.link
        fetch('http://172.20.10.3/myApp/machinesModify.php', {
        method: 'POST',
        header: {
            Accept: 'application/json',
            'Contect-type': 'application/json',
        },
        body: JSON.stringify({
          m_id: m_id,
          m_name: m_name,
          m_photo: imgurl,
          m_address1: m_address1,
          m_guarantee: m_guarantee,
          m_power: m_power,
        }) 
        })
        .then((response) => response.json())
        .then((responseJson) => {
            Alert.alert(responseJson);
            this.props.navigation.navigate('MachineScreen')
        })
        .catch((error) => {
            console.error(error);
        });

        // alert(imgurl);
      })
      .catch((error) => {
        console.error(error);
      });  
      // alert('yes')
    } 
    // else if( m_guarantee%10 == 0 && m_guarantee != 0 && m_name != null &&  m_address1 != null && image == null ){
    //   fetch('http://172.20.10.4/myApp/machinesModify.php', {
    //     method: 'POST',
    //     header: {
    //         Accept: 'application/json',
    //         'Contect-type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       m_id: m_id,
    //       m_name: m_name,
    //       m_photo: 'https://i.imgur.com/4JXGLaK.png',
    //       m_address1: m_address1,
    //       m_guarantee: m_guarantee,
    //     }) 
    //     })
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //         alert(responseJson);
    //         this.props.navigation.navigate('MachineScreen')
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    // }
    else {
      alert('都要填喔')
    }    
  }

  render() {

    return (

      <View style={styles.container}>
        
        <ScrollView>
          <KeyboardAvoidingView behavior='padding'>       
          <View style={styles.entry}>
            <View style={styles.section}>
                <View>
                  <Text style={styles.entry_text}>機台編號</Text>
                </View>
                <View>
                  <Text style={styles.text}> {this.state.m_id} </Text>
                </View>  
              </View>
            <View style={styles.section}>
              <View>
                <Text style={styles.entry_text}>機台名稱</Text>
              </View>
              <View>
              <TextInput
                  onChangeText= {m_name => this.setState({m_name})}
                  returnKeyType='next'
                  // keyboardType='email-address'
                  autoCapitalize='none'
                  autoCorrect={false}
                  // placeholderTextColor='rgba(255,255,255,0.88)'
                  style={styles.input}>
                  {this.state.m_name}
              </TextInput>
              </View>  
            </View>

            <View style={styles.section}>
                <View>
                  <Text style={styles.entry_text}>機台照片</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

                  <View style={{marginLeft: 12}}>
                    <Image 
                    source={this.state.image != null ? {uri :this.state.image} :　require('../../img/picture.png') } 
                    style={{ width: 150, height: 150 }} />
                  </View>
                  <Button
                    title="選擇照片"
                    onPress={this._pickImage}
                  />
                </View>
              </View>

            <View style={styles.section}>
              <View>
                <Text style={styles.entry_text}>機台位置</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                <TextInput
                    onChangeText= {m_address1 => this.setState({m_address1})}
                    returnKeyType='done'
                    // keyboardType='numeric'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='地址'
                    // placeholderTextColor='rgba(255,255,255,0.88)'
                    style={styles.input}>
                    {this.state.m_address1}
                </TextInput>

              </View>  
            </View>

            <View style={styles.section}>
              <View>
                <Text style={styles.entry_text}>保夾金額</Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 15, alignItems: 'center'}}>
                <TouchableOpacity
                style={styles.button}
                onPress={this.pressCounterMinus}>
                  <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 5}}>
                    <Image 
                    style={styles.img}
                    source={require('../../img/minus.png')}/>
                  </View>
                  
                </TouchableOpacity>
                <View style={{width: 80, padding: 10}}>
                <TextInput
                style={[styles.countText]}
                keyboardType= 'number-pad'
                returnKeyType='done'
                onChangeText= {m_guarantee => this.setState({m_guarantee})}>
                {this.state.m_guarantee > 0 ? this.state.m_guarantee : this.state.m_guarantee=0}</TextInput>
                </View>
                
                <TouchableOpacity
                style={styles.button}
                onPress={this.pressCounterPlus}>
                  <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 5}}>
                    <Image 
                    style={styles.img}
                    source={require('../../img/plus.png')}/>
                  </View>
                </TouchableOpacity>
              </View>  
            </View>

            <View style={styles.section}>
              <View>
                <Text style={styles.entry_text}>爪力設定</Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 15, alignItems: 'center'}}>
                <TouchableOpacity
                style={styles.button}
                onPress={this.pressPowerMinus}>
                  <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 5}}>
                    <Image 
                    style={styles.img}
                    source={require('../../img/minus.png')}/>
                  </View>
                  
                </TouchableOpacity>
                <View style={{width: 80, padding: 10}}>
                <TextInput
                style={[styles.countText]}
                keyboardType= 'number-pad'
                returnKeyType='done'
                onChangeText= {m_power => this.setState({m_power})}>
                {this.state.m_power > 0 ? this.state.m_power : this.state.m_power=0}
                </TextInput>
                </View>
                
                <TouchableOpacity
                style={styles.button}
                onPress={this.pressPowerPlus}>
                  <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 5}}>
                    <Image 
                    style={styles.img}
                    source={require('../../img/plus.png')}/>
                  </View>
                </TouchableOpacity>
              </View>  
            </View>
          </View>
          </KeyboardAvoidingView>   
        </ScrollView>

          <TouchableOpacity onPress={this.submit}> 
            <View 
            style={{justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: '#444444', 
            height: 60,
            paddingBottom: 10,}}>
              <Text style={{fontSize: 18, color: '#fff'}}>更新</Text>
            </View>
          </TouchableOpacity>
       
      </View>
      
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
  },
  entry: {
    height: 650,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  entry_text: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 12,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 14,
    paddingVertical: 24,
    // borderBottomColor: 'gray',
    // borderBottomWidth: 0.5,
  },
  sectionL: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 14,
    paddingVertical: 24,
  },
  input: {
    marginLeft: 15,
    height: 30,
    width: 200,
    borderBottomColor: '#cfcfcf',
    borderBottomWidth: 1,
    fontSize: 16,
  },
  inputL: {
    marginLeft: 15,
    height: 100,
    width: 200,
    borderColor: '#cfcfcf',
    borderWidth: 1,
    fontSize: 16,
  },
  inputS: {
    marginLeft: 10,
    height: 30,
    width: 75,
    borderBottomColor: '#cfcfcf',
    borderBottomWidth: 1,
    fontSize: 16,
    // textAlign: 'center',
  },
  th_dropdown: {
    paddingTop: 8, 
    paddingBottom: 8, 
    alignItems: 'center'
  },
  countText: {
    fontSize: 16,
    borderBottomColor: '#cfcfcf',
    borderBottomWidth: 1,
    textAlign: 'center',
    paddingBottom: 5,
  },
  button: {
    alignItems: 'center',
    // backgroundColor: '#DDDDDD',
    height: 40,
    width: 40,
  },
  img: {
    height: 25,
    width: 25,    
  },
  img_cross: {
    height: 15,
    width: 15, 
    marginLeft: 7,  
    marginRight: -7, 
  },
  header: {
    height: 80,
    backgroundColor: 'pink',
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingTop: 30,
  },
});
