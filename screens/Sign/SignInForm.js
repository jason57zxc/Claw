import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, AsyncStorage } from 'react-native';
import Loading from 'react-native-whc-loading';


export default class SignInForm extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            userAccount: '',
            userPassword: '',    
        }

    }

    _singIn = async () => {
        
        const { userAccount, userPassword } = this.state;
        // await AsyncStorage.setItem('isLoggedIn', '1');
        if( userAccount != null && userPassword != null) {
            await fetch('http://172.20.10.4/myApp/login.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'account': userAccount,
                    'password': userPassword,               
                    })
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    if(responseJson === 'Data Matched')
                    {
                        // this.refs.loading.show();
                        // setTimeout(() => {
                        //     this.refs.loading.close();
                        // }, 500)
                        alert('HI')
                        this.props.navigate('Main')
                    }
                    else{
                        alert(responseJson);
                    }
                })
                .catch((error) => {
                console.error(error);
                });

        } else {
            alert('少打囉')
        }
    }
    
    render() {
        return (
            <View style={styles.container}>

                <StatusBar
                    barStyle='light-content' />
                <TextInput
                    onChangeText={userAccount => this.setState({userAccount})}
                    placeholder='UserAccount'
                    returnKeyType='next'
                    onSubmitEditing={() => this.password.focus()}
                    keyboardType='ascii-capable'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholderTextColor='rgba(255,255,255,0.88)'
                    style={styles.input}>
                </TextInput>

                <TextInput
                    onChangeText={userPassword => this.setState({userPassword})}
                    placeholder='Password'
                    returnKeyType='done'
                    keyboardType='ascii-capable'
                    ref={(input) => this.password = input}
                    placeholderTextColor='rgba(255,255,255,0.88)'
                    secureTextEntry
                    style={styles.input}>
                </TextInput>

                <View>
                    <TouchableOpacity 
                    style={styles.btn_Signin} 
                    // onPress={()=>{this.props.navigate('Dashboard');}}
                    onPress={this._singIn}>
                        <Text style={styles.text_Signin}>登入</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <TouchableOpacity style={styles.btn_Signup}  onPress={()=>{this.props.navigate('SignUp');}}>
                        <Text style={styles.text_Signup}>未擁有帳號？ 註冊</Text>
                    </TouchableOpacity>
                </View>

                <Loading ref="loading"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 45,
        flex: 1.8,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.4)',
        marginBottom: 10,
        paddingHorizontal: 8,
        color: '#3c3c3c',
        // borderRadius: 25,
    },
    btn_Signin: {
        marginTop:5,
        backgroundColor: '#8c4fb6',
        alignItems: 'center',
        paddingVertical: 13,
    },
    btn_Signup: {
        alignItems: 'center',
        paddingVertical: 13,
        marginTop: 5,
    },
    text_Signin: {
        color: '#fff',
        fontWeight: '600',
    },
    text_Signup: {
        color: '#fff',
        fontWeight: '600',
    },
});
