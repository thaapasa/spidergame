import { AsyncStorage } from 'react-native';
import { Spider } from './Spider';

const EggStoreKey = 'tedi:eggs';

export interface Egg {
  locked: boolean;
  spider: Spider;
  routeName?: string;
}

export const defaultEggCollection: Egg[] = [
  { locked: false, spider: 'tedi', routeName: 'FindTediGame' },
  { locked: true, spider: 'lela' },
  ...Array.apply(null, Array(14)).map(
    (): Egg => ({
      locked: true,
      spider: 'unknown',
    })
  ),
];

export async function loadEggCollection(): Promise<Egg[]> {
  const stored = await loadStoredData();
  stored.tedi = false;
  return defaultEggCollection.map(s => ({
    ...s,
    locked: stored[s.spider] !== undefined ? stored[s.spider]! : s.locked,
  }));
}

type EggData = Partial<Record<Spider, boolean>>;

export async function saveEggCollection(eggs: Egg[]): Promise<void> {
  const data: EggData = {};
  eggs.forEach(e => (data[e.spider] = e.locked));
  await AsyncStorage.setItem(EggStoreKey, JSON.stringify(data));
}

async function loadStoredData(): Promise<EggData> {
  const stored = await AsyncStorage.getItem(EggStoreKey);
  if (!stored) {
    return {};
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    return {};
  }
}
