import React, { Component, PropTypes } from 'react';

import {
  NavigationExperimental,
  StyleSheet,
} from 'react-native';

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

export default class Navigator extends Component {
  static propTypes = {
    initialRoute: PropTypes.object,
  };
  navigationChange = (type, route) => {
    let { navigationState } = this.state;
    switch (type) {
    case 'push':
      navigationState = NavigationStateUtils.push(navigationState, route);
      break;

    case 'pop':
      navigationState = NavigationStateUtils.pop(navigationState);
      break;
    }

    if (this.state.navigationState !== navigationState) {
      this.setState({ navigationState });
    }
  };
  onRenderScene = (sceneProps) => {
    const TargetComponent = sceneProps.scene.route.component;
    return <TargetComponent navigator={this.navigator} />;
  };
  constructor(props) {
    super(props);

    this.handlePop = this.navigationChange.bind(null, 'pop');

    this.navigator = {
      push: this.navigationChange.bind(null, 'push'),
      pop: this.navigationChange.bind(null, 'pop'),
    };

    this.state = {
      navigationState: {
        index: 0,
        routes: [props.initialRoute],
      },
    };
  }
  render() {
    return (
      <NavigationCardStack
        onNavigateBack={this.handlePop}
        navigationState={this.state.navigationState}
        renderScene={this.onRenderScene}
        style={styles.navigator}
      />
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
});
