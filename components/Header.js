import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Header extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={[styles.fontStyle, {color: '#FFF'}]}>BARISTA</Text>
        <Text style={[styles.fontStyle, {color: '#F0782A'}]}>ME</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#2A2A2A',
    marginTop: 17,
    height: 45,
    paddingTop: 7,
    paddingLeft: 7
  },
  fontStyle: {
    fontSize: 27,
    fontWeight: 'bold',
  }
})