/**
 * Created by xiaokecong on 17/08/2017.
 */

import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';
import {StackNavigator} from 'react-navigation';


class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat')}
                    title="Chat with cong"
                />
            </View>
        );
    }
}

class ChatScreen extends Component {
    static navigationOptions = {
        title: 'Chat with cong',
    };

    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
});
