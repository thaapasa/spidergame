import { StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import EggPage from './eggs/EggPage';
import IntroPage from './intro/IntroPage';

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'white',
  },
});

export const AppNavigator = createStackNavigator(
  {
    Intro: {
      screen: IntroPage,
    },
    EggCollection: {
      screen: EggPage,
    },
  },
  {
    initialRouteName: 'Intro',
    cardStyle: styles.cardStyle,
    headerMode: 'none',
  }
);

export const AppContainer = createAppContainer(AppNavigator);
