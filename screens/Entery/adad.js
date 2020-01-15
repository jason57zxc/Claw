import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image, KeyboardAvoidingView, ScrollView } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


export default class ProductEntry extends Component {
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
      imgurl:'',
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
  }


  setPickerValue(newValue) {
    this.setState({
      goodsSelection: newValue
    });

    this.togglePicker();
  }

  submit = () => {
    const { image } = this.state;
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
      const  imgurl = responseJson.data.link
      alert(imgurl);
    })
    .catch((error) => {
      console.error(error);
    });
  }

    // let body = new FormData();
    // body.append('photo', {uri: image, name :'photo.png' ,type: 'image/png'});
    // body.append('Content-Type', 'image/png');

    // fetch('http://172.20.10.4/myApp/index.html',{ method: 'POST',headers:{  
    //     "Content-Type": "multipart/form-data",
    //     "otherHeader": "foo",
    //     } , body :body} )
    //   .then((res) => checkStatus(res))
    //   .then((res) => res.json())
    //   .then((res) => { console.log("response" +JSON.stringify(res)); })
    //   .catch((e) => console.log(e))
    //   .done()
    // }

  render() {

    let { image } = this.state;

    return (

      <View style={styles.container}>
                <View>
                  <Text style={styles.entry_text}>商品照片</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                  <Button
                    title="Pick image"
                    onPress={this._pickImage}
                  />
                  {image &&
                    <Image 
                    source={{uri: image}} style={{ width: 150, height: 150 }} />
                    }
                </View>

        <TouchableOpacity onPress={this.submit}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#444444',
              height: 60,
              paddingBottom: 10,
            }}>
            <Text style={{ fontSize: 18, color: '#fff' }}>Submit</Text>
          </View>
        </TouchableOpacity>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
    // backgroundColor: 'pink',
  },
});
