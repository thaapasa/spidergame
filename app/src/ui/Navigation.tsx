import { observer } from 'mobx-react';
import { StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import EggPage from './eggs/EggPage';
import FeedLelaGame from './games/lela/FeedLelaGame';
import FindTediGame from './games/tedi/FindTediGame';

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'white',
  },
});

export const AppNavigator = createStackNavigator(
  {
    EggCollection: { screen: EggPage },
    FindTediGame: { screen: FindTediGame },
    FeedLelaGame: { screen: FeedLelaGame },
  },
  {
    initialRouteName: 'EggCollection',
    cardStyle: styles.cardStyle,
    headerMode: 'none',
  }
);

export const AppContainer = observer(createAppContainer(AppNavigator));
