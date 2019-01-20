import { observable } from 'mobx';
import { allSpiders, Spider } from '../../spider/Spider';

export interface Size {
  width: number;
  height: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface SpiderWithPosition {
  spider: Spider;
  position: Position;
}

const spiderSize: Size = { width: 59, height: 64 };

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
    spiders.forEach(s => sp.push(this.randomSpider(s, size)));
    return sp;
  }

  private randomSpider(spider: Spider, size: Size): SpiderWithPosition {
    return {
      spider,
      position: {
        x: Math.floor(Math.random() * (size.width - spiderSize.width)),
        y: Math.floor(Math.random() * (size.height - spiderSize.height)),
      },
    };
  }
}
