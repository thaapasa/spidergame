import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FindTediGame extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Kuka on Tedi?</Text>
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
