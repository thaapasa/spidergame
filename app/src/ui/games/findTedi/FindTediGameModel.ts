import { observable } from 'mobx';
import { allSpiders, Spider } from '../../spider/Spider';
import {
  BoundingBox,
  getRandomSafePosition,
  Position,
  Size,
} from '../../util/Spatial';

export interface SpiderWithPosition {
  spider: Spider;
  position: Position;
}

const spiderSize: Size = { width: 59, height: 64 };
const textBox = BoundingBox.forSizeAt(
  { width: 150, height: 40 },
  { x: 0, y: 0 }
);

const spiders: Spider[] = allSpiders.filter(
  s => s.toString().indexOf('tedi') === 0
);

export class FindTediGameModel {
  @observable
  spiders: SpiderWithPosition[];

  constructor(size: Size) {
    this.spiders = this.createSpiders(size);
  }

  private createSpiders(size: Size): SpiderWithPosition[] {
    const sp: SpiderWithPosition[] = [];
    spiders.reduce(
      (p, c) => {
        const spider = this.randomSpider(c, size, p);
        sp.push(spider);
        p.push(BoundingBox.forSizeAt(spiderSize, spider.position));
        return p;
      },
      [textBox]
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
