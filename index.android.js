/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    BackHandler,
    ToastAndroid,
} from 'react-native';

import StartView from './js/navigations/StartView';

export  default class HelloReactNative extends Component {
    render() {
        return (
           <StartView/>
        )
    }
}

AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);



