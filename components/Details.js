import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class Details extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#2A2A2A'
    },
    headerBackTitleStyle: {
      fontSize: 25,
      color: '#FFF'
    },
    headerTintColor: 'grey'
  }
  render() {
    const myData = this.props.navigation.state.params.myData;
    return(
      <ScrollView style={styles.drinkDetails} contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.imageTitle}>{myData.title}</Text>
          <Text style={styles.imageIngredients}>{myData.ingredients}</Text>
          <Image source={{uri: myData.image}} style={styles.coffeeImage} />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>DESCRIPTION</Text>
          <Text style={styles.description}>{myData.description}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Perfect Pull</Text>
          <Text>{myData.perfectPull}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Variation</Text>
          <Text>{myData.variation}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#2A2A2A',
  },
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