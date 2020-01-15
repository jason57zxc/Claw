import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView, Image, TouchableOpacity, TextInput } from 'react-native';

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
        };
    }

    componentDidMount() {
        this.getData()
    }

    getData = async () => {
        const { id } = this.state;
        return fetch('http://172.20.10.4/myApp/userSearch.php', {
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
                    user_name: responseJson[0].name,
                }, function () {
                });

            })
            .catch((error) => {
                console.error(error);
            })
    }

    submit = () => {
        const { user_name, send_address1, o_id } = this.state
        if( user_name != null &&  send_address1 != null){
            fetch('http://172.20.10.4/myApp/shoppingOrder.php', {
            method: 'POST',
            header: {
                Accept: 'application/json',
                'Contect-type': 'application/json',
            },
            body: JSON.stringify({
                o_id:　o_id,
                user_name: user_name,
                send_address1: send_address1,
            })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                alert(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
          }
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
                            {/* <View style={styles.section}>
                                <View>
                                    <Text style={styles.entry_text}>訂單編號</Text>
                                </View>
                                <View>
                                    <Text style={styles.text}>{this.state.o_id}</Text>
                                </View>
                            </View> */}
                            <View style={styles.section}>
                                <View>
                                    <Text style={styles.entry_text}>商品名稱</Text>
                                </View>
                                <View>
                                    <Text style={styles.text}>{this.state.g_name}</Text>
                                </View>
                            </View>

                            <View style={styles.section}>
                                <View>
                                    <Text style={styles.entry_text}>商品照片</Text>
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 12 }}>
                                    <Image source={this.state.g_photo != null ? { uri: this.state.g_photo } : require('../../img/picture.png')} style={{ width: 150, height: 150 }} />
                                </View>
                            </View>

                            <View style={styles.section}>
                                <View>
                                    <Text style={styles.entry_text}>商品尺寸</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <View>
                                        <Text style={styles.text}>{this.state.g_sizeL}</Text>
                                    </View>
                                    <Image
                                        style={styles.img_cross}
                                        source={require('../../img/cross.png')} />

                                    <View>
                                        <Text style={styles.text}>{this.state.g_sizeW}</Text>
                                    </View>

                                    <Image
                                        style={styles.img_cross}
                                        source={require('../../img/cross.png')} />

                                    <View>
                                        <Text style={styles.text}>{this.state.g_sizeH}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.section}>
                                <View>
                                    <Text style={styles.entry_text}>收件姓名</Text>
                                </View>
                                <TextInput
                                onChangeText={user_name => this.setState({ user_name })}
                                autoCorrect={false}
                                keyboardType='default'
                                style={styles.input}
                                >
                                {this.state.user_name}
                                </TextInput>
                            </View>

                            <View style={styles.section}>
                                <View>
                                    <Text style={styles.entry_text}>寄送地址</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                    <TextInput
                                        onChangeText={send_address1 => this.setState({send_address1})}
                                        returnKeyType='done'
                                        keyboardType='numeric'
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        placeholder='地址'
                                        // placeholderTextColor='rgba(255,255,255,0.88)'
                                        style={styles.input}>
                                    </TextInput>

                                </View>
                            </View>

                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>

                    <TouchableOpacity onPress={this.submit}>
                        <View
                            style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#444444',
                            height: 50,
                            }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>下單</Text>
                        </View>
                    </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
});


