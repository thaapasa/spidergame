import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { appModel } from './game/AppViewModel';
import IntroPage from './ui/intro/IntroPage';
import { AppContainer } from './ui/Navigation';

const autoStart = false;

@observer
export default class App extends Component<{}> {
  @observable
  private started = autoStart;

  constructor(props: {}) {
    super(props);
    appModel.init();
  }

  render() {
    return !this.started || !appModel.initialized ? (
      <IntroPage onStart={this.onStart} />
    ) : (
      <AppContainer />
    );
  }
  onStart = () => (this.started = true);
}
