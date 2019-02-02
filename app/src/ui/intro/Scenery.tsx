import { observer } from 'mobx-react';
import React from 'react';
import { Animated, Image, StyleSheet } from 'react-native';
import { Size } from '../../util/Spatial';
import { Grass } from './Grass';
import { SceneryModel } from './SceneryModel';

// tslint:disable-next-line no-var-requires
const treeSrc = require('../../../assets/img/tree.png');
// tslint:disable-next-line no-var-requires
const logoSrc = require('../../../assets/img/intro-logo.png');

const AGrass = Animated.createAnimatedComponent(Grass);

@observer
export default class Scenery extends React.Component<{
  animationDuration: number;
  size: Size;
}> {
  model = new SceneryModel();

  componentDidMount() {
    this.model.animate(this.props.animationDuration);
  }

  render() {
    return (
      <>
        <AGrass
          width={this.props.size.width}
          style={{
            ...styles.grass,
            bottom: this.model.ground.y,
          }}
        />
        <Animated.Image
          source={treeSrc}
          style={{
            ...styles.image,
            left: this.model.tree1.x,
            bottom: this.model.tree1.y,
            transform: [{ scale: this.model.tree1.scale }],
          }}
        />
        <Animated.Image
          source={treeSrc}
          style={{
            ...styles.image,
            right: this.model.tree2.x,
            bottom: this.model.tree2.y,
            transform: [{ scale: this.model.tree2.scale }],
          }}
        />
        <Animated.View
          style={{
            ...styles.center,
            opacity: this.model.logoOpacity,
            transform: [{ scale: this.model.logoScale }],
          }}
        >
          <Image source={logoSrc} />
        </Animated.View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  grass: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  image: {
    position: 'absolute',
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
