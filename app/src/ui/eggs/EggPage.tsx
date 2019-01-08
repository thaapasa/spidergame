import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class EggPage extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tässä on munat</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
});
