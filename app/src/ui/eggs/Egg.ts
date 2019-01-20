import { Spider } from '../spider/Spider';

export interface Egg {
  locked: boolean;
  spider: Spider;
  routeName?: string;
}

const TediEgg: Egg = {
  locked: false,
  spider: 'tedi',
  routeName: 'FindTediGame',
};

export const eggCollection: Egg[] = Array.apply(null, Array(16)).map(
  (): Egg => ({
    locked: true,
    spider: 'tedi',
  })
);
eggCollection[0] = TediEgg;
