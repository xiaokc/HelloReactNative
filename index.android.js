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
    TouchableWithoutFeedback,
    BackHandler,
    ToastAndroid,
} from 'react-native';

import {StackNavigator} from 'react-navigation';

import HomePage from './js/navigations/HomePage';
import FindPage from './js/navigations/FindPage';
import MinePage from './js/navigations/MinePage';

const RouteConfigs = { // 类似AndroidManifest.xml，需要先注册各个Navigator
    Home: {
        screen: HomePage,
        navigationOptions: ({navigation}) => ({
            title: '首页',
        }),
    },

    Find: {
        screen: FindPage,
        navigationOptions: ({navigation}) => ({
            title: '发现',
        }),
    },
    Mine: {
        screen: MinePage,
        navigationOptions: ({navigation}) => ({
            title: '我的',
        }),
    },
};

const StackNavigatorConfig = {
    initialRouteName: 'Home',
    initialRouteParams: {
        initPara: '初始化页面参数'
    },
    navigationOptions: {
        title: '标题',
        headerTitleStyle: {fontSize: 18, color: '#666666'},
        headerStyle: {height: 48, backgroundColor: '#ffffff'},
    },
    paths:'page/main',
    mode:'card',
    headerMode:'float',
    cardStyle:{backgroundColor: "#ffffff"},

};

const Navigator = StackNavigator(RouteConfigs, StackNavigatorConfig);
export  default class HelloReactNative extends Component {
    render() {
        return (
           <Navigator/>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});


AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);



