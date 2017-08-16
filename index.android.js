/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableHighlight,
    NativeModules,
    Image,
    ListView
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ImagePickerModule from './ImagePickerModule';
import MyToast from './MyToast'


var REQUEST_URL = "https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0";

export default class movieMain extends Component {
    state = {
        dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 != row2,
        }),
        loaded: false,
    };

    componentDidMount() {
        // 一般在该生命周期回调方法中获取数据，从该函数开始，可以和js其它框架交互了，如设置setTimeout，setInterval或者发起网络请求
        this.fetchData();
    };

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json()) // 数据解析方式
            .then((responseData) => { // 获取到的数据处理
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.subjects),
                    loaded: true,
                });
            })
            .catch((error) => { // 异常捕获
                alert("fetch数据错误，error:" + error)
            })
            .done();
    };

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                style={styles.listView}
            />

        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>Loading movies...</Text>
            </View>
        );
    }

    renderMovie(subject) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: subject.cover}}
                    style={styles.thumbnails}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{subject.title}</Text>
                    <Text style={styles.rate}>{subject.rate}</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding:10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    thumbnails: {
        width: 53,
        height: 81,
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    listView: {
        backgroundColor: '#F5FCFF',
    }
});


AppRegistry.registerComponent('HelloReactNative', () => movieMain);


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