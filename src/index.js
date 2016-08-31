import React, { Component } from 'react';

import AppStore from './stores/app-store';
import Provider from './util/provider';
import Navigator from './components/navigator';

import Login from './containers/login';

const appStore = new AppStore();

export default class VizHub extends Component {
  render() {
    return (
      <Provider stores={{ appStore }}>
        <Navigator
          initialRoute={{
            key: 'Login',
            component: Login,
          }}
        />
      </Provider>
    );
  }
}
