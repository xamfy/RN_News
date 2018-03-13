import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Button,
    ActivityIndicator,
    Picker,
} from 'react-native';

export default class HomeScreen extends Component{
    static navigationOptions = {
        title: 'RN_NewsAPI',
    }

    constructor(props){
        super(props);
        this.state = {
            country: 'in',
            isLoading: false,
        }
    }

    _handleResponse = (response) => {
        this.setState({
            isLoading: false,
        })
        this.props.navigation.navigate(
            'Results', {articles: response.articles}
        );
    }

    _onPressFetch = () => {

        this.setState({
            isLoading: true,
        });

        const url =  'https://newsapi.org/v2/top-headlines?' +
        'country='+this.state.country+'&' +
        'apiKey=';

        fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                this._handleResponse(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    

    render(){
    
        const spinner = this.state.isLoading ?
            <ActivityIndicator size='large' />: null;

       return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Read the latest news from around the world
                </Text> 
                <Button
                    style={styles.margin}
                    onPress={this._onPressFetch}
                    color='#673AB7'
                    title='Get the news'
                />
                <Picker
                    style={{width:100}}
                    selectedValue={this.state.country}
                    onValueChange={(itemValue, itemIndex) => this.setState({country: itemValue})}>
                    <Picker.Item label="India" value="in" />
                    <Picker.Item label="US" value="us" />
                </Picker>
                <View style={styles.margin}>
                    {spinner}
                </View>
            </View>
       )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    margin: {
        marginTop: 16,
    },
  });