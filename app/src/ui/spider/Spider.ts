import { Colors } from '../Styles';

export type Spider = 'tedi' | 'tediAlt1' | 'tediAlt2' | 'tediAlt3' | 'tediAlt4';

export type EyeType = 'open' | 'closed-happy' | 'closed-lashes';

export interface SpiderProps {
  headColor: string;
  cheekColor: string;
  eyes: EyeType;
  name: string;
}

const tedi: SpiderProps = {
  headColor: Colors.blue,
  cheekColor: Colors.red,
  eyes: 'closed-happy',
  name: 'Tedi',
};

export const spiderMap: Record<Spider, SpiderProps> = {
  tedi,
  tediAlt1: { ...tedi, headColor: Colors.yellow },
  tediAlt2: { ...tedi, cheekColor: Colors.black },
  tediAlt3: { ...tedi, eyes: 'open' },
  tediAlt4: { ...tedi, eyes: 'closed-lashes' },
};

export const allSpiders: Spider[] = Object.keys(spiderMap) as Spider[];
