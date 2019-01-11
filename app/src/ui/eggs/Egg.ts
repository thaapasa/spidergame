type Spider = 'tedi';

export interface Egg {
  locked: boolean;
  spider: Spider;
}

export const eggCollection: Egg[] = Array.apply(null, Array(16)).map(
  (): Egg => ({
    locked: true,
    spider: 'tedi',
  })
);
eggCollection[0].locked = false;
