import React, { Component } from 'react';

import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './HomeScreen';
import NewsResults from './NewsResults';
import NewsDetails from './NewsDetails';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Results: {
      screen: NewsResults,
    },
    Details: {
      screen: NewsDetails,
    }
  },

  {
    initialRouteName: 'Home',
    navigationOptions:{
      headerStyle: {
      backgroundColor: '#673AB7',
    },
    headerTintColor: '#fff',
  }
  }

);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
