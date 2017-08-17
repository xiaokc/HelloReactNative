/**
 * 使用Modal自定义一个popupwindow
 * Created by xiaokecong on 17/08/2017.
 */

import React, {Component} from 'react';
import {
    Modal,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
    StyleSheet,
    BackHandler,
    FlatList,
} from 'react-native';

let Dimensions = require('Dimensions');
let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;

export default class ModalPopupWindow extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        popTitle: React.PropTypes.string, // 标题
        popBtnTxt: React.PropTypes.string, // 底部button内容
        popBtnAction: React.PropTypes.func.isRequired,
        popVisible: React.PropTypes.bool, // 是否可见

    };

    static defaultProps = {
        popTitle: "语音试一试", // 标题
        popContent: [{key: "查看照片"}, {key: "清理一下"}, {key: "打开日志"}], // 内容
        popBtnTxt: "我知道了", // 底部button内容
        popVisible: false, // 是否可见
    };

    renderRow = (item) => {
        return (
            <TouchableOpacity onPress={() => this.cellAction(item)}>
                <Text style={{padding:5, fontSize:20}}>{item.item.key}</Text>
            </TouchableOpacity>
        );
    };

    cellAction = (item) => {
        alert("item click");
    };

    render() {
        return (
            <Modal
                visible={this.props.popVisible}
                transparent={true}
                onRequestClose={() => {
                    BackHandler.exitApp();
                }}
            >
                <View style={styles.bg}>
                    <View style={styles.pop}>
                        <View style={styles.popTitleView}>
                            <Text style={styles.popTitle}>{this.props.popTitle}</Text>
                        </View>

                        <FlatList
                            data={this.props.popContent}
                            renderItem={(item) => this.renderRow(item)} // render每一行
                        />


                        <View style={styles.popBtnView}>
                            <TouchableHighlight style={styles.popBtnViewItem}
                                                onPress={this.props.popBtnAction}>
                                <Text style={styles.popButton}>{this.props.popBtnTxt}</Text>
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
    pop: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.5,
        backgroundColor: 'white',
    },
    popTitleView: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
    },
    popTitle: {
        textAlign: 'center',
        fontSize: 18,
        color: '#000000',
    },
    popContentView: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    popContent: {
        textAlign: 'center',
        color: '#4A4A4A',
    },
    popBtnView: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.08,
        flexDirection: 'row',
    },
    popBtnViewItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5F2FF',
    },
    popButton: {
        fontSize: 18,
        color: '#007AFF',
    },
});