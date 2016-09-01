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
  push = (route) => {
    let { navigationState } = this.state;
    navigationState = NavigationStateUtils.push(navigationState, route);

    if (this.state.navigationState !== navigationState) {
      this.setState({ navigationState });
    }
  };
  pop = (route) => {
    let { navigationState } = this.state;
    navigationState = NavigationStateUtils.pop(navigationState, route);

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

    this.handlePop = this.push;

    this.navigator = {
      push: this.push,
      pop: this.pop,
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
