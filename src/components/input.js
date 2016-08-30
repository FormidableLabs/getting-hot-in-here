import React, { Component, PropTypes } from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';

export default class InputBox extends Component {
  static propTypes = {
    style: PropTypes.object,
  }

  render() {
    const { style: propStyles, ...props } = this.props;
    const inputStyles = StyleSheet.flatten(styles.input);

    return (
      <TextInput
        style={{ ...inputStyles, ...propStyles }}
        {...props}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderStyle: 'solid',
    borderColor: '#a9a9a9',
    width: 200,
    height: 40,
    padding: 10,
    alignSelf: 'center',
    borderRadius: 2,
  },
});
