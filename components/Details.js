import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class Details extends Component {
  render() {
    const myData = this.props.myData;
    const index = this.props.index;
    return(
      <ScrollView style={styles.drinkDetails} contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.imageTitle}>{myData[index].title}</Text>
          <Text style={styles.imageIngredients}>{myData[index].ingredients}</Text>
          <Image source={{uri: myData[index].image}} style={styles.coffeeImage} />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>DESCRIPTION</Text>
          <Text style={styles.description}>{myData[index].description}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Perfect Pull</Text>
          <Text>{myData[index].perfectPull}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Variation</Text>
          <Text>{myData[index].variation}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageIngredients: {
    fontWeight: '100',
    marginTop: 20,
    marginBottom: 40
  },
  contentContainer: {
  },

  drinkDetails: {
    backgroundColor: '#EAEAEA',
    marginTop: 30
  },

  container: {
    backgroundColor: '#FFF',
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginBottom: 9,
    marginRight: 14,
    marginLeft: 14,
    alignItems: 'center',
    padding: 10,
  },

  coffeeImage: {
    height: 100,
    width: 100,
    marginBottom: 20
  },

  title: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginBottom: 10
  }
})