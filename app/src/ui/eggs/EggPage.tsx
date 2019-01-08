import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LockedEgg, OpenEgg } from './Eggs';

interface Egg {
  locked: boolean;
}

const eggCollection = Array.apply(null, Array(16)).map(() => ({
  locked: true,
}));
eggCollection[0].locked = false;

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
      <Egg {...egg} key={i} />
    ))}
  </View>
);

const Egg = (egg: Egg) => (egg.locked ? <LockedEgg /> : <OpenEgg />);

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
});
