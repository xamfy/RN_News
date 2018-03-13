import React, { Component, PureComponent } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Linking,
} from 'react-native';

export default class NewsDetails extends Component{
    static navigationOptions = {
        title: 'Details',
    }

    render(){
        const { params } = this.props.navigation.state;
        var article = params.article;
        var url = article.url;
        var publishedAt = new Date(article.publishedAt);
        return(
            <View>
                <Image style={styles.image}
                    source={{uri: article.urlToImage}}/>
                <Text style={styles.title}>
                    {article.title}
                </Text>
                <View style={styles.separator}/>
                <Text style={styles.description}>
                    {publishedAt.toDateString()}
                </Text>             
                <Text style={styles.description}>
                    {article.description}
                </Text>
                <Text
                    style={[styles.description, styles.color]}
                    onPress={() => Linking.openURL(url)}>
                    {article.source.name}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    color:{
        color: '#512DA8',
    },
    container: {
      marginTop: 65
    },
    heading: {
      backgroundColor: '#F8F8F8',
    },
    separator: {
      height: 1,
      backgroundColor: '#DDDDDD'
    },
    image: {
      width: 400,
      height: 300
    },
    title: {
      fontSize: 20,
      margin: 5,
      color: '#656565'
    },
    description: {
      fontSize: 15,
      margin: 5,
      color: '#656565'
    }
  });