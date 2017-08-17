/**
 * Created by xiaokecong on 17/08/2017.
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    NativeModules,
} from 'react-native';
import ImagePickerModule from './ImagePickerModule';
import MyToast from './MyToast'

class PickImage extends Component {
    _onPressButton() {
        console.log("You tapped the button!");
    }

    render() {
        return (
            <TouchableHighlight onPress={
                () => {

                    //alert('你点击了按钮');

                    ImagePickerModule.pickImage()
                        .then((msg) => {
                            alert(msg);
                        })
                        .catch((err) => {
                            alert(err);
                        });

                    MyToast.show("你点击了按钮", MyToast.SHORT);
                }
            }>
                <Text>选择照片</Text>
            </TouchableHighlight>
        );
    }
}