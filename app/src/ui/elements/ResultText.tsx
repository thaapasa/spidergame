import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { SText } from './SText';

export type Result = 'success' | 'failure';

interface ResultProps {
  type: Result;
  style?: StyleProp<ViewStyle>;
}

export const ResultView = (props: ResultProps) => (
  <View style={props.style}>
    <SText style={styles.text}>{props.type === 'success' ? '✅' : '❌'}</SText>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
  },
});
