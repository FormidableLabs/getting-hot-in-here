import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }
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
        <Text style={styles.title}>[repo-name]</Text>
        <Text>[number] Stars</Text>
        <Text>[number] Watching</Text>
        <Text>[number] Forks</Text>
        <Text style={styles.subHeader}>Languages</Text>
          {/* pie chart of languages used in the repo */}
        <Text style={styles.subHeader}>Contributors</Text>
          {/* pie chart of contributors to the repo */}
        <Text style={styles.subHeader}>Commits Over Time</Text>
          {/* graph - area? */}
        {/* once the traffic API is finished we should add traffic stuff */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 75,
  },
  back: {
    position: 'absolute',
    padding: 20,
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
});
