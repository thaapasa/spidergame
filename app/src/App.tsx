import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/img/intro-bg.jpg')}
          resizeMode="contain"
          style={styles.image}
        />
        <Video source={{ uri: 'birds' }} repeat={true} />
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
  image: {
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
    backgroundColor: 'black',
  },
});
