import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../Styles';
import { Egg, eggCollection } from './Egg';
import { LockedEgg, OpenEgg } from './Eggs';
import { SpiderTedi } from './EggSpiders';

export default class EggPage extends React.Component<{}> {
  eggs: Egg[] = eggCollection;
  render() {
    return <View style={styles.container}>{this.renderEggs()}</View>;
  }
  renderEggs() {
    const eggRow1 = this.eggs.slice(0, 8);
    const eggRow2 = this.eggs.slice(8);
    return (
      <>
        <EggRow eggs={eggRow1} />
        <EggRow eggs={eggRow2} />
      </>
    );
  }
}

const EggRow = ({ eggs }: { eggs: Egg[] }) => (
  <View style={styles.eggRow}>
    {eggs.map((egg, i) => (
      <EggView {...egg} key={i} />
    ))}
  </View>
);

const EggView = (egg: Egg) => (
  <View style={styles.eggContainer}>
    {egg.locked ? (
      <LockedEgg />
    ) : (
      <>
        <OpenEgg />
        <View style={styles.eggContents}>
          <Text style={styles.spiderName}>Tedi</Text>
          <SpiderTedi />
        </View>
      </>
    )}
  </View>
);

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
    color: Colors.black,
    marginBottom: 2,
  },
});
