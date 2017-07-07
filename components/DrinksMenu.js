import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ListView,
  TouchableOpacity
} from 'react-native';
import Header from './Header';
import Coffee from './Coffee';

const myData = [
  {
    image: 'https://yt3.ggpht.com/-cGJBa-pxvFI/AAAAAAAAAAI/AAAAAAAAAAA/kjq9-Pcu_ak/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
    title: 'ESPRESSO',
    ingredients: 'GROUND COFFEE, HOT WATER',
    description: `Concentrated beverage brewed by forcing nearly boiling water under pressure with ground coffee. Espresso has more caffeine per unit volume than most beverages.\n\nThe word "shot" is most commonly used as the basic unit of 
      measurement in cafes and restaurants. People use the term 
      "shot of espresso". A solo shot is usually 1 ounce of espresso. 
      Likewise, doppio is most often used for a double shot, and triplo 
      for a triple shot. 
      A professional operator of an espresso machine is called a barista, 
      which is Italian for bartender.`,
    perfectPull: `Freshness: Freshly roasted coffee beans (i.e. within 4 days 
      of being roasted) will create more bubbles when pulling a shot. 
      This makes a shot run slower when pulled causing less taste. 
      Old roasted beans (i.e. after 14 days of being roasted) will taste 
      flat with less aroma. The optimal range for most espresso shots is 
      1 to 2 weeks after being roasted. 

      Speed: If you notice that your shot speeds vary 
      dramatically from one shot to another, it may be a sign of 
      inconsistent doses. Check to make sure you use the same amount of grounded
      coffee beans for each shot for a more consistent speed. 

      Taste: If you notice that even with proper speed and 
      amount your shots are tasting bad, it may be a good sign to clean your machine.`,
    variation: `Dose: The amount of coffee used for a shot of espresso. 
      An example for a single shot is 18g. 

      Time: The time it takes to pull a shot of espresso is usually 20-30 seconds long. 

      Grind: Having your grinds too long may result in longer extraction time. Having your grinds too coarse or a low dose may result in shorter extraction time. 

      Pulling: Action of making a shot of espresso`
  },
  {
    image: 'https://yt3.ggpht.com/-cGJBa-pxvFI/AAAAAAAAAAI/AAAAAAAAAAA/kjq9-Pcu_ak/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
    title: 'ESPRESSO',
    ingredients: 'GROUND COFFEE, HOT WATER'
  },
  {
    image: 'https://yt3.ggpht.com/-cGJBa-pxvFI/AAAAAAAAAAI/AAAAAAAAAAA/kjq9-Pcu_ak/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
    title: 'ESPRESSO',
    ingredients: 'GROUND COFFEE, HOT WATER'
  },
  {
    image: 'https://yt3.ggpht.com/-cGJBa-pxvFI/AAAAAAAAAAI/AAAAAAAAAAA/kjq9-Pcu_ak/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
    title: 'ESPRESSO',
    ingredients: 'GROUND COFFEE, HOT WATER'
  },
  {
    image: 'https://yt3.ggpht.com/-cGJBa-pxvFI/AAAAAAAAAAI/AAAAAAAAAAA/kjq9-Pcu_ak/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
    title: 'ESPRESSO',
    ingredients: 'GROUND COFFEE, HOT WATER'
  },
  {
    image: 'https://yt3.ggpht.com/-cGJBa-pxvFI/AAAAAAAAAAI/AAAAAAAAAAA/kjq9-Pcu_ak/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
    title: 'ESSO',
    ingredients: 'GROUND COFFEE, HOT WATER'
  },
  {
    image: 'https://yt3.ggpht.com/-cGJBa-pxvFI/AAAAAAAAAAI/AAAAAAAAAAA/kjq9-Pcu_ak/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
    title: 'ESPRESSO',
    ingredients: 'GROUND COFFEE, HOT WATER'
  },
  {
    image: 'https://yt3.ggpht.com/-cGJBa-pxvFI/AAAAAAAAAAI/AAAAAAAAAAA/kjq9-Pcu_ak/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
    title: 'ESPRESSO',
    ingredients: 'GROUND COFFEE, HOT WATER'
  },
  {
    image: 'https://yt3.ggpht.com/-cGJBa-pxvFI/AAAAAAAAAAI/AAAAAAAAAAA/kjq9-Pcu_ak/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
    title: 'ESPRESSO',
    ingredients: 'GROUND COFFEE, HOT WATER'
  },
  {
    image: 'https://yt3.ggpht.com/-cGJBa-pxvFI/AAAAAAAAAAI/AAAAAAAAAAA/kjq9-Pcu_ak/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
    title: 'ESPRESSO',
    ingredients: 'GROUND COFFEE, HOT WATER'
  },
  {
    image: 'https://yt3.ggpht.com/-cGJBa-pxvFI/AAAAAAAAAAI/AAAAAAAAAAA/kjq9-Pcu_ak/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
    title: 'ESPRESSO',
    description: 'GROUND COFFEE, HOT WATER'
  },
]


export default class DrinksMenu extends Component {
  static navigationOptions = {
    headerBackTitle: 'Drinks',
    header: <Header />
  }
  
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(myData),
    };
  }
  render() {
    return(
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(item, index) => 
            <Coffee 
              myData={item} 
              navigate={this.props.navigation.navigate} 
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {

  }
})