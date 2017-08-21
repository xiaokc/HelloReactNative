/**
 * Created by xiaokecong on 21/08/2017.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

export default class MinePage extends Component {
    render() {
        return (
            <View>
                <Text>Welcome to MinePage!</Text>

                <Button style={{margin: 10}} title={'看看给我的参数'} onPress={() => {
                    alert('参数：'+this.props.navigation.state.params.name);
                }}/>

                <Button style={{margin: 10}} title={'返回'} onPress={() => {
                    this.props.navigation.goBack();
                }}/>
            </View>
        );
    }
}