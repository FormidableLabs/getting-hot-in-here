import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { observer } from 'mobx-react/native';
import InputBox from '../components/input';

@observer
export default class Home extends Component {
  static contextTypes = {
    stores: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>VizHub</Text>
        <Image
          style={styles.image}
          source={require('../../static/githublogo.png')}
        />
        <InputBox
          placeholder={'username'}
          style={StyleSheet.flatten(styles.input)}
          value={this.state.username.toLowerCase()}
          onChangeText={(text) => this.setState({ username: text })}
          autoCorrect={false}
        />
        <InputBox
          placeholder={'password'}
          style={StyleSheet.flatten(styles.input)}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
          secureTextEntry
        />
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
  input: {
    marginTop: 5,
    marginBottom: 5,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  image: {
    height: 20,
    width: 20,
    paddingBottom: 5,
  },
});
