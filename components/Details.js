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
          <Text>{myData[index].title}</Text>
          <Text>{myData[index].ingredients}</Text>
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
  contentContainer: {
    // backgroundColor: 'yellow'
  },
  drinkDetails: {
    backgroundColor: '#EAEAEA'
  },
  container: {
    backgroundColor: '#FFF',
    borderColor: 'lightgrey',
    marginTop: 20,
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 10,
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10
  },

  coffeeImage: {
    height: 100,
    width: 100
  },

  title: {
    fontWeight: 'bold',
  }
})