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
    ListView,
} from 'react-native';
var RNFSManager = NativeModules.RNFSManager;

export default class RecogDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoText: this.props.navigation.state.params.info,
            isLoaded: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 != row2,
            }),
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        var data = [];
        RNFSManager.readDir(RNFSManager.RNFSDownloadPath)
            .then((resultArray) => {
                for (var i = 0; i < resultArray.length; i++) {
                    data.push(resultArray[i].path);
                }
                this.setState({
                    isLoaded: true,
                    dataSource: this.state.dataSource.cloneWithRows(data),
                });
            })
            .catch((error) => {
                alert("error:" + error.message);
            });
    }


    render() {

        if (!this.state.isLoaded) {
            return this.loadingView();
        }
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderFileListItem.bind(this)}/>
        );
    }

    loadingView() {
        return (
            <View style={styles.container}>
                <Text style={styles.infoTxt}>{'加载中...'}</Text>
            </View>
        )
    }

    renderFileListItem = (path) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.listItem}
                onPress={() => {
                    this.onFileItemClick(path)
                }}
            >
                <View style={styles.listItem}>
                    <View style={styles.itemViewStyle}>
                        <Text style={styles.itemTitle}>{path}</Text>

                    </View>
                </View>

            </TouchableOpacity>
        );
    };

    fetchItemData() {
        var sizeStr = "";
        RNFSManager.getFileSizeStr(path)
            .then((result) => {
                sizeStr = result;
                alert("getFileSize succ:" + result);
            })
            .catch((error) => {
                alert("getFileSizeStr error:" + error);
            });
    }

    onFileItemClick = (path) => {
        alert(path);
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
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        marginLeft: 3,
        marginRight: 3,
        borderBottomWidth: 1,
        height:30,
        borderBottomColor: '#cccccc',
    },
    itemViewStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 10
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    itemTxt: {
        fontSize: 15,
        marginTop: 5
    }
});