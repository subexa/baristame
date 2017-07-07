/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import DrinksMenu from './components/DrinksMenu';
import Details from './components/Details';
import {
  StackNavigator
} from 'react-navigation';


export default class BaristameProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <App />
      </View>
    );
  }
}

const App = StackNavigator({
  DrinksMenu: {screen: DrinksMenu},
  Details: {screen: Details}
}, {
  headerMode: 'screen'
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

AppRegistry.registerComponent('BaristameProject', () => BaristameProject);
