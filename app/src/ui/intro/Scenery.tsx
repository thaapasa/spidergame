import { observer } from 'mobx-react';
import React from 'react';
import { Animated, Image, StyleSheet } from 'react-native';
import { Size } from '../../util/Spatial';
import { Grass } from './Grass';
import { PositionAndScale, SceneryModel } from './SceneryModel';

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
        <Tree model={this.model.treeCenter} anchor="right" />
        <Tree model={this.model.treeLeftTiny} anchor="left" flip={true} />
        <Tree model={this.model.treeRightTiny} anchor="right" />
        <Tree model={this.model.treeLeftSmall} anchor="left" flip={true} />
        <Tree model={this.model.treeRightSmall} anchor="right" />
        <Tree model={this.model.treeLeft} anchor="left" flip={true} />
        <Tree model={this.model.treeRight} anchor="right" />
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

const Tree = (props: {
  model: PositionAndScale;
  anchor: 'left' | 'right';
  flip?: boolean;
}) => (
  <Animated.Image
    source={treeSrc}
    style={{
      ...styles.image,
      [props.anchor]: props.model.x,
      bottom: props.model.y,
      transform: [
        { scale: props.model.scale },
        ...(props.flip ? [{ scaleX: -1 }] : []),
      ],
    }}
  />
);

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
