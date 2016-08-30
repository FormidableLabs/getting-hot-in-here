import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { observer } from 'mobx-react/native';

@observer
export default class Home extends Component {
  static contextTypes = {
    stores: PropTypes.object,
  };
  render() {
    const token = this.context.stores.appStore.token;
    return (
      <View style={styles.container}>
        <Text>{token}</Text>
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
});
