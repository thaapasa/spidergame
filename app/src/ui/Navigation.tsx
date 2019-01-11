import { StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import EggPage from './eggs/EggPage';
import FindTediGame from './intro/games/findTedi/FindTediGame';

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'white',
  },
});

export const AppNavigator = createStackNavigator(
  {
    EggCollection: {
      screen: EggPage,
    },
    FindTediGame: {
      screen: FindTediGame,
    },
  },
  {
    initialRouteName: 'EggCollection',
    cardStyle: styles.cardStyle,
    headerMode: 'none',
  }
);

export const AppContainer = createAppContainer(AppNavigator);
