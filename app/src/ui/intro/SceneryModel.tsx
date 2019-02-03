import { observable } from 'mobx';
import { Animated, Easing } from 'react-native';

const sceneryEndPoint = 0.7;
const logoStartPoint = 0.4;

export class SceneryModel {
  treeLeft = new PositionAndScale(-400, -20, 1.5);
  treeRight = new PositionAndScale(-400, -20, 1.5);
  treeLeftSmall = new PositionAndScale(-400, 0, 1);
  treeRightSmall = new PositionAndScale(-400, 0, 1);
  treeRightTiny = new PositionAndScale(-450, -10, 0.8);
  treeLeftTiny = new PositionAndScale(-450, -10, 0.8);
  treeCenter = new PositionAndScale(-450, -10, 0.8);
  ground = new PositionAndScale(0, -250, 1);
  logoOpacity = new Animated.Value(0);
  logoScale = new Animated.Value(0);

  animate(duration: number) {
    const sceneryEndTime = sceneryEndPoint * duration;
    const logoStartTime = logoStartPoint * duration;
    const logoDuration = duration - logoStartTime;
    Animated.parallel([
      this.treeLeft.animate(sceneryEndTime, -38, 8, 1),
      this.treeRight.animate(sceneryEndTime, -38, 8, 1),
      this.treeLeftSmall.animate(sceneryEndTime, 70, 40, 0.65),
      this.treeRightSmall.animate(sceneryEndTime, 90, 40, 0.65),
      this.treeRightTiny.animate(sceneryEndTime, 10, 20, 0.45),
      this.treeLeftTiny.animate(sceneryEndTime, 10, 20, 0.45),
      this.treeCenter.animate(sceneryEndTime, 200, 40, 0.45),
      this.ground.animate(sceneryEndTime, undefined, 0),
      Animated.sequence([
        Animated.delay(logoStartTime),
        Animated.parallel([
          Animated.timing(this.logoOpacity, {
            toValue: 1,
            duration: logoDuration,
            easing: Easing.out(Easing.ease),
          }),
          Animated.timing(this.logoScale, {
            toValue: 1,
            duration: logoDuration,
            easing: Easing.out(Easing.ease),
          }),
        ]),
      ]),
    ]).start();
  }
}

export class PositionAndScale {
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
