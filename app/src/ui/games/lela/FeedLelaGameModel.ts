import { NavigationRoute, NavigationScreenProp } from 'react-navigation';
import { appModel } from '../../../game/AppViewModel';
import { timeout } from '../../../util/Utils';

export class FeedLelaGameModel {
  private navigation: NavigationScreenProp<NavigationRoute>;

  constructor(navigation: NavigationScreenProp<NavigationRoute>) {
    this.navigation = navigation;
  }

  stopGame = async () => {
    appModel.unlockSpider('lela');
    await timeout(2000);
    this.navigation.navigate('EggCollection');
  };
}
