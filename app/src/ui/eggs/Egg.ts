import { Spider } from '../spider/Spider';

export interface Egg {
  locked: boolean;
  spider: Spider;
  routeName?: string;
}

export const eggCollection: Egg[] = [
  { locked: false, spider: 'tedi', routeName: 'FindTediGame' },
  { locked: false, spider: 'lela' },
  ...Array.apply(null, Array(14)).map(
    (): Egg => ({
      locked: true,
      spider: 'tedi',
    })
  ),
];
