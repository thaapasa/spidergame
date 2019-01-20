import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { SText } from '../../elements/SText';
import { spiderMap } from '../../spider/Spider';
import { SpiderView } from '../../spider/SpiderView';
import { Colors } from '../../Styles';
import { Size } from '../../util/Spatial';
import { FindTediGameModel, SpiderWithPosition } from './FindTediGameModel';

@observer
export default class FindTediGame extends React.Component<{}> {
  @observable
  private size: Size | null = null;

  render() {
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        {this.size && this.size.width > 0 && this.size.height > 0 ? (
          <GameArea size={this.size} />
        ) : null}
      </View>
    );
  }

  private onLayout = (e: LayoutChangeEvent) =>
    (this.size = e.nativeEvent.layout);
}

class GameArea extends React.Component<{ size: Size }> {
  @observable
  private model = new FindTediGameModel(this.props.size);

  render() {
    return (
      <>
        <SText style={styles.titleText}>Kuka on Tedi?</SText>
        {this.model.spiders.map((s, i) => (
          <SpiderAt key={i} {...s} />
        ))}
      </>
    );
  }
}

const SpiderAt = (props: SpiderWithPosition) => (
  <View
    style={[styles.spider, { left: props.position.x, top: props.position.y }]}
  >
    <SpiderView {...spiderMap[props.spider]} />
  </View>
);

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
  spider: {
    position: 'absolute',
  },
});
