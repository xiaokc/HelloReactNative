/**
 * 使用Modal自定义一个dialog
 * Created by xiaokecong on 17/08/2017.
 */

import React, {Component} from 'react';
import {
    Modal,
    Text,
    TouchableHighlight,
    View,
    StyleSheet,
    BackHandler,
} from 'react-native';

let Dimensions = require('Dimensions');
let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;

export default class ModalDialog extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        dialogTitle: React.PropTypes.string,
        dialogContent: React.PropTypes.string,
        dialogLeftBtnTitle: React.PropTypes.string,
        dialogRightBtnTitle: React.PropTypes.string,
        dialogLeftBtnAction: React.PropTypes.func.isRequired,
        dialogRightBtnAction: React.PropTypes.func.isRequired,
        dialogVisible: React.PropTypes.bool,
    };

    static defaultProps = {
        dialogTitle: "Alert",
        dialogContent: "Do you want to exit?",
        dialogLeftBtnTitle: "cancel",
        dialogRightBtnTitle: "yes",
        dialogVisible: false,
    };

    render() {
        return (
            <Modal
                visible={this.props.dialogVisible}
                transparent={true}
                onRequestClose={() => {
                    BackHandler.exitApp();
                }}
            >
                <View style={styles.bg}>
                    <View style={styles.dialog}>
                        <View style={styles.dialogTitleView}>
                            <Text style={styles.dialogTitle}>{this.props.dialogTitle}</Text>
                        </View>

                        <View style={styles.dialogContentView}>
                            <Text style={styles.dialogContent}>{this.props.dialogContent}</Text>
                        </View>

                        <View style={styles.dialogBtnView}>
                            <TouchableHighlight style={styles.dialogBtnViewItem}
                                                onPress={this.props.dialogLeftBtnAction}>
                                <Text style={styles.leftButton}>{this.props.dialogLeftBtnTitle}</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.dialogBtnViewItem}
                                                onPress={this.props.dialogRightBtnAction}>
                                <Text style={styles.rightButton}>{this.props.dialogRightBtnTitle}</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}


const styles = StyleSheet.create({
    bg: {  //全屏显示 半透明 可以看到之前的控件但是不能操作了
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: 'rgba(52,52,52,0.5)',  //rgba  a0-1  其余都是16进制数
        // backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialog: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.28,
        backgroundColor: 'white',
    },
    dialogTitleView: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
    },
    dialogTitle: {
        textAlign: 'center',
        fontSize: 18,
        color: '#000000',
    },
    dialogContentView: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialogContent: {
        textAlign: 'center',
        fontSize: 16,
        color: '#4A4A4A',
    },
    dialogBtnView: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.08,
        flexDirection: 'row',
    },
    dialogBtnViewItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5F2FF',
    },
    leftButton: {
        fontSize: 18,
        color: '#007AFF',
        borderBottomLeftRadius: 8,
    },
    rightButton: {
        fontSize: 18,
        color: '#007AFF',
    }
});