import React, { Compoment } from 'react';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import SignInForm from './Sign/SignInForm';
import Logo from './Sign/Logo';


export default class SignInSceen extends React.Component{

    render() {
      return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <View style={styles.container}>
            <Logo />
            <SignInForm navigate={this.props.navigation.navigate}/>
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