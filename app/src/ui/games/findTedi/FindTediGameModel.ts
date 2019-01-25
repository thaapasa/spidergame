import { observable } from 'mobx';
import { Animated, Vibration } from 'react-native';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';
import { appModel } from '../../../game/AppViewModel';
import { allSpiders, Spider } from '../../../game/Spider';
import {
  BoundingBox,
  getRandomSafePosition,
  Position,
  Size,
} from '../../../util/Spatial';
import { timeout } from '../../../util/Utils';
import { Result } from '../../elements/ResultText';
import { calcSpiderSize } from '../../spider/SpiderView';

export interface SpiderWithPosition {
  spider: Spider;
  position: Position;
}

const spiderScale = 1.5;
export const spiderSize: Size = calcSpiderSize(spiderScale);
const titlePos = BoundingBox.forSizeAt(
  { width: 50, height: 50 },
  { x: 0, y: 0 }
);
const resultSize: Size = { width: 150, height: 40 };

const spiders: Spider[] = allSpiders.filter(
  s => s.toString().indexOf('tedi') === 0
);

export class FindTediGameModel {
  @observable
  spiders: SpiderWithPosition[];

  @observable
  currentResult: Result | null = null;

  @observable
  spiderOpacity: Animated.Value = new Animated.Value(1);

  private navigation: NavigationScreenProp<NavigationRoute>;
  private resultSemaphore: number = 0;
  private correctFound = false;

  constructor(size: Size, navigation: NavigationScreenProp<NavigationRoute>) {
    this.navigation = navigation;
    this.spiders = this.createSpiders(size);
  }

  trySpider = (spider: Spider) => {
    if (spider === 'tedi') {
      this.showResult('success');
      this.stopGame();
    } else {
      this.showResult('failure');
      Vibration.vibrate(400, false);
    }
  };

  showResult = async (result: Result) => {
    if (this.correctFound) {
      return;
    }
    this.currentResult = result;
    this.resultSemaphore += 1;
    await timeout(2000);
    this.resultSemaphore -= 1;
    if (this.resultSemaphore === 0) {
      this.currentResult = null;
    }
  };

  stopGame = async () => {
    this.correctFound = true;
    appModel.unlockSpider('lela');
    Animated.timing(this.spiderOpacity, { toValue: 0 }).start();
    await timeout(2000);
    this.navigation.navigate('EggCollection');
  };

  private createSpiders(size: Size): SpiderWithPosition[] {
    const sp: SpiderWithPosition[] = [];
    spiders.reduce(
      (p, c) => {
        const spider = this.randomSpider(c, size, p);
        sp.push(spider);
        p.push(BoundingBox.forSizeAt(spiderSize, spider.position));
        return p;
      },
      [
        titlePos,
        BoundingBox.forSizeAt(resultSize, {
          x: size.width - resultSize.width,
          y: 0,
        }),
      ]
    );
    return sp;
  }

  private randomSpider(
    spider: Spider,
    size: Size,
    avoidObjects: BoundingBox[]
  ): SpiderWithPosition {
    return {
      spider,
      position: getRandomSafePosition(spiderSize, size, avoidObjects),
    };
  }
}
