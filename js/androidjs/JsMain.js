/**
 * Created by xiaokecong on 21/08/2017.
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

import ModalAlertPage from './ModalAlertPage';
import RecogDetailPage from './RecogDetailPage';
import GuideUsePage from './GuideUsePage';

const RouteConfigs = { // 类似AndroidManifest.xml，需要先注册各个Navigator
    ModalAlert: {
        screen: ModalAlertPage,
        navigationOptions: ({navigation}) => ({
            title: '首页',
        }),
    },
    Guide:{
        screen:GuideUsePage,
        navigationOptions: ({navigation}) => ({
            title: 'GuideUsePage',
        }),
    },
    RecogDetail:{
        screen:RecogDetailPage,
        navigationOptions: ({navigation}) => ({
            title: '',
        }),
    }
};

const StackNavigatorConfig = {
    initialRouteName: 'Guide',
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
export  default class JsMain extends Component {
    render() {
        return (
            <Navigator/>
        )
    }
}
