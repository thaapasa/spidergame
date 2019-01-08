import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../Styles';

export interface ButtonProps {
  text?: string;
  onPress: () => void;
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        {this.props.text ? <Text>{this.props.text}</Text> : null}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    margin: 0,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.black,
    backgroundColor: Colors.blue,
  },
});
