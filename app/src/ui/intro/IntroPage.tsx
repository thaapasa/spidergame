import { observer } from 'mobx-react';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Video from 'react-native-video';
import Button from '../elements/Button';

@observer
export default class IntroPage extends React.Component<{
  onStart: () => void;
}> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../assets/img/intro-bg.jpg')}
          resizeMode="contain"
          style={styles.image}
        />
        <Video
          source={{ uri: 'birds' }}
          repeat={true}
          style={styles.video}
          paused={false}
        />
        <View style={styles.overlay}>
          <Button text="Aloita" onPress={this.props.onStart} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
    backgroundColor: 'black',
  },
  video: {
    height: 0,
    width: 0,
  },
});
