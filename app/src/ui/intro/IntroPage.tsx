import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';
import { Size } from '../../util/Spatial';
import { timeout } from '../../util/Utils';
import Button from '../elements/Button';
import { SizeAware } from '../SizeAware';
import Scenery from './Scenery';

const animationDuration = 2000;

@observer
class IntroPage extends React.Component<{
  size: Size;
  onStart: () => void;
}> {
  @observable
  animationOver: boolean = false;

  async componentDidMount() {
    await timeout(animationDuration);
    this.animationOver = true;
  }

  render() {
    return (
      <>
        <Scenery size={this.props.size} animationDuration={animationDuration} />
        <Video
          source={{ uri: 'birds' }}
          repeat={true}
          style={styles.video}
          paused={false}
        />
        <View style={styles.overlay}>
          {this.animationOver ? (
            <Button text="Aloita" onPress={this.props.onStart} />
          ) : null}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    right: 56,
    bottom: 64,
  },
  video: {
    height: 0,
    width: 0,
  },
});

export default SizeAware(IntroPage, styles.container);
