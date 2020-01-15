import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, Image, } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class SignUpForm extends React.Component {
    constructor() {
        super();
        this.state={
            male: false,
            female: false,
            userName: '',
            userEmail: '',
            userPassword: '',
            userAccount: '',
            userPhone: '',
            userGender: '',
        }
    }

    userRegister = () => {
        const {userName} = this.state;
        const {userAccount} = this.state;
        const {userEmail} = this.state;
        const {userPassword} = this.state;
        const {userPhone} = this.state;
        const {userGender} = this.state;

        fetch('http://172.20.10.4/myApp/register.php', {
            method: 'POST',
            header: {
                Accept: 'application/json',
                'Contect-type': 'application/json',
            },
            body: JSON.stringify({
                name: userName,
                account: userAccount,
                email: userEmail,
                password: userPassword,
                pnone_number: userPhone,
                gender: userGender,
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

    goToSignIn() {
        Actions.pop()
    }
    
    _malePressed(){
        this.setState({male:true,female:false,userGender:'male'})
    }
    _femalePressed(){
        this.setState({male:false,female:true,userGender:'female'})
    }
    render() {
        
        const navigator = this.props.navigation;
        return (
            <View style={styles.container}>

                <StatusBar
                    barStyle='light-content' />
                <TextInput
                    onChangeText= {userName => this.setState({userName})}
                    placeholder='FullName'
                    returnKeyType='next'
                    onSubmitEditing={() => this.account.focus()}
                    autoCapitalize='words'
                    keyboardType='numbers-and-punctuation'
                    maxLength = {20}
                    autoCorrect={false}
                    placeholderTextColor='rgba(255,255,255,0.88)'
                    style={styles.input}>
                </TextInput>

                <TextInput
                    onChangeText= {userAccount => this.setState({userAccount})}
                    placeholder='Account'
                    returnKeyType='next'
                    onSubmitEditing={() => this.password.focus()}
                    ref={(input) => this.account = input}
                    autoCapitalize='none'
                    keyboardType='ascii-capable'
                    maxLength = {30}
                    autoCorrect={false}
                    placeholderTextColor='rgba(255,255,255,0.88)'
                    style={styles.input}>
                </TextInput>

                <TextInput
                    onChangeText= {userPassword => this.setState({userPassword})}
                    placeholder='Password'
                    returnKeyType='next'
                    keyboardType='ascii-capable'
                    onSubmitEditing={() => this.email.focus()}
                    ref={(input) => this.password = input}
                    placeholderTextColor='rgba(255,255,255,0.88)'
                    secureTextEntry
                    style={styles.input}>
                </TextInput>

                <TextInput
                    onChangeText= {userEmail => this.setState({userEmail})}
                    placeholder='E-mail'
                    returnKeyType='done'
                    onSubmitEditing={() => this.phone.focus()}
                    ref={(input) => this.email = input}
                    keyboardType='ascii-capable'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholderTextColor='rgba(255,255,255,0.88)'
                    style={styles.input}>
                </TextInput>

                <TextInput
                    onChangeText= {userPhone => this.setState({userPhone})}
                    placeholder='PhoneNumber'
                    returnKeyType='done'
                    ref={(input) => this.phone = input}
                    placeholderTextColor='rgba(255,255,255,0.88)'
                    keyboardType='number-pad'
                    maxLength={10}
                    style={styles.input}>
                </TextInput>
                

                <View style={styles.gender}>
                    <CheckBox
                        title='Male'
                        checked={this.state.male}
                        checkedIcon={<Image style={styles.img_checked} source={require('../../img/checked.png')} />}
                        uncheckedIcon={<Image style={styles.img_unchecked} source={require('../../img/unchecked.png')} />}
                        onPress={() => this._malePressed()} />

                    <CheckBox 
                        title='Female'
                        checked={this.state.female}
                        checkedIcon={<Image style={styles.img_checked} source={require('../../img/checked.png')} />}
                        uncheckedIcon={<Image style={styles.img_unchecked} source={require('../../img/unchecked.png')} />}
                        onPress={() => this._femalePressed()} />
                </View>
                    

                <View>
                    <TouchableOpacity 
                    style={styles.btn_Signup} 
                    title='signup' 
                    onPress={this.userRegister}>
                        <Text style={styles.text_Signup}>註冊</Text>
                    </TouchableOpacity>

                </View>
                
                <View style={{flex: 1, justifyContent: 'flex-end'}}>    
                    <TouchableOpacity 
                        style={styles.btn_Signin} 
                        title='signin' 
                        onPress={()=>{this.props.navigate('SignIn');}}>
                            <Text style={styles.text_Signin}>已擁有帳號？ 登入</Text>
                        </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 45,
        flex: 1.8,
    },
    gender: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginStart: -10,
        marginEnd: -10,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.4)',
        marginBottom: 10,
        paddingHorizontal: 8,
        color: '#3c3c3c',
        // borderRadius: 25,
    },
    btn_Signup: {
        marginTop:5,
        backgroundColor: '#8c4fb6',
        alignItems: 'center',
        paddingVertical: 13,
    },
    btn_Signin: {
        alignItems: 'center',
        paddingVertical: 13,
        marginTop: 5,
    },
    text_Signup: {
        color: '#fff',
        fontWeight: '600',
    },
    text_Signin: {
        color: '#fff',
        fontWeight: '600',
    },
    img_checked: {
        height: 20,
        width: 20,
    },
    img_unchecked: {
        height: 20,
        width: 20,
    },
});
