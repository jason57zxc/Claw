import React from 'react';
import { Platform } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';


const SignSwitchNavigator = createSwitchNavigator(
    {
      SignIn: SignInScreen ,
      SignUp: SignUpScreen ,
    },
    {
      initialRouteName: 'SignIn',
    }
  );

  export default SignSwitchNavigator;