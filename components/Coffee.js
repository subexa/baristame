import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class Coffee extends Component {
  render() {
    const myData = this.props.myData; 
    return(
      <View style={styles.coffeeContainer}>
        <Image style={styles.coffeeImage} source={{uri: myData.image}} />
        <View style={styles.coffeeDescription}>
          <Text style={styles.title}>{myData.title}</Text>
          <Text style={styles.description}>{myData.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  coffeeContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: 3,
    borderColor: 'lightgrey'
  },
  coffeeImage: {
    height: 70,
    width: 70
  },
  coffeeDescription: {
    paddingLeft: 7
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    fontWeight: '100',
    color: 'grey'
  }
})