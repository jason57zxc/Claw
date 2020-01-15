import React, { Component } from 'react';
import { View, Text,  Dimensions, StyleSheet, TextInput, FlatList, Modal, TouchableOpacity, Button, Image, KeyboardAvoidingView, ScrollView } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export const deviceWidth = Dimensions.get('window').width;      //裝置的寬度
export const deviceHeight = Dimensions.get('window').height; 

export default class ProductManage extends Component {
  constructor() {
    super();
    this.state = {
      goodsSelection: 'Default',
      pickerDisplayed: false,
      count: 0,
      count10: 0,
      goodsName: '',
      goodsSize: '',
      goodsInfo: '',
      isLoading: true,
      image: null,
      data: [],
    };
  }

  componentDidMount() {
    this.getPermissionAsync();
    this.getData();
  }

  getData = async () => {
    const { m_id } = this.props;
    return fetch('http://172.20.10.4/myApp/goodSearch.php', {
      method: 'POST',
      header: {
        Accept: 'application/json',
        'Contect-type': 'application/json',
      },
      body: JSON.stringify({
        m_id: m_id,
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson,
          image: responseJson[0].g_photo,
        }, function () {
        });
        alert(this.state.image)
      })
      .catch((error) => {
        console.error(error);
      });
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

  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
  }

  pressCounterPlus = () => {
    this.setState({
      count: parseInt(this.state.count) + 1
    })
  }

  pressCounterMinus = () => {
    this.setState({
      count: parseInt(this.state.count) - 1
    })
  }

  pressCounterPlus10 = () => {
    this.setState({
      count10: parseInt(this.state.count10) + 10
    })
  }

  pressCounterMinus10 = () => {
    this.setState({
      count10: parseInt(this.state.count10) - 10
    })
  }

  setPickerValue(newValue) {
    this.setState({
      goodsSelection: newValue
    });

    this.togglePicker();
  }

  submit = () => {
    const { goodsSelection, count, count10, goodsName, goodsPhoto, goodsSizeL, goodsInfo, goodsSizeW, goodsSizeH, m_id } = this.state;
    if (goodsSelection != "Default" && count != 0 && count10 != 0 && count10 % 10 == 0 && goodsName != null && goodsPhoto != null && goodsSizeL != null && goodsInfo != null && goodsSizeW != null && goodsSizeH) {
      fetch('http://172.20.10.4/myApp/goodsEntry.php', {
        method: 'POST',
        header: {
          Accept: 'application/json',
          'Contect-type': 'application/json',
        },
        body: JSON.stringify({
          g_name: goodsName,
          g_category: goodsSelection,
          g_photo: image,
          g_quantity: count,
          g_info: goodsInfo,
          insertcoins: count10,
          g_sizeL: goodsSizeL,
          g_sizeW: goodsSizeW,
          g_sizeH: goodsSizeH,
          m_id: m_id,
        })

      })
        .then((response) => response.json())
        .then((responseJson) => {
          alert(responseJson);
          this.state.navigation.navigate('MachineScreen');
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert('漏打ㄌ喔')
    }

  }

  render() {

    let { image, data } = this.state;

    const pickerValues = [
      {
        title: 'Doll',
        value: 'doll'
      },
      {
        title: 'Figurine',
        value: 'figurine'
      },
      {
        title: 'Snack',
        value: 'snack'
      },
    ]

    return (

      <View style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
          <FlatList
            data={this.state.data}
            keyExtractor={({ m_id }) => m_id}
            renderItem={({ item }) =>
              <View style={styles.entry}>
                <View style={styles.section}>
                  <View>
                    <Text style={styles.entry_text}>機台編號</Text>
                  </View>
                  <View>
                    <Text style={styles.text}>{item.m_id}</Text>
                  </View>
                </View>
                <View style={styles.section}>
                  <View>
                    <Text style={styles.entry_text}>商品名稱</Text>
                  </View>
                  <View>
                    <TextInput
                      onChangeText={goodsName => this.setState({ goodsName })}
                      returnKeyType='next'
                      onSubmitEditing={() => this.g_name.focus()}
                      // keyboardType='email-address'
                      autoCapitalize='none'
                      autoCorrect={false}
                      // placeholderTextColor='rgba(255,255,255,0.88)'
                      style={styles.input}>
                      {item.g_name}
                    </TextInput>
                  </View>
                </View>

                <View style={styles.section}>
                  <View>
                    <Text style={styles.entry_text}>商品照片</Text>
                  </View>
                  <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <Button
                      title="Pick image"
                      onPress={this._pickImage}
                    />
                    {/* {image && */}
                    <Image 
                    source={image != null ? { uri: image } : require('../../img/picture.png')} 
                    style={{ width: 150, height: 150 }} />
                    {/* } */}
                  </View>
                </View>

                <View style={styles.section}>
                  <View>
                    <Text style={styles.entry_text}>商品種類</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                    <View style={{ width: 120 }}>
                      <Text style={{ fontSize: 16, }}>{this.state.goodsSelection} </Text>
                    </View>

                    <Button
                      onPress={() => this.togglePicker()}
                      title={'選擇種類'} />

                    <Modal
                      visible={this.state.pickerDisplayed}
                      animationType={'slide'}
                      transparent={true}
                      onRequestClose={() => console.log('Close')}>

                      <View
                        style={{
                          margin: 20,
                          padding: 20,
                          backgroundColor: '#efefef',
                          left: 20,
                          right: 20,
                          bottom: 20,
                          height: 200,
                          position: 'absolute'
                        }}>
                        <ScrollView
                          showsVerticalScrollIndicator={false}>
                          <Text style={{ fontWeight: 'bold', alignItems: 'center' }}>種類</Text>
                          {pickerValues.map((value, index) => {
                            return <TouchableOpacity
                              key={index}
                              style={styles.th_dropdown}
                              onPress={() => this.setPickerValue(value.title)}>
                              <Text>{value.title}</Text>
                            </TouchableOpacity>
                          })}
                          <TouchableOpacity
                            onPress={() => this.togglePicker()}
                            style={styles.th_dropdown}>
                            <Text style={{ color: '#999' }}>Cancel</Text>
                          </TouchableOpacity>
                        </ScrollView>
                      </View>
                    </Modal>
                  </View>

                </View>
                <View style={styles.sectionL}>
                  <View style={{ left: 0, top: 0 }}>
                    <Text style={styles.entry_text}>商品介紹</Text>
                  </View>
                  <View>
                    <TextInput
                      onChangeText={goodsInfo => this.setState({ goodsInfo })}
                      returnKeyType='next'
                      // keyboardType='email-address'
                      autoCapitalize='none'
                      // autoCorrect={false}
                      editable={true}
                      multiline={true}
                      maxLength={150}
                      style={styles.inputL}>
                      {item.g_info}
                    </TextInput>
                  </View>
                </View>

                <View style={styles.section}>
                  <View>
                    <Text style={styles.entry_text}>商品尺寸</Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TextInput
                      onChangeText={goodsSizeL => this.setState({ goodsSizeL })}
                      returnKeyType='done'
                      keyboardType='numeric'
                      autoCapitalize='none'
                      autoCorrect={false}
                      placeholder='長(mm)'
                      onSubmitEditing={() => this.email.focus()}
                      ref={(input) => this.password = input}
                      // placeholderTextColor='rgba(255,255,255,0.88)'
                      style={styles.inputS}>
                      {item.g_sizeL}
                    </TextInput>

                    <Image
                      style={styles.img_cross}
                      source={require('../../img/cross.png')} />

                    <TextInput
                      onChangeText={goodsSizeW => this.setState({ goodsSizeW })}
                      returnKeyType='done'
                      keyboardType='numeric'
                      autoCapitalize='none'
                      placeholder='寬(mm)'
                      autoCorrect={false}
                      onSubmitEditing={() => this.phone.focus()}
                      ref={(input) => this.email = input}
                      // placeholderTextColor='rgba(255,255,255,0.88)'
                      style={styles.inputS}>
                      {item.g_sizeW}
                    </TextInput>

                    <Image
                      style={styles.img_cross}
                      source={require('../../img/cross.png')} />

                    <TextInput
                      onChangeText={goodsSizeH => this.setState({ goodsSizeH })}
                      returnKeyType='done'
                      keyboardType='numeric'
                      autoCapitalize='none'
                      placeholder='高(mm)'
                      autoCorrect={false}
                      ref={(input) => this.phone = input}
                      // placeholderTextColor='rgba(255,255,255,0.88)'
                      style={styles.inputS}>
                      {item.g_sizeH}
                    </TextInput>
                  </View>
                </View>

                <View style={styles.section}>
                  <View>
                    <Text style={styles.entry_text}>商品數量</Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginLeft: 15, alignItems: 'center' }}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={this.pressCounterMinus}>
                      <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 5 }}>
                        <Image
                          style={styles.img}
                          source={require('../../img/minus.png')} />
                      </View>

                    </TouchableOpacity>
                    <View style={{ width: 80, padding: 10 }}>
                      <TextInput
                        style={[styles.countText]}
                        keyboardType='number-pad'
                        returnKeyType='done'
                        onChangeText={count => this.setState({ count })}>
                        {this.state.count > 0 ? this.state.count : this.state.count = 0}</TextInput>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={this.pressCounterPlus}>
                      <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 5 }}>
                        <Image
                          style={styles.img}
                          source={require('../../img/plus.png')} />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.section}>
                  <View>
                    <Text style={styles.entry_text}>投幣金額</Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginLeft: 15, alignItems: 'center' }}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={this.pressCounterMinus10}>
                      <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 5 }}>
                        <Image
                          style={styles.img}
                          source={require('../../img/minus.png')} />
                      </View>

                    </TouchableOpacity>
                    <View style={{ width: 80, padding: 10 }}>
                      <TextInput
                        style={[styles.countText]}
                        keyboardType='number-pad'
                        returnKeyType='done'
                        onChangeText={count10 => this.setState({ count10 })}>
                        {this.state.count10 > 0 ? this.state.count10 : this.state.count10 = 0}</TextInput>
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={this.pressCounterPlus10}>
                      <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 5 }}>
                        <Image
                          style={styles.img}
                          source={require('../../img/plus.png')} />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity onPress={this.submit}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#444444',
                      height: 60,
                      paddingBottom: 10,
                      width: deviceWidth
                    }}>
                    <Text style={{ fontSize: 18, color: '#fff' }}>更新</Text>
                  </View>
                </TouchableOpacity>
              </View>
            } />

        </KeyboardAvoidingView>



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
    // flex: 3.15,
    // height: 850,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  entry_text: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
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
    marginLeft: 15,
    height: 30,
    width: 60,
    borderBottomColor: '#cfcfcf',
    borderBottomWidth: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  th_dropdown: {
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 12,
  },
  countText: {
    fontSize: 20,
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingTop: 30,
  },
});
