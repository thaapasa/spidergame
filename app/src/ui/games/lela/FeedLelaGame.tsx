import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';
import { Colors } from '../../../style/Colors';
import { Size } from '../../../util/Spatial';
import { SText } from '../../elements/SText';
import { SizeAware } from '../../SizeAware';
import { FeedLelaGameModel } from './FeedLelaGameModel';
import { Tree } from './Tree';
import { Web } from './Web';

@observer
class GameArea extends React.Component<{
  size: Size;
  navigation: NavigationScreenProp<NavigationRoute>;
}> {
  @observable
  private model = new FeedLelaGameModel(this.props.navigation);

  render() {
    return (
      <>
        <View style={styles.treeGraphicContainer}>
          <Tree style={styles.tree1} width={400} />
          <Tree style={styles.tree2} width={400} />
          <Web style={styles.web} width={310} />
        </View>
        <SText style={styles.titleText}>
          Auta Lelaa löytämään kaikki ötökät
        </SText>
      </>
    );
  }

  onEnd = () => this.model.stopGame();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: Colors.lightBlue,
  },
  titleText: {
    position: 'absolute',
    left: 16,
    top: 16,
  },
  treeGraphicContainer: {
    width: 600,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
  },
  tree1: {
    position: 'absolute',
    left: -70,
    bottom: -70,
  },
  tree2: {
    position: 'absolute',
    right: -90,
    bottom: -80,
  },
  web: {
    position: 'absolute',
    bottom: 10,
    right: 98,
  },
});

export default SizeAware(GameArea, styles.container);
