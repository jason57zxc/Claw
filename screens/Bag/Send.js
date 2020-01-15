import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView, Image, TouchableOpacity, TextInput, Alert, Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;      //裝置的寬度
export const deviceHeight = Dimensions.get('window').height;

export default class Send extends Component {
    constructor(props) {
        super(props);
        this.state = {
            o_id: this.props.navigation.state.params.o_id,
            g_name: this.props.navigation.state.params.g_name,
            g_photo: this.props.navigation.state.params.g_photo,
            g_sizeL: this.props.navigation.state.params.g_sizeL,
            g_sizeW: this.props.navigation.state.params.g_sizeW,
            g_sizeH: this.props.navigation.state.params.g_sizeH,
            m_id: this.props.navigation.state.params.m_id,
            id: 28,
            message: null,
            shipping_method: null,
            address: '',
            user_name: null,
            cost: null,
        };
    }

    submit = () => {
        const { user_name, address, o_id, message, shipping_method, cost, selected, payment } = this.state
        if( user_name != null && selected != null && payment != null ){
            fetch('http://172.20.10.3/myApp/shoppingOrder.php', {
            method: 'POST',
            header: {
                Accept: 'application/json',
                'Contect-type': 'application/json',
            },
            body: JSON.stringify({
                o_id: o_id,
                user_name: user_name,
                send_address1: '桃園市中壢區',
                message: message,
                shipping_method: selected,
                cost: cost,
                payment: payment,
            })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                Alert.alert(responseJson);
                this.props.navigation.pop();
            })
            .catch((error) => {
                console.error(error);
            });
          }
          else {
            Alert.alert('資料填寫不完整！')
          }
      }

    state = { selected: null, cost: null, payment: null, address: ''};

    onSelect = data => {
        this.setState(data);
    };

    payment = data => {
        this.setState(data);
    };

    onPress = () => {
        this.props.navigation.navigate('Shipping', { onSelect: this.onSelect });
    };


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <KeyboardAvoidingView behavior='padding'>
                        <View style={styles.details}>
                            <View style={{alignItems: 'center', paddingTop: 10, paddingBottom: 10, borderBottomColor: '#dfe6e9', borderBottomWidth: 0.5}}>
                                <Text>訂單詳情</Text>
                            </View>
                            <View>
                                <View style={{
                                    padding: 10,
                                    paddingLeft: 20,
                                }}>
                                    <Text>jason57zxc</Text>
                                </View>
                                <View style={{backgroundColor: '#dfe6e9', height: 90, flexDirection: 'row'}}>
                                    <Image 
                                    source={{uri: this.state.g_photo}} 
                                    style={{ width: 70, height: 70, alignContent: 'center', margin: 10, marginLeft: 15,}} />
                                    <View style={{flexDirection: 'column', width: deviceWidth}}>
                                        <View style={{marginTop: 10, marginLeft: 10}}>
                                            <Text style={{color:'#636e72', fontSize: 18}}>{this.state.g_name}</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 35,}}>
                                            {/* <View><Text style={{color:'#636e72',}}>$80</Text></View> */}
                                            <View style={{marginLeft: 200,}}><Text style={{color:'#636e72',}}>x1</Text></View>
                                        </View>
                                    </View>
                                </View>
                                {/* <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Shipping', {
                                        callback: ((data) => {
                                        {this.someFunc(data)}
                                        // this.setState = ({
                                        //     shippingdata: data
                                        // })
                                        // alert(data)
                                    })
                                })
                                }> */}
                                <TouchableOpacity onPress={this.onPress}>
                                    <View style={{height: 65, flexDirection: 'row'}}>
                                        <View><Text style={{margin: 10, marginLeft: 15,}}>寄送方式</Text></View>
                                        <View>
                                            <Text style={{margin: 10, marginLeft: 15, color: '#485460'}}>{this.state.selected == null ? '' : this.state.selected}</Text>
                                            <Text style={{margin: 10, marginLeft: 15, color: '#485460'}}>{this.state.address == null ? '' : this.state.address}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                    <View style={{borderBottomWidth: 1, borderColor: '#dfe6e9'}}>
                                    </View>

                                    <View style={{height: 50, flexDirection: 'row'}}>
                                        <Text style={{marginTop: 18, marginLeft: 15,}}>留言</Text>
                                        <TextInput
                                            onChangeText={message => this.setState({message})}
                                            placeholder='留言...'
                                            returnKeyType='done'
                                            keyboardType='default'
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            style={{ marginLeft: 15, width: 330}}
                                            >
                                        </TextInput>
                                    </View>

                                    <View style={{borderBottomWidth: 1, borderColor: '#dfe6e9'}}></View>

                                <View style={{height: 50, flexDirection: 'row'}}>
                                    <Text style={{marginTop: 18, marginLeft: 15,}}>姓名</Text>
                                    {/* <Text style={{marginTop: 15, marginLeft: deviceWidth-120, color: 'blue', fontSize: 16}}>$80</Text> */}
                                    <TextInput
                                        onChangeText={user_name => this.setState({user_name})}
                                        placeholder='姓名'
                                        returnKeyType='done'
                                        keyboardType='default'
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        style={{ marginLeft: 15, width: 330}}>
                                    </TextInput>
                                </View>

                            </View>

                            <View style={{marginTop: 10, height: 50, backgroundColor: '#ffffff', flexDirection: 'row'}}>
                                <Image 
                                source={require('../../img/coupon.png')} 
                                style={{ width: 30, height: 30, alignContent: 'center', margin: 10, marginLeft: 15,}} />
                                <Text style={{marginTop: 16,}}>折扣碼</Text>
                                <TextInput
                                placeholder='   輸入折扣碼'
                                returnKeyType='done'
                                keyboardType='default'
                                autoCapitalize='none'
                                autoCorrect={false}
                                style={{ marginLeft: deviceWidth-185, width: 200}}
                                >
                                </TextInput>
                            </View>

                            <View style={{marginTop: 10, height: 200, backgroundColor: '#ffffff',}}>
                                <View style={{alignItems: 'center', paddingTop: 10, paddingBottom: 10, borderBottomColor: '#dfe6e9', borderBottomWidth: 0.5}}>
                                    <Text>付款詳情</Text>
                                </View>
                                <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Payment', { payment: this.payment })}>
                                    <View style={{height: 50, flexDirection: 'row'}}>
                                        <View><Text style={{margin: 18, marginLeft: 15,}}>付款方式</Text></View>
                                        <View style={{ marginLeft: 200, }}><Text style={{margin: 18, marginLeft: 15,}}>{this.state.payment}</Text></View>
                                    </View>
                                </TouchableOpacity>
                                {/* {this.state.selected == null ? '' : this.state.selected} */}
                                <View style={{borderBottomWidth: 1, borderColor: '#dfe6e9'}}></View>
                                <View style={{flexDirection: 'row'}}>
                                <View style={{height: 120, borderBottomWidth: 0.5, borderColor: '#dfe6e9'}}>
                                        <Text style={{margin: 5, marginLeft: 15, marginTop: 15, fontSize: 12,}}>商品總金額</Text>
                                        <Text style={{margin: 5, marginLeft: 15, fontSize: 12,}}>運費總金額</Text>
                                        <Text style={{margin: 5, marginLeft: 15, fontSize: 12,}}>運費折抵</Text>
                                        <Text style={{margin: 5, marginLeft: 15,}}>總付款金額</Text>
                                </View>

                                <View style={{height: 120, marginLeft: 200,}}>
                                        <Text style={{margin: 5, marginLeft: 15, marginTop: 15, fontSize: 12,}}>$0</Text>
                                        <Text style={{margin: 5, marginLeft: 15, fontSize: 12,}}>${this.state.cost}</Text>
                                        <Text style={{margin: 5, marginLeft: 15, fontSize: 12,}}>$0</Text>
                                        <Text style={{margin: 5, marginLeft: 15,}}>${this.state.cost}</Text>
                                </View>
                                </View>

                            </View>

                            <TouchableOpacity onPress={this.submit}>
                                <View
                                    style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#2d3436',
                                    height: 50,
                                    margin: 20,
                                    marginLeft: 35,
                                    marginRight: 35,
                                    borderRadius: 15,
                                    }}>
                                    <Text style={{ fontSize: 18, color: '#fff' }}>下單</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dfe6e9',
    },
    entry: {
        // flex: 3.15,
        height: 620,
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
    img_cross: {
        height: 15,
        width: 15,
        marginLeft: 7,
        marginRight: -7,
    },
    input: {
        marginLeft: 15,
        height: 30,
        width: 200,
        borderBottomColor: '#cfcfcf',
        borderBottomWidth: 1,
        fontSize: 16,
    },
    details: {
        backgroundColor: 'white',
        width: deviceWidth,
        height: 325,

    }
});


