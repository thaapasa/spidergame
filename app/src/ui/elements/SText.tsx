import React from 'react';
import { StyleSheet, Text, TextProperties } from 'react-native';
import { Colors } from '../Styles';

export const SText = (props: TextProperties & { children: any }) => (
  <Text {...props} style={[styles.text, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
  },
});
