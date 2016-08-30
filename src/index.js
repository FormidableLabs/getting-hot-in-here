import React, { Component } from 'react';

import AppStore from './stores/app-store';
import Provider from './util/provider';
import Home from './components/home';

const appStore = new AppStore();

export default class VizHub extends Component {
  render() {
    return (
      <Provider stores={{ appStore }}>
        <Home />
      </Provider>
    );
  }
}
