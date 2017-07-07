import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Coffee extends Component {
  render() {
    const myData = this.props.myData;
    return(
      <TouchableOpacity style={styles.coffeeContainer} 
        onPress={() => this.props.navigate('Details', {myData: myData})}
        title="Go to Lucy's profile">
        <Image style={styles.coffeeImage} source={{uri: myData.image}} />
        <View style={styles.coffeeDescription}>
          <Text style={styles.title}>{myData.title}</Text>
          <Text style={styles.ingredients}>{myData.ingredients}</Text>
        </View>
      </TouchableOpacity>
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
  ingredients: {
    fontSize: 12,
    fontWeight: '100',
    color: 'grey'
  }
})