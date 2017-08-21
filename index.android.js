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

import JsMain from './js/androidjs/JsMain';

export  default class HelloReactNative extends Component {
    render() {
        return (
           <JsMain/>
        )
    }
}

AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);



