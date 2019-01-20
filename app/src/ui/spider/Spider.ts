import { Colors } from '../Styles';

export type Spider =
  | 'tedi'
  | 'tediAlt1'
  | 'tediAlt2'
  | 'tediAlt3'
  | 'tediAlt4'
  | 'tediAlt5'
  | 'tediAlt6'
  | 'tediAlt7'
  | 'tediAlt8'
  | 'tediAlt9'
  | 'lela';

export type CheekType = 'red' | 'black' | 'none';
export type EyeType = 'open' | 'closed-happy' | 'closed-lashes';
export type MouthType = 'open-happy' | 'closed-happy' | 'open-sad';
export type AntennaType = 'left-right' | 'left' | 'right' | 'up' | 'none';
export type FeetType = 'normal' | 'one-missing';

export interface SpiderProps {
  name: string;
  bodyColor: string;
  headColor: string;
  cheeks: CheekType;
  eyes: EyeType;
  mouth: MouthType;
  antennas: AntennaType;
  feet: FeetType;
}

const tedi: SpiderProps = {
  headColor: Colors.blue,
  bodyColor: Colors.purple,
  antennas: 'left-right',
  cheeks: 'red',
  eyes: 'closed-happy',
  mouth: 'open-happy',
  name: 'Tedi',
  feet: 'normal',
};

export const spiderMap: Record<Spider, SpiderProps> = {
  tedi,
  tediAlt1: { ...tedi, headColor: Colors.yellow },
  tediAlt2: { ...tedi, cheeks: 'black' },
  tediAlt3: { ...tedi, eyes: 'open' },
  tediAlt4: { ...tedi, eyes: 'closed-lashes' },
  tediAlt5: { ...tedi, mouth: 'open-sad' },
  tediAlt6: { ...tedi, cheeks: 'none' },
  tediAlt7: { ...tedi, antennas: 'none' },
  tediAlt8: { ...tedi, feet: 'one-missing' },
  tediAlt9: { ...tedi, bodyColor: Colors.blue, headColor: Colors.purple },
  lela: {
    headColor: Colors.yellow,
    bodyColor: Colors.purple,
    antennas: 'left-right',
    cheeks: 'red',
    eyes: 'open',
    mouth: 'closed-happy',
    name: 'Lela',
    feet: 'normal',
  },
};

export const allSpiders: Spider[] = Object.keys(spiderMap) as Spider[];
