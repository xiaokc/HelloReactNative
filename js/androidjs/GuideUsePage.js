/**
 * Created by xiaokecong on 21/08/2017.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native';

var dataSource;
export default class GuideUsePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
        };
    }

    componentDidMount() {
        this.fetchGuideUseData();
    }

    fetchGuideUseData() {
        dataSource = [{key: "查看照片"}, {key: "清理一下"}, {key: "打开日志"}];
        this.setState({
            isLoaded: true,
        });
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <View style={{flex: 1, alignContent: 'center'}}>
                    <Text>{'加载中...'}</Text>
                </View>
            );
        }

        return (
            <FlatList
                data={dataSource}
                renderItem={this.renderRow.bind(this)} // render每一行
            />
        );
    }

    renderRow = (data) => {
        return (
            <TouchableOpacity onPress={() => this.onItemClick(data.item)}>
                <Text style={{padding: 5, fontSize: 20}}>{data.item.key}</Text>
            </TouchableOpacity>
        );
    };

    onItemClick(item) {
        this.props.navigation.navigate('RecogDetail', {info: item.key});
    }
}