import { Component, PropTypes } from 'react';

export default class Provider extends Component {
  static propTypes = {
    children: PropTypes.any,
    stores: PropTypes.object,
  };
  static childContextTypes = {
    stores: PropTypes.object,
  };
  getChildContext() {
    return {
      stores: this.props.stores,
    };
  }
  render() {
    return this.props.children;
  }
}
