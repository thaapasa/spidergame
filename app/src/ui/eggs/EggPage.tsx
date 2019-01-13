import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { SText } from '../elements/SText';
import { SpiderTedi } from '../spider/Spider';
import { Egg, eggCollection } from './Egg';
import { LockedEgg, OpenEgg } from './Eggs';

export default class EggPage extends React.Component<
  NavigationScreenProps<any>
> {
  eggs: Egg[] = eggCollection;
  render() {
    return <View style={styles.container}>{this.renderEggs()}</View>;
  }
  renderEggs() {
    const eggRow1 = this.eggs.slice(0, 8);
    const eggRow2 = this.eggs.slice(8);
    const navigate = this.props.navigation.navigate.bind(this.props.navigation);
    return (
      <>
        <EggRow eggs={eggRow1} navigate={navigate} />
        <EggRow eggs={eggRow2} navigate={navigate} />
      </>
    );
  }
}

const EggRow = ({
  eggs,
  navigate,
}: {
  eggs: Egg[];
  navigate: (routeName: string) => void;
}) => (
  <View style={styles.eggRow}>
    {eggs.map((egg, i) => (
      <EggView {...egg} key={i} navigate={navigate} />
    ))}
  </View>
);

class EggView extends React.Component<
  Egg & { navigate: (routeName: string) => void }
> {
  render() {
    return (
      <TouchableOpacity onPress={this.onClick}>
        <View style={styles.eggContainer}>
          {this.props.locked ? (
            <LockedEgg />
          ) : (
            <>
              <OpenEgg />
              <View style={styles.eggContents}>
                <SText style={styles.spiderName}>Tedi</SText>
                <SpiderTedi />
              </View>
            </>
          )}
        </View>
      </TouchableOpacity>
    );
  }
  onClick = () => {
    if (this.props.routeName) {
      this.props.navigate(this.props.routeName);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
  eggRow: {
    flexDirection: 'row',
    margin: 8,
  },
  eggContainer: {
    width: 66,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eggContents: {
    position: 'absolute',
    width: 66,
    height: 90,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  spiderName: {
    marginBottom: 2,
  },
});
