import { observable } from 'mobx';
import { Animated, Easing } from 'react-native';

export class SceneryModel {
  tree1 = new PositionAndScale(-400, -20, 1.5);
  tree2 = new PositionAndScale(-400, -20, 1.5);
  ground = new PositionAndScale(0, -250, 1);
  logoOpacity = new Animated.Value(0);
  logoScale = new Animated.Value(0);

  animate(duration: number) {
    Animated.parallel([
      this.tree1.animate(duration, -38, 8, 1),
      this.tree2.animate(duration, -38, 8, 1),
      this.ground.animate(duration, undefined, 0),
      Animated.timing(this.logoOpacity, {
        toValue: 1,
        duration,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(this.logoScale, {
        toValue: 1,
        duration,
        easing: Easing.out(Easing.ease),
      }),
    ]).start();
  }
}

class PositionAndScale {
  @observable
  x: Animated.Value;
  y: Animated.Value;
  scale: Animated.Value;

  constructor(x: number, y: number, scale: number) {
    this.x = new Animated.Value(x);
    this.y = new Animated.Value(y);
    this.scale = new Animated.Value(scale);
  }

  animate(duration: number, x?: number, y?: number, scale?: number) {
    return Animated.parallel([
      x !== undefined
        ? Animated.timing(this.x, {
            toValue: x,
            duration,
            easing: Easing.out(Easing.ease),
          })
        : undefined,
      y !== undefined
        ? Animated.timing(this.y, {
            toValue: y,
            duration,
            easing: Easing.out(Easing.ease),
          })
        : undefined,
      scale !== undefined
        ? Animated.timing(this.scale, {
            toValue: scale,
            duration,
            easing: Easing.out(Easing.ease),
          })
        : undefined,
    ].filter(Boolean) as Animated.CompositeAnimation[]);
  }
}
