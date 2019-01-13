import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SText } from '../../elements/SText';

export default class FindTediGame extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <SText>Kuka on Tedi?</SText>
      </View>
    );
  }
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
});
