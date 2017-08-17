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

import ModalDialog from './js/ModalDialog.js'

export  default class ModalDemo extends Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        return false;
    }

    constructor(props) {
        super(props);
        this.state = {
            isDialogVisible: true
        };
    }

    showDialog() {
        this.setState({isDialogVisible: true});
    }

    hideDialog() {
        this.setState({isDialogVisible: false});
    }

    render() {
        return (
            <View style={styles.container}>
                <ModalDialog
                    dialogVisible={this.state.isDialogVisible}
                    dialogLeftBtnAction={() => {
                        {/*this.hideDialog();*/}
                        BackHandler.exitApp();
                    }}
                    dialogRightBtnAction={() => {
                        {/*this.hideDialog();*/}
                        BackHandler.exitApp();
                    }}/>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});


AppRegistry.registerComponent('HelloReactNative', () => ModalDemo);



