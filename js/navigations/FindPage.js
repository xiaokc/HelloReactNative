/**
 * Created by xiaokecong on 21/08/2017.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

export default class FindPage extends Component {
    render() {
        return (
            <View>
                <Text>Welcome to FindPage!</Text>
                <Button
                    title={'点我查看参数'}
                    onPress={() => {
                        alert('参数是：' + this.props.navigation.state.params.param)
                    }}/>
                <Button style={{marginTop: 10}} title={'返回'} onPress={() => {
                    this.props.navigation.goBack()
                }}/>
                <Button style={{paddingTop: 10}} title={'继续跳转'}
                        onPress={() => {this.props.navigation.navigate('Mine', {name: 'xiaokecong'})}}/>
            </View>
        );
    }
}