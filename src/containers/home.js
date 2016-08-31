import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class Home extends Component {
  static propTypes = {
    navigator: PropTypes.object,
  };
  handleBackPress = () => {
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.handleBackPress}
          style={styles.back}
        >
          <Text>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>View 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  back: {
    position: 'absolute',
    padding: 20,
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});
