/**
 * Created by xiaokecong on 21/08/2017.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

export default class HomePage extends Component {

    render() {
        return (
            <View>
                <Text>Welcome to HomePage!</Text>
                <Button title={'跳转去FindPage'} onPress={() => {
                    this.props.navigation.navigate('Find',{param:'From HomePage'});
                }}/>
            </View>
        );
    }
}