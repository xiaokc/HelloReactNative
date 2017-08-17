/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text
} from 'react-native';

export  default class Hello extends Component {
    render(){
        return(
            <View>
                <Text>Hello</Text>
            </View>
        );
    }
}


AppRegistry.registerComponent('HelloReactNative', () => Hello);



