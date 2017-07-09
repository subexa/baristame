import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ListView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Header from './Header';
import Coffee from './Coffee';
import fetchMenu from './actions/action.js';

class DrinksMenu extends Component {
  static navigationOptions = {
    headerBackTitle: 'Drinks',
    header: <Header />
  }

  componentWillMount() {
    this.props.dispatch(fetchMenu());
  }

  componentWillReceiveProps(nextProps) {
    this.state.dataSource = this.ds.cloneWithRows(nextProps.menu);
  }
  
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows(props.menu),
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

const mapStateToProps = (state) => ({
  menu: state.menu
})

export default connect(mapStateToProps)(DrinksMenu);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {

  }
})