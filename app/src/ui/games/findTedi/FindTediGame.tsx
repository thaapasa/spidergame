import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import {
  Animated,
  LayoutChangeEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  NavigationRoute,
  NavigationScreenProp,
  NavigationScreenProps,
} from 'react-navigation';
import { spiderMap } from '../../../game/Spider';
import { Colors } from '../../../style/Colors';
import { Size } from '../../../util/Spatial';
import { ResultView } from '../../elements/ResultText';
import { SText } from '../../elements/SText';
import { SpiderView } from '../../spider/SpiderView';
import {
  FindTediGameModel,
  spiderSize,
  SpiderWithPosition,
} from './FindTediGameModel';

@observer
export default class FindTediGame extends React.Component<
  NavigationScreenProps<{}>
> {
  @observable
  private size: Size | null = null;

  render() {
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        {this.size && this.size.width > 0 && this.size.height > 0 ? (
          <GameArea size={this.size} navigation={this.props.navigation} />
        ) : null}
      </View>
    );
  }

  private onLayout = (e: LayoutChangeEvent) =>
    (this.size = e.nativeEvent.layout);
}

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
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
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
