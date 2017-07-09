import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Coffee extends Component {
  
  getIngredients (ingredients) {
    return ingredients.map(
      ingredient => 
        ingredient.name.toUpperCase()
      )
      .join(', ');
  }

  render() {
    const myData = this.props.myData;
    return(
      <TouchableOpacity style={styles.coffeeContainer} 
        onPress={() => this.props.navigate('Details', {myData: myData})}
        title="Go to Lucy's profile">
        <View style={styles.imageContainer}>
          <Image style={styles.coffeeImage} source={{uri: myData.image}} />
        </View>
        <View style={styles.coffeeDescription}>
        <Text style={styles.title}>{myData.title.toUpperCase()}</Text>
        <Text style={styles.ingredients}>
          {this.getIngredients(myData.ingredients)}
        </Text>
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
  imageContainer: {
    height: 70,
    width: 70,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center'
  },
  coffeeImage: {
    backgroundColor: 'lightgrey',
    resizeMode: 'contain',
    height: 40,
    width: 40,
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