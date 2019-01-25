import { observable } from 'mobx';
import { Egg, loadEggCollection, saveEggCollection } from './Egg';
import { Spider } from './Spider';

class AppModel {
  @observable
  eggs: Egg[] = [];

  @observable
  initialized = false;

  init = async () => {
    this.eggs = await loadEggCollection();
    this.initialized = true;
  };

  unlockSpider = async (spider: Spider) => {
    this.eggs = this.eggs.map(e =>
      e.spider === spider ? { ...e, locked: false } : e
    );
    await saveEggCollection(this.eggs);
  };
}

export const appModel = new AppModel();
