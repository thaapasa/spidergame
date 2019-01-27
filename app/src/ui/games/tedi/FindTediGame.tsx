import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';
import { spiderMap } from '../../../game/Spider';
import { Colors } from '../../../style/Colors';
import { Size } from '../../../util/Spatial';
import { ResultView } from '../../elements/ResultText';
import { SText } from '../../elements/SText';
import { SizeAware } from '../../SizeAware';
import { SpiderView } from '../../spider/SpiderView';
import {
  FindTediGameModel,
  spiderSize,
  SpiderWithPosition,
} from './FindTediGameModel';

@observer
class GameArea extends React.Component<{
  size: Size;
  navigation: NavigationScreenProp<NavigationRoute>;
}> {
  @observable
  private model = new FindTediGameModel(this.props.size, this.props.navigation);

  render() {
    return (
      <>
        <SText style={styles.titleText}>Kuka on Tedi?</SText>
        {this.model.currentResult ? (
          <ResultView
            type={this.model.currentResult}
            style={styles.resultText}
          />
        ) : null}
        {this.model.spiders.map((s, i) => (
          <SpiderAt key={i} {...s} model={this.model} />
        ))}
      </>
    );
  }
}

@observer
class SpiderAt extends React.Component<
  SpiderWithPosition & { model: FindTediGameModel }
> {
  render() {
    return (
      <TouchableOpacity
        onPress={this.onClick}
        style={[
          styles.spider,
          { left: this.props.position.x, top: this.props.position.y },
        ]}
      >
        <Animated.View opacity={this.props.model.spiderOpacity}>
          <SpiderView {...spiderSize} {...spiderMap[this.props.spider]} />
        </Animated.View>
      </TouchableOpacity>
    );
  }
  onClick = () => {
    this.props.model.trySpider(this.props.spider);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: Colors.green,
  },
  titleText: {
    position: 'absolute',
    left: 16,
    top: 16,
  },
  resultText: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  spider: {
    position: 'absolute',
  },
});

export default SizeAware(GameArea, styles.container);
