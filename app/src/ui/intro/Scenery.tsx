import { observer } from 'mobx-react';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Size } from '../../util/Spatial';
import { Grass } from './Grass';

// tslint:disable-next-line no-var-requires
const treeSrc = require('../../../assets/img/tree.png');
// tslint:disable-next-line no-var-requires
const logoSrc = require('../../../assets/img/intro-logo.png');

@observer
export default class Scenery extends React.Component<{
  size: Size;
}> {
  render() {
    return (
      <>
        <Grass width={this.props.size.width} style={styles.grass} />
        <Image source={treeSrc} style={styles.tree1} />
        <Image source={treeSrc} style={styles.tree2} />
        <View style={styles.center}>
          <Image source={logoSrc} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  grass: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tree1: {
    position: 'absolute',
    left: -48,
    bottom: 8,
  },
  tree2: {
    position: 'absolute',
    right: -48,
    bottom: 8,
  },
  center: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
