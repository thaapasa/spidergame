import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { autoStart } from './Debug';
import { appModel } from './game/AppViewModel';
import IntroPage from './ui/intro/IntroPage';
import { AppContainer } from './ui/Navigation';

@observer
export default class App extends Component<{}> {
  @observable
  private started = autoStart !== undefined;

  constructor(props: {}) {
    super(props);
    appModel.init();
  }

  render() {
    return !this.isGameStarted ? (
      <IntroPage onStart={this.onStart} />
    ) : (
      <AppContainer />
    );
  }
  onStart = () => (this.started = true);

  get isGameStarted(): boolean {
    return this.started && appModel.initialized;
  }
}
