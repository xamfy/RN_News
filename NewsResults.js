import React, { Component, PureComponent } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    FlatList,
    Image,
} from 'react-native';

class NewsItem extends PureComponent{
    _onPress = () => {
        this.props.onPressItem(this.props.index);
    }
    render(){
        const item = this.props.item;
        return(
            <TouchableHighlight
            onPress={this._onPress}
            underlayColor='#dddddd'>
                <View>
                    <View style={styles.rowContainer}>
                        <Image style={styles.thumb} source={{uri:item.urlToImage}}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>
                                {item.title}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight> 
        );
    }
}

export default class NewsResults extends Component{
    static navigationOptions = {
        title: 'Latest News',
    }

    _keyExtractor = (item, index) => index.toString();

    _renderItem = ({item, index}) => {
        return(
            <NewsItem
                item={item}
                index={index}
                onPressItem={this._onPressItem}
            />
        );
    }

    _onPressItem = (index) => {
        const { navigate, state } = this.props.navigation;
        navigate('Details', {article: state.params.articles[index]});
    }

    render(){
        const { params } = this.props.navigation.state;
        return(
            <View style={[styles.margin]}>
                <FlatList
                data={params.articles}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    thumb: {
        width: 80,
        height: 80,
        marginRight: 10
      },
      textContainer: {
        flex: 1
      },
      separator: {
        height: 1,
        backgroundColor: '#dddddd'
      },
      title: {
        fontSize: 20,
        color: '#656565'
      },
      rowContainer: {
        flexDirection: 'row',
        padding: 10
      },
  });