/**
 * Created by xiaokecong on 17/08/2017.
 */
'use-strict';

import React, {Component} from 'react';
import {
    TouchableHighlight,
    Text,
    View,
    Modal,
    FlatList,
} from 'react-native';
let Dimensions = require('Dimensions');
let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;
class ModalExample extends Component {
    constructor(props) {
        super(props);
        this.state = {modalVisible: false};
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View style={{marginTop: 100}}>
                <Modal
                    animationType={"fade"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert("Modal has been closed.")
                    }}>

                    <View style={{width: 100, height: 400}}>
                        <FlatList
                            data={[{key: 'a'}, {key: 'b'}]}
                            renderItem={({item}) => <Text>{item.key}</Text>}
                        />
                        <TouchableHighlight onPress={() =>
                            this.setModalVisible(!this.state.modalVisible)}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>

                </Modal>

                <TouchableHighlight onPress={() =>
                    this.setModalVisible(true)}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>
            </View>
        );
    }
}