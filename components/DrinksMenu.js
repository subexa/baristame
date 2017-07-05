import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';
import Header from './Header';
import Coffee from './Coffee';

export default class DrinksMenu extends Component {
  
  constructor(props) {
    super(props);
    myData = props.myData;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(myData),
    };
  }
  render() {
    return(
      <View style={styles.container}>
        <Header />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(item, index) => <Coffee myData={item} />}
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