import { observable } from 'mobx';
import { Animated } from 'react-native';
import { Result } from '../../elements/ResultText';
import { allSpiders, Spider } from '../../spider/Spider';
import {
  BoundingBox,
  getRandomSafePosition,
  Position,
  Size,
} from '../../util/Spatial';
import { timeout } from '../../util/Utils';

export interface SpiderWithPosition {
  spider: Spider;
  position: Position;
}

const spiderSize: Size = { width: 59, height: 64 };
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

  private resultSemaphore: number = 0;
  private correctFound = false;

  constructor(size: Size) {
    this.spiders = this.createSpiders(size);
  }

  trySpider(spider: Spider) {
    if (spider === 'tedi') {
      this.showResult('success');
      this.stopGame();
    } else {
      this.showResult('failure');
    }
  }

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

  stopGame = () => {
    this.correctFound = true;
    Animated.timing(this.spiderOpacity, { toValue: 0 }).start();
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
