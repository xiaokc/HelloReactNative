/**
 * Created by xiaokecong on 21/08/2017.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    NativeModules,
    TouchableOpacity,
} from 'react-native';
var RNFSManager = NativeModules.RNFSManager;

export default class RecogDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoText: this.props.navigation.state.params.info,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.infoTxt}>{this.state.infoText}</Text>
                <TouchableOpacity onPress={() => {
                    this.clickTry()
                }}>
                    <Text style={styles.infoText}>{'have a try'}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    clickTry() {
        RNFSManager.getFileSizeStr(RNFSManager.RNFSDCIMDirectoryPath + "/Camera/1501572112169.png")
            .then((result) => {
                alert(result);
            })
            .catch((error) => {
                alert("error:" + error);
            });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    infoTxt: {
        fontSize: 18,
        alignContent: 'center',
        margin: 20
    }
});