import React, { Compoment } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, } from 'react-native';

import SignUpForm from './Sign/SignUpForm';
import Logo from './Sign/Logo';

export default class SignUp extends React.Component{

    render() {
      return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <View style={styles.container}>
            <Logo />
            <SignUpForm navigate={this.props.navigation.navigate}/>
          </View>
        </KeyboardAvoidingView>
      );
    }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9980FA',

  },
});