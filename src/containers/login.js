import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { observer } from 'mobx-react/native';

import InputBox from '../components/input';
import Home from './home';
import GitHubApi from 'github';

const github = new GitHubApi();

@observer
export default class Login extends Component {
  static propTypes = {
    navigator: PropTypes.object,
  };

  static contextTypes = {
    stores: PropTypes.object,
  };

  handleUserSubmit = () => {
    this.passwordField.focus();
  };

  handlePasswordSubmit = () => {
    github.authenticate({
      type: 'basic',
      username: this.state.username,
      password: this.state.password,
    }, (err, res) => {
      if (res.token) {
        console.log('token');

        this.props.navigator.push({
          key: 'Home',
          component: Home,
        });
      }
    });
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
          onSubmitEditing={this.handleUserSubmit}
          autoCorrect={false}
          returnKeyType="next"
        />
        <InputBox
          ref={(c) => { this.passwordField = c; }}
          placeholder={'password'}
          style={StyleSheet.flatten(styles.input)}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
          onSubmitEditing={this.handlePasswordSubmit}
          returnKeyType="done"
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
