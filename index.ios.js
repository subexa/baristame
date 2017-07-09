/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import thunkMiddleware from 'redux-thunk';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import DrinksMenu from './components/DrinksMenu';
import Details from './components/Details';
import rootReducer from './components/reducers/rootReducer';
import {
  StackNavigator
} from 'react-navigation';

let store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

export default class BaristameProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <Provider store={store}>
          <App />
        </Provider>
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
