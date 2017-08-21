/**
 *
 * Created by xiaokecong on 21/08/2017.
 */

import React, {Component} from 'react';
import {
    View,
    BackHandler,
} from 'react-native';

import ModalPopupWindow from '../ModalPopupWindow';

export default class ModalAlertPage extends Component {
    render() {
        return (
            <ModalPopupWindow
                popVisible={true}
                popBtnAction={() => {
                    this._back()
                }}
                popItemClick={(item) => {
                    this.props.navigation.navigate('RecogDetail', {info: item.key});
                }}
            />
        );
    }

    _back() {
        BackHandler.exitApp();
    }
}
