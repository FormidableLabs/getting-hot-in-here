import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import InputBox from '../components/input';

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
          <Text>Log Out</Text>
        </TouchableOpacity>
        <InputBox
          placeholder="search github"
          autoCapitalize="none"
          value={this.state.search}
          onChangeText={(text) => this.setState({ search: text })}
        />
        <Text style={styles.title}>Welcome, [username]</Text>
        <Text>[number] Followers</Text>
        <Text>[number] Following</Text>
        <Text style={styles.subHeader}>Repo Stats</Text>
        <Text>Repo 1</Text>
        <Text>Repo 2</Text>
        <Text>Repo 3</Text>
        <Text style={styles.button}>View All Repos</Text>
        <Text style={styles.subHeader}>User Stats</Text>
      {/* cool data viz of languages used overall, stuff like that */}
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
  button: {
    borderRadius: 2,
    padding: 15,
    backgroundColor: '#a9a9a9',
    marginTop: 10,
    color: 'white',
  },
});
