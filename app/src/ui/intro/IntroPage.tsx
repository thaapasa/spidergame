import { observer } from 'mobx-react';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';
import { Size } from '../../util/Spatial';
import Button from '../elements/Button';
import { SizeAware } from '../SizeAware';
import Scenery from './Scenery';

@observer
class IntroPage extends React.Component<{
  size: Size;
  onStart: () => void;
}> {
  render() {
    return (
      <>
        <Scenery size={this.props.size} />
        <Video
          source={{ uri: 'birds' }}
          repeat={true}
          style={styles.video}
          paused={false}
        />
        <View style={styles.overlay}>
          <Button text="Aloita" onPress={this.props.onStart} />
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
