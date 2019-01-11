import React, { Component } from 'react';
import IntroPage from './ui/intro/IntroPage';
import { AppContainer } from './ui/Navigation';

interface AppState {
  initialized: boolean;
}
export default class App extends Component<{}, AppState> {
  state: AppState = { initialized: false };
  render() {
    return !this.state.initialized ? (
      <IntroPage onStart={this.onStart} />
    ) : (
      <AppContainer />
    );
  }
  onStart = () => this.setState({ initialized: true });
}
